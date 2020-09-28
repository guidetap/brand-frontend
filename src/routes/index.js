import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import LandingPage from '../pages/Landing';
import PricePlanPage from '../components/PricePlan';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/pricing-plans" component={PricePlanPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
