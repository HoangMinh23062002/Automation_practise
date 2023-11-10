import test, { page, expect } from '@playwright/test'
import { Console } from 'console'

test(' Assertion demo', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')
    // await page.pause()
    //Check the present of element with two ways
    await expect(page.locator('text = The Kitchen')).toHaveCount(1)
    if (await page.$('text = The Kitchen')) {
        await page.locator('text = The Kitchen').click()
    }
    else{
        console.log('hem j á')
    }
   

    // check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
   //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //Check disable or enable
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    await expect(page.locator('text=The Kitchen')).toBeEnabled()

    await expect(page.locator('text=The Kitchen')).not.toHaveText('hahahhahhahahahha')

    // check the attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*chakra-heading css-dpmy2a/)

    //await page.pause()
    await expect(page).toHaveURL('https://kitchen.applitools.com/')

    await expect(page).toHaveTitle(/.* The Kitchen/)
})