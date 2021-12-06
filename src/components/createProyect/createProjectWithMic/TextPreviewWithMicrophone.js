import React, { useEffect, useState } from "react";

import { admitedAudioMicLanguages } from "../../../data/admitedAudioMicLanguages";
import { useCreateAndDownloadTextFile } from "../../../hooks/useCreateAndDownloadTextFile";
import { useVoiceRecognition } from "../../../hooks/useVoiceRecognition";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;

export const TextPreviewWithMicrophone = () => {
  const { onDownload } = useCreateAndDownloadTextFile();

  const { text, setText, isListening, setIsListening, lastPhrase } =
    useVoiceRecognition(recognition);

  const [language, setLanguage] = useState(
    admitedAudioMicLanguages[0].languageCode
  );

  useEffect(() => {
    recognition.lang = language;
  }, [language]);

  useEffect(() => {
    if (lastPhrase !== "") {
      const p = document.createElement("p");
      p.className = "createNewProyect__paragraph";
      p.innerHTML = lastPhrase;

      document.getElementById("text-container").appendChild(p);
    }
  }, [lastPhrase]);

  return (
    <div className="w-100 h-100">
      <div className="d-flex justify-content-between">
        <div
          className="d-inline-flex createNewProyect__playContainer"
          onClick={() => setIsListening((prev) => !prev)}
        >
          {!isListening ? (
            <>
              <i className="fas fa-3x fa-play-circle createNewProyect__playButton"></i>
              <p className="ms-2 pt-2 mb-0">Empezar a escuchar</p>
            </>
          ) : (
            <>
              <i className="fas fa-3x fa-pause-circle createNewProyect__playButton"></i>
              <p className="ms-2 pt-2 mb-0">Parar de escuchar</p>
            </>
          )}
        </div>

        {text !== "" && (
          <div
            className="d-inline-flex createNewProyect__playContainer"
            onClick={() => setText("")}
          >
            <i class="fas fa-3x fa-trash-alt createNewProyect__playButton"></i>
            <p className="ms-2 pt-2 mb-0">Reiniciar</p>
          </div>
        )}
      </div>

      <div className="mb-1">
        <label>Idioma:</label>
        <select
          className="form-select"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          {admitedAudioMicLanguages.map(({ language, languageCode }) => {
            return (
              <option key={languageCode} value={languageCode}>
                {language}
              </option>
            );
          })}
        </select>
      </div>

      <div
        className="w-100 h-75 createNewProyect__textPreview mb-4"
        id="text-container"
      ></div>

      {text !== "" && (
        <div className="d-flex flex-row-reverse">
          <button className="buttons__btn" onClick={() => onDownload(text)}>
            Descargar
          </button>
        </div>
      )}
    </div>
  );
};
