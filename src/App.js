import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

function App() {
  let [chatMessages, setChatMessages] = useState([
    {
      message: "Hello chatbot",
      sender: "user",
      id: 1,
    },
    {
      message: "Hi, how can I assist you today?",
      sender: "robot",
      id: 2,
    },
    {
      message: "Can you give me the date of today?",
      sender: "user",
      id: 3,
    },
  ]);

  return (
    <>
      <ChatInput />
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
}

export default App;
