/**
 * Auto EBS Onlineclass
 *
 * 자동으로 EBS 온라인 클래스를 수강합니다.
 */

import InitialPuppeteer from './core/InitialPuppeteer';
import checkNeedEnviroment from './core/checkNeedEnviroment';
import URL from './core/getUrl';

import LoginToSession from './features/class-login';
import videoWatch from './features/video-watch';

// 환경 변수 존재하는지 확인
if (checkNeedEnviroment()) {
  (async () => {
    const session = await InitialPuppeteer();

    await LoginToSession(session.page);

    await session.page.waitFor(2000);

    // await session.page.goto(URL + '/onlineClass/search/onlineClassSearchView.do', {
    //   waitUntil: 'networkidle2',
    // });

    // await session.page.goto(
    //   'https://hoc19.ebssw.kr/jp02/hmpg/hmpgAlctcrListView.do?menuSn=373399',
    //   {
    //     waitUntil: 'networkidle0',
    //   },
    // );

    await videoWatch(
      session.page,
      'https://hoc19.ebssw.kr/mypage/userlrn/userLrnView.do?atnlcNo=788879&stepSn=154151&lctreSn=5454936&onlineClassYn=Y',
    );

    await videoWatch(
      session.page,
      'https://hoc19.ebssw.kr/mypage/userlrn/userLrnView.do?atnlcNo=788879&stepSn=154151&lctreSn=5454939&onlineClassYn=Y',
    );

    // 세션 종료 (개발 시에는 주석 처리해놔)
    // await session.browser.close();
  })();
}
