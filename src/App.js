import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = lazy(() => import('./pages/NewQuote'));
const AllQuotes = lazy(() => import('./pages/AllQuotes'));
const NotFound = lazy(() => import('./pages/NotFound'));
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));

lazy()
function App() {
  return (
    <Layout >
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact><AllQuotes></AllQuotes></Route>
          <Route path='/quotes/:quotesId'><QuoteDetail></QuoteDetail></Route>
          <Route path='/new-quote'><NewQuote></NewQuote></Route>
          <Route path='*'><NotFound /></Route>/
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
