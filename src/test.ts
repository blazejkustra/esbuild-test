// const chromium = require('@sparticuz/chrome-aws-lambda');
import chromium from '@sparticuz/chrome-aws-lambda';

export const handler = async () => {
  const browser = await chromium.puppeteer.launch();
  console.log(browser);
  browser.close();
};
