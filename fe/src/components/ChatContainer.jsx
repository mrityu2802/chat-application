import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [getMessages, selectedUser._id]);

  if (isMessagesLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />
      <p>messages....</p>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
