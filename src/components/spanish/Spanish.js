import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { QuienSoy } from "./whoami/WhoAmI";
import { Servicios } from "./services/Service";
import { Proyectos } from "./projects/Project";
import { Habilidades } from "./skills/Skill";

export const Spanish = () => {
  return (
    <>
      <div className="mt-3 pt-3" />
      <div className="mt-3 pt-3" />
      <div className="container">
        <QuienSoy />
        <Habilidades />
        <Servicios />
        <Proyectos />
      </div>
    </>
  );
};
