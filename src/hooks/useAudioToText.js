import { useState } from "react";

export const useAudioToText = () => {
  const [fail, setFail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const getText = async (formData) => {
    setIsLoading(true);
    // https://speechtotexttest.herokuapp.com/api/audio
    fetch("https://speechtotexttest.herokuapp.com/api/audio", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setText(data.text);
        if (data.fail) {
          setFail(true);
        } else {
          setFail(false);
        }

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch(() => {
        setFail(true);
        setText("No se pudo completar la peticion, intente mas tarde.");
      });
  };

  return { getText, text, isLoading, fail };
};
