# E-Commerce Shopping Cart with react-query

## Demo Page

## File Structure / Architecture Used

## Functionalities

### 필수 기능

<input type="checkbox" disabled checked /> 상품 리스트 카테고리 별로 렌더링
<input type="checkbox" disabled checked />
상세: 상품을 클릭할 시, 상품 상세 페이지로 이동

<input type="checkbox" disabled /> 장바구니: 사용자가 원하는 상품을 장바구니에 추가할 수 있어야 합니다 - 진행중

<input type="checkbox" disabled  /> 검색: 상품 리스트 내에서 검색을 할 수 있어야 합니다(단, 정렬 순서는 가장 검색 결과와 비슷한 상품 순서대로 노출합니다).

### Page Routing

<input type="checkbox" disabled checked /> Home Page -> /product 로 리디렉션

<input type="checkbox" disabled checked /> 프로덕트 디테일 페이지 동적 라우팅 추가

### Components 구현 및 로직

<input type="checkbox" disabled checked /> 재사용 가능한 list component

<input type="checkbox" disabled checked /> react-query 상품 디테일, 카테고리, preview fetch hook

#### 제품 상세 페이지

<input type="checkbox" disabled checked /> 상세페이지 query hook 과 연동

<input type="checkbox" disabled checked /> 제품 디테일 정보 html string에서 JSX convert

<input type="checkbox" disabled checked /> 상세페이지 UI구현

<input type="checkbox" disabled  /> UI 분리 리팩토링 필요

<input type="checkbox" disabled  /> react-query hook 관심사 분리, 부수효과 분리 리팩토링 필요

#### 장바구니

<input type="checkbox" disabled checked /> 장바구니 context api

<input type="checkbox" disabled checked /> 장바구니 custom hook

<input type="checkbox" disabled checked /> 장바구니 버튼 wire to context api

<input type="checkbox" disabled checked /> localStroage 연동

<input type="checkbox" disabled /> 장바구니 UI 컴포넌트

#### 검색

## Tech Stack/ Packages

- React Query :
- emotion
- chakra-ui :
- Typescript:
- React Router Dom:

## 본인이 수행한 Challenge에 대한 설명

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
