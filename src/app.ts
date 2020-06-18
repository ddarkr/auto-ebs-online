/**
 * Auto EBS Onlineclass
 *
 * 자동으로 EBS 온라인 클래스를 수강합니다.
 */

import InitialPuppeteer from './core/InitialPuppeteer';
import checkNeedEnviroment from './core/checkNeedEnviroment';
import LoginToSession from './features/class-login';

// 환경 변수 존재하는지 확인
if (checkNeedEnviroment()) {
  (async () => {
    const session = await InitialPuppeteer();

    await LoginToSession(session.page);

    await session.page.goto(URL + '/onlineClass/reqst/onlineClassReqstInfoView.do', {
      waitUntil: 'networkidle2',
    });

    // await session.page.goto('https://hoc19.ebssw.kr/onlineClass/reqst/onlineClassReqstInfoView.do');

    // 세션 종료 (개발 시에는 주석 처리해놔)
    // await session.browser.close();
  })();
}
