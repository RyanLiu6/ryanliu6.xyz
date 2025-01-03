import classNames from "classnames";

import { ThemeIcon, IconedPopover } from "@ryanliu6/xi";
import { linkStyle, marginalBorder, shadowBorder } from "@ryanliu6/xi/styles";

const navList = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "md", href: "/markdown" },
  { name: "Plamo", href: "/plamo" },
];

const Header = () => {
  const headerClass = classNames(marginalBorder, "flex flex-row w-full relative justify-between");
  const navClass = classNames(shadowBorder, "hidden md:flex text-base");
  const menuClass = classNames(shadowBorder, "flex md:hidden");

  return (
    <header className={headerClass}>
      <section className="flex flex-1 justify-center">
        {/* Regular Navigation */}
        <div className={navClass}>
          <nav className="flex flex-row flex-wrap gap-6">
            {navList.map((item) => (
              <a className={linkStyle} key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        {/* Mobile Navigation  */}
        <div className={menuClass}>
          <IconedPopover text="Menu">
            {navList.map((item) => (
              <div
                key={item.name}
                className="justify-center group relative flex gap-x-6 rounded-lg p-4 hover:bg-fuchsia-200/20 hover:dark:bg-zinc-700"
              >
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
  );
};

export default Header;
