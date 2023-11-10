import { Page } from "@playwright/test";
import { logIn_locator } from "../pageLocator/logIn";
import { dashboardLocator } from "../pageLocator/Dashboard";

export async function loginCustomer(page:Page, email:string,password:string){
    await page.waitForLoadState('networkidle')
    await page.fill(logIn_locator.email_locator, email)
    await page.fill(logIn_locator.password_locator,password)
    await page.click(logIn_locator.loginButton_locator)
    const element = page.locator(dashboardLocator.Username_icon)
    await element.waitFor({state:"visible"})
}