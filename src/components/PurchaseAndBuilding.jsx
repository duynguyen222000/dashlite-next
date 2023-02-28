import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
export const PurchaseAndBuilding = () => {
  return (
    <div className="purchaseandbuilding">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-19 col-lg-7">
            <div className="purchase-wrap">
              <p className="overline">GET DASHLITE REACT TODAY</p>
              <h2 className="title">
                Purchase Today <span>&</span> Start Building <br />
                Apps <span>with</span> DashLite React Today
              </h2>
              <p className="subtitle">
                Purchase and get access to the DashLite React version today and
                starting your next application. <br />
                Do not forgot to check out our roadmap to see what's coming
                next.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-center">
          <div className="col-md-10 col-lg-9">
            <div className="purchaseandbuilding-box">
              <div className="row d-flex align-items-center">
                <div className="col-md-7">
                  <div className="react-version">
                    <h3 className="title">React Version</h3>
                    <ul className="list-item">
                      <li>8 Dashboard Layouts</li>
                      <li>45+ Pre Built Screens</li>
                      <li>60+ Hand-made SVG Icon</li>
                      <li>900+ Custom Font Icon</li>
                      <li>6 Month Free Premium Support </li>
                      <li className="highlight">
                        + All future update releases for Free
                      </li>
                    </ul>
                    <button className="btn btn-primary">
                      Purchase Now for $28
                    </button>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="request-feature">
                    <h3 className="title">Request Feature</h3>
                    <p className="desc">
                      Missing anything or need more features to complete your
                      project? Or you have something specific in your mind?
                      We’re happy for any new ideas or features.
                    </p>
                    <button className="btn btn-success">
                      Let Us Know <IoIosArrowRoundForward />
                    </button>
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
