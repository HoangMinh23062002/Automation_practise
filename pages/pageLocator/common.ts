import { Page, expect } from '@playwright/test';
import { Availabilitylocator } from "../pageLocator/availabilityCheck";
import { requestLocator } from '../pageLocator/request'


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

export async function searchByInput(page:Page, locator:string, value:string){
    await page.click(locator);
    await page.waitForLoadState();
    await page.locator(locator).type(value)
};

export async function dateFromCurrentDate(numberOfDay: number) {
    // numberOfDay have to > 0
    let endDate = new Date();
    endDate = new Date(endDate.setDate(endDate.getDate() + numberOfDay))
    const day = endDate.getDate();
    const month = endDate.getMonth();
    const year = endDate.getFullYear();
    return {
        day: day,
        month: month,
        year: year
    };
};

export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export async function GetTab(page:Page){
    await page.click(requestLocator.tab_request)
    await waitForPageCompletelyLoaded(page)
}