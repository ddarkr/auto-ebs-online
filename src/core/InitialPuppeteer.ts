import puppeteer from 'puppeteer';

interface InitialType {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
}

/**
 * Start Puppeteer session. await 사용바람.
 */
const InitialPuppeteer = async (): Promise<InitialType> => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  });
  const page = await browser.newPage();
  return { browser, page };
};

export default InitialPuppeteer;
