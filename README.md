<h1>BBooing Term Project</h1>
<h2>Introduction</h2>


* 프로젝트 진행 기간 : 4월 11일 ~ 4월 22일
* 프로젝트 주제 : 커머스 웹사이트 클론 코딩하기 
* 클론 코딩한 웹사이트 : 탈잉 https://taling.me/
* 구성 : Front-end 4명(구본희, 김정수, 김효정, 임재혁) Back-end 2명(류미류, 이강호)


<h2>Demo</h2>

![다중필터](https://user-images.githubusercontent.com/90507720/164960426-2560f9c1-da25-4a5b-8999-cfd90e8b2bd0.gif)


![IMG_1253](https://user-images.githubusercontent.com/90507720/164960399-29d11671-2b7c-46a5-87e9-32f4d86332c2.jpg)

![상세페이지](https://user-images.githubusercontent.com/90507720/164960411-311e1206-3585-43a0-869c-9ca2b72c30fe.gif)


![리뷰](https://user-images.githubusercontent.com/90507720/164960414-e033959a-d3a9-421f-ade2-5b629cf8a003.gif)
![검색](https://user-images.githubusercontent.com/90507720/164960417-7355de31-7175-4d78-b305-f4c2f6ae91a1.gif)
![vod](https://user-images.githubusercontent.com/90507720/164960447-d3ebcaef-a017-4969-b352-a5a89ffcf30c.gif)

<h2>Technologies</h2>

* 공통 : Git, github, git rebase 
* Front-End : ReactJS, Styled-Component
* Back-End : Python, Django web

<h2>구현 기능</h2>

#### 1. 소셜 로그인 / 회원가입 (카카오톡) 

- SDK방식으로 카카오 API활용한 소셜 로그인 구현
- 로그인시 카카오 토큰/ 사용자 정보(프로필사진/닉네임) localStorage에 저장


#### 2. nav 바 검색기능 구현
- navigate, query string, useLocation().search 활용 

#### 3. 메인 페이지 

- 리액트 슬릭 라이브러리를 
활용한 슬라이더 구현

- 찜 기능 구현
(fetch - post 활용)


#### 4. 강좌 리스트 페이지 

- 쿼리 파라미터를 활용한 기능 구현 
    - 다중필터
    - 페이지네이션

- custom hook 활용 - useOutSideClick (필터 카테고리 바깥 dom을 클릭을 감지해주는 커스텀 훅) - 바깥 dom 클릭시 해당 필터 체크리스트가 보이지 않게끔 한다. 

#### 5. 위시리스트(찜)

- 좋아요 버튼 클릭시 데이터베이스로 해당 위시리스트 상품 전송. 페이지를 새로고침 했을 때도 좋아요 버튼 클릭 상태 유지
- custom hook 활용 - useWishList (위시리스트 목록을 받아와 해당 값을 return하는 커스텀 훅)  - 자주 쓰이는 함수 커스텀 훅으로 만들기
- 위시리스트 페이지에서는 데이터베이스로 전송했던 상품 목록들을 받아볼 수 있다. (fetch - get 활용)

#### 5. 리뷰

- 상품 상세 페이지 내 해당 상품에 대한 리뷰 컴포넌트 구현
- formData.append를 활용하여 이미지 업로드 기능 구현 
- 리뷰 작성 및 삭제 기능 (fetch - post, delete)

#### 6. VOD main 
- video 태그를 이용한 슬라이더와 프로필이미지 슬라이더 두개를 react-slick 라이브러리 asNavFor API 를 활용하여 연결된 하나의 슬라이더 구현






<h2>Reference</h2>

* 이 프로젝트는 탈잉 사이트를 참조하여 학습목적으로 만들었습니다.
* 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 


