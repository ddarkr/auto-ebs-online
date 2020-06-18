/**
 * Auto EBS Onlineclass
 *
 * 자동으로 EBS 온라인 클래스를 수강합니다.
 */

import puppeteer from 'puppeteer';
import dotenv from 'dotenv';

// parse .env
dotenv.config();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
