import { Chat } from "@/types/chat";
import Link from "next/link";
import clsx from "clsx";
import IconButton from "@/components/icon-button";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import React from "react";

interface ChatCardProps {
  chat?: Chat;
  active?: boolean;
}

export const ChatCard = ({ chat, active = false }: ChatCardProps) => {
  const onOptionsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <Link
      href={`/chat/${chat?.uuid}`}
      className={clsx(
        "w-full hover:bg-hover p-2 rounded-lg text-sm font-medium flex justify-between items-center gap-2 group",
        active ? "bg-hover" : "bg-transparent"
      )}
    >
      <div className="line-clamp-1">{chat?.title}</div>
      <IconButton className="group-hover:block hidden" onClick={onOptionsClick}>
        <MoreLineIcon size={20} />
      </IconButton>
    </Link>
  );
};
