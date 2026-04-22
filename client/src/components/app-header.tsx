import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const SHELL = "mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-10";

export function AppHeader() {
  return (
    <header className="w-full">
      <div
        className={cn(
          SHELL,
          "bg-transparent pt-3 pb-1 sm:pt-4 sm:pb-1.5",
        )}
      >
        <div
          className="flex items-center justify-between gap-3 py-2 sm:py-3"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex min-w-0 flex-1 items-center pr-2">
            <BrandLogo />
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
