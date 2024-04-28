import classNames from "classnames";

import Socials from "@/components/Socials";
import { marginalBorder } from "@/components/utils";

const Footer = () => {
  const currYear = new Date().getFullYear();
  const footerClass = classNames(marginalBorder, "flex flex-col items-center justify-center")

  return (
    <footer>
      <div className={footerClass}>
        <div>
          <Socials />
        </div>
        <div>
          <p className="text-sm">
            &copy; {currYear} Ryan Liu.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
