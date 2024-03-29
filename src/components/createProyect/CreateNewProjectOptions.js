import React from "react";

import { useNavigate } from "react-router-dom";

export const CreateNewProjectOptions = () => {
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
    <div className="row border__border">
      <div className="col-md-6 col-12 mb-3 d-flex justify-content-center">
        <div
          className="createNewProyect__optionContainer"
          onClick={() => onOptionSelected(options.FILE)}
        >
          <i className="fas fa-folder-plus fa-9x icon__icon"></i>
          <h3 className="text-dark">Subir un archivo</h3>
        </div>
      </div>

      <div className="col-md-6 col-12 d-flex justify-content-center">
        <div
          className="createNewProyect__optionContainer"
          onClick={() => onOptionSelected(options.MICROPHONE)}
        >
          <i className="fas fa-microphone fa-8x icon__icon mb-3"></i>
          <h3 className="text-dark">Usar mi microfono</h3>
        </div>
      </div>
    </div>
  );
};
