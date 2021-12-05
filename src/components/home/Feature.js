import React from "react";

export const Feature = ({ icon, title, description }) => {
  return (
    <div className="text-center col-sm-12 col-md-4 px-5">
      <i className={"fas fa-5x icon__icon mb-2 " + icon}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
