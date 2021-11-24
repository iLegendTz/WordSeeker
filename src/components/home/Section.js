import React from "react";

export const Section = ({ title, paragraphs, imgURL }) => {
  return (
    <div className="section__container row">
      <div className="col-md-6">
        <h2 className="display-4 mb-3 animate__animated animate__fadeInDown">
          <b>{title}</b>
        </h2>
        {paragraphs.map((paragraph, key) => {
          return (
            <p className="animate__animated animate__fadeInLeft" key={key}>
              {paragraph}
            </p>
          );
        })}
      </div>

      <div className="col-md-6">
        <img
          className="w-100 animate__animated animate__fadeInRight"
          style={{ maxHeight: "85%" }}
          src={imgURL}
          alt={imgURL.split("/")[imgURL.split("/").length - 1]}
        />
      </div>
    </div>
  );
};
