// import React, { useState, useEffect } from 'react';
// import { getDatabase, ref, push, onValue, off } from "firebase/database";

// const ChatRoom = () => {
//   const [newMessage, setNewMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const db = getDatabase();
//     const messagesRef = ref(db, 'chatRoom1/messages');

//     // Listen for new messages
//     onValue(messagesRef, (snapshot) => {
//       const data = snapshot.val();
//       const loadedMessages = [];
//       for (const key in data) {
//         loadedMessages.push({ id: key, ...data[key] });
//       }
//       setMessages(loadedMessages);
//     });

//     // Clean up listener
//     return () => off(messagesRef);
//   }, []);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const db = getDatabase();
//     push(ref(db, 'chatRoom1/messages'), {
//       text: newMessage,
//       timestamp: Date.now(),
//       // Add other relevant user data (e.g., username)
//     });
//     setNewMessage('');
//   };

//   return (
//     <div>
//       <ul>
//         {messages.map((message) => (
//           <li key={message.id}>{message.text}</li>
//         ))}
//       </ul>
//       <form onSubmit={sendMessage}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatRoom;

import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push } from 'firebase/database';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]); // Holds chat messages
  const [newMessage, setNewMessage] = useState(''); // Holds the new message input

  useEffect(() => {
    const db = getDatabase();
    const messagesRef = ref(db, 'chats/chatRoom1/messages'); // Adjust the path as needed

    // Listen for messages
    onValue(messagesRef, (snapshot) => {
      const messagesList = [];
      snapshot.forEach(childSnapshot => {
        messagesList.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      setMessages(messagesList);
    });

    return () => {
      // Clean up the listener
    };
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    // Push a new message to Firebase
    const db = getDatabase();
    await push(ref(db, 'chats/chatRoom1/messages'), {
      text: newMessage,
      timestamp: Date.now(),
      userId: 'user-id-here', // You should replace this with the actual user ID
    });
    setNewMessage(''); // Clear the message input field
  };

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li> // Display each message
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
