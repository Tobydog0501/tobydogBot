const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');
const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName('Translate')
    .setType(ApplicationCommandType.Message),
  async execute(inter) {
    await inter.deferReply();
    const mesg = await inter.channel.messages.fetch(inter.targetId);
    const splits = ["3", "4", "6", "7", " "];
    const letters = "1qaz2wsxedcrfv5tgbyhnujm8ik,9ol.0p;/-";
    let check = 0;
    await inter.editReply({ content: "正在轉換訊息..." });

    /**
     * @type {string}
     */
    let msg = mesg.content;
    for (let s of splits) {
      if (msg.endsWith(s))
        check = 1;
    }
    if (check === 0) {
      msg += " ";
    }

    let count = 0;
    for (let i = 0; i < msg.length; i++) {
      count += 1;
      if (splits.includes(msg[i])) {
        switch (count) {
          case 1:
            // sus
            throw new Error(`SUSSY BAKA AT ${i}\n Total msg length:${msg.length}`);
          case 2:
            // normal
            break;
          case 3:
            if (letters.indexOf(msg[i - 1]) < letters.indexOf(msg[i - 2])) {
              msg = msg.slice(0, i - 2) + msg[i - 1] + msg[i - 2] + msg.slice(i);
            }
            break;
          case 4:
            if (letters.indexOf(msg[i - 2]) < letters.indexOf(msg[i - 3])) {
              msg = msg.slice(0, i - 2) + msg[i - 1] + msg[i - 2] + msg.slice(i);
            }
            if (letters.indexOf(msg[i - 1]) < letters.indexOf(msg[i - 3])) {
              msg = msg.slice(0, i - 3) + msg[i - 1] + msg[i - 2] + msg[i - 3] + msg.slice(i);
            }
            if (letters.indexOf(msg[i - 1]) < letters.indexOf(msg[i - 2])) {
              msg = msg.slice(0, i - 2) + msg[i - 1] + msg[i - 2] + msg.slice(i);
            }
            break;
        }
        count = 0;
      }
    }

    await inter.editReply({ content: "正在戳神奇網站..." });

    try {
      const ret = await translate(msg);
      await inter.editReply({ content: ret });
    } catch (error) {
      console.error(error);
      await inter.editReply({ content: "翻譯時發生錯誤。" });
    }
  },
};

/**
 * Delay execution for a specified number of milliseconds.
 * @param {number} ms - Milliseconds to wait.
 * @returns {Promise<void>}
 */
async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


/**
 * Translates the given message using the Zhuyin Decode tool.
 * @param {string} msg - The message to translate.
 * @returns {Promise<string>}
 */
async function translate(msg) {
    // Set Firefox options for headless browsing
    let options = new firefox.Options();
    options.addArguments("--headless");
    // options.headless(); // Correct usage in Selenium 4.x
  
    // Initialize the Firefox driver
    let driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .build();
  
    try {
      // Navigate to the translation website
      await driver.get('https://www.toolskk.com/zhuyin-decode');
  
      // Locate the input field and enter the message
      const inputField = await driver.findElement(By.id('decode-input'));
      await inputField.sendKeys(msg);
  
      // Submit the form by pressing Enter
      await inputField.sendKeys(Key.RETURN);
  
      // Wait until the output field is located and visible
      const outputField = await driver.wait(
        until.elementLocated(By.id('decode-output')),
        10000,
        'Output field was not located within 10 seconds.'
      );
  
      await driver.wait(
        until.elementIsVisible(outputField),
        10000,
        'Output field is not visible.'
      );
  
      // Wait until the output field has a non-empty value
      await driver.wait(async () => {
        const value = await outputField.getAttribute('value');
        return value && value.trim().length > 0;
      }, 10000, 'Output field did not receive a value within 10 seconds.');
  
      // Retrieve the translated text from the output field
      const translatedText = await outputField.getAttribute('value');
  
      return translatedText;
    } catch (error) {
      console.error('An error occurred during translation:', error);
      throw new Error('Failed to translate the message.');
    } finally {
      // Always quit the driver to free resources
      await driver.quit();
    }
  }