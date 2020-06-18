/**
 * Auto EBS Onlineclass
 * 자동으로 EBS 온라인 클래스를 수강합니다.
 *
 * @author 도다 (https://github.com/ddarkr)
 */

import checkNeedEnviroment from './core/checkNeedEnviroment';
import taskFlow from './features/flow';

const videoList: Array<string> = [];

// 환경 변수 존재하는지 확인
if (checkNeedEnviroment()) {
  (async () => {
    videoList.forEach(async (url: string) => {
      await taskFlow(url);
    });
  })();
}
