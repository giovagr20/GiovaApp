import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import netcore from "../../../assets/img/netcore.png";
import react from ".././../../assets/img/reactjs.png";
import java from "../../../assets/img/java.png";
import node from "../../../assets/img/nodejs.png";
import angular from "../../../assets/img/angular.png";
import api from "../../../assets/img/api.png";
import { useEffect, useState } from "react";

export const Habilidades = () => {
  const [type, setType] = useState("");
  useEffect(() => {
    openDetails(type);
  }, [type]);

  const openDetails = (type) => {
    if (type === undefined || type === "") {
      return;
    }
    Swal.fire({
      icon: "info",
      title: `Con ${type}`,
      html: `${summarize(type)}`,
      showConfirmButton: true,
    });
  };

  let summarize = (detail) => {
    switch (detail) {
      case "React":
        return `Alrededor 2 años de experiencia, herramientas: Redux, Router y CI/CD, usando Clean Architecure`;
      case "NetCore":
        return `Alrededor 2 años de experiencia, herramientas: Lambdas, OOP, EntityCore, Blazor, Razor, usando MVC `;
      case "Java":
        return `Alrededor 4 años de experiencia, herramientas: SpringBoot (Data, Security, Web, Lombok), Spring, Lambda, OOP, usando DDD y Clean Architecture`;
      case "Angular":
        return `Alrededor 3 años de experiencia, herramientas: componentes, directivas, pipes, CI/CD, usando Clean Architecture`;
      case "Node":
        return `Alrededor 2 años de experiencia, herramientas: Sequelize, API Rest, CI/CD, usando Clean Architecture`;
      case "API":
        return `Alrededor 6 años de experiencia, API Rest y SOAP, protocolos HTTP y encrypt informacion, autenticacion y seguridad`;
    }
  };
  return (
    <>
      <hr />
      <div className="clearfix text-center">
        <h2>
          {" "}
          <code>
            {" "}
            <strong className="text-uppercase">Habilidades</strong>{" "}
          </code>
        </h2>
        <br />
        <div className="clearfix">
          <div className="row">
            <q>
              <em>Dame un punto de apoyo, y moveré el mundo.</em>{" "}
            </q>
          </div>
          <div className="row">
            <div className="col-2">
              <button
                onClick={() => setType("NetCore")}
                className="btn form-control"
                id="netCore"
              >
                <img src={netcore} alt="netcore" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType("React")}
                className="btn form-control"
                id="react"
              >
                <img src={react} alt="react" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType("Java")}
                className="btn form-control"
                id="java"
              >
                <img src={java} alt="java" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType("Node")}
                className="btn form-control"
                id="node"
              >
                <img src={node} alt="node" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType("Angular")}
                className="btn form-control"
                id="angular"
              >
                <img src={angular} alt="angular" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType("API")}
                className="btn form-control"
                id="api"
              >
                <img src={api} alt="api" className="img-fluid" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
