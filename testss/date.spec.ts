import {test, expect} from '@playwright/test'

// test('DatePicker', async({page}) =>{
//     await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
//     let date = "2022-03-07";
//     await page.fill('#birthday', date)
//     await page.pause()
// })
test('DatePicker', async({page}) =>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let date = " ";
    await page.click("//input[@placeholder='Start date']")
       
 
})