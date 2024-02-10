import Swal from "sweetalert2";
import netcore from "../../assets/img/netcore.png";
import react from ".././../assets/img/reactjs.png";
import java from "../../assets/img/java.png";
import node from "../../assets/img/nodejs.png";
import angular from "../../assets/img/angular.png";
import api from "../../assets/img/api.png";
import { Languages } from "../../utils/utils.language";
import { useEffect, useState } from "react";
import { Idiom } from "../../utils/utils.language";

const ENGLISH = "english";

const englishInfo = {
  React: `Around 2 years of experience, tools: Redux, Router and Build in CI/CD, using Clean Architecure`,
  NetCore: `Around 2 years of experience, tools: Lambdas, OOP, EntityCore, Blazor, Razor, using MVC `,
  Java: `Around 4 years of experience, tools: SpringBoot (Data, Security, Web, Lombok), Spring, Lambda, OOP, using DDD and Clean Architecture`,
  Angular: `Around 3 years of experience, tools: components, directives, pipes, CI/CD, using Clean Architecture`,
  Node: `Around 2 years of experience, tools: Sequelize, API Rest, CI/CD, using Clean Architecture`,
  API: `Around 6 years, API Rest and SOAP, protocols HTTP and encrypt information, authetication and security`,
};

const spanishInfo = {
  React: `Alrededor 2 años de experiencia, herramientas: Redux, Router y CI/CD, usando Clean Architecure`,
  NetCore: `Alrededor 2 años de experiencia, herramientas: Lambdas, OOP, EntityCore, Blazor, Razor, usando MVC `,
  Java: `Alrededor 4 años de experiencia, herramientas: SpringBoot (Data, Security, Web, Lombok), Spring, Lambda, OOP, usando DDD y Clean Architecture`,
  Angular: `Alrededor 3 años de experiencia, herramientas: componentes, directivas, pipes, CI/CD, usando Clean Architecture`,
  Node: `Alrededor 2 años de experiencia, herramientas: Sequelize, API Rest, CI/CD, usando Clean Architecture`,
  API: `Alrededor 6 años de experiencia, API Rest y SOAP, protocolos HTTP y encrypt informacion, autenticacion y seguridad`,
};

export const Skills = ({ idiom }) => {
  const [type, setType] = useState("");
  const [languageChoose, setLanguageChoose] = useState(idiom);

  useEffect(() => {
    openDetails(type, languageChoose);
  }, [type, languageChoose]);

  const openDetails = (type, languageChoose) => {
    if (type === undefined || type === "") {
      return;
    }
    if (languageChoose === undefined || languageChoose === "") {
      return;
    }
    if (languageChoose === ENGLISH) {
      Swal.fire({
        icon: "info",
        title: `With ${type}`,
        html: `${summarize(type)}`,
        showConfirmButton: true,
      });
    } else {
      Swal.fire({
        icon: "info",
        title: `Con ${type}`,
        html: `${summarize(type)}`,
        showConfirmButton: true,
      });
    }
  };

  let summarize = (detail) => {
    return languageChoose === ENGLISH
      ? englishInfo[detail]
      : spanishInfo[detail];
  };

  const viewEnglish = () => {
    return (
      <>
        <div className="mt-2">
          <h3 className="text-secondary text-center">
            <code>SKILLS </code>
          </h3>
        </div>
        <div className="grid grid-rows-1 text-center">
          <div>
            <q>
              <em className="text-accent">
                Give me where to stand, and I will move the earth.
              </em>
            </q>
          </div>
        </div>
        <div className="pt-6"></div>
        <div className="grid grid-cols-6 gap-1">
          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.netcore);
                  setLanguageChoose(Idiom.english);
                }}
                className="btn btn-ghost"
                id="netCore"
              >
                <img src={netcore} alt="netcore" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.react);
                  setLanguageChoose(Idiom.english);
                }}
                className="btn btn-ghost"
                id="react"
              >
                <img src={react} alt="react" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.java);
                  setLanguageChoose(Idiom.english);
                }}
                className="btn btn-ghost"
                id="java"
              >
                <img src={java} alt="java" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.node);
                  setLanguageChoose(Idiom.english);
                }}
                className="btn btn-ghost"
                id="node"
              >
                <img src={node} alt="node" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.angular);
                  setLanguageChoose(Idiom.english);
                }}
                className="btn btn-ghost"
                id="node"
              >
                <img src={angular} alt="angular" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.api);
                  setLanguageChoose(Idiom.english);
                }}
                className="btn btn-ghost"
                id="api"
              >
                <img src={api} alt="api" />
              </button>
            </div>
          </div>

        </div>

        <div className="divider" />
      </>
    );
  };

  const viewSpanish = () => {
    return (
      <>
        <div className="mt-2">
          <h3 className="text-secondary text-center">
            <code>HABILIDADES </code>
          </h3>
        </div>
        <div className="grid grid-rows-1 text-center">
          <div>
            <q>
              <em className="text-accent">
                Dadme un punto de apoyo, y moveré al mundo.
              </em>
            </q>
          </div>
        </div>
        <div className="pt-6"></div>
        <div className="grid grid-cols-6 gap-1">
          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.netcore);
                  setLanguageChoose(Idiom.spanish);
                }}
                className="btn btn-ghost"
                id="netCore"
              >
                <img src={netcore} alt="netcore" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.react);
                  setLanguageChoose(Idiom.spanish);
                }}
                className="btn btn-ghost"
                id="react"
              >
                <img src={react} alt="react" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.java);
                  setLanguageChoose(Idiom.spanish);
                }}
                className="btn btn-ghost"
                id="java"
              >
                <img src={java} alt="java" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.node);
                  setLanguageChoose(Idiom.spanish);
                }}
                className="btn btn-ghost"
                id="node"
              >
                <img src={node} alt="node" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.angular);
                  setLanguageChoose(Idiom.spanish);
                }}
                className="btn btn-ghost"
                id="node"
              >
                <img src={angular} alt="angular" />
              </button>
            </div>
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  setType(Languages.api);
                  setLanguageChoose(Idiom.english);
                }}
                className="btn btn-ghost"
                id="api"
              >
                <img src={api} alt="api" />
              </button>
            </div>
          </div>

        </div>

        <div className="divider" />
      </>
    );
  };

  return <>{idiom === ENGLISH ? viewEnglish() : viewSpanish()} </>;
};
//     <>
//       {idiom === "english" ? (
//         <>
//           <hr />
//           <div className="clearfix text-center">
//             <h2>
//               {" "}
//               <code>
//                 {" "}
//                 <strong className="text-upper>Skills</strong>{" "}
//               </code>
//             </h2>
//             <br />
//             <div className="clearfix">

//               <div className="row">
//                 <div className="col-2">

//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.react),
//                       setLanguageChoose(Idiom.english),
//                     }}
//                     className="btn form-control"
//                     id="react"
//                   >
//                     <img src={react} alt="react" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.java),
//                       setLanguageChoose(Idiom.english),
//                     }}
//                     className="btn form-control"
//                     id="java"
//                   >
//                     <img src={java} alt="java" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.node),
//                       setLanguageChoose(Idiom.english),
//                     }}
//                     className="btn form-control"
//                     id="node"
//                   >
//                     <img src={node} alt="node" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.angular),
//                       setLanguageChoose(Idiom.english),
//                     }}
//                     className="btn form-control"
//                     id="angular"
//                   >
//                     <img src={angular} alt="angular" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.api),
//                       setLanguageChoose(Idiom.english),
//                     }}
//                     className="btn form-control"
//                     id="api"
//                   >
//                     <img src={api} alt="api" className="img-fluid" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr />
//         </>
//       ) : (
//         <>
//           <hr />
//           <div className="clearfix text-center">
//             <h2>
//               {" "}
//               <code>
//                 {" "}
//                 <strong className="text-upper>Habilidades</strong>{" "}
//               </code>
//             </h2>
//             <br />
//             <div className="clearfix">
//               <div className="row">
//                 <q>
//                   <em>Dame un punto de apoyo, y moveré el mundo.</em>{" "}
//                 </q>
//               </div>
//               <div className="row">
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.netcore),
//                       setLanguageChoose(Idiom.spanish),
//                     }}
//                     className="btn form-control"
//                     id="netCore"
//                   >
//                     <img src={netcore} alt="netcore" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.react),
//                       setLanguageChoose(Idiom.spanish),
//                     }}
//                     className="btn form-control"
//                     id="react"
//                   >
//                     <img src={react} alt="react" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.java),
//                       setLanguageChoose(Idiom.spanish),
//                     }}
//                     className="btn form-control"
//                     id="java"
//                   >
//                     <img src={java} alt="java" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.node),
//                       setLanguageChoose(Idiom.spanish),
//                     }}
//                     className="btn form-control"
//                     id="node"
//                   >
//                     <img src={node} alt="node" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.angular),
//                       setLanguageChoose(Idiom.spanish),
//                     }}
//                     className="btn form-control"
//                     id="angular"
//                   >
//                     <img src={angular} alt="angular" className="img-fluid" />
//                   </button>
//                 </div>
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.api),
//                       setLanguageChoose(Idiom.spanish),
//                     }}
//                     className="btn form-control"
//                     id="api"
//                   >
//                     <img src={api} alt="api" className="img-fluid" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr />
//         </>
//       )}
//     </>
//   ),
// },
