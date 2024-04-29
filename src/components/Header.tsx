import classNames from "classnames";

import Menu from "@/components/Menu";
import Navigation from "@/components/Navigation";
import ThemeIcon from "@/components/ThemeIcon";
import { marginalBorder, shadowBorder } from "@/components/utils";

const Header = () => {
  const headerClass = classNames(marginalBorder, "flex flex-col")
  const navClass = classNames(shadowBorder, "hidden md:flex")
  const menuClass = classNames(shadowBorder, "flex md:hidden")

  return (
    <header>
      <div className={headerClass}>
      <div className="relative flex justify-between">
        <div className="flex justify-center flex-1">
          <Navigation extraClass={navClass} />
          <Menu extraClass={menuClass} />
        </div>
        <ThemeIcon />
      </div>
    </div>
    </header>
  )
}

export default Header;
