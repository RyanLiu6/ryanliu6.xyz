import classNames from "classnames";

import Menu from "@/components/Menu";
import Navigation from "@/components/Navigation";
import ThemeIcon from "@/components/ThemeIcon";
import { marginalBorder, shadowBorder } from "@/components/utils";

const Header = () => {
  const headerClass = classNames(marginalBorder, "flex flex-row w-full relative justify-between")
  const navClass = classNames(shadowBorder, "hidden md:flex")
  const menuClass = classNames(shadowBorder, "flex md:hidden")

  return (
    <header className={headerClass}>
      <section className="flex flex-1 justify-center">
        <div className={navClass}>
          <Navigation />
        </div>
        <div className={menuClass}>
          <Menu />
        </div>
      </section>
      <section>
        <ThemeIcon />
      </section>
    </header>
  )
}

export default Header;
