import React, { useEffect, useState } from "react";

import { useAudioToText } from "../../../hooks/useAudioToText";
import { LoadingSpinner } from "../../ui/LoadingSpinner";
import { AudioPreview } from "./AudioPreview";
import { TextPreviewWithFile } from "./TextPreviewWithFile";
import { admitedAudioFileLanguages } from "../../../data/admitedAudioFileLanguages";
import { LanguageSelector } from "../../ui/LanguageSelector";

export const CreateNewProjectWithFileScreen = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isAudioExtensionWrong, setIsAudioExtensionWrong] = useState(false);
  const { isLoading, text, getText } = useAudioToText();
  const [language, setLanguage] = useState(
    admitedAudioFileLanguages[0].languageCode
  );
  const data = new FormData();

  const onFileUpload = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (fileValidation(file.type)) {
        setIsAudioExtensionWrong(false);
        setAudioFile(file);
        data.append("audio", file);
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

  useEffect(() => {
    data.set("languageCode", language);
  }, [language]);

  const fileValidation = (type) => {
    const allowedExtension = /(audio\/mpeg|audio\/wav|audio\/flac)$/i;

    return allowedExtension.exec(type);
  };

  if (isLoading) return <LoadingSpinner />;
  else if (text === "" || !text)
    return (
      <>
        <h2 className="display-4 text-uppercase text-center">
          <b>Selecciona un archivo de audio</b>
        </h2>
        <p className="text-center">Formatos validos: WAV, FLAC, MP3</p>
        <form onSubmit={audioToText}>
          {audioFile ? (
            <AudioPreview audioFile={URL.createObjectURL(audioFile)} />
          ) : (
            <>
              <div className="col-12 text-center">
                <label
                  htmlFor="audio"
                  className="fas fa-folder-plus fa-10x icon__icon mx-auto"
                  style={{ cursor: "pointer" }}
                ></label>
              </div>

              <div className="mb-5 col-12">
                <div className="mx-auto" style={{ width: "300px" }}>
                  <LanguageSelector
                    languages={admitedAudioFileLanguages}
                    setLanguage={setLanguage}
                  />
                </div>
              </div>
              {isAudioExtensionWrong && (
                <div className="alert alert-danger text-center" role="alert">
                  Archivo no valido, tiene que ser en formato: WAV, FLAC o MP3.
                </div>
              )}
            </>
          )}
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
