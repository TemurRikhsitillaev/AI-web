"use client";

import { Button } from "@/components/button";
import Avatar from "../avatar";

const UserDropdown = () => {
  const isAuth = false;
  const renderView = () => {
    if (isAuth) {
      return (
        <button className="w-10 h-10">
          <Avatar
            user={{
              image: "",
              firstName: "John",
              lastName: "Doe",
            }}
          />
        </button>
      );
    }
    return (
      <div className="flex gap-2">
        <Button color="primary">Login</Button>
        <Button>Sign up</Button>
      </div>
    );
  };
  return <div>{renderView()}</div>;
};

export default UserDropdown;
