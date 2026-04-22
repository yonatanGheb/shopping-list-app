import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  alt?: string;
  variant?: "light" | "dark";
};

export function BrandLogo({
  className,
  variant,
  alt = "Shopping list",
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const darkUi = variant !== undefined ? variant === "dark" : isDark;
  const base = import.meta.env.BASE_URL;
  const src = `${base}images/${darkUi ? "logo-dark" : "logo-light"}.svg`;

  return (
    <img
      src={src}
      alt={alt}
      width={3924}
      height={1057}
      decoding="async"
      className={cn(
        "block h-9 w-auto max-h-11 max-w-full shrink-0 object-contain object-left sm:h-10 md:h-11",
        className,
      )}
    />
  );
}
