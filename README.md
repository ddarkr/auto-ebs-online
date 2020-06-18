# auto-ebs-online

> EBS 온라인 클래스를 간단하게 수강해보세요. 링크만 넣어놓는다면 알아서 수강해준답니다. 😁

## Warning

- 현재 코드는 고등학교만 지원합니다. 중학교는 수정이 필요합니다.
- 구조 상의 한계로, 영상 당 한번씩 브라우저를 다시 로드합니다. 해당 과정에서 여러 번 로그인이 이루어질 수 있습니다.
- 해당 프로그램을 사용해서 발생하는 책임은 본인에게 있습니다.

## Set up

### Requirement

- Node.js 10 이상
- Chrome 또는 Chromium 기반 브라우저
  - 일부 오픈소스 Chromium 브라우저는 MP4 등의 유료 포맷이 지원되지 않아 영상 재생이 안될 수 있습니다.
  - 테스트 환경은 크로뮴 Edge로 진행되었습니다.

### .env

```
EBS_SCODE=00000
EBS_URL=hoc00.ebssw.kr
EBS_ID=username
EBS_PW=password
```

## others

- 코드 정리가 되어 있지 않습니다. 동작의 보증을 하지 않습니다.
