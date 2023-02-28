import React from "react";
import image1 from "../assets/images/demo-buysell.jpg";
import listItem from "../assets/data/dataconceptual";
import { ConceptItem } from "./ConceptItem";
export const Conceptual = () => {
  return (
    <div className="conceptual">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10  text-center">
            <div className="conceptual-wrap">
              <p className="conceptual-wrap-overline">
                CONCEPTUAL DASHBOARD TEMPLATE
              </p>
              <h1 className="conceptual-wrap-title">Use-Case Concept</h1>
            </div>
          </div>
        </div>
        <div className="conceptlistitem">
          <div className="row d-flex justify-content-center">
            {listItem.map((item, index) => {
              return <ConceptItem key={index} item={item} index={index} />;
            })}
            {/* <div className="col-md-6 col-lg-4">
            <div className="conceptual-item">
              <a href="" className="conceptual-item-img">
                <img src={image1} alt="" />
              </a>
              <a className="conceptual-item-desc">
                <p className="conceptual-item-desc-subtitle">Layout - demo 5</p>
                <h4 className="conceptual-item-desc-title">
                  Crypto Buy Sell Panel
                  <span>New</span>
                </h4>
              </a>
              <p className="conceptual-item-screen">14 screens</p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
