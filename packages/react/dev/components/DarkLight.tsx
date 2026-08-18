import { MoonStar, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

export function DarkLight() {
  const { isDark, toggle } = useTheme();

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        toggle();
      }}
    >
      {isDark() ? <Sun style={{ color: "yellow" }} /> : <MoonStar style={{ color: "black" }} />}
    </div>
  );
}
