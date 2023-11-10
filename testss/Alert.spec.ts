import { expect, test } from "@playwright/test";

test('Test all kind of alert', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    page.on("dialog", async(alert)=>{
        const text = alert.message()
        console.log(`Alert received: ${text}`);
        await alert.accept();
    })
    await page.locator("button:has-text('Click me')").nth(0).click();
})

test('Test  kind of alert', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    page.on("dialog", async (alert) => {
        const text = alert.message()
        console.log(`Alert received: ${text}`);
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click me')").nth(1).click();
    expect(page.locator('#confirm-demo')).toContainText("Cancel!")
})



test('Test all kinds of alert', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    let alertText; 

    page.on("dialog", async (alert) => {
        alertText = alert.message();
        console.log(`Alert received: ${alertText}`);
        await alert.accept("minhhhhhhhhhh");
    });

    await page.locator("button:has-text('Click me')").nth(2).click();

    //expect(page.locator('#prompt-demo')).toContainText(`You have entered ${alertText} !`);
    expect(page.locator('#prompt-demo')).toContainText("You have entered 'minhhhhvhhhhhh' !");

});