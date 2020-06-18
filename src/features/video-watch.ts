import puppeteer from 'puppeteer';
const videoWatch = async (page: puppeteer.Page, video: string): Promise<void> => {
  await page.goto(video, {
    waitUntil: 'networkidle2',
  });

  await page.waitForNavigation();
};

export default videoWatch;
