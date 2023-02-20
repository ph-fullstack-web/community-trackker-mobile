import { ThemeProvider as DefaultThemeProvider } from "@rneui/themed";

type ThemeProviderProps = ComponentWithChildren & {
  theme?: object
};

export const ThemeProvider = ({children, theme}: ThemeProviderProps) => {
  return <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>
}