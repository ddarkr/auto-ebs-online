/**
 * 필요한 환경 변수가 모두 존재하는지 확인
 */
const checkNeedEnviroment = (): boolean => {
  if (!process.env.EBS_SCODE || process.env.EBS_SCODE === '') {
    return false;
  }
  if (!process.env.EBS_ID || process.env.EBS_ID === '') {
    return false;
  }
  if (!process.env.EBS_PW || process.env.EBS_PW === '') {
    return false;
  }
  return true;
};

export default checkNeedEnviroment;
