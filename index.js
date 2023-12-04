const puppeteer = require('puppeteer');

(async () => {
    // Launch headless Chrome
    const browser = await puppeteer.launch({headless: 'new'});

    // Open a new page
    const page = await browser.newPage();

    // Navigate to a URL
    await page.goto('https://finance.yahoo.com/');
    await page.setViewport({width: 1080, height: 4096});

    // Do something on the page (e.g., take a screenshot)
    await page.screenshot({ path: 'screenshot.png' });

    // Close the browser
    await browser.close();
})();



