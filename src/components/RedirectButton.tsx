import type { ReactNode } from "react";

interface RedirectButtonProps {
  href: string,
  title: string,
  children: ReactNode,
}

const RedirectButton = ({ href, title, children }: RedirectButtonProps) => {
  return (
    <button>
      <a
        href={href}
        rel="_noopener"
        target="_blank"
        title={title}
        className="flex rounded-lg p-2 transition hover:bg-fuchsia-200/20 hover:dark:bg-zinc-700 hover:shadow-lg"
      >
        {children}
      </a>
    </button>
  )
}

export default RedirectButton;
