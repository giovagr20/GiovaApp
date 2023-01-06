import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import profile from "../../assets/img/GiovanniImg.jpg";

export const English = () => {
  return (
    <div className="container mt-4">
      <div className="clearfix text-center">
        <h2>
          {" "}
          <code>
            {" "}
            <strong>WHO AM I?</strong>{" "}
          </code>
        </h2>
      </div>
      <hr />
      <div className="clearfix">
        <img
          src={profile}
          className="img-fluid col-md-6 float-md-end mb-3 ms-md-3"
          alt="GiovaApp"
        />

        <p className="text-center fst-italic">
          <code>
            <h3>Hi, I'm Giovanni Gomez Restrepo</h3>
          </code>
        </p>

        <p>
          <cite>
            <small>
              I'm a Software Developer, a passionated about techknowledge,{" "}
              <br />
              My skills: (HTML/CSS) Javascript, NodeJS, MySQL, Angular 6+, JAVA,
              .Net Core. <br /> <br />
              Strong to get along, i've contribuited actively as a developer at
              leat in 4 projects in production currently.
            </small>
          </cite>
        </p>

        <p>
          <p>
            <strong>Basic information:</strong>
          </p>
          <p>
            <ul>
              <ol>
                <strong>Major:</strong> System Engineer
              </ol>
              <ol>
                <strong>Country:</strong> Colombia
              </ol>
              <ol>
                <strong>City:</strong> Medellin
              </ol>
              <ol>
                <strong>Phone:</strong> (+57) 314 739 2212
              </ol>
              <ol>
                <strong>Email:</strong> giovannyg32@gmail.com
              </ol>
            </ul>
          </p>
        </p>

        <p>
          <div className="row">
            <div className="col-2 col-sm-2">
              <a
                target="blank"
                href="https://www.linkedin.com/in/giovanni-g%C3%B3mez-restrepo-485513ab/"
                className="rounded-circle btn btn-outline-primary"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            <div className="col-2 col-sm-2">
              <a
                target="blank"
                href="https://www.facebook.com/Giovanny.Gomez.R"
                class="rounded-circle btn btn-outline-primary"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>

            <div className="col-2 col-sm-2">
              <a
                target="blank"
                href="https://github.com/giovagr20"
                className="rounded-circle btn btn-outline-dark"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>

            <div className="col-2 col-sm-2">
              <a
                target="blank"
                href="https://wa.me/573147392212?text=Hi,%20I'm%20interested%20in%20your%services%as%20developer"
                className="rounded-circle btn btn-outline-success"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};
