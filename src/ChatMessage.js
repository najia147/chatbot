export default function ChatMessage({ message, sender }) {
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
