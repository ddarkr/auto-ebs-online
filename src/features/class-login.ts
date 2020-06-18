/**
 * EBS 온라인 클래스에 로그인
 */
import puppeteer from 'puppeteer';
import URL from '../core/getUrl';

const LoginToSession = async (page: puppeteer.Page): Promise<void> => {
  await page.goto(URL + '/sso/loginView.do?loginType=onlineClass', { waitUntil: 'networkidle2' }); // 페이지 이동 / 페이지 로딩이 완료될 때까지 대기.

  await page.type('#j_username', process.env.EBS_ID || '');
  await page.type('#j_password', process.env.EBS_PW || '');

  await page.click('.info_input button.imgtype');
};

export default LoginToSession;
