import clsx from "clsx";

interface MessageProps {
  text?: string;
  isResponce?: boolean;
}

const Message = ({ text, isResponce = true }: MessageProps) => (
  <div
    className={clsx("max-w-[70%] w-fit px-5 py-2.5 rounded-3xl", isResponce && "bg-userResponse")}
  >
    <p className="whitespace-pre-wrap">{text}</p>
  </div>
);

export default Message;
