import InitialPuppeteer from '../core/InitialPuppeteer';

import LoginToSession from './class-login';
import videoWatch from './video-watch';

const taskFlow = async (video: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        console.log('[task-flow] 작업 시작.');

        console.log('[task-flow] InitialPuppeteer');
        const session = await InitialPuppeteer();

        console.log('[task-flow] 로그인');
        await LoginToSession(session.page);

        console.log('[task-flow] 2초간 대기');
        await session.page.waitFor(2000);

        console.log('[task-flow] videoWatch');
        await videoWatch(session.page, video);

        console.log('[task-flow] 작업 종료.');

        await session.browser.close();

        resolve();
      } catch (e) {
        reject(e);
      }
    })();
  });
};

export default taskFlow;
