/**
 * Auto EBS Onlineclass
 * 자동으로 EBS 온라인 클래스를 수강합니다.
 *
 * @author 도다 (https://github.com/ddarkr)
 */

import checkNeedEnviroment from './core/checkNeedEnviroment';
import taskFlow from './features/flow';

const videoList: Array<string> = [
  'https://hoc19.ebssw.kr/mypage/userlrn/userLrnView.do?atnlcNo=788879&stepSn=154151&lctreSn=5454939&onlineClassYn=Y',
  'https://hoc19.ebssw.kr/mypage/userlrn/userLrnView.do?atnlcNo=780315&stepSn=171164&lctreSn=6075903&onlineClassYn=Y',
];

// 환경 변수 존재하는지 확인
if (checkNeedEnviroment()) {
  (async () => {
    for (let i = 0; i < videoList.length; i++) {
      await taskFlow(videoList[i]);
    }
  })();
}
