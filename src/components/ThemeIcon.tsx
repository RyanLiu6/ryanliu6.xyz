import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export enum Themes {
  theme = "theme",
  light = "light",
  dark = "dark",
}

const ThemeIcon = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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

export default ThemeIcon;
