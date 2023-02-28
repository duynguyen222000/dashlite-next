import React from "react";
import avt from "../assets/images/avt.jpg";
import avt2 from "../assets/images/avt2.jpg";
export const StoryBehind = () => {
  return (
    <div className="storybehind">
      <div className="container">
        <div className="storybehind-content">
          <div className="storybehind-content-wrap">
            <p className="overline">STORY BEHIND</p>
            <h2 className="title">Story of Making DashLite</h2>
          </div>
          <div className="storybehind-content-desc">
            <p className="subtitle">
              In marketplace, most of dashboard are generic. On other hand
              developers and programmers faced lots problem to build their
              application because those generic dashboard does not provide
              real-use-case pages. To solve the problem, Softnio Team make a
              vision.
            </p>
            <p className="subtitle">
              In marketplace, most of dashboard are generic. On other hand
              developers and programmers faced lots problem to build their
              application because those generic dashboard does not provide
              real-use-case pages. To solve the problem, Softnio Team make a
              vision.
            </p>
            <div className="author">
              <p className="author-title">DESIGN AND DEVELOPED BY</p>
              <div className="author-list">
                <div className="item">
                  <div className="avatar">
                    <img src={avt} alt="" />
                  </div>
                  <div className="author-desc">
                    <p className="name">Abu Bin Ishityak</p>
                    <p className="job">ROLE AS DESIGNER</p>
                  </div>
                </div>
                <div className="item">
                  <div className="avatar">
                    <img src={avt2} alt="" />
                  </div>
                  <div className="author-desc">
                    <p className="name">Abu Bin Ishityak</p>
                    <p className="job">ROLE AS DESIGNER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
