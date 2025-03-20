const { test, expect } = require('@playwright/test');
const SocialConnectPage = require('../pages/socialConnectPage');
const { CREDENTIALS } = require('../utils/helpers');

test('Fail YouTube connection with incorrect Gmail password credentials', async ({ page }) => {
  test.slow();
  const socialPage = new SocialConnectPage(page);
  
    await socialPage.navigate();
    await socialPage.connectYouTube();
    const newPage = await socialPage.handlePopup();
    await socialPage.gmailLogin(newPage, CREDENTIALS.gmailUsername, 'wrongPassword');

  //   const errorMessage = page.locator("//span[contains(text(),'Wrong password')]");

  // // Verify the error message is visible
  // await expect(errorMessage).toBeVisible();

  //   //await expect(page.locator('div[class="Ly8vae uSvLId"] div span')).toBeVisible();
  });
  
  test('Fail YouTube connection due to denied permissions', async ({ page }) => {
    test.slow();
    const socialPage = new SocialConnectPage(page);
  
    await socialPage.navigate();
    await socialPage.connectYouTube();
    const newPage = await socialPage.handlePopup();
    await socialPage.gmailLogin(newPage, CREDENTIALS.gmailUsername, CREDENTIALS.gmailPassword);
  
    // Simulate denying permissions
    // await page.click('text=Cancel');
    // await expect(page.locator('text=Permission Denied')).toBeVisible();
  });
  
  test('Fail connection due to network error', async ({ page }) => {
    test.slow();
    const socialPage = new SocialConnectPage(page);
  
    // Simulate network failure
    await page.route('**/youtube/connect', route => route.abort());
  
    await socialPage.navigate();
    await socialPage.connectYouTube(CREDENTIALS.gmailUsername, CREDENTIALS.gmailPassword);
  
    //await expect(page.locator('text=Network Error. Try again')).toBeVisible();
  });
  