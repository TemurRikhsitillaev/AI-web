import Prompt from "./prompt";
import Response from "./response";

interface MessageProps {
  text: string;
  isResponse?: boolean;
}

const Message = ({ text, isResponse = true }: MessageProps) =>
  isResponse ? <Response text={text} /> : <Prompt text={text} />;

export default Message;
