# E-Commerce Shopping Cart with react-query

## Demo Page

## File Structure / Architecture Used

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

#### 검색

## Tech Stack/ Packages

- React Query :
- emotion
- chakra-ui :
- Typescript:
- React Router Dom:

## 본인이 수행한 Challenge에 대한 설명

#### 카테고리 이름 로드시 정적으로 처리 vs react query사용하여 처리

정적으로 처리할 시 에는

#### 장바구니 추가 버튼 비지니스 로직 처리 고민:

case1. 사용자에게 버튼을 항시 클릭하여 클릭한 수만큼 같은 아이템이라면 수량 추가, 다른 아이템이라면
case2. 카트를 한번 추가 했을 경우 이미 추가한 아이템에 대해서만 추가 버튼을 disable 하고 수량 추가는 cart modal에서 수량 추가를 허용.
상품 옵션이 다르면 상품을 다르게 처리한다.

- 장바구니에 추가가 한정되는 상품/옵션
- soldout 상품
- option 을 선택하지 않는 상품
- 장바구니는 수량 조절 기능만 가능

#### 장바구니 아이콘 총 수량 개수 로직

`uuid`로 unique 아이템으로 처리  
같은 prefix상품 일 지라도 사이즈 및 색상 옵션이 다르다면 다른 상품으로 간주하여 개수로 처리.

#### 리스트에서 장바구니에 추가 기능

옵션을 정하지 않았으므로 리스트에서 장바구니 추가 기능 제외

#### 장바구니 컴포넌트에 보여지는 상품 로직

options가 있는 상품일 경우 : 다른 상품으로 처리 (사이즈 등)
options가 없는 상품일 경우 : 같은 상품으로 처리

#### 옵션들이 있는 상품 처리

카테고리/상품들 마나 옵션들의 개수가 다르기 때문에 각 옵션마다 상태처리를 해주는게 아닌 json에서 options 의 length만큼 재사용가능한 공통된 drop down 컴포넌트를 만들고 reducer를 사용하여 각 option마다 새정보로 덮어쓰지 않고 기존의 상태와 한데 모을 수 있도록 한다.

## 과제를 진행하면서 가장 자랑스러웠던 부분

## 과제를 진행하면서 가장 아쉬웠던/어려웠던 부분

## 참고 자료와 주소

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
