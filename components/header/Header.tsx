import { FC } from "react";
import Logo from "./Logo";
import Menus from "./Menus";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  let menus_list = [{ name: "Home" }, { name: "About" }, { name: "Contact" }, {name: 'Skills'}, {name: 'Portfolio'}, {name: 'Blog'}];

  return (
    <div className="bg-primary py-6 px-6 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo />
        <Menus menus={menus_list} />
      </div>
    </div>
  );
};

export default Header;
