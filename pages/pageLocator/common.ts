import { Page, expect } from '@playwright/test';
import { Availabilitylocator } from "../pageLocator/availabilityCheck";


export async function clickOnElement(page: Page, strLocator: any, forceClick: boolean = false) {
    await page.waitForSelector(strLocator)
    await page.click(strLocator, { force: forceClick })
}

export async function AvailabilityCheck(page: Page) {
    await page.waitForLoadState('networkidle')
    await clickOnElement(page, Availabilitylocator.availabilityCheckLink)
}

export async function getLocatorByReplaceValue(page:Page, inputLocator:string, value:string) {
    const element =page.locator(inputLocator.replace('<replace>', `${value}`))
    return element;
    
}
export async function waitForPageCompletelyLoaded (page: Page) {
    try {
        await page.waitForLoadState('networkidle');
        await page.locator('div.app-loading').waitFor({state: 'hidden'});
    } catch (error) {}
}