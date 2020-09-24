import checkNeedEnviroment from './core/checkNeedEnviroment';
import taskFlow from './features/flow';

const args = String(process.argv.slice(2));

if (checkNeedEnviroment()) {
  (async () => {
    console.log('[■] 단일 영상 시청합니다.');
    console.log('   - url: ' + args);
    await taskFlow(args);
  })();
} else {
  console.log('[■] 작동에 필요한 환경변수가 존재하지 않습니다. .env 파일을 설정해주세요.');
  console.log('    설정 방법은 README.md 파일을 확인하시기 바랍니다 :)');
}
