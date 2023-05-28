import { useState, useEffect , useRef} from "react";

const useSpeechModule = () => {
  const [voices, setVoices] = useState([]);
  const synth = useRef();

  const updateVoices = () => {
    setVoices(synth.current.getVoices());
  };

  const speak = (text, pitch = 1, rate = 1) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices.filter(v => v.default)[0] || voices[0];
    utterance.pitch = pitch;
    utterance.rate = rate;
    console.log("here hook")
    synth.current.speak(utterance);
  };

  useEffect(() => {
    if (typeof window !== "object" || !window.speechSynthesis) return;
    synth.current = window.speechSynthesis;
    synth.current.onvoiceschanged = updateVoices;
    updateVoices();

    return () => {
      synth.current.onvoiceschanged = null;
    };
  }, []);

  return [speak];
};

export default useSpeechModule;
