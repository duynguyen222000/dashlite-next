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
          </div>
        </div>
      </div>
    </div>
  );
};
