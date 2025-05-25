
import React from "react";

const ChatLog = ({ messages }) => {
  return (
    <div className="bg-gray-100 p-4 h-64 overflow-y-scroll rounded shadow mb-4">
      {messages.map((msg, idx) => (
        <div key={idx} className="mb-2">
          <span className="font-semibold">{msg.senderName || "User"}:</span> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatLog;
