import { useState } from "react";

export default function ChatInput({ chatMessages, setChatMessages }) {
  let [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="50"
        onChange={saveInputText}
        value={inputText}
      />{" "}
      <button onClick={sendMessage}>Send</button>
    </>
  );
}
