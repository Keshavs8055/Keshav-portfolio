import React from "react";
import BG from "../../imgs/bg.png";
interface IHomeProps {
  selfRef: React.RefObject<HTMLDivElement>;
  refs: {
    titleRef: React.RefObject<HTMLDivElement>;
    imgRef: React.RefObject<HTMLDivElement>;
  };
  projectRef: React.RefObject<HTMLDivElement>;
  scrollHandler: (ref: React.RefObject<HTMLDivElement>) => void;
}
export const HomeContent: React.FC<IHomeProps> = ({
  selfRef,
  refs,
  scrollHandler,
  projectRef,
}) => {
  const { imgRef, titleRef } = refs;
  return (
    <div
      className="p-0 section content-section container-full row flex-column-reverse flex-md-row align-items-center justify-content-between "
      ref={selfRef}
    >
      <div className="col  col-md-8 offset-md-0 col-xxl-5 offset-xxl-2">
        <div
          ref={titleRef}
          className="text-center text-md-start main-title w-100 display-4 px-0"
        >
          Keshav Sharma
        </div>
        <p className="px-1 mb-2 text-center text-md-start h5 fw-lighter">
          I am a full-stack React developer. I've been coding for 3 years now
          and during this time I have worked on a lot of projects, which
          involved building different parts of a website or a whole website from
          scratch.
          <br />
          Check out my projects and skills
          <span className="primary" onClick={() => scrollHandler(projectRef)}>
            {" "}
            below.
          </span>
        </p>
      </div>
      <div
        ref={imgRef}
        className="img-container col col-md-4 offset-md-0 col-xxl-3 text-center"
      >
        <img src={BG} alt="" className="rounded" />
      </div>
    </div>
  );
};
