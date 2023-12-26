import React from "react";

import { IconType } from "react-icons";

interface AuthenSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthenSocialButton: React.FC<AuthenSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 to-gray-500 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-green-50 focus:outline-offset-0"
    >
      <Icon />
    </button>
  );
};

export default AuthenSocialButton;
