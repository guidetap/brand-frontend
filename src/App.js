import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import LogoClouds from './components/LogoClouds';
import FeatureSections from './components/FeatureSections';
import PricePlan from './components/PricePlan';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import logo from './logo.png';

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl7 mx-auto">
        <Home />
      </div>
      <FeatureSections />
      <CTASection />
      <LogoClouds />
      <Footer />
    </>
  );
}

export default App;
