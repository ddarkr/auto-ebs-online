import puppeteer from 'puppeteer';

declare const playerObj: any;
declare global {
  interface Window {
    onCustomEvent: any;
  }
}

const videoWatch = async (page: puppeteer.Page, video: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log('[video-watch] 시작');
    const action = async () => {
      try {
        console.log('[재생] 새로고침 중...');
        await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] });
        console.log('[재생] ' + video + ' 로 이동합니다.');
        await page.goto(video, {
          waitUntil: 'networkidle2',
        });

        console.log('[재생] 큐 처리 스크립트 삽입 작업 실행.');
        await page.exposeFunction('onCustomEvent', e => {
          console.log('[재생] 일시정지 감지 됨. (resolved)');
          resolve(); // 일시정지 감지 된 경우에만 resolve
        });

        await page.evaluate(() => {
          playerObj.on('pause', function () {
            window.onCustomEvent({ type: 'pause' });
            console.log('paused event');
          });
        });

        console.log('[재생] 재생에 방해되는 모달 제거 작업 중...');
        await page.evaluate(sel => {
          const elements = document.querySelectorAll(sel);
          for (let i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
          }
        }, '.vjs-modal-dialog');

        console.log('[재생] 플레이어 컨트롤 활성화 및 옵션 변경 작업 중...');
        await page.evaluate(() => {
          playerObj.muted(true); // 뮤트
          playerObj.playbackRate(1.5); // 1.5x 재생 속도
          playerObj.controls(true); // 컨트롤 활성화 (모달 뜨면 안보임)
        });

        console.log('[재생] 재생 버튼 누름 (재생 시작)');
        await page.click('#playerEl > .vjs-big-play-button');
      } catch (e) {
        console.log(e);
      }
    };
    action(); // 상단 스크립트 실행.
  });
};

export default videoWatch;
