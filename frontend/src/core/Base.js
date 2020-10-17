import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";




const Base = ({
  title = "My Title",
  description = "My desription",
  className = "text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <br />
    <div className=" container-fluid">
      <div className="text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
        <Link to="/">
        <img
        src="/logo.png"
        style={{ maxHeight: "20%", maxWidth: "20%" }}
        className="mb-3 rounded"
      />
      </Link>
      </div>
      <div className={className}>{children}</div>
    </div>
    <br />
    <footer className="footer mt-auto py-3">
      <div className="container-fluid text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-danger btn-lg">
        <a className="btn btn-lg btn-danger" href="mailto:x1superbikes@gmail.com">Mail Us</a>
        </button>
      </div>
      <div className="container">
        <span className="text-danger">
        Sevoke Rd, Ward 42, Don Bosco Colony, Siliguri, West Bengal-734004
        </span>
      </div>
    </footer>
  </div>
);

export default Base;
