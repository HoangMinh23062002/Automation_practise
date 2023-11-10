import{test,expect} from '@playwright/test'

// test('go to multiple tab', async({page})=>{
//     await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
//     const [newWindow] =await Promise.all([
//         page.waitForEvent('popup'),
//         page.click("'Follow On Twitter'")
//     ]);
// console.log(newWindow.url());
// })

test('go to multiple tab', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
    const [newWindow] =await Promise.all([
        page.waitForEvent('popup'),
        page.click("'Follow On Twitter'")
    ]);
console.log(newWindow.url());
})