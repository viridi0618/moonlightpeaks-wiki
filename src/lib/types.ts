export type PublicRoute =
  | "/"
  | "/switch"
  | "/ps5"
  | "/multiplayer"
  | "/beginner-guide"
  | "/romance-guide"
  | "/samael-romance"
  | "/treasure-hunt-clues"
  | "/fallen-tree"
  | "/is-moonlight-peaks-worth-it"
  | "/money-guide"
  | "/gift-guide"
  | "/spells-guide"
  | "/farming-guide"
  | "/fishing-guide"
  | "/steam-deck"
  | "/games-like-moonlight-peaks";

export interface NavItem {
  label: string;
  href: PublicRoute;
  submenu?: NavItem[];
}
