import { useState } from "react";

export default function ChatInput() {
  return (
    <>
      <input type="text" placeholder="Send a message to Chatbot" size="50" />
      <button>Send</button>
    </>
  );
}
