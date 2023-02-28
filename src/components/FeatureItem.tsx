import React from "react";
interface FeatureItemProps {
  item: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  };
  index: number;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ item, index }) => {
  return (
    <div className="col-md-6 col-lg-4 " key={index}>
      <div className="feature-element">
        <div className="feature-item">
          <div className="feature-item-icon">{item.icon}</div>
          <div className="feature-item-desc">
            <h5 className="feature-item-desc-title">{item.title}</h5>
            <p className="feature-item-desc-subtitle">{item.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
