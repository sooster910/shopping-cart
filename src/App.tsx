import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Layout from "./components/Layout";
import CartContext from "./context/CartContext";

const queryClient = new QueryClient();
const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContext>
        <Router>
          <Layout>
            <Route exact={true} path="/" component={HomePage} />
            <Route
              exact={true}
              path="/product/:id"
              component={ProductDetailPage}
            />
            <Route exact={true} path="/product/" component={HomePage} />
          </Layout>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </CartContext>
    </QueryClientProvider>
  );
};

export default App;
