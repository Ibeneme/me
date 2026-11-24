/**
 * Colour is taxonomy: each discipline owns exactly one hue.
 * Brand = green · Mobile = pink · Web = blue · Backend = orange · AI = lilac
 */
export type Discipline = "brand" | "mobile" | "web" | "backend" | "ai";

export const DISCIPLINES: Record<Discipline, { label: string; color: string; from: string; to: string }> = {
  brand: { label: "Ibeneme", color: "#0ae448", from: "#0ae448", to: "#abff84" },
  mobile: { label: "Mobile", color: "#fec5fb", from: "#00bae2", to: "#fec5fb" },
  web: { label: "Web", color: "#00bae2", from: "#00bae2", to: "#abff84" },
  backend: { label: "Backend", color: "#ff8709", from: "#ff8709", to: "#ffc46b" },
  ai: { label: "AI", color: "#9d95ff", from: "#9d95ff", to: "#fec5fb" },
};
