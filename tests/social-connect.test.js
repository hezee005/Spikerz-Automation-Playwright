const { test, expect } = require('@playwright/test');
const SocialConnectPage = require('../pages/socialConnectPage');
const { CREDENTIALS } = require('../utils/helpers');



test('Successfully connect YouTube account to Spikerz', async ({ page }) => {
  test.slow();
  const socialPage = new SocialConnectPage(page);
  
  await socialPage.navigate();
  await socialPage.connectYouTube();
  const newPage = await socialPage.handlePopup();
  await socialPage.gmailLogin(newPage, CREDENTIALS.gmailUsername, CREDENTIALS.gmailPassword);
  await socialPage.grantPermissions(newPage);
  await page.bringToFront();
  await socialPage.verifyConnection();

  // Verify DinaBakeryShop is displayed
  await expect(page.locator('div[class="text-strong"]')).toBeVisible();

});
