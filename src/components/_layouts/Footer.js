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
              <em><code>Giovanni Gomez Restrepo &#x2663;</code></em>
            </strong>
          </p>
        </div>
      </footer>
    </>
  );
};
