import React from "react";

export const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div className="intro-section-wrap">
              <div className="intro-section-desc text-center">
                <span className="overline-title">REACT DASHLITE OVERVIEW</span>
                <h1 className="title">
                  Conceptual Apps <span className="break">&</span> Premium Theme
                </h1>
                <p className="text-light">
                  An overview of <strong> React DashLite</strong> – is fully
                  clean and premium designed admin template which included
                  beautiful hand-crafted components & elements. React DashLite
                  completely focusing on
                  <strong>conceptual base apps or dashboard</strong> , as it’s
                  equipped with pre-built screens as well.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-7 flex-interview">
            <div className="interview-number interview-number-list">
              <div className="interview-number-item highlight">
                <span className="number highlight">5+</span>
                <span className="item highlight">
                  USE-CASE APP <br /> CONCEPT
                </span>
              </div>
              <div className="interview-number-item">
                <span className="number purple">7+</span>
                <span className="item purple">
                  DASHBOARD <br /> LAYOUT
                </span>
              </div>
              <div className="interview-number-item">
                <span className="number ">45+</span>
                <span className="item">
                  PRE-BUILT <br /> SCREENS
                </span>
              </div>
              <div className="interview-number-item">
                <span className="number ">25+</span>
                <span className="item">
                  EYE-CATCHING <br /> COMPONENTS
                </span>
              </div>
              <div className="interview-number-item">
                <span className="number ">60+</span>
                <span className="item">
                  HANDMADE <br /> SVG ICON
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="button-group text-center btn-style">
          <button type="button" className="btn btn-success ">
            Use-Case Concept
          </button>
          <button type="button" className="btn btn-primary ">
            View Layout Demo
          </button>
        </div>
      </div>
    </div>
  );
};
