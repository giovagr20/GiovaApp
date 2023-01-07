import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import frontend from "../../../assets/img/frontend.png";
import backend from "../../../assets/img/backend.png";
import fullstack from "../../../assets/img/fullstack.png";
import Swal from "sweetalert2";

export const Servicios = () => {
  const contactMe = () => {
    Swal.fire({
      icon: "info",
      title: `Contactame!`,
      html: `<strong> Maneras: </strong> <br /> <br />
      <em> Mail: </em> <a href="mailto: giovannyg32@gmail.com">Mail me!</a> <br/>
      <em> Whatsapp: </em> <a href="https://wa.me/573147392212?text=Hi,%20I'm%20interested%20in%20your%20services%20as%20developer">Whatsapp me!</a> <br/>
      `,
      showConfirmButton: true,
    });
  };

  return (
    <>
      <hr />
      <div className="clearfix text-center">
        <h2>
          {" "}
          <code>
            {" "}
            <strong className="text-uppercase">Servicios</strong>{" "}
          </code>
        </h2>
      </div>
      <div className="clearfix">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={frontend} className="card-img-top img-fluid" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Servicios frontend</h5>
                <p className="card-text text-center">
                  Front-end is todo lo involucrado con lo que el usuario ve,
                  incluido el diseño y algunos lenguajes de programacion y
                  etiquetas tales como HTML, CSS y Javascript. Hay diferentes
                  trabajos asociados con frontend. Tener en cuenta que los
                  cargos son subjetivos, puede que se interprete diferente
                  basado en la compañia que te contrata.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={backend} className="card-img-top img-fluid" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Servicios backend</h5>
                <p className="card-text text-center">
                  Backend es basicamente todo lo involucrado con el lado del
                  servidor lo que el usuario no ve. Esto involucra las base de
                  datos, la lógica de negocio, servidores y lenguajes tales como
                  java, .net o más. El desarrollador backend se enfoca y
                  preocupa más por la seguridad, estructura y el control de la
                  aplicación."
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={fullstack} className="card-img-top img-fluid" alt="" />
              <div className="card-body">
                <h5 className="card-title text-center">Servicios fullstack</h5>
                <p className="card-text text-center">
                  Fullstack refiere a conocimientos entre backend y frontend,
                  este indica que puede trabajar en "ambos lados". Es capaz de
                  desarrollar contenido web y del lado del cliente, como del
                  lado del servidor. El fullstack developer involucra en un
                  "todo" la aplicacion desde la seguridad hacia el etiquetado,
                  con conocimientos en arquitecturas de software.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h3 className="lead text-center">
            <strong>
              <code> Estás interesado? </code>
            </strong>
          </h3>
          <h3 className="text-center">
            <a className="btn btn-primary" onClick={() => contactMe()}>
              <code> Contactame </code>
            </a>
          </h3>
        </div>
      </div>
      <hr />
    </>
  );
};
