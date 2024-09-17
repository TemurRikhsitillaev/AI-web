import Prompt from "./prompt";
import Response from "./response";

interface MessageProps {
  text: string;
  isResponce?: boolean;
}

const Message = ({ text, isResponce = true }: MessageProps) =>
  isResponce ? <Response text={text} /> : <Prompt text={text} />;

export default Message;
