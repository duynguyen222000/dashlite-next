import React from "react";
import Image from "next/image";
interface DashboardProps {
  item: {
    imgSrc: string;
    bgcolor: string;
    title: string;
  };
  index: number;
}
export const DashboardItem: React.FC<DashboardProps> = ({ item, index }) => {
  return (
    <div key={index + Math.random()} className="col-md-6 col-lg-4">
      <a href="" className="admindashboard-item">
        <div className={`item-img ${item.bgcolor || " bg-blue"}`}>
          <Image src={item.imgSrc} width="290" height="193" alt="img" />
        </div>
        <div className="item-title">
          <p>{item.title}</p>
        </div>
      </a>
    </div>
  );
};
