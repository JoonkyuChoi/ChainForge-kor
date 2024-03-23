### <font color="#FF5733">한국어 버전 구축</font>

본 저장소는 [ChainForge](https://github.com/ianarawjo/ChainForge)의 소스 코드를 사용하여, 한국어를 통한 개인의 AI 연구를 목적으로 구축하여, 사용할 목적으로 제작되었습니다.<br/>
본 저장소는 어디까지나 개인에 [학습/연구] 용으로 [운영/관리] 하기에, 개인의 사정으로 삭제되거나, 작업이 지연될 수 있음을 인지하셔야 합니다.<br/>
본 저작물의 원조 [개발자](#개발)를 참조하시어, 본 저작물을 인용 시, 관련 출판물에 [요구사항](#우리를-인용할-경우)을 숙지하셔야 합니다.

#### 로컬에서 소스코드 빌드/실행
로컬에서 소스 코드를 직접 빌드하여 실행시키려면, [개발자용](./dev-refernce.md) 문서를 참조하세요.<br/>

#### 저에게 연락
한국어 버전에 문의가 있으신 분은 <a href="mailto:osoi@naver.com">이메일</a>을 이용해 주세요.


----------------------------------

# ⛓️🛠️ ChainForge

**LLM에 대한 전투 테스트를 위한, 오픈소스 시각적 프로그래밍 환경입니다.**<br/>

<img width="1517" alt="banner" src="./images/chainforge-capture.png">


ChainForge는 LLM 응답을 분석하고 평가하기 위한 데이터 흐름 프롬프트 엔지니어링 환경입니다.<br/>
이는 개별 LLM과의 임시 채팅을 뛰어넘는 프롬프트, 채팅 응답 및 응답 품질에 대한 초기 단계의 빠르고 더러운 탐색에 맞춰져 있습니다.<br/>
ChainForge를 사용하면, 다음을 수행할 수 있습니다.
 - **여러 LLM을 한 번에 쿼리하여**, 프롬프트 아이디어와 변형을 빠르고 효과적으로 테스트하세요.
 - **프롬프트 순열, 모델, 모델 설정 전반에 걸쳐 응답 품질을 비교하여**, 사용 사례에 가장 적합한 프롬프트와 모델을 선택하세요.
 - **평가 지표** (점수 함수)를 설정하고, [프롬프트/프롬프트 매개변수/모델/모델 설정] 전반에 걸쳐, 결과를 즉시 시각화합니다.
 - **템플릿 매개변수와 채팅 모델을 통해 한 번에 여러 대화를 진행하세요.**<br/>
   템플릿은 프롬프트뿐만 아니라 후속 채팅 메시지를 제공하고 채팅 대화가 끝날 때마다 출력을 검사하고 평가합니다.

[자세한 내용은 문서를 참조하세요.](https://chainforge.ai/docs/)<br/>
ChainForge에는 OpenAI 평가의 벤치마크에서 생성된, 188개의 예시 흐름을 포함하여, 무엇이 가능한지에 대한 이해를 제공하기 위해, 다양한 예시 평가 흐름이 함께 제공됩니다.

**이것은 Chainforge의 오픈 베타 버전입니다.**<br/>
우리는 모델 공급자 [OpenAI/ HuggingFace/ Anthropic/ Google PaLM2/Azure OpenAI] 엔드포인트와, [Dalai](https://github.com/cocktailpeanut/dalai)에서 호스팅하는 모델 [Alpaca/Llama]를 지원합니다.<br/>
정확한 모델과 개별 모델 설정을 변경할 수 있습니다.<br/>
시각화 노드는 숫자 및 부울 평가 지표를 지원합니다.<br/>
시도해 보시고 여러분의 생각을 알려주세요! :)

ChainForge는 [ReactFlow](https://reactflow.dev) 및 [Flask](https://flask.palletsprojects.com/en/2.3.x/)를 기반으로 구축되었습니다.


# 목차
 - [문서](https://chainforge.ai/docs/)
 - [설치](#설치)
 - [예시 실험](#예시-실험)
 - [다른 사람들과 공유](#다른-사람들과-공유)
 - [기능](#기능) (더 포괄적인 정보는 [문서](https://chainforge.ai/docs/nodes/)를 참조하세요.)
 - [개발 및 인용 방법](#개발)


# 배포판 설치/서버구동/서비스접속

본 섹션은 소스가 아닌, <font color="#FF5733">배포판</font>을 로컬의 특정 폴더에 설치하는 것입니다.<br/>
로컬에서 소스 코드를 직접 빌드하여 실행시키려면, [개발자용](./dev-refernce.md) 문서를 참조하세요.

ChainForge를 로컬에 설치하거나, **https://chainforge.ai/play/** 웹에서 직접 사용해 볼 수 있습니다.<br/>
ChainForge의 웹 버전에는 제한된 기능 세트가 있습니다.<br/>
로컬에 설치된 버전에서는
 - 환경 변수에서 자동으로 API 키를 로드하거나,
 - Python 코드를 작성하여 LLM 응답을 평가하거나,
 - Dalai를 통해, 호스팅되는 로컬에서 실행되는 Alpaca/Llama 모델을 쿼리할 수 있습니다.

(1) 컴퓨터에 Chainforge를 설치하려면, Python 3.8 이상이 있는지 확인한 후, 다음을 실행하세요.

```bash
pip install chainforge
```

(2) 일단 설치하면, 아래의 명령으로 HTTP-API 서버를 구동시킵니다.

```bash
chainforge serve
```

(3) [Google Chrome/ Firefox/Microsoft Edge/Brave] 브라우저에서, [localhost:8000](http://localhost:8000/) 주소를 엽니다.

오른쪽 상단에 있는 설정 아이콘을 클릭하여, API 키를 설정할 수 있습니다.<br/>
ChainForge를 열 때마다, 이에 대해 걱정하지 않으려면, [OpenAI/Anthropic/Google PaLM] API 키를 로컬 환경에 저장하는 것이 좋습니다.<br/>
자세한 내용은 [설치 방법](https://chainforge.ai/docs/getting_started/)을 참조하세요.<br/>


# 지원되는 제공업체

- OpenAI
- Anthropic
- Google (Gemini, PaLM2)
- HuggingFace (추론과 엔드포인트)
- [Ollama](https://github.com/jmorganca/ollama) (로컬 호스팅 모델)
- Microsoft Azure OpenAI 엔드포인트
- [AlephAlpha](https://app.aleph-alpha.com/)
- ...그리고, [사용자정의 제공자 스크립트](https://chainforge.ai/docs/custom_providers/)를 통한 다른 공급자!


# 예시 실험

Chainforge로 가능한 작업에 대한 이해를 돕기 위해 몇 가지 예제 흐름을 준비했습니다.<br/>
오른쪽 상단에 있는 "흐름 예시" 버튼을 클릭하고 하나를 선택하세요.<br/>
다음은 프롬프트 매개변수 `{game}`에 대한, 다양한 모델과 인수에 걸쳐, 응답 길이를 표시하는 기본적인 비교 예제입니다.
<img width="1593" alt="basic-compare" src="./images/chainforge-example-01.png">

테이블 형식 데이터 노드를 사용하여, **정답 평가**를 수행할 수도 있습니다.<br/>
예를 들어, 각 응답을 예상 답변과 비교하여, 수학 문제에 답하는 각 LLM의 능력을 비교할 수 있습니다.
<img width="1775" alt="Screen Shot 2023-07-04 at 9 21 50 AM" src="./images/chainforge-example-02.png">


# 모델 및 프롬프트 전반에 걸쳐 응답 비교

형식이 지정된 테이블과 내보낼 수 있는 데이터를 포함한 대화형 응답 검사기를 사용하여, 모델과 프롬프트 변수를 비교합니다.
<img width="1460" alt="Screen Shot 2023-07-19 at 5 03 55 PM" src="./images/chainforge-example-03.png">

여기는 [프롬프트 템플릿들을 비교하기 시작하는 튜토리얼](https://chainforge.ai/docs/compare_prompts/)입니다.


# 다른 사람들과 공유

ChainForge의 웹 버전(https://chainforge.ai/play/)에는 공유 버튼이 포함되어 있습니다.

공유를 클릭하면, 흐름에 대한 고유 링크를 생성하고, 클립보드에 복사할 수 있습니다.

![ezgif-2-a4d8048bba](./images/chainforge-share.gif)

예를 들어, LLM이 비밀 키를 공개하도록, 시도하는 실험은 다음과 같습니다. https://chainforge.ai/play/?f=28puvwc788bog

> **참고**<br/>
> 남용을 방지하기 위해, 한 번에 최대 10개의 흐름만 공유할 수 있으며, 각 흐름은 압축 후 5MB 미만이어야 합니다.<br/>
> 10개가 넘는 흐름을 공유하면, 가장 오래된 링크가 끊어지므로, 항상 중요한 흐름을 `cforge`파일로 내보내고,
> 공유를 사용하여 일시적으로만 데이터를 전달하세요.

특정 노드의 기능에 대한, 자세한 내용은 [노드 목록](https://chainforge.ai/docs/nodes/)을 확인하세요.


# 기능

ChainForge의 주요 목표는 프롬프트와 모델의 **비교** 및 **​​평가**를 촉진하는 것입니다.<br/>
기본 기능은 다음과 같습니다:
 - **프롬프트 순열** : 프롬프트 템플릿을 설정하고 입력 변수의 변형을 제공합니다.<br/>
    ChainForge는 입력 프롬프트의 가능한 모든 순열을 사용하여 선택한 모든 LLM에 프롬프트를 표시하므로 프롬프트 품질을 더 잘 이해할 수 있습니다.<br/>
    임의의 깊이로 프롬프트 템플릿을 연결할 수도 있습니다(예: 템플릿 비교).
 - **채팅 전환** : 프롬프트와 마찬가지로 프롬프트 및 후속 채팅 메시지 템플릿을 뛰어넘습니다.<br/>
    사용자 쿼리의 표현이 LLM의 출력을 어떻게 바꿀 수 있는지 테스트하거나 여러 채팅 모델(또는 설정이 다른 동일한 채팅 모델)에서 이후 응답의 품질을 비교할 수 있습니다.
 - **모델 설정** : 지원되는 모델의 설정을 변경하고 설정을 비교해 보세요.<br/>
    예를 들어, 여러 ChatGPT 모델을 추가하고, 개별 설정을 변경하고, 각 모델에 별명을 지정하여 시스템 메시지가 ChatGPT에 미치는 영향을 측정할 수 있습니다.<br/>
    ChainForge는 모델의 각 버전에 쿼리를 보냅니다.
 - **평가 노드** : 체인의 LLM 응답을 조사하고 원하는 동작에 대해 (전통적으로) 테스트합니다.<br/>
    기본 수준에서 이는 Python 스크립트 기반입니다.<br/>
    가까운 시일 내에 일반적인 사용 사례(예: 이름 엔터티 인식)를 위해 미리 설정된 평가자 노드를 추가할 계획입니다.<br/>
    또한 LLM 응답을 프롬프트 템플릿에 연결하여 보다 광범위한 평가 방법을 사용하기 전에 출력을 저렴하게 평가할 수도 있습니다.
 - **시각화 노드** : 그룹화된 상자 수염(숫자 측정항목의 경우) 및 히스토그램(부울 측정항목의 경우)과 같은 플롯에서 평가 결과를 시각화합니다.<br/>
    현재는 숫자 및 부울 측정항목만 지원됩니다.<br/>
    우리는 앞으로 사용자에게 플롯에 대한 더 많은 제어권과 옵션을 제공하는 것을 목표로 합니다.

이러한 기능을 종합하면 다음을 쉽게 수행할 수 있습니다.
 - **프롬프트 및 프롬프트 매개변수 비교** : 평가 목표 지표(예: 가장 낮은 코드 오류율)를 최대화하는 최상의 프롬프트 세트를 선택합니다.
    또는 프롬프트 템플릿의 매개변수 변경이 응답 품질에 어떤 영향을 미치는지 확인하세요.
 - **모델 간 비교** : 모델 및 다양한 모델 설정 간 모든 프롬프트에 대한 응답을 비교합니다.

또한, 일부 사용자는 단순히 ChainForge를 사용하여, LLM에 대한 수많은 매개변수화된 쿼리(예: 프롬프트 템플릿을 프롬프트 템플릿으로 연결)를 만들고, 점수를 매긴 다음,<br/>
결과를 스프레드시트(Excel `xlsx`)로 출력하기를 원한다는 사실을 발견했습니다.<br/>
이렇게 하려면, Inspect 노드를 Prompt 노드의 출력에 연결하고, `Export Data`를 클릭합니다.

자세한 내용은 [설명서](https://chainforge.ai/docs/nodes/)를 참조하세요 .

------------------

# 개발

ChainForge는 Harvard HCI 커뮤니티의 지원을 받아, Harvard HCI의 [Glassman Lab](http://glassmanlab.seas.harvard.edu/)에서, 박사후 연구원인 [Ian Arawjo](http://ianarawjo.com/index.html)가 만들었습니다.<br/>
공동 작업자들:<br/>
박사 과정 학생<br/>
 - [Priyan Vaithilingam](https://priyan.info)
 - [Chelse Swoopes](https://seas.harvard.edu/person/chelse-swoopes)

Harvard 학부생<br/>
 - [Sean Yang](https://shawsean.com)

교수진<br/>
 - [Elena Glassman](http://glassmanlab.seas.harvard.edu/glassman.html)
 - [Martin Wattenberg](https://www.bewitched.com/about.html)

이 작업은 NSF 보조금 IIS-2107391, IIS-2040880 및 IIS-1955699에서 부분적으로 자금을 지원 받았습니다.<br/>
이 자료에 표현된 모든 의견, 조사 결과, 결론 또는 권장 사항은 저자의 것이며, 국립 과학 재단의 견해를 반드시, 반영하는 것은 아닙니다.

우리는 다른 사람들이 자신의 프로젝트에, 이 도구를 유용하게 사용할 수 있기를 바라며, 이 도구를 지속적으로 릴리스하고 있습니다.

## 영감과 링크

ChainForge는 범용으로 제작되었으며, 특정 API 또는 LLM 백엔드용으로 개발되지 않았습니다.<br/>
우리의 궁극적인 목표는 LLM의 체계적인 평가 및 감사를 위해, 다른 도구에 통합하는 것입니다.<br/>
우리는 LLM에서 신속한 분석 흐름을 개발하거나, LLM 결과를 감사하는 다른 사람들에게, 도움이 되기를 바랍니다.<br/>
이 프로젝트는 우리의 사용 사례에서 영감을 얻었지만, [Sherry Wu](https://www.cs.cmu.edu/~sherryw/)가 이끄는 두 가지 관련(비공개 소스) 연구 프로젝트와 일부 동지애를 공유합니다.
 - "PromptChainer: 시각적 프로그래밍을 통해, 대규모 언어 모델 프롬프트 연결" (Wu et al., CHI ’22 LBW) [Video](https://www.youtube.com/watch?v=p6MA8q19uo0)
 - "AI Chains    : 대규모 언어 모델 프롬프트를 연결하여, 투명하고 제어 가능한 인간-AI ​​상호 작용" (Wu et al., CHI ’22)

이러한 프로젝트와 달리, 우리는 [프롬프트/프롬프트 매개변수/모델] 전반에 걸쳐 평가를 지원하는 데 중점을 두고 있습니다.

## 협업하려면 어떻게?

우리는 오픈소스 협력자를 환영합니다.<br/>
버그를 보고하거나 기능을 요청하려면 [이슈](https://github.com/ianarawjo/ChainForge/issues)를 열어주세요.<br/>
또한, 사용자가 요청한 [기능/버그] 수정을 구현하고, 끌어오기요청(Pull Request)을 제출하도록 권장합니다.

------------------
# 우리를 인용할 경우

연구 목적으로 ChainForge를 사용하거나, 소스 코드를 기반으로 구축하는 경우, 관련 출판물 안에 우리의 [arXiv 사전 인쇄](https://arxiv.org/abs/2309.09128)를 인용하시기 바랍니다.<br/>
사용할 수 있는 BibTeX는 다음과 같습니다.

```bibtex
@misc{arawjo2023chainforge,
  title={ChainForge: A Visual Toolkit for Prompt Engineering and LLM Hypothesis Testing}, 
  author={Ian Arawjo and Chelse Swoopes and Priyan Vaithilingam and Martin Wattenberg and Elena Glassman},
  year={2023},
  eprint={2309.09128},
  archivePrefix={arXiv},
  primaryClass={cs.HC}
}
```


# 라이센스

ChainForge는 MIT 라이센스에 따라 출시됩니다.
