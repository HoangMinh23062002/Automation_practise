import { Page } from "@playwright/test";
import * as common from "../pageLocator/common"
import { Availabilitylocator } from "../pageLocator/availabilityCheck";
import * as testData from '../../Configs/testData'
import urls from "../../Configs/evn.data";
import { loginCustomer } from "./login";


export const avaibilityCheckData = {
    title: "BOOKING USER REPORT",
    exportBtnText: "Export"
}

export async function checkExportButton(page: Page) {
    await page.locator(Availabilitylocator.availabilityCheckTxt).isVisible;
    await page.locator(Availabilitylocator.exportButton).isVisible;
    await page.locator(Availabilitylocator.exportButton).isEnabled;
}
export async function ExportButton(page: Page) {
    return ((await page.locator(Availabilitylocator.exportButton).innerText()).toLocaleLowerCase());
}

export async function CheckavailabilityCheckTxt(page: Page) {
    return (((await page.locator(Availabilitylocator.availabilityCheckTxt).innerText()).toLocaleLowerCase))
}

export async function editUserInAvailabilityCheck(page: Page) {
    await page.locator(Availabilitylocator.account_search_input).click();
    await page.locator(Availabilitylocator.account_search_input).fill(testData.availability_info.account_keyword);
    await page.waitForSelector(Availabilitylocator.dropdown_user_option, { state: 'visible' })
    await page.locator(Availabilitylocator.account_search_input).press('Enter')
    await page.locator(Availabilitylocator.result).click();
    await common.waitForPageCompletelyLoaded(page);
};

export async function SearchUser(page: Page) {
    await page.locator(Availabilitylocator.account_search_input).click();
    await page.locator(Availabilitylocator.account_search_input).fill(testData.availability_info.account_keyword);
    await page.waitForSelector(Availabilitylocator.dropdown_user_option, { state: 'visible' });
    await page.locator(Availabilitylocator.account_search_input).press('Enter');
    await common.waitForPageCompletelyLoaded(page);
};

export async function EditUser(page: Page) {
    const element = await common.getLocatorByReplaceValue(page, Availabilitylocator.user_account, testData.availability_info.account_keyword);
    await element.waitFor({ state: "visible" });
    await element.click();
};
export async function WinndowTitlrPop(page: Page) {
    await page.waitForLoadState('networkidle');
    return await page.locator(Availabilitylocator.window_popup_title);
};

export async function bookUserttitle(page: Page) {
    await page.waitForLoadState('networkidle');
    return await page.locator(Availabilitylocator.bookUser);

};

export async function bookUserThroughAvailabilityCheckScreen(page: Page) {
    await page.waitForLoadState('networkidle');
    await page.locator(Availabilitylocator.account_search_input).click();
    await page.locator(Availabilitylocator.account_search_input).fill(testData.availability_info.account_keyword);
    await page.waitForSelector(Availabilitylocator.dropdown_user_option, { state: 'visible' });
    await page.locator(Availabilitylocator.account_search_input).press('Enter');
    await common.waitForPageCompletelyLoaded(page);
    await page.waitForSelector(Availabilitylocator.ticktobook_checkbox, { state: 'visible' });
    await page.locator(Availabilitylocator.ticktobook_checkbox).click();
    await page.locator(Availabilitylocator.btn_bookall).click();
    await page.locator(Availabilitylocator.btn_next).click();
    await common.waitForPageCompletelyLoaded(page);
};

export async function logoutAndLoginAgainWithAnotherAccount(page: Page, account: string) {
    await page.waitForSelector(Availabilitylocator.avatar, { state: 'visible' });
    await page.locator(Availabilitylocator.avatar).click();
    await page.waitForSelector(Availabilitylocator.btn_logout, { state: 'visible' });
    await page.locator(Availabilitylocator.btn_logout).click();
    await page.goto(urls.baseUrl)
    await loginCustomer(page, account, testData.userLogin.password);

}


