# Riv-Frontend 🖥️

Riv-Bot을 자신의 서버에 추가할 수 있고 회의록을 관리할 수 있는 RIV 관리자 페이지입니다.


![GitHub Repo stars](https://img.shields.io/github/stars/OpenRiv/riv-frontend?style=social)
![GitHub issues](https://img.shields.io/github/issues/OpenRiv/riv-frontend)
![GitHub license](https://img.shields.io/github/license/OpenRiv/riv-frontend)

Riv-Frontend는 React 기반의 웹 클라이언트 프로젝트입니다. 이 봇은 음성 채널에서의 대화를 녹음하고, 녹음된 내용을 자동으로 텍스트로 변환한 후, 중요한 내용을 요약하여 제공합니다. 이를 통해 회의의 효율성을 높이고, 회의 후 정리 시간을 절약할 수 있습니다.

## 주요 기능 ✨

- **![Discord](https://img.icons8.com/color/48/000000/discord--v2.png) 디스코드 Oauth2 로그인**
  - Discord Oauth2 로그인 시스템을 통해 온보딩을 구현하고, accessToken을 활용해 사용자의 프로필, 서버 정보 등을 활용할 수 있습니다.
  
- **📝 서버 조회 및 Bot 추가**
  - 초대 권한이 있는 서버 목록을 조회하고, Discord 봇이 있는지 유무를 파악합니다. 또한 봇이 없는 서버에 봇을 초대할 수 있습니다.
  
- **📊 회의록 조회, 수정, 삭제**
  -  Discord 봇으로부터 등록된 회의록에 대한 조회, 수정, 삭제 기능을 제공합니다.
    
- **💬 디스코드 기반 UI**
  - 디스코드 디자인 UI를 제공하여 사용자에게 친숙하고 편리한 경험을 제공합니다.
   
# Riv-Bot Manual 📖

## 목차
1. [설치 가이드](#1-설치-가이드)
2. [개발 환경 설정](#2-개발-환경-설정)
3. [봇 설정 가이드](#3-봇-설정-가이드)
4. [사용자 가이드](#4-사용자-가이드)
5. [개발자 가이드](#5-개발자-가이드)
6. [문제 해결](#6-문제-해결)
7. [기여 가이드](#7-기여-가이드)

## 1. 설치 가이드

### 시스템 요구사항
- React 18
- 디스크 여유 공간: 최소 800MB
- RAM: 최소 512MB
- 안정적인 인터넷 연결

### 설치 단계
1. **리포지토리 클론**
   ```bash
   git clone https://github.com/OpenRiv/riv-frontend.git
   cd riv-frontend
   ```

2. **가상환경 생성**
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\activate
   # Linux/Mac
   source venv/bin/activate
   ```

3. **의존성 설치**
   ```bash
   yarn install
   ```

## 2. 개발 환경 설정

### 환경 변수 설정
1. `.env` 파일 생성:
   ```env
   DISCORD_BOT_TOKEN=your_token_here
   OPENAI_API_KEY=your_api_key_here
   ```

2. 로깅 설정:
   ```python
   # logging level 조정
   level=logging.DEBUG  # 개발 시
   level=logging.INFO   # 프로덕션 시
   ```

### IDE 설정 (VS Code 기준)
```json
{
    "python.linting.enabled": true,
    "python.linting.pylintEnabled": true,
    "python.formatting.provider": "black",
    "editor.formatOnSave": true
}
```

## 3. 봇 설정 가이드

### Discord Developer Portal 설정
1. [Discord Developer Portal](https://discord.com/developers/applications) 접속
2. "New Application" 클릭
3. Bot 섹션에서:
   - Privileged Gateway Intents 모두 활성화
   - TOKEN 생성 및 복사
4. OAuth2 URL 생성:
   - `bot` scope 선택
   - 필요한 권한 선택:
     - Send Messages
     - Read Message History
     - Connect
     - Speak
     - Use Voice Activity

### 봇 권한 설정
```python
intents = discord.Intents.default()
intents.message_content = True
intents.voice_states = True
intents.guilds = True
intents.members = True
```

## 4. 사용자 가이드

### 기본 명령어
1. **회의 시작**
   ```
   !회의
   ```
   - 음성 채널 접속 필요
   - 카테고리 선택 또는 직접 입력

2. **회의 종료**
   - UI 버튼 클릭
   - 회의록 자동 생성

### 회의록 형식 커스터마이징
`process_recording` 함수의 `markdown_content` 템플릿 수정:
```python
markdown_content = f"""
# 커스텀 제목
## 커스텀 섹션
{custom_content}
"""
```

## 5. 개발자 가이드

### 코드 구조
```
riv-bot/
├── bot/
│   ├── __init__.py
│   └── commands/
├── utils/
│   ├── audio.py
│   └── logger.py
├── services/
│   ├── transcription.py
│   └── summary.py
└── main.py
```

### 주요 클래스 및 함수
1. **CustomSink**
   - 음성 데이터 캡처
   - 타임스탬프 관리
   - 사용자별 데이터 관리

2. **AudioProcessor**
   ```python
   async def process_recording(sink, channel, meeting_title, members, start_time, end_time):
       # 오디오 처리 로직
   ```

3. **발화자 매칭 시스템**
   ```python
   def match_speaker(segment_start, segment_end, speaking_times, threshold=1.0):
       # 발화자 매칭 로직
   ```

## 6. 문제 해결

### 일반적인 문제
1. **봇 응답 없음**
   - 인텐트 설정 확인
   - 토큰 유효성 확인
   - 로그 파일 확인

2. **음성 인식 실패**
   ```python
   # 디버깅을 위한 로그 추가
   logger.debug(f"Audio data size: {len(merged_audio)}")
   logger.debug(f"API response: {response}")
   ```

3. **메모리 문제**
   - 오디오 데이터 청크 크기 조정
   - 불필요한 데이터 정리

### 로그 분석
```python
# 로그 파일 위치: bot.log
# 로그 레벨별 확인
DEBUG: 상세 디버깅 정보
INFO: 일반 정보
ERROR: 오류 정보
```

## 7. 기여 가이드

### 코드 스타일
- PEP 8 준수
- Docstring 필수
- Type Hints 사용
```python
def function_name(param: str) -> bool:
    """
    Function description.
    Args:
        param: Parameter description
    Returns:
        Return value description
    """
```

### Pull Request 프로세스
1. Fork 저장소
2. Feature 브랜치 생성
3. 코드 작성 및 테스트
4. PR 생성
5. 코드 리뷰 진행

### 테스트
```bash
# 테스트 실행
python -m pytest tests/
# 커버리지 리포트
pytest --cov=.
```

---

이 메뉴얼은 지속적으로 업데이트됩니다. 개선사항이나 제안사항이 있다면 Issue를 생성해주세요.
