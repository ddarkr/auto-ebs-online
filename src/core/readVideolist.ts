import fs from 'fs';
import path from 'path';

// 파일 위치
const fileLocation = path.resolve('./videoList.txt');

// 존재 확인
const fileExists = async (path: string) => !!(await fs.promises.stat(path).catch(() => false));

/**
 * 영상 목록 (txt) 파일을 읽고, array를 반환합니다.
 */
const readVideolistFile = async (): Promise<Array<string> | undefined> => {
  if (await fileExists(fileLocation)) {
    const article = fs.readFileSync(fileLocation);
    return article
      .toString()
      .replace(/(?:\\[r]|[\r]+)+/g, '')
      .split('\n');
  } else {
    const text = '';
    fs.writeFileSync(fileLocation, '\ufeff' + text, { encoding: 'utf8' });
    return undefined;
  }
};

export default readVideolistFile;
