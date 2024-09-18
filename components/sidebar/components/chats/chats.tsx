"use client";

import { Chat as ChatType } from "@/types/chat";
import { ChatCard } from "./chat-card";

interface ChatsProps {
  chats: ChatType[];
}

const Chats = ({ chats }: ChatsProps) => (
  <div className="flex-1 flex-col gap-[1px] overflow-hidden">
    {chats.map((chat) => (
      <ChatCard key={chat.uuid} chat={chat} />
    ))}
  </div>
);

export default Chats;
