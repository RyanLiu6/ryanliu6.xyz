import { useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <button onClick={toggleTheme}>
      {darkMode ? (
        <>
          <SunIcon className="h-6 w-6" />
        </>
        ) : (
        <>
          <MoonIcon className="h-6 w-6" />
        </>
      )}
    </button>
  )
}

export default ThemeButton;
