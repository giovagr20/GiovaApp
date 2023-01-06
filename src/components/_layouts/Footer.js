import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Footer = () => {
  return (
    <>
      <footer className="bg-light">
        &copy; Copyright 2023.
        <div className="container-fluid">
          <p className="text-end">
            {" "}
            Made by:{" "}
            <strong>
              <em> Giovanni Gomez Restrepo &#x2127;&#x2663;</em>
            </strong>
          </p>
        </div>
      </footer>
    </>
  );
};
