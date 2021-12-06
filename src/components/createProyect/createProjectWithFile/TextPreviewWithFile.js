import React from "react";

import { useCreateAndDownloadTextFile } from "../../../hooks/useCreateAndDownloadTextFile";

export const TextPreviewWithFile = ({ text, audioFile }) => {
  const { onDownload } = useCreateAndDownloadTextFile();

  return (
    <div className="w-100 h-100">
      <div className="w-100 h-75 createNewProyect__textPreview mb-4">
        {text}
      </div>
      <div className="d-flex flex-row-reverse justify-content-around">
        <button className="buttons__btn" onClick={() => onDownload(text)}>
          Descargar
        </button>

        <audio controls className="mb-5">
          <source src={audioFile} type="audio/ogg" />
        </audio>
      </div>
    </div>
  );
};
