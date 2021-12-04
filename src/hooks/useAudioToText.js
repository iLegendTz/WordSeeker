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

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
  };

  return { isLoading, text, getText };
};
