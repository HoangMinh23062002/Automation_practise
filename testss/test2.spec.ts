import { chromium, expect, test } from "@playwright/test";

test("logging in", async ({ }) => {
    const browser = await chromium.launch({
        headless: false,

    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
    await expect(page.locator('#input-email')).toHaveAttribute("placeholder", "E-Mail Address")
    await page.locator('#input-email').scrollIntoViewIfNeeded()
    console.log('hiiiiiiiiiiiii' + await page.locator('#input-email').inputValue());

    await page.locator('#input-email').fill('minhhh')
    console.log('hmmmmmmmmmii' + '  ' + await page.locator('#input-email').inputValue());
  

})

test("Sum", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo')
    const sum1 = page.locator('#sum1')
    const sum2 = page.locator('#sum2')

    const getvalueBtn = page.locator("//button[contains(text(),'Get Sum')]")
    let num = 123
    let num2 = 345
    await sum1.fill(" " + num);
    await sum2.fill(" " + num2);
    await getvalueBtn.click();
    const result = page.locator('#addmessage')
    console.log(await result.textContent());
    let expectedResult = num + num2;
    console.log(expectedResult)
    expect(result).toHaveText(" " + expectedResult);

    if (parseInt(await result.textContent()) === expectedResult) {
        console.log("Hello minh");
    }
    else {
        console.log("Not Hello minh");
    }

})

test("Check", async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');

    await expect(page.locator('#__next > div > section.mt-30 > div > div > div > div:nth-child(1) > div.text-size-22.font-semibold.pb-10.text-black')).toHaveText('Single Checkbox Demo')

    // await page.locator('#isAgeSelected').check();
    const singleCheck = page.locator('#isAgeSelected')

    expect(singleCheck).not.toBeChecked();

    await singleCheck.check({ force: true });







})