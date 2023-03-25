const { Configuration, OpenAIApi } = require("openai");

class OpenAI {
    constructor(apiKey) {
        // Create the Configuration and OpenAIApi instances
        this.openai = new OpenAIApi(new Configuration({ apiKey }));
        this._history = [];
    }
    // 
    /**
     * Asynchronous function to generate text from the OpenAI API
     * @param {string} prompt question you want to ask
     * @param {number} max_tokens The maxium token, see https://platform.openai.com/tokenizer
     * @param {string} [model] The cool model, default is 'gpt-3.5-turbo'
     * @param {number} [temperature] See https://platform.openai.com/docs/api-reference/completions/create#completions/create-temperature
     * @returns {string} The respose or error
     */
    async generateText(messages, max_tokens, model="gpt-3.5-turbo", temperature = 0.85) {
      this._history.push({role:"user",content:messages});
        try {
            // Send a request to the OpenAI API to generate text
            const response = await this.openai.createChatCompletion({
                model,
                messages:this._history,
                max_tokens,
                n: 1,
                temperature,
            });
            
               // Return the text of the response
            const ret = response.data.choices[0].message.content
            this._history.push({role:"assistant",content:ret});
            return ret;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OpenAI