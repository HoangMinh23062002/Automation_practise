import { request, expect, APIRequestContext, Page } from '@playwright/test';
import url from '../../Configs/evn.data';
import { quickBookingLocator } from '../pageLocator/booking';
import * as common from '../pageLocator/common';
import path from 'path';


export async function selectProjectByName(page: Page, project_name: string) {
    await common.searchByInput(page, quickBookingLocator.txt_project, project_name);
    const element = common.getLocatorByReplaceValue(page, quickBookingLocator.project_name, project_name);
    (await element).press('Enter');
};

export async function selectAccount(page: Page, account_name: string) {
    await common.searchByInput(page, quickBookingLocator.txt_account, account_name);
    const element = common.getLocatorByReplaceValue(page, quickBookingLocator.account_name, account_name);
    (await element).click();
};

export async function verify_that_booking_has_been_booked_successfully(page: Page) {
    await page.click(quickBookingLocator.btn_save_booking)
    const elemet_msg = page.locator(quickBookingLocator.success_booking_message)
    await expect(elemet_msg).toContainText('Success created');
    console.log(elemet_msg)
}

export async function verify_that_user_can_make_quick_booking_successfully(page: Page, project_name: string, account_name: string) {
    await selectAccount(page, account_name);
    await selectProjectByName(page, project_name);
    const fullDateStartDate = await selectStartDate(page, 1)
    const fullDateEndDate = await selectEndDate(page, 5)
    const randomHours = await inputHoursPerDay(page)
    await verify_that_booking_has_been_booked_successfully(page)
    return {
        fullDateStartDate,
        fullDateEndDate,
        randomHours
    }
};

export async function selectStartDate(page: Page, numberOfDay: number) {
    let full_date: String;
    const result = await common.dateFromCurrentDate(numberOfDay);
    //Do select year
    await page.click(quickBookingLocator.start_date.box);
    await page.locator(quickBookingLocator.start_date.year).fill(result.year.toString());
    //Do select month
    await page.click(quickBookingLocator.start_date.box);
    await page.locator(quickBookingLocator.start_date.month).selectOption(result.month.toString());
    //Do select day
    const day_option = common.getLocatorByReplaceValue(page, quickBookingLocator.start_date.day_option, result.day.toString());
    await (await day_option).click();

    let realMonth = result.month + 1
    full_date = `${result.year}-${realMonth}-${result.day}`

    return full_date;
};

export async function selectEndDate(page: Page, numberOfDay: number) {
    let full_date: String;
    const result = await common.dateFromCurrentDate(numberOfDay);
    // select year
    await page.click(quickBookingLocator.end_date.box);
    await page.locator(quickBookingLocator.end_date.year).fill(result.year.toString());
    
    // select month;
    await page.click(quickBookingLocator.end_date.month, { force: true });
    await page.selectOption(quickBookingLocator.end_date.month, result.month.toString());
    //select day
    const new_day_option = common.getLocatorByReplaceValue(page, quickBookingLocator.end_date.day_option, result.day.toString());

    let realMonth = result.month + 1;
    full_date = `${result.year}-${realMonth}-${result.day}`;
    
    return full_date;
};

export async function inputHoursPerDay(page: Page) {
    const randomHours = common.getRandomNumber(1, 8);
    await page.locator(quickBookingLocator.txt_hours_per_day).fill(randomHours.toString());
    return randomHours
};

