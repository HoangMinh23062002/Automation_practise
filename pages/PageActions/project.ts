import { Page } from "@playwright/test";
import { mainMenu } from "../pageLocator/menu";
import { dashboardLocator } from "../pageLocator/Dashboard";

export async function mainMenuContent(page: Page) {
    return page.locator(mainMenu.mainMenuContent)
}