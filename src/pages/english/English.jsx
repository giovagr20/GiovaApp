import { Idiom } from "../../utils/utils.language";
import { WhoAmI } from "../../components/whoami/WhoAmI";
import { Skills } from "../../components/skills/Skill";
import { Services } from "../../components/services/Service";
import { Projects } from "../../components/projects/Project";

export const English = () => {
  return (
    <>
        <WhoAmI idiom = {Idiom.english}/>
        <Skills idiom = {Idiom.english}/>
        <Services idiom = {Idiom.english}/>
        <Projects idiom = {Idiom.english}/>
    </>
  );
};
