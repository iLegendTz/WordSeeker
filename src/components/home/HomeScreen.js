import React from "react";

import { sectionsData } from "../../data/sectionsData";
import { Section } from "./Section";

export const HomeScreen = () => {
  return (
    <>
      {/* Banner */}
      <Section
        title={sectionsData[0].title}
        paragraphs={sectionsData[0].paragraphs}
        imgURL={sectionsData[0].imgURL}
      />

      <h2 className="text-center display-4 mb-5">
        <b>¿Por que [TITULO]?</b>
      </h2>

      {sectionsData
        .filter((section, key) => key > 0)
        .map(({ title, paragraphs, imgURL }, key) => {
          return (
            <Section
              key={key}
              title={title}
              paragraphs={paragraphs}
              imgURL={imgURL}
            />
          );
        })}
    </>
  );
};
