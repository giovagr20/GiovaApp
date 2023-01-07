import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { WhoAmI } from "./whoami/WhoAmI";
import { Skills } from "./skills/Skill";

export const English = () => {
  return (
    <>
    <div className="mt-3 pt-3" />
    <div className="mt-3 pt-3" />
      <div className="container">
        {" "}
        <WhoAmI />
        <Skills />
      </div>
    </>
  );
};
