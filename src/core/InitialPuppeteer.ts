import puppeteer from 'puppeteer';
import URL from './getUrl';

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
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();
  await page.goto(
    URL +
      '/onlineClass/search/onlineClassSearchView.do?schulCcode=' +
      process.env.SCODE +
      '&schCssTyp=online_high',
    {
      waitUntil: 'networkidle2',
    },
  );
  return { browser, page };
};

export default InitialPuppeteer;
