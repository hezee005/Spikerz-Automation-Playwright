module.exports = {
    BASE_URL: 'https://demo.spikerz.com',
    LOGIN_PAGE: '/login',
    SOCIAL_CONNECT_PAGE: '/social-connect',
    
    SELECTORS: {
      loginPopup: 'img[ngsrc="assets/spikerz.svg"]',
      usernameInput: 'input[name="username"]',
      passwordInput: 'input[name="password"]',
      loginButton: 'button[type="submit"]',
      youtubeButton: 'text=YouTube',
      connectWithYouTube: '.google-and-youtube-login-container > div > app-button > .ant-btn',
      continueButton: 'text=Continue',
      permissionCheckbox: 'input[type="checkbox"][aria-label="Select all"]',
      confirmDetails: 'h5[class="ng-star-inserted"]',
      //DinaBakeryShop: 'div[class="text-strong"]',
    }
  };
  