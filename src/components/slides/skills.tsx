interface ISkillsSection {
  skillRef: React.RefObject<HTMLDivElement>;
}

export const SkillsSection: React.FC<ISkillsSection> = ({ skillRef }) => {
  return (
    <div className="section skills-section container-full" ref={skillRef}>
      <h1 className="fw-lighter d-md-none text-center border-bottom pb-2">
        Skills
      </h1>
      <div className="row skills-row py-1"></div>
    </div>
  );
};
