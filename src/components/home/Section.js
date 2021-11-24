import React, { useRef } from "react";

import { useOnScreen } from "../../hooks/useOnScreen";

export const Section = ({ title, paragraphs, imgURL }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <div
      className={
        onScreen
          ? "section__container row animate__animated animate__fadeInLeft"
          : "section__container row"
      }
      ref={ref}
    >
      <div className="col-md-6">
        <h2 className="display-4 mb-3">
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
          className="w-100"
          style={{ maxHeight: "85%" }}
          src={imgURL}
          alt={imgURL.split("/")[imgURL.split("/").length - 1]}
        />
      </div>
    </div>
  );
};
