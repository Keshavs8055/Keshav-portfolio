import React, { RefObject } from "react";
import { ContactCard } from "./contact/contact";
import { Content } from "./content";
import { Header } from "./header";

export const ReactLandingPage = () => {
  // STATE
  const [active, setActive] = React.useState<0 | 1 | 2>(0);

  const projectRef = React.createRef<HTMLDivElement>();
  const skillRef = React.createRef<HTMLDivElement>();
  const homeRef = React.createRef<HTMLDivElement>();
  const contentRef = React.createRef<HTMLDivElement>();
  const titleRef = React.createRef<HTMLDivElement>();
  const imgRef = React.createRef<HTMLDivElement>();

  // ACTIVE STATE HANDLE
  const handleActiveState = () => {
    if (!contentRef.current || !skillRef.current || !homeRef.current) return;
    contentRef.current.addEventListener("scroll", () => {
      if (
        !projectRef.current ||
        !contentRef.current ||
        !skillRef.current ||
        !homeRef.current
      )
        return;
      if (contentRef.current.scrollTop < homeRef.current.offsetHeight) {
        setActive(0);
        return;
      }

      if (
        contentRef.current.scrollTop > homeRef.current.offsetHeight / 2 &&
        contentRef.current.scrollTop < projectRef.current.clientHeight + 50
      ) {
        setActive(1);
        return;
      }
      if (
        contentRef.current.scrollTop >
        projectRef.current.clientHeight / 2 + homeRef.current.clientHeight - 50
      ) {
        setActive(2);
        return;
      }
    });
  };

  React.useEffect(() => {
    const mainElem = contentRef.current;
    const imgElem = imgRef.current;
    const titleElem = titleRef.current;
    if (!mainElem || !imgElem || !titleElem) return;
    // ON SCROLL ANIMATION
    mainElem.addEventListener("wheel", (e) => {
      if (!homeRef || !homeRef.current) return;

      let position = homeRef.current.getBoundingClientRect();
      if (position.height > window.innerHeight || active > 0) return;
      if (e.deltaY > 0) {
        e.preventDefault();
        let toRef;
        if (active === 0) toRef = projectRef;
        if (!toRef || !toRef.current) return;
        handleSmoothScroll(toRef);
      }
    });

    mainElem.addEventListener("scroll", (e) => {
      titleElem.style.transform = `translateY(-${mainElem.scrollTop * 0.2}px)`;
      imgElem.style.transform = `translateY(-${mainElem.scrollTop * 0.8}px)`;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgRef, contentRef, titleRef, active, homeRef, projectRef, skillRef]);

  const handleSmoothScroll = (
    ref: RefObject<HTMLDivElement>,
    speed = 1,
    acceleration = 1.1,
    speedLimit = 100
  ) => {
    const target = ref.current;
    const mainElem = contentRef.current;
    const imgElem = imgRef.current;
    if (!target || !mainElem || !imgElem) return;

    function scroll() {
      if (!target || !mainElem) return;

      let currentScroll = window.pageYOffset;
      let targetPos = target.getBoundingClientRect().top + currentScroll;
      let distanceToTarget = targetPos - currentScroll;
      if (distanceToTarget < -1) {
        mainElem.scrollBy(0, -speed);
        let speedToLimitSpeed = speedLimit - speed;
        let acceleratedSpeed = speed * acceleration;

        if (speedToLimitSpeed - speed > acceleratedSpeed) speed *= acceleration;
        else speed = speedLimit;

        if (distanceToTarget === 0) return;
        requestAnimationFrame(scroll);
        return;
      }
      if (distanceToTarget < speed) {
        mainElem.scrollBy(0, distanceToTarget);
      } else {
        mainElem.scrollBy(0, speed);
        let speedToLimitSpeed = speedLimit - speed;
        let acceleratedSpeed = speed * acceleration;

        if (speedToLimitSpeed - speed > acceleratedSpeed) speed *= acceleration;
        else speed = speedLimit;

        if (distanceToTarget === 0) return;
        requestAnimationFrame(scroll);
      }
    }
    scroll();
  };

  return (
    <div className="conatiner-fluid p-0">
      <div className="row m-0 p-0">
        <Header
          Refs={{
            projectRef: projectRef,
            skillRef: skillRef,
            homeRef: homeRef,
            contentRef: contentRef,
          }}
          scrollHandler={handleSmoothScroll}
          active={active}
          handleActiveState={handleActiveState}
        />
        <Content
          Refs={{
            projectRef: projectRef,
            skillRef: skillRef,
            homeRef: homeRef,
            contentRef: contentRef,
            imgRef,
            titleRef,
          }}
          scrollHandler={handleSmoothScroll}
        />
      </div>
      <ContactCard fromHome />
    </div>
  );
};
