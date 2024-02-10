import frontend from "../../assets/img/frontend.png";
import backend from "../../assets/img/backend.png";
import fullstack from "../../assets/img/fullstack.png";
import Swal from "sweetalert2";
import { useState } from "react";

const ENGLISH = "english";
const SPANISH = "spanish";

export const Services = ({ idiom }) => {
  const [lang, setLang] = useState(idiom);
  const contactMe = () => {
    if (lang === "spanish") {
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

  const viewSpanish = () => {
    return (
      <>
        <div className="mt-2">
          <h3 className="text-secondary text-center">
            <code>SERVICIOS </code>
          </h3>
        </div>
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item">
            <label className="swap swap-flip text-9xl">
              <input type="checkbox" />

              <div className="swap-off">
                <img src={frontend} className="rounded-box" />
              </div>
              <div className="swap-on">
                <p className="label-text text-center text-secondary justify-items-center">
                  Front-End Servicios <br /> <br />
                  <p className="label-text text-center justify-items-center">
                  Toda tarea para el lado de frontend <br />
                  incluido <code> JS/HTML/CSS </code>  
                  </p>

                </p>
              </div>
            </label>
          </div>
          <div className="carousel-item">
          <label className="swap swap-flip text-9xl">
              <input type="checkbox" />

              <div className="swap-off">
                <img src={backend} className="rounded-box" />
              </div>
              <div className="swap-on">
                <p className="label-text text-center text-secondary justify-items-center">
                  Backend Servicios <br /> <br />
                  <p className="label-text text-center justify-items-center">
                  Toda tarea para el lado de backend <br />
                  incluido <code> Java, NetCore o NodeJS </code>  
                  </p>

                </p>
              </div>
            </label>
          </div>
          <div className="carousel-item">
          <label className="swap swap-flip text-9xl">
              <input type="checkbox" />

              <div className="swap-off">
                <img src={fullstack} className="rounded-box" />
              </div>
              <div className="swap-on">
                <p className="label-text text-center text-secondary justify-items-center">
                  Fullstack Servicios <br /> <br />
                  <p className="label-text text-center justify-items-center">
                  Toda tarea para el lado de fullstack <br />
                  incluido <code> Java, NetCore o NodeJS </code> y
                  <code>HTML, CSS, Javascript</code>
                  </p>

                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="grid grid-rows-1 text-center mt-3">
          <h3 className="text-secondary text-center">
            <strong>
              <code> Estas interesado? </code>
            </strong>
          </h3>
          <a
            className="btn btn-accent"
            onClick={() => {
              setLang(SPANISH);
              contactMe();
            }}
          >
            <code> Contactame </code>
          </a>
        </div>
        <div className="divider"></div>
      </>
    );
  };

  const viewEnglish = () => {
    return (
      <>
        <div className="mt-2">
          <h3 className="text-secondary text-center">
            <code>SERVICES </code>
          </h3>
        </div>
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item">
            <label className="swap swap-flip text-9xl">
              <input type="checkbox" />

              <div className="swap-off">
                <img src={frontend} className="rounded-box" />
              </div>
              <div className="swap-on">
                <p className="label-text text-center text-secondary justify-items-center">
                  Front-End Services <br /> <br />
                  <p className="label-text text-center justify-items-center">
                  Frontend features to create new webpages and new features <br />
                  included <code> JS/HTML/CSS </code>  
                  </p>

                </p>
              </div>
            </label>
          </div>
          <div className="carousel-item">
          <label className="swap swap-flip text-9xl">
              <input type="checkbox" />

              <div className="swap-off">
                <img src={backend} className="rounded-box" />
              </div>
              <div className="swap-on">
                <p className="label-text text-center text-secondary justify-items-center">
                  Backend Services <br /> <br />
                  <p className="label-text text-center justify-items-center">
                  Backend services to resolve new features, bugs <br />
                  included <code> Java, NetCore o NodeJS </code>  
                  </p>

                </p>
              </div>
            </label>
          </div>
          <div className="carousel-item">
          <label className="swap swap-flip text-9xl">
              <input type="checkbox" />

              <div className="swap-off">
                <img src={fullstack} className="rounded-box" />
              </div>
              <div className="swap-on">
                <p className="label-text text-center text-secondary justify-items-center">
                  Fullstack Services <br /> <br />
                  <p className="label-text text-center justify-items-center">
                  Fullstack services to create, develop new features and resolve bugs <br />
                  included <code> Java, NetCore o NodeJS </code> and
                  <code>HTML, CSS, Javascript</code>
                  </p>

                </p>
              </div>
            </label>
          </div>
        </div>
        <div className="grid grid-rows-1 text-center mt-3">
          <h3 className="text-secondary text-center">
            <strong>
              <code> Are you interested in? </code>
            </strong>
          </h3>
          <a
            className="btn btn-accent"
            onClick={() => {
              setLang(ENGLISH);
              contactMe();
            }}
          >
            <code> Contact Me </code>
          </a>
        </div>

        <div className="divider"></div>
      </>
    );
  };

  return <>{idiom === ENGLISH ? viewEnglish() : viewSpanish()}</>;
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
  //{" "}
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

  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="row">

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

  //             </h3>
  //           </div>
  //         </div>
  //         <hr />
  //       </>
  //     )}
  //   </>
  // );
};
