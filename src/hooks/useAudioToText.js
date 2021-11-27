import { useState } from "react";

export const useAudioToText = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const getText = async (formData) => {
    setIsLoading(true);
    fetch("/api/audio", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setText(data.text);
        setIsLoading(false);
      });
  };

  return { isLoading, text, getText };
};
