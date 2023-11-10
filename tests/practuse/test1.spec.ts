import { chromium, test } from "@playwright/test";

test("logging in", async ({page})=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.hover('text = My account');
    await page.click('//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[1]/a/div/span');
})