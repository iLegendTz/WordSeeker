import { useEffect, useState } from "react";

export const useVoiceRecognition = (recognition) => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [lastPhrase, setLastPhrase] = useState("");

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    recognition.onresult = (e) => {
      const results = e.results;
      const phrase = results[results.length - 1][0].transcript;

      setText((prev) => prev + phrase + "\n");
      setLastPhrase(phrase);

      recognition.onerror = (e) => {
        console.log(e.error);
      };
    };
  };

  return { isListening, setIsListening, text, setText, lastPhrase };
};
