import type { ReactNode } from "react";

import { buttonClass } from "@/components/common/utils";

interface BorderedButtonProps {
  id?: string
  children: ReactNode,
}

const BorderedButton = ({ id, children }: BorderedButtonProps) => {
  return (
    <button id={id ? id : undefined} className={buttonClass}>
      {children}
    </button>
  )
}

export default BorderedButton;
