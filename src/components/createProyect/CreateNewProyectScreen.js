import React, { useState } from "react";

import { useAudioToText } from "../../hooks/useAudioToText";
import { Spinner } from "../Spinner/Spinner";
import { AudioPreview } from "./AudioPreview";

export const CreateNewProyectScreen = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [formData, setFormData] = useState(null);
  const { isLoading, text, getText } = useAudioToText();

  const onFileUpload = async (e) => {
    if (e.target.files.length > 0) {
      setAudioFile(e.target.files[0]);

      const data = new FormData();
      data.append("audio", e.target.files[0]);
      setFormData(data);
    }
  };

  const audioToText = (e) => {
    e.preventDefault();
    getText(formData);
  };

  if (isLoading) return <Spinner />;
  else if (text === "" || !text)
    return (
      <>
        <h2 className="display-4 text-uppercase text-center">
          <b>Selecciona un archivo de video o audio</b>
        </h2>
        <p className="text-center">Formatos validos: WAV, FLAC, MP3</p>
        <form onSubmit={audioToText}>
          <div className="text-center">
            {audioFile ? (
              <AudioPreview
                audioFile={URL.createObjectURL(audioFile)}
                isLoading={isLoading}
              />
            ) : (
              <label
                htmlFor="audio"
                className="fas fa-folder-plus fa-10x createNewProyect__icon"
                style={{ cursor: "pointer" }}
              ></label>
            )}
          </div>
          <input
            className="d-none"
            accept=".wav,.flac,.mp3"
            type="file"
            name="audio"
            id="audio"
            onChange={onFileUpload}
          />
        </form>
      </>
    );
  else return <p>hola</p>;
};
