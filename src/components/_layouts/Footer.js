import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Footer = () => {
  return (
    <>
      <footer className="bg-light mt-3 pt-2">
        <div className="container">&copy; Copyright 2023.</div>
        <div className="container">
          Build with: <code>React JS</code>
        </div>
        <div className="container">
          <p className="text-end">
            {" "}
            Made by: {" "}
            <strong>
              <em> Giovanni Gomez Restrepo &#x2127;&#x2663;</em>
            </strong>
          </p>
        </div>
      </footer>
    </>
  );
};
