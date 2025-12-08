export default function ChatMessage({ message, sender }) {
  if (sender === "robot") {
    return (
      <div>
        {message}
        <img src="men5.jfif" alt="Chatbot response" width="50" height="50" />
      </div>
    );
  }

  return (
    <div>
      {sender === "robot" && (
        <img src="men5.jfif" alt="Chatbot response" width="50" height="50" />
      )}
      {message}
      {sender === "user" && (
        <img src="men5.jfif" alt="Chatbot response" width="50" height="50" />
      )}
    </div>
  );
}
