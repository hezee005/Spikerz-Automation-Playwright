const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const { CREDENTIALS } = require('../utils/helpers');

test('Login to Spikerz Dev UI', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(CREDENTIALS.username, CREDENTIALS.password);
  await expect(page.locator('img[ngsrc="assets/spikerz.svg"]')).toBeVisible()

  //await expect(page).toHaveURL('/overview?workspaceId=1&username=ellesse&platform=instagram-business-and-creators&id=17841445325350983');
});
