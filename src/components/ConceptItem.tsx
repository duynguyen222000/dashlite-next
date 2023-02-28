import Image from "next/image";
import React from "react";
interface ConceptProps {
  item: {
    imgSrc: string;
    subtitle: string;
    title: string;
    tag?: string;
    highlight?: boolean;
    screen: string;
  };
  index: number;
}
export const ConceptItem: React.FC<ConceptProps> = ({ item, index }) => {
  return (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="conceptual-item">
        <a href="" className="conceptual-item-img">
          <Image src={item.imgSrc} alt="" width="353" height="236" />
        </a>
        <a className="conceptual-item-desc">
          <p className="conceptual-item-desc-subtitle">{item.subtitle}</p>
          <h4 className="conceptual-item-desc-title">
            {item.title}
            {item.tag && (
              <span className={`${item.highlight && "highlight"}`}>
                {item.tag}
              </span>
            )}
          </h4>
        </a>
        <p className="conceptual-item-screen">{item.screen}</p>
      </div>
    </div>
  );
};
