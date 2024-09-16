import sampleChatContent from "@/sample-db/chats.json";
import Message from "./components/message";

const ChatInfo = () => (
  <div className="h-[calc(100%-54px-20px)] w-full mb-5 overflow-y-auto flex flex-col gap-5">
    {sampleChatContent.map((chat) => (
      <div key={chat.id} className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <Message text={chat.question} />
        </div>
        <div className="flex">
          <Message text={chat.response} isResponce={false} />
        </div>
      </div>
    ))}
  </div>
);

export default ChatInfo;
