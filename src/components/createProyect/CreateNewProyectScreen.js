import React, { useState } from "react";

export const CreateNewProyectScreen = () => {
  const [audioFile, setAudioFile] = useState([]);

  const onFileUpload = (e) => {
    setAudioFile([e.target.files[0]]);
  };
  return (
    <div>
      <h2 className="display-4 text-uppercase text-center">
        <b>Selecciona un archivo de video o audio</b>
      </h2>
      <p className="text-center">Formatos validos: WAV, FLAC, MP3</p>
      <form method="post" encType="multipart/form-data">
        <div className="createNewProyect__icon-container text-center">
          <label
            htmlFor="audio"
            className={
              audioFile.length > 0
                ? "fas fa-file-audio fa-10x createNewProyect__icon"
                : "fas fa-folder-plus fa-10x createNewProyect__icon"
            }
          ></label>
        </div>
        <input
          className="d-none"
          accept=".wav,.flac,.mp3"
          type="file"
          name="audio"
          id="audio"
          onChange={onFileUpload}
        />

        <button type="submit" className="">
          Aceptar
        </button>
      </form>
    </div>
  );
};
