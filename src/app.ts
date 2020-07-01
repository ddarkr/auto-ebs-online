/**
 * Auto EBS Onlineclass
 * 자동으로 EBS 온라인 클래스를 수강합니다.
 *
 * @author 도다 (https://github.com/ddarkr)
 */

import readVideoList from './core/readVideolist';
import checkNeedEnviroment from './core/checkNeedEnviroment';
import taskFlow from './features/flow';

// 환경 변수 존재하는지 확인
if (checkNeedEnviroment()) {
  (async () => {
    const videoList = await readVideoList();
    console.log(videoList);
    if (videoList !== undefined) {
      for (let i = 0; i < videoList.length; i++) {
        await taskFlow(videoList[i].replace(/(?:\\[rn])+/g, ''));
      }
    } else {
      console.log('[■] videoList.txt 파일이 존재하지 않습니다.');
      console.log('    파일을 생성하였습니다.');
      console.log('       ');
      console.log('    한 줄마다 한 개의 영상 주소를 입력하시기 바랍니다.');
      process.exit(1);
    }
  })();
} else {
  console.log('[■] 작동에 필요한 환경변수가 존재하지 않습니다. .env 파일을 설정해주세요.');
  console.log('    설정 방법은 README.md 파일을 확인하시기 바랍니다 :)');
}

// console.log(readVideoList());
