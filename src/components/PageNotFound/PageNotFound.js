import React from "react";
import "./PageNotFound.scss";
import pnf from "../../images/pnf.jpg";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <img src={pnf} className="pnf-img" alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
