module.exports = {
    async waitForElement(page, selector, timeout = 60000) {
      try {
        await page.waitForSelector(selector, { timeout });
      } catch (error) {
        console.error(`Element ${selector} not found within ${timeout}ms`);
        throw error;
      }
    },
  
    async retryAction(action, retries = 2, delay = 2000) {
      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          return await action();
        } catch (error) {
          if (attempt === retries) throw error;
          console.log(`Retrying... Attempt ${attempt}`);
          await new Promise(res => setTimeout(res, delay));
        }
      }
    }
  };
  