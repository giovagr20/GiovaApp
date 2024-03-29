import { WhoAmI } from "../../components/whoami/WhoAmI";
import { Skills } from "../../components/skills/Skill";
import { Services } from "../../components/services/Service";
import { Idiom } from "../../utils/utils.language";

export const Spanish = () => {
  return (
    <>
        <WhoAmI idiom = {Idiom.spanish} />
        <Skills idiom = {Idiom.spanish} />
        <Services idiom = {Idiom.spanish} />
    </>
  );
};
