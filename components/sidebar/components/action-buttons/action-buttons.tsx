"use client";

import IconButton from "@/components/icon-button";
import SideBarLineIcon from "remixicon-react/SideBarLineIcon";
import EditBoxLineIcon from "remixicon-react/EditBoxLineIcon";

const ActionButtons = () => (
  <div className="flex justify-between pb-3">
    <IconButton className="hover:bg-hover rounded-lg p-1.5">
      <SideBarLineIcon size={22} />
    </IconButton>
    <IconButton className="hover:bg-hover rounded-lg p-1.5">
      <EditBoxLineIcon size={22} />
    </IconButton>
  </div>
);

export default ActionButtons;
