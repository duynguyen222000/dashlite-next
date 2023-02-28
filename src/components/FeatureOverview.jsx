import React from "react";
import { FeatureItem } from "./FeatureItem";
import listItem from "../assets/data/datafeature";
export const FeatureOverview = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div className="intro-section-wrap">
              <div className="intro-section-desc text-center">
                <span className="overline-title">COMPREHENSIVE FEATURE</span>
                <h1 className="title">Features Overview</h1>
                <p className="text-light">
                  Create your web application amazing and more professional with
                  this super user-friendly react dashboard template. DashLite -
                  React comes with all essential features that always you or
                  your developers are looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-mg">
          <div className="row">
            {listItem.map((item, index) => {
              return <FeatureItem item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
