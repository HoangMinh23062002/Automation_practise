import { expect, test } from '@playwright/test'
import * as login from '../../pages/PageActions/login'
import urls from '../../Configs/evn.data';
import * as testData from '../../Configs/testData';
import * as common from '../../pages/pageLocator/common'
import { Availabilitylocator } from '../../pages/pageLocator/availabilityCheck'
import * as availabilityCheck from '../../pages/PageActions/availabilityCheck'
import * as booking from '../../pages/PageActions/booking'

import * as bookingAPI from '../../API/booking';



const { step, beforeEach, describe, afterEach } = test;

describe('Sign in flow', () => {
    beforeEach(async ({ page }) => {
        await page.goto(urls.baseUrl);
    });

    // Test to check if the user can sign up and logout successfully
    test(' [Availability Check] Verify that Admin can export Allocation Result in Availability Check screen according to filters applied', async ({ page }) => {
        await step('1 Log in as Admin', async () => {
            await login.loginCustomer(page, testData.userLogin.admin.email, testData.userLogin.password)
            await page.waitForLoadState('networkidle')
        });
        await step('2 Click on the Availability Check tab in the left bar', async () => {
            await common.AvailabilityCheck(page);
        });
        await step('3 In the Availability Check screen, click the export button', async () => {
            await availabilityCheck.checkExportButton(page);
            const exportButtoninnertext = await availabilityCheck.ExportButton(page);
            expect(exportButtoninnertext).toContain(availabilityCheck.avaibilityCheckData.exportBtnText.toLocaleLowerCase());
        });
    });

    test('[Availability Check] Verify that MOD can export Allocation Result in Availability Check screen according to filters applied - @TC606 @regression', async ({ page }) => {
        await step('1 logging as mod', async () => {
            await login.loginCustomer(page, testData.userLogin.MOD.email, testData.userLogin.password);
            await page.waitForLoadState('networkidle');
        });
        await step('2 Check on the Availability Check tab in the left bar', async () => {
            await common.AvailabilityCheck(page);
        });
        await step('3 Clicking the export button and verifying text', async () => {
            await availabilityCheck.checkExportButton(page);
            const availabilityCheckTxt = await availabilityCheck.CheckavailabilityCheckTxt(page);
            console.log(availabilityCheckTxt + "hihihih")
            expect(availabilityCheckTxt).toContain(availabilityCheck.avaibilityCheckData.title.toLocaleLowerCase());
            const exportButtoninnertext = await availabilityCheck.checkExportButton(page)
            expect(exportButtoninnertext).toContain(availabilityCheck.avaibilityCheckData.exportBtnText.toLocaleLowerCase())
            console.log(exportButtoninnertext + "hahahhaha")
        });
    });

    test('[Availability Check] Verify that Admin can view member detail pop-up in Availability Check - @TC46 @regression', async ({ page }) => {
        await step('1 logging in as Admin and go to Availability Check screen', async () => {
            await login.loginCustomer(page, testData.userLogin.admin.email, testData.userLogin.password)
            await page.waitForLoadState('networkidle')
            await common.AvailabilityCheck(page)
        });
        await step('2, Check if admin can edit the user information and navigate to user edit screen', async () => {
            await availabilityCheck.editUserInAvailabilityCheck(page)
            expect(page).toHaveTitle('Booking Overview Report | Smartosc Resource Allocation Tool')
        });
    });

    test('[Availability Check] Verify that HOD can view member detail pop-up in Availability Check - @TC56 @regression', async ({ page }) => {
        await step('1, 1.Login with Admin account and go to Availability Check screen', async () => {
            await login.loginCustomer(page, testData.userLogin.HOD1.email, testData.userLogin.password);
            await page.waitForLoadState('networkidle');
            await common.AvailabilityCheck(page);
        });
    });

    test('[Availability Check] Verify that PM/TPM can view member detail pop-up in Availability Check - @TC57 @regression', async ({ page }) => {
        await step('1.Login with PM account and go to availability check page', async () => {
            await login.loginCustomer(page, testData.userLogin.PM1.email, testData.userLogin.password);
            await page.waitForLoadState('networkidle');
            await common.AvailabilityCheck(page);
        });
        await step(' 2.Check if PM can view member detail pop-up', async () => {
            await availabilityCheck.editUserInAvailabilityCheck(page);
            const window_popup_title = await availabilityCheck.WinndowTitlrPop(page);
            console.log("window title is" + window_popup_title);
            expect(window_popup_title).toContainText('Resource detail');
        });
    });

    test('[Availability Check] Verify that PC/TPC can view member detail pop-up in Availability Check - @TC58 @regression', async ({ page }) => {
        await step('1.Login with HOD account and go to Availability Check screen', async () => {
            await login.loginCustomer(page, testData.userLogin.PC1.email, testData.userLogin.password);
            await page.waitForLoadState('networkidle');
            await common.AvailabilityCheck(page);
        });
        await step(' 2.Check if HOD can edit the user information and navigate to user edit screen ', async () => {
            await availabilityCheck.SearchUser(page);
            await availabilityCheck.EditUser(page);
            const windownPopup = await availabilityCheck.WinndowTitlrPop(page);
            expect(windownPopup).toContainText('Resource detail');
            console.log(windownPopup);
        });
    });

    describe('Remove booking before and after tests', () => {
        beforeEach(async ({ page }) => {
            const Customer_tocken = await bookingAPI.GetCustomerTocken(testData.userLogin.admin.email, testData.userLogin.password)
            await bookingAPI.deketeBooking(testData.availability_info.project_id, testData.availability_info.user_id, Customer_tocken)
            await page.goto(urls.baseUrl);
        });
        afterEach(async ({ page }) => {
            const customer_token = await bookingAPI.GetCustomerTocken(testData.userLogin.admin.email, testData.userLogin.password)
            await bookingAPI.deketeBooking(testData.availability_info.project_id, testData.availability_info.user_id, customer_token)
        });
        test('[Availability Check]  Verify that Admin can proceed to Quick booking with selected account in Availability Check via BOOK ALL function - @TC62 @regression', async ({page}) => {
            await step('1.Login with admin account and go to availability check page', async()=>{
                await login.loginCustomer(page, testData.userLogin.admin.email, testData.userLogin.password);
                await page.waitForLoadState('networkidle');
                await common.AvailabilityCheck(page);
            });
            await step('2.Check if admin can book member through availability check screen', async()=>{
                await availabilityCheck.bookUserThroughAvailabilityCheckScreen(page);
            });
            await step('3.Make a internal booking and verify booking is successfull', async()=>{
                await booking.verify_that_user_can_make_quick_booking_successfully(page, testData.availability_info.project_name, testData.availability_info.account_keyword);
            });
            await step('4.Verify if the user already appear on Request screen', async()=>{
                await availabilityCheck.logoutAndLoginAgainWithAnotherAccount(page,  testData.userLogin.admin.email);
                await common.GetTab(page)
            })
        });
    });
});


