"use client";

import { createContext, ReactNode, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
}

export const useTheme = () => useContext(ThemeContext);
