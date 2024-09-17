interface PromptProps {
  text: string;
}

const Prompt = ({ text }: PromptProps) => (
  <div className="max-w-[85%] md:max-w-[70%] w-fit px-5 py-2.5 rounded-3xl bg-prompt">
    <p className="whitespace-pre-wrap">{text}</p>
  </div>
);

export default Prompt;
