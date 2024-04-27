import classNames from "classnames";

export const baseBorder = classNames("relative", "mx-auto", "max-w-screen-xl", "px-4", "py-6");

export const contentBorder = classNames(baseBorder, "bg-white", "rounded-lg", "shadow-md");

export const bodyBorder = classNames(baseBorder, "sm:px-6", "lg:px-8")

export const marginalBorder = classNames(bodyBorder, "text-gray-500");

export const navList = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Plamo", href: "/plamo" },
]
