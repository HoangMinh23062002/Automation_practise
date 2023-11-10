import {expect, test} from '@playwright/test'
import * as login from '../../pages/PageActions/login'
import * as project from '../../pages/PageActions/project'
import * as testData from '../../Configs/testData';
import urls from '../../Configs/evn.data';
import { verify } from 'crypto';
const { describe, step } = test;


test('Do log in a login function - @TC1', async({page})=>{
     await step('verify login', async() =>{
        await page.goto(urls.baseUrl)
        await login.loginCustomer(page, testData.userLogin.admin.email, testData.userLogin.password)
     })
     
    await step("veriy the display of left bar menu - @TC2", async()=>{
        await page.waitForLoadState('networkidle')
        const MenuBar = await project.mainMenuContent(page);
        await expect(MenuBar).not.toContainText('project')
    })

})

