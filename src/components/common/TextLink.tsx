import type { ReactNode } from "react";

interface LinkProps {
  href: string,
  title: string,
  children: ReactNode
}

const TextLink = ({ href, title, children }: LinkProps) => {
  return (
    <a
      className="font-bold underline underline-offset-2"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      {children}
    </a>
  )
}

export default TextLink;
