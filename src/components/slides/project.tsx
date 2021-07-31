import React from "react";
import { ProjectCard } from "../Project-card/card";
// IMGS
import GotNote from "../../imgs/Project Thumb/Got-Note.png";
import STP from "../../imgs/Project Thumb/STP.png";
import DICT from "../../imgs/Project Thumb/DIC.png";

interface IProject {
  projectRef: React.RefObject<HTMLDivElement>;
}
export const ProjectContent: React.FC<IProject> = ({ projectRef }) => {
  return (
    <div ref={projectRef} className="section projects-section container-full">
      <h1 className="fw-lighter d-md-none text-center border-bottom pb-2">
        Projects
      </h1>
      <div className="row project-row py-1">
        <ProjectCard
          visitLink="https://notes-app-six-psi.vercel.app/"
          content="This is awesome"
          img={GotNote}
          title="Got Note?"
        />
        <ProjectCard
          visitLink="https://dictionary-sand.vercel.app/"
          content=""
          img={DICT}
          title="Dictionary"
        />
        <ProjectCard
          visitLink="https://stone-paper-scissor-tau.vercel.app/"
          content=""
          img={STP}
          title="Stone, Paper and Scissor"
        />
      </div>
    </div>
  );
};
