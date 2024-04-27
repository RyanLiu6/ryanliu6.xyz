import classNames from "classnames";

import Navigation from "@/components/Navigation";
import { marginalBorder } from "@/components/utils";

const Footer = () => {
  const currYear = new Date().getFullYear();
  const footerClass = classNames(marginalBorder, "flex flex-col items-center justify-between gap-6 sm:flex-row")

  return (
    <footer>
      <hr />
      <div className={footerClass}>
        <Navigation />
        <p className="text-sm">
          &copy; {currYear} Ryan Liu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
