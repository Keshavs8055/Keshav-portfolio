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
  // const [visible, toggleVisible] = React.useState<boolean>(false);
  return (
    <div className="col-12 col-md-4 py-2">
      <div className="bg-light project-card p-2 w-100 rounded shadow">
        <h5 className="h5 py-2">{title}</h5>
        <div className="project-content mb-1">
          <div className="project-image">
            <img src={img} alt="Got Note?" className="rounded" />
          </div>
          <div className="project-text py-2">
            <h5 className="h5 fw-light">{content}</h5>
          </div>
        </div>
        <div className="project-footer pb-2 d-flex align-items-center align-items-md-baseline">
          <a href={visitLink} className="btn btn-sm btn-primary">
            Visit
          </a>
          {/* <button
            className="btn text-dark pointer d-none d-md-block"
            onClick={() => toggleVisible(!visible)}
          >
            {visible ? "Close" : "Show Info"}
          </button> */}
        </div>
      </div>
    </div>
  );
};
