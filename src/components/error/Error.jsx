import error from "../../assets/img/Error404.png";
import { Link } from "react-router-dom";

export const ErrorNotFound = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${error})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Upps!</h1>
          <p className="mb-5">
            You don't have access to this site
          </p>
          <Link to='/' className="btn btn-secondary">Go Back</Link>
        </div>
      </div>
    </div>
  );
};
