import React from "react";
import madewith from "../assets/images/made-with.png";
export const BannerIntro = () => {
  return (
    <div id="banner-intro">
      <div className="intro-banner">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-md-10 col-xl-7">
              <div className="intro-banner-wrap">
                <div className="intro-banner-desc  text-center">
                  <span className="overline-title">INTRODUCING</span>
                  <h1 className="title">
                    DashLite - React
                    <span className="version">v1.5.0</span>
                  </h1>
                  <p className="text-light">
                    A powerful admin dashboard template built with React library
                    that is especially build for developers and programmers.
                  </p>
                </div>
                <div className="button-group text-center btn-style">
                  <button type="button" className="btn btn-primary ">
                    Get DashLite React
                  </button>
                  <button type="button" className="btn btn-danger ">
                    Check Out Demo
                  </button>
                </div>
                <div className="intro-made text-center">
                  <img src={madewith} alt="" className="img-made" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
