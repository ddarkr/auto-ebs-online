import puppeteer from 'puppeteer';
import URL from './getUrl';
import config from './config';

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
    executablePath:
      config('browser_path') || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 }); // 조금 더 큰 화면에서 작업하자

  // 세션 시작 목적 (아무 페이지나 접속.)
  await page.goto(
    URL +
      '/onlineClass/search/onlineClassSearchView.do?schulCcode=' +
      config('ebs_scode') +
      '&schCssTyp=online_high',
    {
      waitUntil: 'networkidle2',
    },
  );
  return { browser, page };
};

export default InitialPuppeteer;
