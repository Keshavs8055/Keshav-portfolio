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
      <div className="project-card p-1 w-100 rounded border border-primary ">
        <span className="h5 fw-lighter d-none d-md-block">{title}</span>
        <div className="project-content mb-1">
          <div className="project-image">
            <img src={img} alt="Got Note?" className="rounded" />
          </div>
          <div className={`project-text p-md-0 ${visible ? "visible" : null}`}>
            <div className="d-md-none my-1 p-0">
              <h3 className="fw-lighter m-0 p-0">{title}</h3>
            </div>
            <p>{content}</p>
          </div>
        </div>
        <div className="project-footer d-flex align-items-center align-items-md-baseline">
          <a href={visitLink} className="btn btn-primary">
            Visit
          </a>
          <button
            className="btn text-light pointer d-none d-md-block"
            onClick={() => toggleVisible(!visible)}
          >
            {visible ? "Close" : "Show Info"}
          </button>
        </div>
      </div>
    </div>
  );
};
