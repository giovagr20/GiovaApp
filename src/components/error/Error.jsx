import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import error from "../../assets/img/Error404.png";
import { Link } from "react-router-dom";

export const ErrorNotFound = () => {
  return (
    <>
      <div className="mt-3 pt-3" />
      <div className="mt-3 pt-3" />
      <div className="mt-3 pt-3" />
      <div className="container">
        <div className="clearfix text-center">
          <div className="clearfix">
            <Link to="/">
              <img
                src={error}
                className="img-fluid rounded"
                alt="Error"
                style={{
                  width: 500,
                  height: 500
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
