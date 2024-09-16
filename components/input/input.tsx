interface InputProps {
  value?: string;
  onChange: (value: string) => void;
}

const Input = ({ value, onChange }: InputProps) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);

export default Input;
