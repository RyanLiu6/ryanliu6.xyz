import { RedirectButton } from "@ryanliu6/xi";

interface SocialLink {
  href: string;
  title: string;
  alt: string;
  lightSrc: string;
  darkSrc: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/ryanliu6/",
    title: "View my LinkedIn Profile",
    alt: "LinkedIn Icon",
    lightSrc: "https://unpkg.com/boxicons@2.1.4/svg/logos/bxl-linkedin.svg",
    darkSrc: "https://unpkg.com/boxicons@2.1.4/svg/logos/bxl-linkedin.svg",
  },
  {
    href: "https://www.github.com/ryanliu6",
    title: "View my GitHub Profile",
    alt: "GitHub Logo",
    lightSrc: "https://cdn.simpleicons.org/github/475569",
    darkSrc: "https://cdn.simpleicons.org/github/d4d4d8",
  },
  {
    href: "mailto:ryan@ryanliu6.xyz",
    title: "Email me!",
    alt: "Mail Logo",
    lightSrc: "https://cdn.simpleicons.org/protonmail/475569",
    darkSrc: "https://cdn.simpleicons.org/protonmail/d4d4d8",
  },
  {
    href: "/Resume.pdf",
    title: "View my Resume",
    alt: "File Logo",
    lightSrc: "https://cdn.simpleicons.org/googledocs/475569",
    darkSrc: "https://cdn.simpleicons.org/googledocs/d4d4d8",
  },
];

const linkedInFilter = {
  light: "invert(32%) sepia(14%) saturate(532%) hue-rotate(176deg) brightness(94%) contrast(88%)",
  dark: "invert(89%) sepia(3%) saturate(151%) hue-rotate(213deg) brightness(94%) contrast(93%)",
};

const Socials = () => {
  return (
    <>
      {socialLinks.map(({ href, title, alt, lightSrc, darkSrc }) => {
        const isLinkedIn = href.includes("linkedin");

        return (
          <RedirectButton key={href} href={href} title={title}>
            <img
              height="24"
              width="24"
              alt={alt}
              src={lightSrc}
              style={isLinkedIn ? { filter: linkedInFilter.light } : undefined}
              className="flex dark:hidden"
            />
            <img
              height="24"
              width="24"
              alt={alt}
              src={darkSrc}
              style={isLinkedIn ? { filter: linkedInFilter.dark } : undefined}
              className="hidden dark:flex"
            />
          </RedirectButton>
        );
      })}
    </>
  );
};

export default Socials;
