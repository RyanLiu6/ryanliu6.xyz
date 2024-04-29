import type { ReactNode } from "react";

import { buttonClass } from "@/components/utils";

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
        rel="_noopener noreferrer"
        target="_blank"
        title={title}
        className={buttonClass}
      >
        {children}
      </a>
    </button>
  )
}

export default RedirectButton;
