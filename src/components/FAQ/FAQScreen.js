import React from "react";

import { admitedAudioFileFormats } from "../../data/admitedAudioFileFormats";
import { admitedAudioFileLanguages } from "../../data/admitedAudioFileLanguages";
import { admitedAudioMicLanguages } from "../../data/admitedAudioMicLanguages";

export const FAQScreen = () => {
  return (
    <>
      <div className="row">
        <div className="mb-5">
          <h3>Transcripcion via Archivo</h3>

          <div className="FAQ__section-container">
            <h4>Que formato de archivo tengo que utilizar?</h4>
            <p>Los formatos de archivos admitidos son:</p>
            <ul>
              {admitedAudioFileFormats.map((format, key) => {
                return <li key={key}>{format}</li>;
              })}
            </ul>
          </div>

          <div className="FAQ__section-container">
            <h4>En que idiomas puede estar mi audio?</h4>
            <p>Los idiomas admitidos son:</p>
            <ul>
              {admitedAudioFileLanguages.map(({ language }, key) => {
                return <li key={key}>{language}</li>;
              })}
            </ul>
            <p>
              Recuerda especificar el idioma ya que este influye en los
              resultados que se muestran al final del reconocimiento.
            </p>
          </div>

          <div className="FAQ__section-container">
            <h4>Cual es el limite de minutos que debe tener mi audio?</h4>
            <p>3 minutos.</p>
          </div>
        </div>

        <div>
          <h3>Transcripcion via Microfono</h3>

          <div className="FAQ__section-container">
            <h4>En que idiomas puede estar mi audio?</h4>
            <p>Los idiomas admitidos son:</p>
            <ul>
              {admitedAudioMicLanguages.map(({ language }, key) => {
                return <li key={key}>{language}</li>;
              })}
            </ul>
            <p>
              Recuerda especificar el idioma ya que este influye en los
              resultados que se muestran al final del reconocimiento.
            </p>
          </div>

          <div className="FAQ__section-container">
            <h4>Cual es el limite de minutos que tiene el reconocimiento?</h4>
            <p>No hay limite.</p>
          </div>
        </div>
      </div>
    </>
  );
};
