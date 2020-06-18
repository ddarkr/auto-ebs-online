/**
 * Auto EBS Onlineclass
 *
 * 자동으로 EBS 온라인 클래스를 수강합니다.
 */

import dotenv from 'dotenv';
import InitialPuppeteer from 'core/InitialPuppeteer';

// parse .env
dotenv.config();

(async () => {
  const session = await InitialPuppeteer();
  await session.page.goto('https://example.com');
  await session.page.screenshot({ path: 'example.png' });

  await session.browser.close();
})();
