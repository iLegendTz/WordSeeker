import React, { useEffect, useState } from "react";

import { admitedAudioMicLanguages } from "../../../data/admitedAudioMicLanguages";
import { useCreateAndDownloadTextFile } from "../../../hooks/useCreateAndDownloadTextFile";
import { useVoiceRecognition } from "../../../hooks/useVoiceRecognition";
import { LanguageSelector } from "../../ui/LanguageSelector";
import { ListeningIndicator } from "./ListeningIndicator";

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

  useEffect(() => {
    if (text === "") {
      const parent = document.getElementById("text-container");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  }, [text]);

  useEffect(() => {
    const selectElement = document
      .getElementById("languageSelectorContainer")
      .getElementsByTagName("select")[0];

    if (isListening) {
      selectElement.setAttribute("disabled", true);
    } else {
      selectElement.removeAttribute("disabled");
    }
  }, [isListening]);

  useEffect(() => {
    const button = document.getElementById("downloadButton");
    if (text === "") {
      button.setAttribute("disabled", true);
      button.style.backgroundColor = "gray";
    } else {
      button.style.backgroundColor = "#8a00b2";
      button.removeAttribute("disabled");
    }
  }, [text]);

  return (
    <div className="w-100 h-100">
      <div className="d-flex justify-content-between">
        <div
          className="d-inline-flex createNewProyect__playContainer"
          onClick={() => setIsListening((prev) => !prev)}
        >
          <ListeningIndicator isListening={isListening} />
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

      <div className="mb-1" id="languageSelectorContainer">
        <LanguageSelector
          languages={admitedAudioMicLanguages}
          setLanguage={setLanguage}
        />
      </div>

      <div
        className="w-100 h-75 createNewProyect__textPreview mb-2"
        id="text-container"
      ></div>

      <div className="d-flex flex-row-reverse">
        <button
          id="downloadButton"
          className="buttons__btn"
          onClick={() => onDownload(text)}
        >
          Descargar
        </button>
      </div>
    </div>
  );
};
