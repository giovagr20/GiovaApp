import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import profile from "../../../assets/img/GiovanniImg.jpg";

export const QuienSoy = () => {
  return (
    <>
      <div className="clearfix text-center pt-3 mt-3">
        <h2>
          {" "}
          <code>
            {" "}
            <strong className="text-uppercase">Quien Soy?</strong>{" "}
          </code>
        </h2>
      </div>
      <hr />
      <div className="clearfix">
        <img
          src={profile}
          className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 rounded"
          alt="GiovaApp"
        />

        <div className="text-center fst-italic">
          <code>
            <h3>Hola!, Soy Giovanni Gomez Restrepo</h3>
          </code>
        </div>

        <div>
          <cite>
            <small>
              Soy desarrollador de software, un apasionado por el mundo
              tecnologia, <br />
              Mis habilidades: (HTML/CSS) Javascript, NodeJS, MySQL, Angular 6+,
              JAVA, .Net Core. <br /> <br />
              Habilidad de llevarme bien con mis co-workers, he contribuido
              activamente como desarrollador en al menos 4 proyectos ya en
              estado productivo.
            </small>
          </cite>
        </div>
        <br />
        <div>
          <strong>Información básica:</strong>
          <ul>
            <ol>
              <strong>Estudios:</strong> Ingenieria de Sistemas
            </ol>
            <ol>
              <strong>País:</strong> Colombia
            </ol>
            <ol>
              <strong>Ciudad:</strong> Medellin
            </ol>
            <ol>
              <strong>Celular:</strong> (+57) 314 739 2212
            </ol>
            <ol>
              <strong>E-mail:</strong> giovannyg32@gmail.com
            </ol>
          </ul>
        </div>
        <br />
        <div>
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
                className="rounded-circle btn btn-outline-primary"
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
                href="https://wa.me/573147392212?text=Hi,%20I'm%20interested%20in%20your%20services%20as%20developer"
                className="rounded-circle btn btn-outline-success"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>

            <div className="col-2 col-sm-2">
              <a
                target="blank"
                href="https://www.instagram.com/giovanny.gomez.r/"
                className="rounded-circle btn btn-outline-secondary"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            <div className="col-2 col-sm-2">
              <a
                target="blank"
                href="https://media1.giphy.com/media/hryis7A55UXZNCUTNA/200w.gif?cid=6c09b952dg05sgw8tojhlwj9wq6y7kj8le8sppdpcxq3q30f&rid=200w.gif&ct=g"
                className="rounded-circle btn btn-outline-dark"
              >
                <i className="bi bi-patch-question-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
