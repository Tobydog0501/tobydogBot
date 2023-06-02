const puppeteer = require('puppeteer');

class browser{

    constructor(){
        this.pages = {};
    }

    async start(){
        this.browser = await puppeteer.launch();
    }

    /**
     * 
     * @param {string} id 
     * @param {string} url 
     */
    async open(id,url){
        this.pages[id] = await this.browser.newPage();

    }


}