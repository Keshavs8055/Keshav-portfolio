import React from "react";
import { HomeContent } from "./slides/home";
import { ProjectContent } from "./slides/project";
import { SkillsSection } from "./slides/skills";

interface IContentProps {
  Refs: {
    projectRef: React.RefObject<HTMLDivElement>;
    skillRef: React.RefObject<HTMLDivElement>;
    homeRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    titleRef: React.RefObject<HTMLDivElement>;
    imgRef: React.RefObject<HTMLDivElement>;
  };
  scrollHandler: (ref: React.RefObject<HTMLDivElement>) => void;
}

export const Content: React.FC<IContentProps> = ({ Refs, scrollHandler }) => {
  const { projectRef, homeRef, skillRef, contentRef, imgRef, titleRef } = Refs;
  return (
    <div className="col col-12 col-md-9 col-xl-10 p-0">
      <div className="main-container p-0 m-0" ref={contentRef}>
        <HomeContent
          refs={{
            imgRef,
            titleRef,
          }}
          selfRef={homeRef}
          projectRef={projectRef}
          scrollHandler={scrollHandler}
        />
        {/* PROJECTS SECTION */}
        <ProjectContent projectRef={projectRef} />
        {/* SKILLS SECTION */}
        <SkillsSection skillRef={skillRef} />
      </div>
    </div>
  );
};
