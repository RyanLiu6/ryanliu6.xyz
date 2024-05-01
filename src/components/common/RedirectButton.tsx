import type { ReactNode } from "react";

import TextLink from "@/components/common/TextLink";
import BorderedButton from "@/components/common/BorderedButton";

interface RedirectButtonProps {
  href: string,
  title: string,
  children: ReactNode,
}

const RedirectButton = ({ href, title, children }: RedirectButtonProps) => {
  return (
    <BorderedButton>
      <TextLink
        href={href}
        title={title}
      >
        {children}
      </TextLink>
    </BorderedButton>
  )
}

export default RedirectButton;
