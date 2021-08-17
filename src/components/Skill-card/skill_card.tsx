import React from "react";

interface ISkillCard {
  title: string;
  Icon: React.ReactNode;
}
export const SkillCard: React.FC<ISkillCard> = ({ Icon, title }) => {
  return (
    <div className="col col-md-3 my-1 my-md-0">
      <div className="skill-card p-3 text-center d-md-flex align-items-end justify-content-around">
        <div className="skill-title">
          <h5 className="fw-bold">{title}</h5>
        </div>
        <div className="skill-icon">{Icon}</div>
      </div>
    </div>
  );
};
