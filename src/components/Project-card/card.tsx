import React from "react";

interface IProjectCard {
  title: string;
  content: string;
  img: string;
  visitLink: string;
}
export const ProjectCard: React.FC<IProjectCard> = ({
  content,
  img,
  title,
  visitLink,
}) => {
  const [visible, toggleVisible] = React.useState<boolean>(false);
  return (
    <div className="col-10 offset-1 col-md-6 offset-md-0 py-2">
      <div className="project-card p-1 w-100 rounded">
        <span className="h5 fw-lighter">{title}</span>
        <hr className="m-0 mt-1 mb-1" />
        <div className="project-content mb-1">
          <div className={`${visible ? "backdrop" : null} d-md-none`}></div>
          <div className="project-image">
            <img src={img} alt="Got Note?" />
          </div>
          <div
            className={`project-text p-2 p-md-0 ${visible ? "visible" : null}`}
          >
            <p>{content}</p>
            <button
              className="btn btn-primary text-light d-md-none"
              onClick={() => toggleVisible(!visible)}
            >
              Close
            </button>
          </div>
        </div>
        <div className="project-footer d-flex align-items-baseline ">
          <a href={visitLink} className="btn btn-primary">
            Visit
          </a>
          <button
            className="btn btn-link text-light"
            onClick={() => toggleVisible(!visible)}
          >
            {visible ? "Close" : "Show Info"}
          </button>
        </div>
      </div>
    </div>
  );
};
