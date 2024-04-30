import { useState, useLayoutEffect } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

import { buttonClass } from "@/components/common/utils";

export enum Themes {
  theme = "theme",
  light = "light",
  dark = "dark",
}

const ThemeIcon = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem(Themes.theme) || Themes.dark
    setDarkMode(storedTheme == Themes.dark);
  }, []);

  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(Themes.theme, Themes.dark);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(Themes.theme, Themes.light);
    }
  }, [darkMode]);

  return (
    <button onClick={toggleTheme} className={buttonClass}>
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
