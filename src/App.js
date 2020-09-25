import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import LogoClouds from './components/LogoClouds';
import FeatureSections from './components/FeatureSections';
import PricePlan from './components/PricePlan';
import Footer from './components/Footer';

import logo from './logo.png';

function App() {
  return (
    <>
      <Header />
      <Home />
      <FeatureSections />
      <LogoClouds />
      <PricePlan />
      <Footer />
    </>
  );
}

export default App;
