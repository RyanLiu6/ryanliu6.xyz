import classNames from "classnames";

export const navList = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Plamo", href: "/plamo" },
]

export const textClass = classNames("text-slate-600 dark:text-slate-200")

export const backgroundClass = classNames("bg-violet-50/50 dark:bg-slate-900")

export const baseBorder = classNames("relative mx-auto max-w-screen-lg px-6 py-6");

export const bodyBorder = classNames(baseBorder, "sm:px-6 lg:px-8")
// export const bodyBorder = classNames(baseBorder, "sm:px-6 lg:px-8 flex flex-col flex-1 items-center")

export const marginalBorder = classNames(baseBorder, textClass);

export const mainBorder = classNames(textClass, backgroundClass, "min-h-screen")

export const shadowBorder = classNames("rounded-full px-6 py-2 shadow-lg bg-fuchsia-200/20 dark:bg-zinc-700");
