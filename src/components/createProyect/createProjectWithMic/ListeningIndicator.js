import React from "react";

export const ListeningIndicator = ({ isListening }) => {
  return !isListening ? (
    <>
      <i className="fas fa-3x fa-play-circle createNewProyect__playButton"></i>
      <p className="ms-2 pt-2 mb-0">Empezar a escuchar</p>
    </>
  ) : (
    <>
      <i className="fas fa-3x fa-pause-circle createNewProyect__playButton"></i>
      <p className="ms-2 pt-2 mb-0">Parar de escuchar</p>
    </>
  );
};
