import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

const queryClient = new QueryClient();
const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <div>
            <Route exact={true} path="/" component={HomePage} />
            <Route
              exact={true}
              path="/product/:id"
              component={ProductDetailPage}
            />
            {/* <Route path="/*" component={NotFoundPage} /> */}
          </div>
        </Layout>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
