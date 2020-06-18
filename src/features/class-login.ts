/**
 * EBS 온라인 클래스에 로그인
 */
import puppeteer from 'puppeteer';
import URL from '../core/getUrl';

const LoginToSession = async (page: puppeteer.Page): Promise<void> => {
  try {
    await page.goto(URL + '/sso/loginView.do?loginType=onlineClass', {
      waitUntil: 'networkidle2',
    }); // 페이지 이동 / 페이지 로딩이 완료될 때까지 대기.

    await page.type('#j_username', process.env.EBS_ID || '');
    await page.type('#j_password', process.env.EBS_PW || '');

    await page.click('#loginViewForm > div > div.left > fieldset > div > button');

    page.on('dialog', async dialog => {
      await dialog.accept();
    });
  } catch (e) {
    console.log('===> 문제 발생!!: feature/LoginToSession');
    console.log('===> 로그인 처리 과정 중 문제가 발생했습니다.');
    console.log(e);
  }
};

export default LoginToSession;
