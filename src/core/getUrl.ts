/**
 * EBS 온라인 클래스의 주소를 반환합니다. 주소의 끝에는 `/`이 포함되지 않습니다.
 *
 * 예제: `https://hoc19.ebssw.kr`
 *
 * 기본값: `https://hoc19.ebssw.kr`
 */
const getUrl = 'https://' + process.env.EBS_URL || 'hoc19.ebssw.kr';

export default getUrl;
