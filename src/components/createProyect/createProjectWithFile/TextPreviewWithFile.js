import React from "react";
import { admitedAudioFileLanguages } from "../../../data/admitedAudioFileLanguages";

import { useCreateAndDownloadTextFile } from "../../../hooks/useCreateAndDownloadTextFile";

export const TextPreviewWithFile = ({
  text,
  audioFile,
  languageCodeSelected,
}) => {
  const { onDownload } = useCreateAndDownloadTextFile();

  const languageSelected = admitedAudioFileLanguages.find(
    ({ languageCode }) => languageCode === languageCodeSelected
  );

  return (
    <>
      <div
        className="createNewProyect__textPreview mb-4"
        style={{ minHeight: "calc(100vh - 300px)" }}
      >
        {text}
      </div>
      <div className="d-flex flex-row-reverse justify-content-around">
        <button className="buttons__btn" onClick={() => onDownload(text)}>
          Descargar
        </button>

        <div className="pt-3">
          <p className="m-0" style={{ fontSize: "15px" }}>
            {languageSelected.language}
          </p>
        </div>

        <div>
          <audio controls className="mb-5">
            <source src={audioFile} type="audio/ogg" />
          </audio>
        </div>
      </div>
    </>
  );
};
