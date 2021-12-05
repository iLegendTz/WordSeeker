import React from "react";

import { featuresData } from "../../data/featuresData";
import { CreateNewProjectOptions } from "../createProyect/CreateNewProjectOptions";
import { Feature } from "./Feature";

export const HomeScreen = () => {
  return (
    <>
      <h2 className="display-4 text-uppercase text-center mb-4">
        <b>Transcribe el texto de tus audios</b>
      </h2>

      <CreateNewProjectOptions />

      <div className="col-12 text-center mb-5">
        <h2>
          <b>Word Seeker</b>
        </h2>
        <p>
          <b>Word Seeker</b> te permite transcribir el texto de tus archivos de
          audio ya sea mp3, WAV o FLAC. Ademas de poder hacerlo en tiempo real
          utilizando el audio de tu microfono teniendo una visualizacion de lo
          que estas diciendo pudiendo pausar y continuar la grabacion en el
          momento que tu quieras. <b>Word Seeker</b> te permite descargar un
          archivo de texto de manera sencilla con todo el texto de la
          transcripcion.
        </p>
      </div>

      <div className="row">
        {featuresData.map(({ icon, title, description }, key) => {
          return (
            <Feature
              key={key}
              icon={icon}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
};
