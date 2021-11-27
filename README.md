# E-Commerce Shopping Cart with react-query

## Demo Page

[데모 페이지 보러가기](https://practical-mahavira-8d94d5.netlify.app/)

## File Structure / Architecture Used

```bash
src
 ┣ api  //api 호출 로직
 ┃ ┣ categoryAPI.ts
 ┃ ┗ productAPI.ts
 ┣ components
 ┃ ┣ atoms //stateless 컴포넌트
 ┃ ┃ ┣ DefaultBadge.tsx
 ┃ ┃ ┣ DefaultButton.tsx
 ┃ ┃ ┣ DefaultSlect.tsx
 ┃ ┃ ┣ DefaultSpinner.tsx
 ┃ ┃ ┣ PrimaryButton.tsx
 ┃ ┃ ┣ SecondaryButton.tsx
 ┃ ┃ ┗ SoldOutBadge.tsx
 ┃ ┣ molecules
 ┃ ┃ ┣ AddToCart.tsx
 ┃ ┃ ┗ Warning.tsx
 ┃ ┣ organisms - 로직이 추가되는 컴포넌트들
 ┃ ┃ ┣ Card.tsx
 ┃ ┃ ┣ Cart.tsx
 ┃ ┃ ┣ Categories.tsx
 ┃ ┃ ┣ Navbar.tsx
 ┃ ┃ ┣ OptionForms.tsx
 ┃ ┃ ┗ SearchInput.tsx
 ┃ ┣ templates
 ┃ ┃ ┣ ProductLists.tsx
 ┃ ┃ ┗ SearchResult.tsx
 ┃ ┗ Layout.tsx // 어플리케이션 전체 레이아웃
 ┣ context // 장바구니 context api
 ┃ ┣ CartContext.tsx
 ┃ ┗ Reducers.tsx
 ┣ hooks
 ┃ ┣ useCartDispatch.tsx
 ┃ ┗ useCartState.tsx
 ┣ layout
 ┃ ┣ Header.tsx
 ┃ ┗ List.tsx
 ┣ pages
 ┃ ┣ HomePage.tsx
 ┃ ┣ NotFoundPage.tsx // 미구현
 ┃ ┗ ProductDetailPage.tsx
 ┣ types
 ┃ ┣ Category.ts
 ┃ ┗ PreviewProduct.ts
 ┣ utils
 ┃ ┣ common.ts
 ┃ ┗ formatProductPrice.ts
 ┣ App.test.tsx
 ┣ App.tsx
 ┣ defaultConfig.ts
 ┣ index.css
 ┣ index.tsx
```

### 폴더구조는 기본적으로 Atomic Design 시스템 구조와 관심사의 분리를 목적으로한 구조.

#### atoms/ molecules

stateless 컴포넌트로 props를 전달만 받는 컴포넌트들입니다.

#### organisms/templates

atoms 또는 molecules의 컴포넌트를 매핑하여 비즈니스로직을 구현 합니다.

#### pages

react-dom-router를 사용하여 상품 디테일 페이지와 홈페이지 (프로덕트 페이지)를 구분합니다.

#### utils

자주 쓰는 함수들의 모음

#### defaultConfig

전역적으로 자주쓰이는 설정들의 모음
예) baseUrl

#### hook /context

부수효과의 분리를 위해 custom hook을 그룹핑하고 context provider설정과 reducer 또한 분리합니다.

#### api

data fetch로직을 관리합니다.

## Functionalities

### 필수 기능

- [x] 상품 리스트 카테고리 별로 렌더링
      <input type="checkbox" disabled checked />
      상세: 상품을 클릭할 시, 상품 상세 페이지로 이동

- [x] 장바구니: 사용자가 원하는 상품을 장바구니에 추가할 수 있어야 합니다 - 진행중

- [x] 검색: 상품 리스트 내에서 검색을 할 수 있어야 합니다(단, 정렬 순서는 가장 검색 결과와 비슷한 상품 순서대로 노출합니다).

### Page Routing

- [x] Home Page -> /product 로 리디렉션

- [x] 프로덕트 디테일 페이지 동적 라우팅 추가

### Components 구현 및 로직

- [x] 재사용 가능한 list component

- [x] react-query 상품 디테일, 카테고리, preview fetch hook

- [x] 상품 리스트 페이지네이션 UI 및 로직 구현

#### 제품 상세 페이지

- [x] 상세페이지 query hook 과 연동

- [x] 제품 디테일 정보 html string에서 JSX convert

- [x] 상세페이지 UI구현

- [ ] UI 분리 리팩토링 필요

- [ ] react-query hook 관심사 분리, 부수효과 분리 리팩토링 필요

#### 장바구니

- [x] 장바구니 context api

- [x] 장바구니 custom hook

- [x] 장바구니 버튼 wire to context api

- [x] localStroage 연동

- [x] 장바구니 UI 컴포넌트

- [ ] 장바구니 아이템 개수 조절 버튼 및 로직

- [x] 장바구니 아이템 삭제

#### 검색

- [x] UI 컴포넌트
- [x] 검색 기능
- [ ] 검색 결과시 sort 기능

## Tech Stack/ Packages

- React Query : 도메인의 특성상 상품의 stock 여부상태 등 서버상태를 계속 fresh하게 유지해야 하고 fetching 처리와 그에 따른 캐시 처리를 로컬하게 관리할 수 있다는 가장 큰 이점으로 사용하게 되었습니다.
- emotion: 이 프로젝트에서 사용빈도수가 낮지만 원래의 의도는 chakra-ui를 사용하면서 컴포넌트 레벨로 추상화 하기 위한 의도 였습니다.
- chakra-ui : 최근에 알게된 ui 컴포넌트. @chakra-ui/react 66.5 KB로 material-ui core 5.97 MB 보다 가벼우며, material ui보다 props 사용이 직관적이며 로직처리가 쉽습니다. 오히려 직접 ui를 개발하는 디벨로퍼들에게 ui구현 부분의 자율성을 줍니다.
- Typescript: 정적 코드 분석과 품질을 위해 사용.
- React Router Dom: spa 페이지 간의 이동을 위해 사용하였습니다.

## Challenge 설명 및 고민한 로직

### ✔️ 구현할 서비스의 특성을 고려한 툴 고르기.

많은 사람들이 페이지를 방문하여 상품을 산다면 사용자 입장에서는 모르는 순간에 업데이트 될 수 있고, 만료된 데이터는 가능한 빨리 업데이트하기 위해서 swr과 react-query를 고려하였습니다.

#### react-query를 선택한 이유

- swr이 코드가 더 간결해 보였지만, 간결한 만큼 내부적으로 어떻게 작동되는지 알기가 힘들고, 디벨로퍼가 그만큼 제어하기가 조금 힘들지 않을 까 생각 했습니다.
- react-query시 패턴이 contextAPI패턴과 유사하였으며, 페이지네이션 또한 지원되며, 최적화 캐시 만료 기간을 데이터 특성에 따라 정할 수 있습니다. 문서화가 잘 되어 있어 구현을 빨리 할 수 있습니다.

### ✔️ 장바구니 상태 관리

장바구니 데이터는 전역적으로 모든 페이지에 유효하므로 redux라는 툴 보다는 조금 더 다루기가 쉬운 context API를 이용하여 전역으로 상태를 관리 하였으며, 로컬 스토리를 이용하여 데이터를 유지합니다. hook을 사용하면서 class 컴포넌트를 사용할 때보다 이점인 useContext 훅으로 원하는 곳에 간단하게 context로부터의 데이터를 불러 오고, dispatch를 통해 업데이트 할 수 있습니다.

#### ✔️ 장바구니 추가 버튼 비지니스 로직 처리 고민:

- 사용자에게 버튼을 항시 클릭하여 클릭한 수만큼 같은 아이템이라면 수량 추가, 다른 아이템이라면 장바구니에 아이템 추가

#### ✔️ 장바구니 버튼 disable 상태 로직

- soldout 상품에 대한 disabled button

  <img width="594" alt="React App 2021-11-26 13-36-02" src="https://user-images.githubusercontent.com/26635607/143532444-611448cd-27b0-4b3f-989b-0b6f594d4fa1.png">

#### ✔️ 옵션 선택을 하지 않은 경우 유효성 검사로 alert 띄우기

<img width="632" alt="cart_error" src="https://user-images.githubusercontent.com/26635607/143532413-6cc0edb0-7817-46b1-a7a8-80d54d4cbec1.png">

#### 장바구니 아이콘 총 수량 개수 로직

`uuid`로 unique 아이템으로 처리  
같은 prefix상품 일 지라도 사이즈 및 색상 옵션이 다르다면 다른 상품으로 간주하여 개수로 처리.
<img width="745" alt="different_item" src="https://user-images.githubusercontent.com/26635607/143532495-bd29d94b-461f-40c7-84ac-98f03f65f1c8.png">

#### 디테일 페이지를 제외한 상품 리스트 페이지에서 장바구니 추가 기능을 구현할 것인가?

장바구니내의 아이템 로직에서 옵션이 있는 상품은 옵션을 정해야 하므로 리스트에서 장바구니 추가 기능 제외 하였습니다.

#### ✔️ 장바구니 추가시 리듀서를 사용한 로직 구현

카테고리/상품들 마다 옵션들의 이름과 개수가 다르기 때문에 각 옵션마다 상태처리를 해주는게 아닌 json에서 options 의 length만큼 재사용가능한 공통된 drop down 컴포넌트를 만들고 reducer를 사용하여 각 option마다 새정보로 덮어쓰지 않고 기존의 상태와 한데 모을 수 있도록 한다.

---

## 과제를 진행하면서 가장 자랑스러웠던 부분

react-query를 처음 사용하게 되면서 서버와의 api 및 캐시 처리를 로컬파일에서 구현 할 수 있게 되었습니다. 사용자는 원하는 카테고리 페이지들을 방문하기를 반복하면서 캐시된 데이터로 최적화된 지연으로 빠르게 데이터를 얻을 수 있습니다. 검색 기능에서 또한 자동 완성 리스트를 구현 할 수 있었습니다.

## 과제를 진행하면서 가장 아쉬웠던/어려웠던/개선할 부분

- 처음 사용한 툴( react-query) 인 만큼 구현은 했지만 그에 따른 리팩토링과 최적화 방안을 살펴봐야 할 것 같습니다.

- strict한 타입 체크를 위해 더 많은 타입 지정과 리팩토링을 잘 못한 부분과 상품 디테일 페이지에서 좀 더 컴포넌트를 custom hook을 이용한 분리 등 리팩토링 개선이 필요합니다.

- 컴포넌트를 추상화하여 재사용성과 확장성에 기반을 둔 컴포넌트들 인지에 대해 고민이 필요합니다.

- 주어진 api 가 백엔드와의 검색 쿼리 로직이 아닌, 프론트에서 구현을 해야하는 상황에서 각 카테고리마다 각 페이지에 대한 정보를 모두 불러오는 처리에 대한 고민.

  - 고려한점 1. react-window 를 사용하여 가상화된 리스트로 10000개가 넘는 데이터를 불러올시 기본 fetch보다는 최적화.

  - 고려한점 2. react-query의 pararell queries 를 이용.

  구현 방법 react-query의 parallel query이용.

  사용자가 카테고리 버튼 클릭시, 카테고리에 따른 모든 페이지를 병렬로 처리한 데이터로 search query term

  - 이점: 사용자는 자동완성 리스트로 검색 결과를 볼 수 있으며 서버로부터의 alive데이터로 검색이 가능하다.
  - 단점: 아직 react-qury 내부적 원리를 정확히 숙지하지 못하여 매 character가 타이핑시 react-query를 호출하는 접근법이 최적화된 방법인지 모른다.

- 검색기능 우선순위 두기
  이 부분에 대해서 아직 로직을 정립하지 못했습니다. 현재는 포함된 character에 한해서 보여주고 있습니다.

- 테스트 스크립트 작성으로 테스트 개선이 필요합니다.

- CI/CD 구현 필요

## 참고 자료와 주소

[react-query 공식문서](https://react-query.tanstack.com/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
