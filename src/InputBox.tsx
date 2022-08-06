import { ChangeEvent } from "react";

interface InputBoxProps {
  error: boolean;
  text: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ text, error, onChange }: InputBoxProps) => {
  return (
    <input
      className={`h-10 rounded text-center ${
        text.length > 0 ? (error ? "bg-red-400" : "bg-green-400") : ""
      }`}
      autoFocus
      onChange={onChange}
      value={text}
    />
  );
};
