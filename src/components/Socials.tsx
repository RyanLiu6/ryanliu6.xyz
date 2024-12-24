import { RedirectButton } from "@ryanliu6/xi";

const Socials = () => {
  return (
    <>
      <RedirectButton href="https://www.linkedin.com/in/ryanliu6/" title="View my LinkedIn Profile">
        <img
          height="24"
          width="24"
          alt="LinkedIn Icon"
          src="https://unpkg.com/boxicons@2.1.4/svg/logos/bxl-linkedin.svg"
          style={{
            filter:
              "invert(32%) sepia(14%) saturate(532%) hue-rotate(176deg) brightness(94%) contrast(88%)",
          }}
          className="flex dark:hidden"
        />
        <img
          height="24"
          width="24"
          alt="LinkedIn Icon"
          src="https://unpkg.com/boxicons@2.1.4/svg/logos/bxl-linkedin.svg"
          style={{
            filter:
              "invert(89%) sepia(3%) saturate(151%) hue-rotate(213deg) brightness(94%) contrast(93%)",
          }}
          className="hidden dark:flex"
        />
      </RedirectButton>

      <RedirectButton href="https://www.github.com/ryanliu6" title="View my GitHub Profile">
        <img
          height="24"
          width="24"
          alt="GitHub Logo"
          src="https://cdn.simpleicons.org/github/475569"
          className="flex dark:hidden"
        />
        <img
          height="24"
          width="24"
          alt="GitHub Logo"
          src="https://cdn.simpleicons.org/github/d4d4d8"
          className="hidden dark:flex"
        />
      </RedirectButton>

      <RedirectButton href="mailto:ryan@ryanliu6.xyz" title="Email me!">
        <img
          height="24"
          width="24"
          alt="Mail Logo"
          src="https://cdn.simpleicons.org/protonmail/475569"
          className="flex dark:hidden"
        />
        <img
          height="24"
          width="24"
          alt="Mail Logo"
          src="https://cdn.simpleicons.org/protonmail/d4d4d8"
          className="hidden dark:flex"
        />
      </RedirectButton>

      <RedirectButton href="/Resume.pdf" title="View my Resume">
        <img
          height="24"
          width="24"
          alt="File Logo"
          src="https://cdn.simpleicons.org/googledocs/475569"
          className="flex dark:hidden"
        />
        <img
          height="24"
          width="24"
          alt="File Logo"
          src="https://cdn.simpleicons.org/googledocs/d4d4d8"
          className="hidden dark:flex"
        />
      </RedirectButton>
    </>
  );
};

export default Socials;
