import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Same key `next-themes` uses in `localStorage` (see `storageKey` below). */
export const THEME_STORAGE_KEY = "vite-ui-theme";

type Props = ThemeProviderProps;

/**
 * shadcn-style theming: toggles the `dark` class on `document.documentElement`
 * so tokens under `.dark { ... }` in your CSS apply.
 *
 * @see https://ui.shadcn.com/docs/dark-mode
 */
export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey={THEME_STORAGE_KEY}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export { useTheme } from "next-themes";
