import React from "react";
import { useNavigate } from "react-router-dom";
import { Feature } from "./Feature";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const options = { FILE: "File", MICROPHONE: "Microphone" };

  const onOptionSelected = (option) => {
    if (option === options.FILE) {
      navigate(`newProject/file`);
    } else {
      navigate(`newProject/microphone`);
    }
  };

  return (
    <>
      <h2 className="display-4 text-uppercase text-center mb-4">
        <b>Transcribe el texto de tus audios</b>
      </h2>

      <div className="row">
        <div className="col-md-6 col-12 mb-5 d-flex justify-content-center">
          <div
            className="createNewProyect__optionContainer"
            onClick={() => onOptionSelected(options.FILE)}
          >
            <i className="fas fa-folder-plus fa-10x icon__icon"></i>
            <h3 className="text-dark">Subir un archivo</h3>
          </div>
        </div>

        <div className="col-md-6 col-12 mb-5 d-flex justify-content-center">
          <div
            className="createNewProyect__optionContainer"
            onClick={() => onOptionSelected(options.MICROPHONE)}
          >
            <i className="fas fa-microphone fa-10x icon__icon"></i>
            <h3 className="text-dark">Usar mi microfono</h3>
          </div>
        </div>
      </div>

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
        <Feature
          icon="fa-file-download"
          title="Descarga Gratuita"
          description="Transcripciones ilimitadas y descargas gratuitas."
        />

        <Feature
          icon="fa-microphone-alt"
          title="Archivo y Microfono"
          description="La capacidad de poder usar tanto archivos de audio como tu microfono en tiempo real."
        />

        <Feature
          icon="fa-laugh-beam"
          title="Facil de Descargar"
          description="El archivo con tu transcripcion a un solo click."
        />
      </div>
    </>
  );
};
