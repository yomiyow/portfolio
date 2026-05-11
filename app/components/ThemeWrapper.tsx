'use client'

import { useTheme } from "../context/ThemeContext";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      {children}
    </div>
  )
};

export default ThemeWrapper;