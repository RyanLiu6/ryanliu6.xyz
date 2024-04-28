import classNames from "classnames";

import Menu from "@/components/Menu";
import Navigation from "@/components/Navigation";
import ThemeButton from "@/components/Theme";
import { marginalBorder } from "@/components/utils";

const Header = () => {
  const headerClass = classNames(marginalBorder, "flex flex-col")

  return (
    <header>
      <div className={headerClass}>
      <div className="relative flex justify-between">
        <div className="flex justify-center flex-1">
          <Navigation extraClass="hidden md:flex" />
          <Menu extraClass="flex md:hidden" />
        </div>
        <ThemeButton />
      </div>
    </div>
    </header>
  )
}

export default Header;
