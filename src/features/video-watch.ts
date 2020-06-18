import puppeteer from 'puppeteer';
const videoWatch = async (page: puppeteer.Page, video: string): Promise<void> => {
  console.log(video + ' 로 이동합니다.');
  await page.goto(video, {
    waitUntil: 'networkidle2',
  });

  await page.click('#playerEl > .vjs-big-play-button');
};

export default videoWatch;
