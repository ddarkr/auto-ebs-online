import InitialPuppeteer from '../core/InitialPuppeteer';

import LoginToSession from './class-login';
import videoWatch from './video-watch';

const taskFlow = async () => {
  const session = await InitialPuppeteer();

  await LoginToSession(session.page);

  await session.page.waitFor(2000);

  await videoWatch(
    session.page,
    'https://hoc19.ebssw.kr/mypage/userlrn/userLrnView.do?atnlcNo=788879&stepSn=154151&lctreSn=5454936&onlineClassYn=Y',
  );

  // 세션 종료 (개발 시에는 주석 처리해놔)
  await session.browser.close();
};

export default taskFlow;
