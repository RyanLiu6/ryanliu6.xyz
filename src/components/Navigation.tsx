import classNames from "classnames";

import { navList } from "@/components/utils";

interface NavigationProps {
  extraClass?: string,
}

const Navigation = ({ extraClass }: NavigationProps) => {
  const linkClassName = classNames("transition", "hover:text-cyan-500")

  let navClass = classNames("flex", "flex-wrap", "justify-center", "gap-6")
  if (extraClass) {
    navClass = classNames(navClass, extraClass)
  }

  return (
    <nav className={navClass}>
      {navList.map((item) => (
        <a className={linkClassName} key={item.name} href={item.href}>{item.name}</a>
      ))}
    </nav>
  )
}

export default Navigation;
