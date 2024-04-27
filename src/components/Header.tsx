import classNames from "classnames";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

import Menu from "@/components/Menu";
import Navigation from "@/components/Navigation";
import { marginalBorder } from "@/components/utils";

const Header = () => {
  const headerClass = classNames(marginalBorder, "flex flex-col items-center justify-between gap-6")

  return (
    <header>
      <div className={headerClass}>
        <Navigation extraClass="hidden md:flex" />

        <Menu extraClass="flex md:hidden" />

        <button>
          <SunIcon />
          <MoonIcon />
        </button>
      </div>
    </header>
  )
}

export default Header;
