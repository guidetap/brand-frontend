import React from 'react';

import Home from '../components/Home';
import LogoClouds from '../components/LogoClouds';
import FeatureSections from '../components/FeatureSections';
import CTASection from '../components/CTASection';

function Landing() {
  return (
    <>
      <div className="max-w-7xl7 mx-auto">
        <Home />
      </div>
      <FeatureSections />
      <CTASection />
      <LogoClouds />
    </>
  );
}

export default Landing;
