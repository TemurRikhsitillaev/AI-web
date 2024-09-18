"use client";

import IconButton from "@/components/icon-button";
import SideBarLineIcon from "remixicon-react/SideBarLineIcon";
import { setCookie, getCookie } from "cookies-next";
import UserDropdown from "../user-dropdown/user-dropdown";

const Header = () => (
  <header className="px-5 py-3 flex justify-between">
    <IconButton onClick={() => setCookie("isSidebarOpen", !getCookie("isSidebarOpen"))}>
      <SideBarLineIcon />
    </IconButton>
    <UserDropdown />
  </header>
);

export default Header;
