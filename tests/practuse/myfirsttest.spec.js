const {test, expect} = require('@playwright/test');
const { only } = require('node:test');

// test('Login page', async ({page}) => {
//   await page.goto('https://demo.applitools.com/')

//   await page.locator("id=username" ).click()

//   await page.locator("id=username").fill('Minhhhhhhhhhh')

//   await page.locator("id=password").fill("1234456")

//   await page.locator("id=log-in").click()

//   await page.pause()

// })

test ('Test camn', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForSelector('text=Login')

    // await page.locator('//input[@name="username"]').fill('Admin')
    // await page.locator('//input[@name="password"]').fill('admin123')
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('p:has-text("Paul Collings")').click()
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.pause()




})

// test.only('test nữa', async({page}) =>{

// })

