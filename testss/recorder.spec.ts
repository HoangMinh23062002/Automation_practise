import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await page.getByPlaceholder('E-Mail Address').click({
    modifiers: ['Control']
  });
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('Telephone').click();
  await page.getByPlaceholder('Telephone').fill('2345737891fdgfdgfd');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});