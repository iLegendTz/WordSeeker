import React, { useState } from "react";

import { admitedAudioFileLanguages } from "../../../data/admitedAudioFileLanguages";
import { LanguageSelector } from "../../ui/LanguageSelector";

export const AudioPreview = ({ audioFile }) => {
  const [language, setLanguage] = useState(
    admitedAudioFileLanguages[0].languageCode
  );

  return (
    <>
      <div className="col-12 text-center mb-2">
        <i className="fas fa-file-audio fa-10x icon__icon mb-3 d-block"></i>
        <audio controls>
          <source src={audioFile} type="audio/ogg" />
        </audio>
      </div>

      <div className="mb-5 col-12">
        <div className="mx-auto" style={{ width: "300px" }}>
          <LanguageSelector
            languages={admitedAudioFileLanguages}
            setLanguage={setLanguage}
          />
        </div>
      </div>

      <div className="d-flex justify-content-around row">
        <div className="buttons__btn buttons__white d-inline-block mb-2">
          <label htmlFor="audio" className="mt-2">
            Seleccionar otro archivo
          </label>
        </div>

        <button type="submit" className="buttons__btn">
          Aceptar
        </button>
      </div>
    </>
  );
};
