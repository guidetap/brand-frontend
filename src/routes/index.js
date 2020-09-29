import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import Home from 'pages/Home';
import PricePlanPage from 'components/PricePlan';
import StripeCheckout from 'pages/StripeCheckout';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={StripeCheckout} />
        <Route exact path="/pricing" component={PricePlanPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
