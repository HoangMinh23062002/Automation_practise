import { expect, test } from "@playwright/test";

// test('dropdown', async ({ page }) => {
//     await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
//     await page.selectOption('#select-demo', {
//         //value: 'Sunday'
//         index: 6
//     });
//     await page.selectOption('#multi-select', [{
//         label: "Texas"
//     },
//     {
//         index: 2
//     }, {
//         value: 'Washington'
//     }])


test('searchDropdown', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    await SelectCountry("minhhhhhhhhh");
    await SelectCountry("minh46hhhhhhhh");
    await SelectCountry("minhhfgfhhhhhhh");
    await SelectCountry("minhhhjhhhhhhh");
    await SelectCountry("minhhhdhhhhhhh");
    await SelectCountry("minhhrhdhhhhhh");

    async function SelectCountry(Countryname) {
        await page.click("#country+span");

        await page.locator("ul#select2-country-results li", {
            hasText: Countryname
        }).fill(Countryname);

        await expect(page.locator('body > span > span > span.select2-search.select2-search--dropdown > input'))
            .toHaveText(Countryname);
    }
});



