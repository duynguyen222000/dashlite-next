import React from "react";
import dashboardlayout1 from "../assets/images/dashboarlayout1.jpg";
import listItem from "../assets/data/datadashboard";
import { DashboardItem } from "./DashboardItem";
export const AdminDashboard = () => {
  return (
    <div className="admindashboard">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8">
            <div className="intro-section-wrap">
              <div className="intro-section-desc text-center">
                <span className="overline-title">ADMIN TEMPALTE LAYOUT</span>
                <h1 className="title">Multipurpose Admin Dashboard</h1>
                <p className="text-light">
                  DashLite - React template includes various layouts that fits
                  into any application. Several other features such as routing,
                  dark mode and the usage of context api makes the application
                  powerful.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="admindashboard-mr">
          <div className="row">
            {listItem.map((item, index) => {
              return <DashboardItem key={index} item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
