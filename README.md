# **Spikerz Playwright Automation**  

## **📌 Setup**  
1. **Clone the repository**  
   ```sh
   git clone https://github.com/hezee005/spikerz-automation.git
   ```
2. **Install dependencies**  
   ```sh
   npm install
   ```
3. **Set up environment variables**  
   ```sh
   cp .env.example .env
   ```
4. **Run tests**  
   ```sh
   npx playwright test
   ```

---

## **🛠 Troubleshooting**  
- **Test fails intermittently?** → Increase timeouts in `playwright.config.js`.  
- **Elements not found?** → Run `npx playwright test --debug` and inspect the UI.  

---

## **📝 API Documentation**  

### **🔹 LoginPage.js**  
- `navigate()` → Navigates to login page.  
- `login(username, password)` → Logs in with given credentials.  

### **🔹 SocialConnectPage.js**  
- `navigate()` → Navigates to social connect page.  
- `connectYouTube(gmailUsername, gmailPassword)` → Connects YouTube.  
- `grantPermissions()` → Selects all permissions.  
- `verifyConnection()` → Checks for success message.  

---

## **🚀 GitHub Actions Workflow**  

Ensure your repository’s GitHub Actions secrets contain the following environment variables:  

- `BASE_URL`  
- `SPK_USERNAME`  
- `SPK_PASSWORD`  
- `GMAIL_USERNAME`  
- `GMAIL_PASSWORD`  

### **Example workflow file:**  
```yaml
name: Playwright Tests
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: lts/*
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npx playwright test
      env:
        BASE_URL: ${{ secrets.BASE_URL }}
        GOOGLE_USERNAME: ${{ secrets.GOOGLE_USERNAME }}
        GOOGLE_PASSWORD: ${{ secrets.GOOGLE_PASSWORD }}
        PROFILE_PICTURE_URL: ${{ secrets.PROFILE_PICTURE_URL }}
        TARGET_YOUTUBE_CHANNEL_ID: ${{ secrets.TARGET_YOUTUBE_CHANNEL_ID }}
        USERNAME: ${{ secrets.USERNAME }}
        PASSWORD: ${{ secrets.PASSWORD }}
    - uses: actions/upload-artifact@v4
      if: ${{ !cancelled() }}
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

---

## **📂 Test Structure**  
💃 `tests/` → Contains all test files  
💃 `pages/` → Page Object Model (POM) classes for better test maintainability  
💃 `utils/` → Utility functions, such as authentication helpers  
💃 `playwright.config.js` → Playwright configuration file  

---

## **🔒 Security Considerations**  
- Avoid logging sensitive data  
- Use `.env` instead of hardcoding credentials  

---

## **🐞 Error Handling & Debugging**  
- Run tests with:  
  ```sh
  DEBUG=pw:api npx playwright test
  ```
  → See API calls for debugging.  
- Check Playwright’s trace viewer with:  
  ```sh
  npx playwright test --trace on-first-retry
  ```

---