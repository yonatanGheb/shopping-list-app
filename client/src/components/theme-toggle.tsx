import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/retroui/Button";
import { cn } from "@/lib/utils";

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
      <Button
        type="button"
        variant="default"
        size="icon"
        className={cn("size-10 min-h-10 min-w-10 shrink-0", className)}
        disabled
        aria-label="Toggle theme"
      >
        <Moon className="size-[1.05rem]" aria-hidden />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="default"
      size="icon"
      className={cn("size-10 min-h-10 min-w-10 shrink-0", className)}
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <Sun className="size-[1.05rem]" aria-hidden />
      ) : (
        <Moon className="size-[1.05rem]" aria-hidden />
      )}
    </Button>
  );
}
