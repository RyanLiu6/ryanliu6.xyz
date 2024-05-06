import classNames from "classnames";

import ThemeIcon from "@/components/ThemeIcon";
import Navigation from "@/components/Navigation";
import IconedPopover from "@/components/common/Popover";
import { marginalBorder, navList, shadowBorder } from "@/components/common/utils";

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
          <IconedPopover text="Menu">
            {navList.map((item) => (
              <div key={item.name} className="justify-center group relative flex gap-x-6 rounded-lg p-4 hover:bg-fuchsia-200/20 hover:dark:bg-zinc-700">
                <a href={item.href} className="font-semibold">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              </div>
            ))}
          </IconedPopover>
        </div>
      </section>
      <section className="flex flex-row">
        <ThemeIcon />
      </section>
    </header>
  )
}

export default Header;
