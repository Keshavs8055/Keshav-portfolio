import React, { RefObject } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ContactCard } from "./contact/contact";
interface IHeaderProps {
  Refs: {
    projectRef: RefObject<HTMLDivElement>;
    skillRef: RefObject<HTMLDivElement>;
    homeRef: RefObject<HTMLDivElement>;
    contentRef: RefObject<HTMLDivElement>;
  };
  scrollHandler: (ref: RefObject<HTMLDivElement>) => void;
  handleActiveState: () => void;
  active: 0 | 1 | 2;
}

export const Header: React.FC<IHeaderProps> = ({
  Refs,
  scrollHandler,
  handleActiveState,
  active,
}) => {
  const { projectRef, skillRef, homeRef } = Refs;

  React.useEffect(() => {
    handleActiveState();
  });

  return (
    <nav className="col col-12 col-md-3 col-xl-2 p-0 d-none d-sm-none d-md-block d-lg-block">
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
        <div className="container-fluid p-0 w-100 mw-100">
          <div
            className={`${
              active > 0 ? "header-bg" : null
            } section header-section`}
          >
            <p className="p-2 m-0 text-light">Passionate Developer</p>
            <ul className="list-group my-0">
              <li
                className={`${
                  active === 0 ? " active active-home" : null
                } py-3 px-2`}
                onClick={() => {
                  scrollHandler(homeRef);
                }}
              >
                Home
              </li>
              <li
                className={`${
                  active === 1 ? " active active-projects" : null
                } py-3 px-2`}
                onClick={() => {
                  scrollHandler(projectRef);
                }}
              >
                Projects
              </li>
              <li
                className={`${
                  active === 2 ? " active active-skills" : null
                } py-3 px-2`}
                onClick={() => {
                  scrollHandler(skillRef);
                }}
              >
                Skills
              </li>
            </ul>
            <ContactCard />
          </div>
        </div>
      </ScrollAnimation>
    </nav>
  );
};
