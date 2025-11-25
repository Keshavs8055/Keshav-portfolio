import { useEffect } from "react";

export default function SiteSpeakChatbot() {
  useEffect(() => {
    const scriptId = "sitespeak-ai-script";
    if (document.getElementById(scriptId)) return;

    const d = document;
    const s = d.createElement("script");
    s.id = scriptId;
    s.src =
      "https://sitespeak.ai/chatbots/3e52c48e-1c0b-41ba-bac8-4364e76ba154.js";
    s.async = true;
    d.getElementsByTagName("head")[0].appendChild(s);
  }, []);

  return null;
}
