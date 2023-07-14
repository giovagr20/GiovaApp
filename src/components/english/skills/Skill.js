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
import { Languages } from "../../utils/utils.language";
import { useEffect, useState } from "react";

export const Skills = () => {
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
      title: `With ${type}`,
      html: `${summarize(type)}`,
      showConfirmButton: true,
    });
  };

  let summarize = (detail) => {
    switch (detail) {
      case "React":
        return `Around 2 years of experience, tools: Redux, Router and Build in CI/CD, using Clean Architecure`;
      case "NetCore":
        return `Around 2 years of experience, tools: Lambdas, OOP, EntityCore, Blazor, Razor, using MVC `;
      case "Java":
        return `Around 4 years of experience, tools: SpringBoot (Data, Security, Web, Lombok), Spring, Lambda, OOP, using DDD and Clean Architecture`;
      case "Angular":
        return `Around 3 years of experience, tools: components, directives, pipes, CI/CD, using Clean Architecture`;
      case "Node":
        return `Around 2 years of experience, tools: Sequelize, API Rest, CI/CD, using Clean Architecture`;
      case "API":
        return `Around 6 years, API Rest and SOAP, protocols HTTP and encrypt information, authetication and security`;
      default:
        return `You've not chosen any option`
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
            <strong className="text-uppercase">Skills</strong>{" "}
          </code>
        </h2>
        <br />
        <div className="clearfix">
          <div className="row">
            <q>
              <em>Give me where to stand, and I will move the earth.</em>{" "}
            </q>
          </div>
          <div className="row">
            <div className="col-2">
              <button
                onClick={() => setType(Languages.netcore)}
                className="btn form-control"
                id="netCore"
              >
                <img src={netcore} alt="netcore" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType(Languages.react)}
                className="btn form-control"
                id="react"
              >
                <img src={react} alt="react" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType(Languages.java)}
                className="btn form-control"
                id="java"
              >
                <img src={java} alt="java" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType(Languages.node)}
                className="btn form-control"
                id="node"
              >
                <img src={node} alt="node" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType(Languages.angular)}
                className="btn form-control"
                id="angular"
              >
                <img src={angular} alt="angular" className="img-fluid" />
              </button>
            </div>
            <div className="col-2">
              <button
                onClick={() => setType(Languages.api)}
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
