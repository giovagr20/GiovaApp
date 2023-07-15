import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { WhoAmI } from "../../components/whoami/WhoAmI";
import { Skills } from "../../components/skills/Skill";
import { Services } from "../../components/services/Service";
import { Projects } from "../../components/projects/Project";
import { Idiom } from "../../utils/utils.language";

export const Spanish = () => {
  return (
    <>
      <div className="mt-3 pt-3" />
      <div className="mt-3 pt-3" />
      <div className="container">
        <WhoAmI idiom = {Idiom.spanish} />
        <Skills idiom = {Idiom.spanish} />
        <Services idiom = {Idiom.spanish} />
        <Projects idiom = {Idiom.spanish} />
      </div>
    </>
  );
};
