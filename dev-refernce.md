### <font color="#FF5733">한국어 버전 구축</font>

본 저장소는 [ChainForge](https://github.com/ianarawjo/ChainForge)의 소스 코드를 사용하여, 한국어를 통한 개인의 AI 연구를 목적으로 구축하여, 사용할 목적으로 제작되었습니다.<br/>
본 저장소는 어디까지나 개인에 [학습/연구] 용으로 [운영/관리] 하기에, 개인의 사정으로 삭제되거나, 작업이 지연될 수 있음을 인지하셔야 합니다.<br/>
본 저작물의 원조 [개발자](./README.md#개발)를 참조하시어, 본 저작물을 인용 시, 관련 출판물에 [요구사항](./README.md#우리를-인용할-경우)을 숙지하셔야 합니다.

#### 저에게 연락
한국어 버전에 문의가 있으신 분은 <a href="mailto:osoi@naver.com">이메일</a>을 이용해 주세요.


----------------------------------

# ⛓️🛠️ ChainForge

본 문서는 개발자 입장에서, 소스를 직접 <font color="#FF5733">빌드/실행</font>에 대한 것을 다룹니다.<br/>
ChainForge의 Fronend는 Node.js의 React로 개발되었으며, Backend는 Python의 Flask 서버로 서비스됨을 상기하세요.

## 개발자용

다음은 ChainForge의 베타 버전을 [수정/개발/확장]하려는 사람들을 위해, 소스에서 직접 실행하기 위한 [가이드](https://chainforge.ai/docs/for_dev/)입니다.<br/>
이 단계는 향후 변경될 수 있습니다.


## 설치 요구 사항

(1) ChainForge를 실행하기 전에, Python 종속성을 설치해야 합니다.
```
> cd ./ChainForge-kor/chainforge
> pip install -r requirements.txt
```

(2) Node.js 종속성을 설치해야 합니다.<br/>
> **참고**<br/>
> 반드 시, 환경변수 `NODE_ENV: development`으로 설정한 후, 빌드를 수행시켜야 한다.
```
> cd ./ChainForge-kor/chainforge/react-server
> npm install
```
종속성 충돌이 발생할 수 있습니다.<br/>
`npm install --force`을(를) 다시 실행하여, 강제로 설치를 계속할 수 있습니다.


## Frontend 수동으로 제공

Frontend를 수동으로 제공하려면, 두 가지 옵션이 있습니다.<br/>
1. 단일 Python 스크립트에서, 모든 것을 실행합니다.<br/>
    이를 위해서는 React 앱을 정적 파일로 구축해야 합니다.
2. Flask Backend와 별도로, React Frontend를 제공하고, 이점을 활용합니다.<br/>
    핫 리로딩에 반응합니다.

최종 사용자에게는 전자(1)를, 개발자에게는 후자(2)를 권장합니다.

### 옵션 1: React 앱을 정적 파일로 빌드(최종 사용자)
> **참고**<br/>
> 반드 시, 환경변수 `NODE_ENV: production`으로 설정한 후, 빌드를 수행시켜야 한다.
```
> cd ./ChainForge-kor/chainforge/react-server
> npm run build
```
정적 파일에 React 앱을 빌드하는 동안 잠시 기다려 주세요.<br/>

### 옵션 2: 핫 리로딩으로, React Frontend 제공(개발자)
> **참고**<br/>
> 이 것을 사용하면, [Frontend/Backend] 각각에 터미널 콘솔창이 2개가 필요합니다.<br/>
> 반드 시, 환경변수 `NODE_ENV: development`로 설정한 후, 빌드를 수행시켜야 한다.
```
> cd ./ChainForge-kor/chainforge/react-server
> npm run start
```
React Frontend 서비스를 제공합니다.<br/>


## Backend 제공
```
> cd ./ChainForge-kor
> python -m chainforge.app serve
```
이 스크립트는 포트 8000에서, Flask 서버를 가동합니다.<br/>
대부분의 앱 로직은 완전히 브라우저에 있지만, 일부 호출(예: API 키를 환경 변수로 로드하거나 Anthropic API 쿼리)은 여전히 ​​Flask 서버를 통과합니다.

React 앱을 정적으로 구축한 경우, localhost:8000웹 브라우저로 이동하여, 앱을 확인하세요.(이상적으로는 Google Chrome에서)<br/>
'npm run start'를 사용하여, 핫 리로딩으로 React 앱을 제공한 경우, 이를 실행한 서버 주소(일반적으로 localhost:3000)로 이동하세요.


# 라이센스

ChainForge는 MIT 라이센스에 따라 출시됩니다.
