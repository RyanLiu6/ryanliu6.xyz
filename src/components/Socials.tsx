import RedirectButton from "@/components/RedirectButton";

const Socials = () => {
  return (
    <div className="flex flex-row gap-6">
      <RedirectButton
        href="https://www.linkedin.com/in/ryanliu6/"
        title="View my LinkedIn Profile"
      >
        <img height="32" width="32" src="https://cdn.simpleicons.org/linkedin/gray" />
      </RedirectButton>

      <RedirectButton
        href="https://www.github.com/ryanliu6"
        title="View my GitHub Profile"
      >
        <img height="32" width="32" src="https://cdn.simpleicons.org/github/gray" />
      </RedirectButton>

      <RedirectButton
        href="mailto:ryan@ryanliu6.xyz"
        title="Email me!"
      >
        <img height="32" width="32" src="https://cdn.simpleicons.org/protonmail/gray" />
      </RedirectButton>

      <RedirectButton
        href="/Resume.pdf"
        title="View my Resume"
      >
        <img height="32" width="32" src="https://cdn.simpleicons.org/libreofficewriter/gray" />
      </RedirectButton>
    </div>
  )
}

export default Socials;