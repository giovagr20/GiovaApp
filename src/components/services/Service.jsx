import frontend from "../../assets/img/frontend.png";
import backend from "../../assets/img/backend.png";
import fullstack from "../../assets/img/fullstack.png";
import Swal from "sweetalert2";
import { useState } from "react";

export const Services = ({ idiom }) => {
  const [lang, setLang] = useState(idiom);
  const contactMe = () => {
    if (lang === 'spanish') {
      Swal.fire({
        icon: "info",
        title: `Contactame!`,
        html: `<strong> Maneras: </strong> <br /> <br />
        <em> Mail: </em> <a href="mailto: giovannyg32@gmail.com">Mail me!</a> <br/>
        <em> Whatsapp: </em> <a href="https://wa.me/573147392212?text=Hi,%20I'm%20interested%20in%20your%20services%20as%20developer">Whatsapp me!</a> <br/>
        `,
        showConfirmButton: true,
      });
    } else {
      Swal.fire({
        icon: "info",
        title: `Contact me!`,
        html: `<strong> Ways: </strong> <br /> <br />
        <em> Mail: </em> <a href="mailto: giovannyg32@gmail.com">Mail me!</a> <br/>
        <em> Whatsapp: </em> <a href="https://wa.me/573147392212?text=Hi,%20I'm%20interested%20in%20your%20services%20as%20developer">Whatsapp me!</a> <br/>
        `,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>Here Services</div>
  )

  // return (
  //   <>
  //     {idiom === "english" ? (
  //       <>
  //         <hr />
  //         <div className="clearfix text-center">
  //           <h2>
  //             {" "}
  //             <code>
  //               {" "}
  //               <strong className="text-uppercase">Services</strong>{" "}
  //             </code>
  //           </h2>
  //         </div>
  //         <div className="clearfix">
  //           <div className="row">
  //             <div className="col">
  //               <div className="card">
  //                 <img
  //                   src={frontend}
  //                   className="card-img-top img-fluid"
  //                   alt=""
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title text-center">Service frontend</h5>
  //                   <p className="card-text text-center">
  //                     The front-end is everything involved with what the user
  //                     sees, including design and some languages like HTML and
  //                     CSS. There are a lot of different jobs associated with the
  //                     front-end. Keep in mind that a lot of these titles are
  //                     subjective, so while front-end developer may mean
  //                     something at one company, it can mean something completely
  //                     different at another company.{" "}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col">
  //               <div className="card">
  //                 <img
  //                   src={backend}
  //                   className="card-img-top img-fluid"
  //                   alt=""
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title text-center">Service backend</h5>
  //                   <p className="card-text text-center">
  //                     The back-end, or the "server-side", is basically how the
  //                     site works, updates, and changes. This refers to
  //                     everything the user can't see in the browser, like
  //                     databases and servers. Usually people who work on the
  //                     back-end are called back-end programmers or back-end
  //                     developers. back-end Developers are mostly worried about
  //                     things like security, structure, and content management.{" "}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col">
  //               <div className="card">
  //                 <img
  //                   src={fullstack}
  //                   className="card-img-top img-fluid"
  //                   alt=""
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title text-center">
  //                     Service fullstack
  //                   </h5>
  //                   <p className="card-text text-center">
  //                     Full stack technology refers to the entire depth of a
  //                     computer system application, and full stack developers
  //                     straddle two separate web development domains: the front
  //                     end and the back end. The front end includes everything
  //                     that a client, or site viewer, can see and interact with.
  //                     By contrast, the back end refers to all the servers,
  //                     databases, and other internal architecture that drives the
  //                     application; usually, the end-user never interacts with
  //                     this realm directly.{" "}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="row">
  //             <h3 className="lead text-center">
  //               <strong>
  //                 <code> Are you interested in? </code>
  //               </strong>
  //             </h3>
  //             <h3 className="text-center">
  //               <a className="btn btn-primary" onClick={() => {
  //                 setLang("english")
  //                 contactMe()}}>
  //                 <code> Contact me </code>
  //               </a>
  //             </h3>
  //           </div>
  //         </div>
  //         <hr />
  //       </>
  //     ) : (
  //       <>
  //         <hr />
  //         <div className="clearfix text-center">
  //           <h2>
  //             {" "}
  //             <code>
  //               {" "}
  //               <strong className="text-uppercase">Servicios</strong>{" "}
  //             </code>
  //           </h2>
  //         </div>
  //         <div className="clearfix">
  //           <div className="row">
  //             <div className="col">
  //               <div className="card">
  //                 <img
  //                   src={frontend}
  //                   className="card-img-top img-fluid"
  //                   alt=""
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title text-center">
  //                     Servicios frontend
  //                   </h5>
  //                   <p className="card-text text-center">
  //                     Front-end is todo lo involucrado con lo que el usuario ve,
  //                     incluido el diseño y algunos lenguajes de programacion y
  //                     etiquetas tales como HTML, CSS y Javascript. Hay
  //                     diferentes trabajos asociados con frontend. Tener en
  //                     cuenta que los cargos son subjetivos, puede que se
  //                     interprete diferente basado en la compañia que te
  //                     contrata.{" "}
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col">
  //               <div className="card">
  //                 <img
  //                   src={backend}
  //                   className="card-img-top img-fluid"
  //                   alt=""
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title text-center">
  //                     Servicios backend
  //                   </h5>
  //                   <p className="card-text text-center">
  //                     Backend es basicamente todo lo involucrado con el lado del
  //                     servidor lo que el usuario no ve. Esto involucra las base
  //                     de datos, la lógica de negocio, servidores y lenguajes
  //                     tales como java, .net o más. El desarrollador backend se
  //                     enfoca y preocupa más por la seguridad, estructura y el
  //                     control de la aplicación."
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col">
  //               <div className="card">
  //                 <img
  //                   src={fullstack}
  //                   className="card-img-top img-fluid"
  //                   alt=""
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title text-center">
  //                     Servicios fullstack
  //                   </h5>
  //                   <p className="card-text text-center">
  //                     Fullstack refiere a conocimientos entre backend y
  //                     frontend, este indica que puede trabajar en "ambos lados".
  //                     Es capaz de desarrollar contenido web y del lado del
  //                     cliente, como del lado del servidor. El fullstack
  //                     developer involucra en un "todo" la aplicacion desde la
  //                     seguridad hacia el etiquetado, con conocimientos en
  //                     arquitecturas de software.
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="row">
  //             <h3 className="lead text-center">
  //               <strong>
  //                 <code> Estás interesado? </code>
  //               </strong>
  //             </h3>
  //             <h3 className="text-center">
  //               <a className="btn btn-primary" onClick={() => {
  //                 setLang("spanish")
  //                 contactMe()}}>
  //                 <code> Contactame </code>
  //               </a>
  //             </h3>
  //           </div>
  //         </div>
  //         <hr />
  //       </>
  //     )}
  //   </>
  // );
};
