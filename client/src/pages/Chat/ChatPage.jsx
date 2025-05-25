
import React, { useState, useContext, useEffect } from "react";
import { SocketContext } from "../../context/SocketContext";
import ChatBox from "../../components/Chat/ChatBox";
import ChatLog from "../../components/Chat/ChatLog";

const ChatPage = () => {
  const { socket } = useContext(SocketContext);
  const [messages, setMessages] = useState([]);
  const roomId = "react-course-room"; // static room for now

  useEffect(() => {
    socket.emit("joinRoom", roomId);
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receiveMessage");
  }, [socket]);

  const sendMessage = (msg) => {
    socket.emit("sendMessage", { roomId, message: msg });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Live Chat</h2>
      <ChatLog messages={messages} />
      <ChatBox onSend={sendMessage} />
    </div>
  );
};

export default ChatPage;
