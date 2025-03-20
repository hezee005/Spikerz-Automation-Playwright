const { SELECTORS } = require('../utils/constants');
const { waitForElement } = require('../utils/commands');
const { BASE_URL } = require('../utils/constants');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(`/login`, { waitUntil: 'domcontentloaded' });
  }

  async login(username, password) {
    await waitForElement(this.page, SELECTORS.loginPopup);
    await this.page.waitForURL('/overview?workspaceId=1&username=ellesse&platform=instagram-business-and-creators&id=17841445325350983');
  }
}

module.exports = LoginPage;
