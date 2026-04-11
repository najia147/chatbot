import { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

  function App() {
  
    const [ChatMessages,setChatMessages] = useState ([
      {
        message: 'Hello chatbot.',
        sender: 'user',
        id: 'id1'
      },
      {
        message: 'Hi, how can I help you?',
        sender: 'robot',
        id: 'id2'
      },
      { 
        message: 'Can you get me today date?',
        sender: 'user',
        id: 'id3'
      }]);  
    
    const chatMessagesRef = useRef(null);

    useEffect(() => {
      const containerElem = chatMessagesRef.current;
      containerElem.scrollTop = containerElem.scrollHeight;
    }, [chatMessagesRef]);


    return (
      <div
       style={{
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0px',
        marginBottom: '0px',

        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
       }}
       ref={chatMessagesRef}
      >
        <div style={{
          flexGrow: '1',
          marginTop: '20px',
          overflow: 'scroll',
          scrollbarWidth: 'none'
        }}>
          {
            ChatMessages.map(({ message, sender, id }) => {
              return (
                <ChatMessage 
                  key={id} 
                  message={message} 
                  sender={sender} 
                />
              )
            })
          }
        </div>
        <ChatInput 
          ChatMessages={ChatMessages} 
          setChatMessages={setChatMessages}
          style={{
            display: 'flex',
            marginBottom: '60px'
          }}
       />
      </div>
    );
  }

export default App;
