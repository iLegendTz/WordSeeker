import React from "react";

export const AudioPreview = ({ audioFile }) => {
  return (
    <>
      <i className="fas fa-file-audio fa-10x icon__icon mb-3 d-block"></i>
      <audio controls className="mb-5">
        <source src={audioFile} type="audio/ogg" />
      </audio>

      <div className="d-flex justify-content-center row">
        <div className="col-md-6 col-12 mb-3">
          <div className="buttons__btn buttons__white d-inline-block">
            <label htmlFor="audio" className="mt-2">
              Seleccionar otro archivo
            </label>
          </div>
        </div>

        <div className="col-md-6 col-12">
          <button type="submit" className="buttons__btn">
            Aceptar
          </button>
        </div>
      </div>
    </>
  );
};
