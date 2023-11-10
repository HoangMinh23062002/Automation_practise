import { chromium, expect, test } from "@playwright/test";

test("logging in", async ({})=>{
    const browser = await chromium.launch({
        headless: false, 
 
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div');
    const messageInput = page.locator('#input-email')
    console.log(messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","E-Mail Address)
    await page.click("'Login'");
 
    await page.locator('//input[@id="input-email"]').fill('koushik350@gmail.com')
    await page.locator('//input[@id="input-password"]').fill('Pass123$')
    await page.locator('//*[@id="content"]/div/div[2]/div/div/form/input[1]').click();
    //await page.waitForTimeout(5000)
   
    // const newContext = await browser.newContext();
    // const page1 = await newContext.newPage();
    // await page1.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
    // await page.waitForTimeout(5000)
    //await page.pause();
})