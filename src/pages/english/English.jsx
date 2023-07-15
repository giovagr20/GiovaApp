import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Idiom } from "../../utils/utils.language";
import { WhoAmI } from "../../components/whoami/WhoAmI";
import { Skills } from "../../components/skills/Skill";
import { Services } from "../../components/services/Service";
import { Projects } from "../../components/projects/Project";

export const English = () => {
  return (
    <>
    <div className="mt-3 pt-3" />
    <div className="mt-3 pt-3" />
      <div className="container">
        {" "}
        <WhoAmI idiom = {Idiom.english}/>
        <Skills idiom = {Idiom.english}/>
        <Services idiom = {Idiom.english}/>
        <Projects idiom = {Idiom.english}/>
      </div>
    </>
  );
};
