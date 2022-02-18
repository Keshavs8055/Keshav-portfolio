import React from "react";
import { ProjectCard } from "../Project-card/card";
// IMGS
import POP_IMG from "../../imgs/Project Thumb/POP-1.png";
import GotNote from "../../imgs/Project Thumb/Got-Note.png";
import STP from "../../imgs/Project Thumb/STP.png";
import DICT from "../../imgs/Project Thumb/DICT.png";
import ScrollAnimation from "react-animate-on-scroll";

interface IProject {
  projectRef: React.RefObject<HTMLDivElement>;
}
export const ProjectContent: React.FC<IProject> = ({ projectRef }) => {
  return (
    <div
      ref={projectRef}
      className="section p-3 projects-section container-full text-dark"
    >
      <ScrollAnimation
        initiallyVisible
        animateIn="animate__tada"
        scrollableParentSelector=".main-container"
      >
        <h1 className="fw-lighter text-center pb-2 text-light">Projects</h1>
      </ScrollAnimation>
      <div className="row row-cols-2 project-row py-1 justify-content-evenly">
        <ProjectCard
          visitLink="https://pop-thoughts.vercel.app/"
          content=" A social media application
          built with
          react and firebase.
          You can sign up with your
            email or google account
          and start posting. The user can also view their posted thoughts
          and update them from their profile menu.
        
          This site uses
          React with Material-UI
          for an enhanced user experience. The Redux library is used to
          handle the state throughout the application. Each thought posted
          is stored on the firestore from where it can be easily accessed.
        "
          img={POP_IMG}
          title="Pop Thoughts"
        />
        <ProjectCard
          visitLink="https://notes-app-six-psi.vercel.app/"
          content="A simple note taking application which allows users to signIn with their google account. The app offers the functionality to add, delete notes which are then stored in firebase. The web app uses React, Redux and Material-Ui"
          img={GotNote}
          title="Got Note?"
        />
        <ProjectCard
          visitLink="https://dictionary-sand.vercel.app/"
          content="It's exactly what it sounds, a dictionary. You can search for words and it will provide multiple defnitions for the words. Go ahead use it and search for discombobulated."
          img={DICT}
          title="Dictionary"
        />
        <ProjectCard
          visitLink="https://stone-paper-scissor-tau.vercel.app/"
          content="Who hasn't played stone paper scissor with their siblings or friends. Well this time try playing with a bot. Let's see if you can win....well of course you can win. Maybe....(Not a great UI)"
          img={STP}
          title="Stone, Paper and Scissor"
        />
      </div>
    </div>
  );
};
