import type { ReactNode } from "react";

import { buttonClass } from "@/components/common/utils";

interface BorderedButtonProps {
  children: ReactNode,
}

const BorderedButton = ({ children }: BorderedButtonProps) => {
  return (
    <button className={buttonClass}>
      {children}
    </button>
  )
}

export default BorderedButton;
