# 원티드 프리온보딩 코스

## 배포

Netlify : https://wanted-pre-onboarding-jiyong.netlify.app/
<br/><br/>

## 디렉토리 구조

```
.
└── src
      ├── components
      │   ├── Carousel
      │   │   ├── BannerData.js     : 배너 데이터
      │   │   ├── Carousel.js       : Carousel 컴포넌트
      │   │   └── Slide.js          : Slide 컴포넌트
      │   └── NavigationBar
      │       ├── Aside.js          : Aside 컴포넌트
      │       ├── Menu.js           : Menu 버튼 컴포넌트
      │       ├── MenuData.js       : Menu 버튼 데이터
      │       ├── NavigationBar.js  : Navigation 컴포넌트
      │       └── NavigationTop.js  : NavigationTop 컴포넌트
      ├── images : 배너 사진 폴더
      │   ├── banner01.jpeg
      │   ├── banner02.jpeg
      │   ├── banner03.jpeg
      │   ├── banner04.jpeg
      │   ├── banner05.jpeg
      │   ├── banner06.jpeg
      │   ├── banner07.jpeg
      │   ├── banner08.jpeg
      │   └── banner09.jpeg
      └── scss
          ├── Base.scss : 기본 scss
          ├── Carousel  : Carousel 컴포넌트 scss
          │   ├── Carousel.scss
          │   └── Slide.scss
          └── NavigationBar : NavigationBar 컴포넌트 scss
              ├── Aside.scss
              ├── Menu.scss
              ├── NavigationBar.scss
              └── NavigationTop.scss
```

<br/>

## 🎯 요구 사항

#### 1. **상단 GNB(Global Navigation Bar)**

- 마크업 작업(HTML, CSS)만 작업해주세요.
- 메뉴클릭, hover 등의 이벤트는 구현하지 않아도 됩니다.

#### 2. 슬라이드(또는 캐러샐이라고 불림) 영역

- 원티드 사이트와 똑같이 구현해주세요. (기능 구현 부족 시 감점)
  - 스와이프 이벤트, 왼/오 버튼 클릭 이벤트 → 카드 이동
- 슬라이드 구현을 위한 라이브러리는 사용하실 수 없습니다. (라이브러리 사용 시 감점)

#### 3. **반응형(Responsive Web) 구현**

- GNB, 슬라이드 모두 반응형(Responsive Web)을 구현해주세요. (반응형 부족할 경우 감점)

#### 4. **Github Repository 주소와 배포 링크를 제출해주세요.**

- netlify로 배포하고, Github Read.me에 배포 링크를 작성해주세요. (배포가 안 된 경우 감점)
