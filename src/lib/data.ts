import { siteConfig } from "./site-config";
import type { NavItem, PublicRoute } from "./types";

export { siteConfig };

export const publicRoutes: {
  href: PublicRoute;
  label: string;
  priority: number;
}[] = [
  { href: "/", label: "Home", priority: 1 },
  { href: "/switch", label: "Switch", priority: 0.8 },
  { href: "/ps5", label: "PS5", priority: 0.8 },
  { href: "/multiplayer", label: "Multiplayer", priority: 0.8 },
  { href: "/beginner-guide", label: "Beginner Guide", priority: 0.8 },
  { href: "/romance-guide", label: "Romance Guide", priority: 0.8 },
  { href: "/samael-romance", label: "Samael Romance", priority: 0.8 },
  { href: "/treasure-hunt-clues", label: "Treasure Hunt", priority: 0.8 },
  { href: "/fallen-tree", label: "Fallen Tree", priority: 0.8 },
  { href: "/is-moonlight-peaks-worth-it", label: "Worth It?", priority: 0.8 },
  { href: "/money-guide", label: "Money Guide", priority: 0.7 },
  { href: "/gift-guide", label: "Gift Guide", priority: 0.7 },
  { href: "/spells-guide", label: "Spells Guide", priority: 0.7 },
  { href: "/farming-guide", label: "Farming Guide", priority: 0.7 },
  { href: "/fishing-guide", label: "Fishing Guide", priority: 0.7 },
  { href: "/steam-deck", label: "Steam Deck", priority: 0.7 },
  { href: "/games-like-moonlight-peaks", label: "Games Like", priority: 0.7 },
];

export const navItems: NavItem[] = [
  { label: "Beginner Guide", href: "/beginner-guide" },
  { label: "Romance", href: "/romance-guide" },
  { label: "Switch", href: "/switch" },
  { label: "Spells", href: "/spells-guide" },
  { label: "Money", href: "/money-guide" },
  {
    label: "More",
    href: "/ps5",
    submenu: [
      { label: "PS5", href: "/ps5" },
      { label: "Multiplayer", href: "/multiplayer" },
      { label: "Fallen Tree", href: "/fallen-tree" },
      { label: "Treasure Hunt", href: "/treasure-hunt-clues" },
      { label: "Steam Deck", href: "/steam-deck" },
      { label: "Games Like", href: "/games-like-moonlight-peaks" },
    ],
  },
];
