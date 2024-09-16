"use client";

import Loading from "@/assets/icons/loading";
import IconButton from "@/components/icon-button";
import { useState } from "react";
import ArrowUpLineIcon from "remixicon-react/ArrowUpLineIcon";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const loading = false;
  return (
    <div className="w-full flex gap-2 border border-border flex items-center px-2.5 rounded-full">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="block bg-transparent w-full py-3.5 px-2 focus:outline-none"
        placeholder="Type your question here..."
      />
      <IconButton
        className="text-black !bg-white rounded-full min-w-8 min-h-8 max-w-8 max-h-8 flex items-center justify-center disabled:opacity-30"
        disabled={!inputValue?.length}
      >
        {!loading ? <ArrowUpLineIcon size={22} /> : <Loading size={40} spinnerColor="#000" />}
      </IconButton>
    </div>
  );
};

export default Input;
