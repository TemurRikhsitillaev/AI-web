import sampleChatContent from "@/sample-db/chats.json";
import Message from "./components/message";

const ChatInfo = () => {
  if (!sampleChatContent.length) return null;
  return (
    <div className="h-[calc(100%-54px-20px)] w-full mb-5 overflow-y-auto flex flex-col gap-5">
      {sampleChatContent.map((chat) => (
        <>
          <article
            className="mx-auto md:max-w-3xl w-full flex justify-end items-end"
            key={`${chat.id}_prompt`}
          >
            <Message text={chat.question} isResponce={false} />
          </article>
          <article className="mx-auto md:max-w-3xl w-full" key={`${chat.id}_response`}>
            <Message text={chat.response} />
          </article>
        </>
      ))}
    </div>
  );
};

export default ChatInfo;
