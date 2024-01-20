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


export const Skills = ({ idiom }) => {
  return (
    <div>Here skills</div>
  )
}
// export const Skills = ({ idiom }) => {
//   const [type, setType] = useState("");
//   const [languageChoose, setLanguageChoose] = useState(idiom);
//   useEffect(() => {
//     openDetails(type, languageChoose);
//   }, [type, languageChoose]);

//   const openDetails = (type, languageChoose) => {
//     if (type === undefined || type === "") {
//       return;
//     }

//     if (languageChoose === undefined || languageChoose === "") {
//       return;
//     }
//     if (languageChoose === "english") {
//       Swal.fire({
//         icon: "info",
//         title: `With ${type}`,
//         html: `${summarize(type)}`,
//         showConfirmButton: true,
//       });
//     } else {
//       Swal.fire({
//         icon: "info",
//         title: `Con ${type}`,
//         html: `${summarize(type)}`,
//         showConfirmButton: true,
//       });
//     }
//   };

//   let summarize = (detail) => {
//     if (languageChoose === "english") {
//       switch (detail) {
//         case "React":
//           return `Around 2 years of experience, tools: Redux, Router and Build in CI/CD, using Clean Architecure`;
//         case "NetCore":
//           return `Around 2 years of experience, tools: Lambdas, OOP, EntityCore, Blazor, Razor, using MVC `;
//         case "Java":
//           return `Around 4 years of experience, tools: SpringBoot (Data, Security, Web, Lombok), Spring, Lambda, OOP, using DDD and Clean Architecture`;
//         case "Angular":
//           return `Around 3 years of experience, tools: components, directives, pipes, CI/CD, using Clean Architecture`;
//         case "Node":
//           return `Around 2 years of experience, tools: Sequelize, API Rest, CI/CD, using Clean Architecture`;
//         case "API":
//           return `Around 6 years, API Rest and SOAP, protocols HTTP and encrypt information, authetication and security`;
//         default:
//           return `You've not chosen any option`;
//       }
//     } else {
//       switch (detail) {
//         case "React":
//           return `Alrededor 2 años de experiencia, herramientas: Redux, Router y CI/CD, usando Clean Architecure`;
//         case "NetCore":
//           return `Alrededor 2 años de experiencia, herramientas: Lambdas, OOP, EntityCore, Blazor, Razor, usando MVC `;
//         case "Java":
//           return `Alrededor 4 años de experiencia, herramientas: SpringBoot (Data, Security, Web, Lombok), Spring, Lambda, OOP, usando DDD y Clean Architecture`;
//         case "Angular":
//           return `Alrededor 3 años de experiencia, herramientas: componentes, directivas, pipes, CI/CD, usando Clean Architecture`;
//         case "Node":
//           return `Alrededor 2 años de experiencia, herramientas: Sequelize, API Rest, CI/CD, usando Clean Architecture`;
//         case "API":
//           return `Alrededor 6 años de experiencia, API Rest y SOAP, protocolos HTTP y encrypt informacion, autenticacion y seguridad`;
//         default:
//           return `No se ha seleccionado ninguna opción`;
//       }
//     }
//   };

//   return (
//     <>
//       {idiom === "english" ? (
//         <>
//           <hr />
//           <div className="clearfix text-center">
//             <h2>
//               {" "}
//               <code>
//                 {" "}
//                 <strong className="text-uppercase">Skills</strong>{" "}
//               </code>
//             </h2>
//             <br />
//             <div className="clearfix">
//               <div className="row">
//                 <q>
//                   <em>Give me where to stand, and I will move the earth.</em>{" "}
//                 </q>
//               </div>
//               <div className="row">
//                 <div className="col-2">
//                   <button
//                     onClick={() => {
//                       setType(Languages.netcore);
//                       setLanguageChoose(Idiom.english);
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
//                       setType(Languages.react);
//                       setLanguageChoose(Idiom.english);
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
//                       setType(Languages.java);
//                       setLanguageChoose(Idiom.english);
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
//                       setType(Languages.node);
//                       setLanguageChoose(Idiom.english);
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
//                       setType(Languages.angular);
//                       setLanguageChoose(Idiom.english);
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
//                       setType(Languages.api);
//                       setLanguageChoose(Idiom.english);
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
//                 <strong className="text-uppercase">Habilidades</strong>{" "}
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
//                       setType(Languages.netcore);
//                       setLanguageChoose(Idiom.spanish);
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
//                       setType(Languages.react);
//                       setLanguageChoose(Idiom.spanish);
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
//                       setType(Languages.java);
//                       setLanguageChoose(Idiom.spanish);
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
//                       setType(Languages.node);
//                       setLanguageChoose(Idiom.spanish);
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
//                       setType(Languages.angular);
//                       setLanguageChoose(Idiom.spanish);
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
//                       setType(Languages.api);
//                       setLanguageChoose(Idiom.spanish);
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
//   );
// };
