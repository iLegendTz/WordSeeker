import React from "react";

export const LanguageSelector = ({ languages, setLanguage }) => {
  return (
    <>
      <label>Idioma:</label>
      <select
        className="form-select"
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        {languages.map(({ language, languageCode }) => {
          return (
            <option key={languageCode} value={languageCode}>
              {language}
            </option>
          );
        })}
      </select>
    </>
  );
};
