/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Beone Chain</h6>
              </div>
              <h1 className="mb-10 fw-600">EVM Blockchain</h1>
              <p>
                First Blockchain L1 EVM based From Indonesia
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/Beone/Logo/beone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2