import RedirectButton from "@/components/RedirectButton";

const Socials = () => {
  return (
    <>
      <RedirectButton
        href="https://www.linkedin.com/in/ryanliu6/"
        title="View my LinkedIn Profile"
      >
        <img height="32" width="32" alt="LinkedIn Icon" src="https://cdn.simpleicons.org/linkedin/gray" />
      </RedirectButton>

      <RedirectButton
        href="https://www.github.com/ryanliu6"
        title="View my GitHub Profile"
      >
        <img height="32" width="32" alt="GitHub Icon" src="https://cdn.simpleicons.org/github/gray" />
      </RedirectButton>

      <RedirectButton
        href="mailto:ryan@ryanliu6.xyz"
        title="Email me!"
      >
        <img height="32" width="32" alt="Mail Icon" src="https://cdn.simpleicons.org/protonmail/gray" />
      </RedirectButton>

      <RedirectButton
        href="/Resume.pdf"
        title="View my Resume"
      >
        <img height="32" width="32" alt="File Icon" src="https://cdn.simpleicons.org/libreofficewriter/gray" />
      </RedirectButton>
    </>
  )
}

export default Socials;
