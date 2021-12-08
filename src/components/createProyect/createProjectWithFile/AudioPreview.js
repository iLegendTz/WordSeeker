import React from "react";

export const AudioPreview = ({ audioFile }) => {
  return (
    <>
      <div className="col-12 text-center mb-2">
        <i className="fas fa-file-audio fa-10x icon__icon mb-3 d-block"></i>
        <audio controls>
          <source src={audioFile} type="audio/ogg" />
        </audio>
      </div>

      <div className="d-flex justify-content-around row">
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          className="buttons__btn buttons__white mb-2"
        >
          Seleccionar otro archivo
        </button>

        <button type="submit" className="buttons__btn">
          Aceptar
        </button>
      </div>
    </>
  );
};
