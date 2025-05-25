
import React, { useState } from "react";

const ChatBox = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onSend({ senderName: "Learner", text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border rounded-l"
        placeholder="Type your message..."
      />
      <button className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700">Send</button>
    </form>
  );
};

export default ChatBox;
