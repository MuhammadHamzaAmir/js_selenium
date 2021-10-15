const {By,Key,Builder, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require("chromedriver");
const fsp = require('fs').promises;
(async function myFunction() {

    //in headless mode
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless().windowSize({width:1920,height:1080})).build();
    //in non-headless mode
    //let driver = await new Builder().forBrowser('chrome').build();
    
    // Apply timeout for 10 seconds
    await driver.manage().setTimeouts( { implicit: 10000 } );
    await driver.manage().window().maximize();
    await driver.get('https://tailwinduikit.com/');
    let ss = await driver.takeScreenshot();
    await fsp.writeFile("./screenshots/script.PNG", ss,'base64');
    
    //click on pricing
    await driver.wait(until.elementLocated(By.css("#header > div.mx-auto.container.lg\\:py-6.px-4.xl\\:px-12.\\32 xl\\:px-4 > div > div.flex.items-center.dark\\:text-white > ul > li:nth-child(3) > a")),5000);
    await driver.findElement(By.css("#header > div.mx-auto.container.lg\\:py-6.px-4.xl\\:px-12.\\32 xl\\:px-4 > div > div.flex.items-center.dark\\:text-white > ul > li:nth-child(3) > a")).click();
    await delay(5000);

    await driver.wait(until.elementLocated(By.css("#__next > main > div > div.mx-auto.container.sm\\:mt-20.mt-10.px-4.xl\\:px-10.\\32 xl\\:px-4.relative.z-20 > section:nth-child(3) > div.grid.sm\\:grid-cols-1.lg\\:grid-cols-3.xl\\:grid-cols-3.lg\\:mt-20.mt-10.\\32 xl\\:gap-8.gap-6 > article:nth-child(2)")),10000);
    await driver.executeScript("arguments[0].scrollIntoView({behavior: 'smooth',block: 'end',inline: 'nearest'})",await driver.findElement(By.css("#__next > main > div > div.mx-auto.container.sm\\:mt-20.mt-10.px-4.xl\\:px-10.\\32 xl\\:px-4.relative.z-20 > section:nth-child(3) > div.grid.sm\\:grid-cols-1.lg\\:grid-cols-3.xl\\:grid-cols-3.lg\\:mt-20.mt-10.\\32 xl\\:gap-8.gap-6 > article:nth-child(2)")))
    await delay(3000);
    await driver.findElement(By.css("#__next > main > div > div.mx-auto.container.sm\\:mt-20.mt-10.px-4.xl\\:px-10.\\32 xl\\:px-4.relative.z-20 > section:nth-child(3) > div.grid.sm\\:grid-cols-1.lg\\:grid-cols-3.xl\\:grid-cols-3.lg\\:mt-20.mt-10.\\32 xl\\:gap-8.gap-6 > article:nth-child(2)")).click();
    
    ss = await driver.takeScreenshot();
    await fsp.writeFile("./screenshots/script_1.PNG", ss,'base64');
    await delay(1000);
    console.log("Script Finished");
    await delay(5000);
    await driver.quit();
    
})();

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}
