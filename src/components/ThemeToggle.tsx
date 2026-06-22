import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ floating = false }: { floating?: boolean }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "dark"
      | "light"
      | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`group relative inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-2 text-foreground/80 hover:text-bronze hover:border-bronze transition-all duration-500 ${
        floating
          ? "fixed bottom-6 right-6 z-50 glass shadow-luxe"
          : ""
      }`}
    >
      <span className="relative inline-block size-4">
        <Sun
          className={`absolute inset-0 size-4 transition-all duration-500 ${
            theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
          strokeWidth={1.5}
        />
        <Moon
          className={`absolute inset-0 size-4 transition-all duration-500 ${
            theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
          }`}
          strokeWidth={1.5}
        />
      </span>
      <span className="text-[0.6rem] tracking-[0.22em] uppercase font-medium hidden sm:inline">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
