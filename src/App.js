import React from 'react'
import {Footer, Blog, Possibility, Feature, WhatGPT3, Header, Features} from "./containers";
import { CTA, Brand, Navbar } from './components';

const app = () => {
  return (
    <div>
        <div className='App'>
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
    </div>
  )
}

export default app