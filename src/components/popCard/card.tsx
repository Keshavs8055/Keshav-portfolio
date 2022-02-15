import POP_1 from "../../imgs/Project Thumb/POP-1.png";
import POP_2 from "../../imgs/Project Thumb/POP-2.png";
export const PopThoughtCard = () => {
  return (
    <div className="col-12 py-2">
      <div className="bg-light project-card p-2 w-100 rounded shadow">
        <h5 className="h5 py-2 d-block d-md-none ">Pop Thoughts</h5>

        <div className="row py-2 align-items-center">
          <div className="col-12 col-md-5">
            <div className="d-none d-md-block row justify-content-center">
              <img src={POP_1} alt="" className="my-1 col-12 " />
              <img src={POP_2} alt="" className="my-1 col-12" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <h5 className="h5 py-2 d-none d-md-block">Pop Thoughts</h5>
            <img src={POP_1} alt="" className="my-1 d-md-none rounded" />
            <p className="h5 fw-light py-1">
              A{" "}
              <span className="primary fw-bolder">
                social media application
              </span>{" "}
              built with{" "}
              <span className="primary fw-bolder"> react and firebase</span>.
              This web-app allows users to post thoughts or ideas that simply
              pops into their minds.
              <br /> You can sign up with your{" "}
              <span className="primary fw-bolder">
                {" "}
                email or google account{" "}
              </span>
              and start posting. The user can also view their posted thoughts
              and update them from their profile menu.{" "}
            </p>

            <p className="h5 fw-light">
              Each thought posted can be seen by everyone. The funcationality or
              reacting to a certain post is not yet available but will be
              provided.
            </p>
            <img src={POP_2} alt="" className="my-1 d-md-none rounded" />

            <p className="h5 fw-light py-1">
              This site uses{" "}
              <span className="primary fw-bolder">React with Material-UI </span>{" "}
              for an enhanced user experience. The Redux library is used to
              handle the state throughout the application. Each thought posted
              is stored on the firestore from where it can be easily accessed.
            </p>
            <div className="project-footer pb-2 d-flex align-items-center align-items-md-baseline">
              <a
                href="https://pop-thoughts.vercel.app/"
                className="btn btn-primary"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
