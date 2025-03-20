const { SELECTORS } = require('../utils/constants');
const { waitForElement, retryAction } = require('../utils/commands');
const { BASE_URL } = require('../utils/constants');

class SocialConnectPage {
  constructor(page) {
    this.page = page;
  }

  async gmailLogin(page, gmailUsername, gmailPassword) {
    await waitForElement(page, 'input[type="email"]');
    await page.fill('input[type="email"]', gmailUsername);
    await page.click('#identifierNext');
    await page.fill('input[type="password"]', gmailPassword);
    await page.click('#passwordNext');
  }

  async navigate() {
    await this.page.goto(`/social-connect`);
  }

  async connectYouTube() {
    await retryAction(async () => {
      await this.page.click(SELECTORS.youtubeButton);
    });

  
  }

   // Handles the popup window that appears after clicking the YouTube subscribe button
   async handlePopup() {
    try {
      const [popup] = await Promise.all([
        // Wait for a popup event to be triggered
        this.page.waitForEvent('popup', { timeout: 30000 }),
        
        // Click the subscribe button to open the popup
        await this.page.click(SELECTORS.connectWithYouTube),
      ]);
      return popup;
    } catch (error) {
      // Throws an error if the popup does not appear within the timeout period
      throw new Error('Popup did not open within timeout: ' + error.message);
    }
  }

  async grantPermissions(page) {
    await page.locator('button', { hasText: 'Continue' }).click();
    await waitForElement(page, SELECTORS.permissionCheckbox);
    await page.locator(SELECTORS.permissionCheckbox).check();
    await page.locator('button', { hasText: 'Continue' }).click();
  }

  async verifyConnection() {
    await waitForElement(this.page, SELECTORS.confirmDetails);
  }
  

}

module.exports = SocialConnectPage;