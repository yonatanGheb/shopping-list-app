import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const themeToggleButtonClass =
  "inline-flex size-10 shrink-0 items-center justify-center rounded border-2 border-border bg-transparent shadow-none outline-none transition-colors hover:bg-muted/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  function toggle() {
    setTheme(isDark ? "light" : "dark");
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(themeToggleButtonClass, className)}
        disabled
        aria-label="Toggle theme"
      >
        <Moon className="size-[1.05rem] text-foreground" aria-hidden />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(themeToggleButtonClass, className)}
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Heller Modus" : "Dunkler Modus"}
    >
      {isDark ? (
        <Sun className="size-[1.05rem] text-foreground" aria-hidden />
      ) : (
        <Moon className="size-[1.05rem] text-foreground" aria-hidden />
      )}
    </button>
  );
}
