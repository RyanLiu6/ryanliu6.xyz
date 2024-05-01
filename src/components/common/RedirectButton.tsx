import type { ReactNode } from "react";

import BorderedButton from "@/components/common/BorderedButton";

interface RedirectButtonProps {
  href: string,
  title: string,
  children: ReactNode,
}

const RedirectButton = ({ href, title, children }: RedirectButtonProps) => {
  return (
    <BorderedButton>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
      >
        {children}
      </a>
    </BorderedButton>
  )
}

export default RedirectButton;
