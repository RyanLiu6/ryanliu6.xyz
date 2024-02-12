import { ReactNode } from "react";

export function Conditional(props: { show: boolean, trueChildren: ReactNode, falseChildren: ReactNode }) {
  if (props.show) {
    return <>{props.trueChildren}</>;
  } else {
    return <>{props.falseChildren}</>;
  }
}
