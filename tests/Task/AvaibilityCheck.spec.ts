import {expect, test} from '@playwright/test'
import * as login from '../../pages/PageActions/login'
import urls from '../../Configs/evn.data';
import * as testData from '../../Configs/testData';

const { step, beforeEach, describe, afterEach } = test;

describe('Sign in flow', ()=>{
    beforeEach(async ({page})=>{
        await page.goto(urls.baseUrl);
    });
    
    // Test to check if the user can sign up and logout successfully
    test(' [Availability Check] Verify that Admin can export Allocation Result in Availability Check screen according to filters applied', async({page})=>{
        await step(' Log in as Admin', async()=>{
            await login.loginCustomer(page, testData.userLogin.admin.email, testData.userLogin.password)
            await page.waitForLoadState('networkidle')
        });
        await step('Click on the Availability Check tab in the left bar', async() =>{
            
        })
    })
    })