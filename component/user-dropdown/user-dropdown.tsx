"use client";

import Button from "@/component/button";

const UserDropdown = () => {
  const isAuth = false;
  const renderView = () => {
    if (isAuth) {
      return <div>avatar</div>;
    }
    return (
      <div className="flex items-center gap-2">
        <Button>Login</Button>
        <Button>Sign up</Button>
      </div>
    );
  };
  return <div>{renderView()}</div>;
};

export default UserDropdown;
