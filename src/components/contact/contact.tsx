import { SiFiverr, SiGmail, SiLinkedin } from "react-icons/si";
import { Constants } from "../../const";

interface IContact {
  fromHome?: boolean;
  passRef?: React.RefObject<HTMLDivElement>;
}

export const ContactCard: React.FC<IContact> = ({ fromHome, passRef }) => {
  const home = fromHome ? fromHome : false;
  return (
    <div
      ref={passRef}
      className={`w-100 p-2 text-left contact-container ${
        home
          ? "mobile-contact fixed-bottom d-md-none d-lg-none d-xl-none"
          : null
      }`}
    >
      {/* {home ? null : <p className="text-center">Get in touch</p>} */}
      <div
        className={`m-0 p-0 row contact-section ${
          !home ? "flex-column" : "align-items-center"
        }`}
      >
        <div className="col p-0">
          <a
            href="https://www.linkedin.com/in/keshav-sharma-1482b7189/"
            className="col-contact my-md-1 py-md-1"
          >
            <SiLinkedin color={Constants.lightColor} size={home ? 35 : 20} />
            <span className="mx-2 d-none d-md-block">Linked-in</span>
          </a>
        </div>
        <div className="col p-0">
          <a
            href="mailto:keshavs8055@gmail.com"
            className="col-contact my-md-1 py-md-1"
          >
            <SiGmail color={Constants.lightColor} size={home ? 35 : 20} />
            <span className="mx-2 d-none d-md-block">Mail</span>
          </a>
        </div>
        <div className="col p-0 ">
          <a
            href="https://www.fiverr.com/keshavs8055"
            className="col-contact my-md-1 py-md-1"
          >
            <SiFiverr color={Constants.lightColor} size={home ? 35 : 20} />
            <span className="mx-2 d-none d-md-block">Fiverr</span>
          </a>
        </div>
      </div>
    </div>
  );
};
