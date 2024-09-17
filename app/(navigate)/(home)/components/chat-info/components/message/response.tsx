interface ResponseProps {
  text: string;
}

const Response = ({ text }: ResponseProps) => (
  <div className="w-full px-5 py-2.5 rounded-3xl">
    <p className="whitespace-pre-wrap">{text}</p>
  </div>
);

export default Response;
