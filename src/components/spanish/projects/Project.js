import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import fdpa from "../../../assets/img/FDPA.png";
import nequi from "../../../assets/img/Nequi.png";
import portfolio from "../../../assets/img/Portfolio.png";
import { Link } from "react-router-dom";

export const Proyectos = () => {
  return (
    <>
      <hr />
      <div className="clearfix text-center">
        <h2>
          {" "}
          <code>
            {" "}
            <strong className="text-uppercase">Proyectos</strong>{" "}
          </code>
        </h2>
      </div>
      <div className="clearfix mb-3">
        <p className="lead text-center">
          Aquí algunos proyectos en los que he participado!
        </p>
        <div className="row">
          <div className="col text-center">
            <p className="h5"> <em> FDPA </em>  </p>
            <p className="lead"> Fundacion página web </p>
            <a href="https://www.fundaciondpa.com/" target="_blank">
              <img className="img-fluid" src={fdpa} />
            </a>
          </div>

          <div className="col text-center">
            <p className="h5"> <em> Nequi </em>  </p>
            <p className="lead"> Nequi billetera </p>
            <a href="https://www.nequi.com.co/" target="_blank">
              <img className="img-fluid" src={nequi} />
            </a>
          </div>

          <div className="col text-center">
            <p className="h5"> <em> Mi portafolio </em>  </p>
            <p className="lead"> Portafolio acerca de mi </p>
            <Link to="/" target="_blank">
              <img className="img-fluid" src={portfolio} />
            </Link>
          </div>

        </div>
      </div>
      <br />

      <hr />
    </>
  );
};
