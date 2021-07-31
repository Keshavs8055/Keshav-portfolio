import { SiFiverr, SiGmail, SiLinkedin } from "react-icons/si";

interface IContact {
  fromHome?: boolean;
}

export const ContactCard: React.FC<IContact> = ({ fromHome }) => {
  const home = fromHome ? fromHome : false;
  return (
    <div
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
        <div className="col p-0 me-auto">
          <a
            href="https://www.linkedin.com/in/keshav-sharma-1482b7189/"
            className="col-contact my-md-1 py-md-2"
          >
            <SiLinkedin color="#ddd" size={30} />
            <span className="mx-2">Linked-in</span>
          </a>
        </div>
        <div className="col p-0 my-1">
          <a
            href="mailto:keshavs8055@gmail.com"
            className="col-contact my-md-1 py-md-2"
          >
            <SiGmail color="#ddd" size={30} />
            <span className="mx-2">Mail</span>
          </a>
        </div>
        <div className="col p-0 my-1">
          <a
            href="https://www.fiverr.com/keshavs8055"
            className="col-contact my-md-1 py-md-2"
          >
            <SiFiverr color="#ddd" size={30} />
            <span className="mx-2">Fiverr</span>
          </a>
        </div>
      </div>
    </div>
  );
};
