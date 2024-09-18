import sampleChatContent from "@/sample-db/chat.json";
import Message from "./components/message";

const ChatInfo = () => {
  if (!sampleChatContent.length) return null;
  return (
    <div className="h-[calc(100%-54px-20px)] w-full mb-5 overflow-y-auto flex flex-col gap-5 md:px-0 px-4">
      {sampleChatContent.map((chat) => (
        <>
          <article
            className="mx-auto md:max-w-3xl w-full flex justify-end items-end"
            key={`${chat.id}_prompt`}
          >
            <Message text={chat.question} isResponse={false} />
          </article>
          <article
            className="mx-auto md:max-w-3xl w-full flex justify-start"
            key={`${chat.id}_response`}
          >
            <Message text={chat.response} />
          </article>
        </>
      ))}
    </div>
  );
};

export default ChatInfo;
