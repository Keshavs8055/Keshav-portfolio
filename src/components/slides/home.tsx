import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
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
      className="p-0 m-0 section content-section container-full row  align-items-center justify-content-between justify-content-xxl-around"
      ref={selfRef}
    >
      <div className=" col-12 col-md-8 col-xxl-6 py-2 py-md-0 w-md-auto">
        <ScrollAnimation animateIn="animate__flipInX" animateOnce>
          <div
            ref={titleRef}
            className="text-center text-md-start main-title w-100 display-4 px-2 px-md-0"
          >
            Keshav Sharma
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__jackInTheBox" animateOnce>
          <p className="px-3 px-md-0 mb-2 text-center text-md-start h5 fw-lighter">
            I am a full-stack React developer. I've been coding for 3 years now
            and during this time I have worked on a lot of projects, which
            involved building different parts of a website or a whole website
            from scratch.
            <br />
            Check out my projects and skills
            <span className="primary" onClick={() => scrollHandler(projectRef)}>
              {" "}
              below.
            </span>
          </p>
        </ScrollAnimation>
      </div>
      <div
        ref={imgRef}
        className="img-container m-auto text-center align-self-center col-md-4 offset-md-0 col-xxl-3"
      >
        <ScrollAnimation animateIn="animate__rollIn" animateOnce>
          <img src={BG} alt="" className="rouned w-75" />
        </ScrollAnimation>
      </div>
    </div>
  );
};
