import classNames from "classnames";

export const navList = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Plamo", href: "/plamo" },
]

export const textClass = classNames("font-roboto text-slate-600 dark:text-zinc-300")

export const mdClass = classNames(textClass, "prose dark:prose-invert max-w-none");

export const backgroundClass = classNames("bg-violet-50/50 dark:bg-slate-900")

export const buttonClass = classNames("flex rounded-lg p-2 transition hover:bg-rose-300/30 hover:dark:bg-fuschia-700 hover:shadow-lg")

export const linkClass = classNames("font-bold", "transition", "hover:text-cyan-500")

export const flexClass = classNames("flex flex-col flex-1")

export const shadowBorder = classNames("rounded-2xl px-6 py-2 shadow-lg bg-rose-300/30 dark:bg-fuschia-700");

export const bodyBorder = classNames(flexClass, textClass, backgroundClass, "min-h-screen")

export const mainBorder = classNames(flexClass, "items-center px-6 lg:px-8")

export const marginalBorder = classNames(textClass, "relative mx-auto max-w-screen-md px-6 py-6");
