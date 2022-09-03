const puppeteer = require('puppeteer');

const bot = (async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });

    await page.goto('https://www.protrack365.com/', { waitUntil: 'networkidle2' });

    // await page.screenshot({ path: 'prelogin.png' });

    await page.type('#username_login', 'velammal');
    await page.type('#password_login', 'demo1234');
    await page.click('#btn-submit');

    // await page.screenshot({ path: 'postlogin.png' });

    // await browser.close();
})();

module.exports = bot;