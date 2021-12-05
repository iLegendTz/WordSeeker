import React, { useState } from "react";

import { useAudioToText } from "../../hooks/useAudioToText";
import { Spinner } from "../Spinner/Spinner";
import { AudioPreview } from "./AudioPreview";
import { TextPreviewWithFile } from "./TextPreviewWithFile";

export const CreateNewProyectWithFile = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isAudioExtensionWrong, setIsAudioExtensionWrong] = useState(false);
  const { isLoading, text, getText } = useAudioToText();

  const onFileUpload = (e) => {
    if (e.target.files.length > 0) {
      if (fileValidation(e.target.files[0].type)) {
        setIsAudioExtensionWrong(false);
        setAudioFile(e.target.files[0]);

        const data = new FormData();
        data.append("audio", e.target.files[0]);
        setFormData(data);
      } else {
        setIsAudioExtensionWrong(true);
      }
    }
  };

  const audioToText = (e) => {
    e.preventDefault();
    getText(formData);
  };

  const fileValidation = (type) => {
    const allowedExtension = /(audio\/mpeg|audio\/wav|audio\/flac)$/i;

    return allowedExtension.exec(type);
  };

  if (isLoading) return <Spinner />;
  else if (text === "" || !text)
    return (
      <>
        <h2 className="display-4 text-uppercase text-center">
          <b>Selecciona un archivo de audio</b>
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
              <>
                <label
                  htmlFor="audio"
                  className="fas fa-folder-plus fa-10x icon__icon"
                  style={{ cursor: "pointer" }}
                ></label>
                {isAudioExtensionWrong && (
                  <div className="alert alert-danger" role="alert">
                    Archivo no valido, tiene que ser en formato: WAV, FLAC o
                    MP3.
                  </div>
                )}
              </>
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
  else
    return (
      <TextPreviewWithFile
        text={text}
        audioFile={URL.createObjectURL(audioFile)}
      />
    );
};
