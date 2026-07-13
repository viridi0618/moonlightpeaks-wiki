export type GuideTable = {
  headers: string[];
  rows: string[][];
};

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: GuideTable;
  note?: string;
};

export type GuideSource = {
  label: string;
  url: string;
  level: "Official" | "Guide" | "Community";
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  answer: string;
  updated: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  related: string[];
  sources: GuideSource[];
};

export const OFFICIAL_SITE: GuideSource = {
  label: "Official Moonlight Peaks website",
  url: "https://www.moonlightpeaks.com/",
  level: "Official",
};

export const STEAM: GuideSource = {
  label: "Moonlight Peaks on Steam",
  url: "https://store.steampowered.com/app/2209900/Moonlight_Peaks/",
  level: "Official",
};

export const NINTENDO: GuideSource = {
  label: "Moonlight Peaks on Nintendo",
  url: "https://www.nintendo.com/us/store/products/moonlight-peaks-switch/",
  level: "Official",
};

export const GOOGLE_PLAY: GuideSource = {
  label: "Moonlight Peaks on Google Play",
  url: "https://play.google.com/store/apps/details?id=com.xseed.moonlightpeaks",
  level: "Official",
};

const PC_GAMER_SAMAEL: GuideSource = {
  label: "PC Gamer: Samael romance unlock",
  url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-date-samael-romance-unlock/",
  level: "Guide",
};

const PC_GAMER_TREE: GuideSource = {
  label: "PC Gamer: fallen tree location",
  url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-lift-the-fallen-tree-location/",
  level: "Guide",
};

const PC_GAMER_TREASURE: GuideSource = {
  label: "PC Gamer: Elvira treasure hunt",
  url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-treasure-hunt-clues-location/",
  level: "Guide",
};

const PC_GAMER_DATES: GuideSource = {
  label: "PC Gamer: dating guide",
  url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-date-how-to/",
  level: "Guide",
};

const STEAM_DECK_HQ: GuideSource = {
  label: "Steam Deck HQ review and performance notes",
  url: "https://steamdeckhq.com/game-reviews/moonlight-peaks/",
  level: "Guide",
};

export const guides: Record<string, Guide> = {
  switch: {
    slug: "switch",
    title: "Is Moonlight Peaks on Switch? Switch & Switch 2 Guide",
    description: "Moonlight Peaks is available on Nintendo Switch and Switch 2. Compare versions, upgrade pack details, demo availability, file size, performance notes, and where to buy.",
    h1: "Is Moonlight Peaks on Nintendo Switch?",
    eyebrow: "Platform guide",
    answer: "Yes. Moonlight Peaks is available on Nintendo Switch and Nintendo Switch 2, with a separate Switch 2 Edition and an upgrade path for Switch owners.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Switch version at a glance",
        table: {
          headers: ["Platform", "File size", "Players", "Performance notes", "Price notes", "Demo"],
          rows: [
            ["Nintendo Switch", "2.5 GB", "1", "Base console version", "Varies by region and sale", "Available"],
            ["Nintendo Switch 2", "4.5 GB", "1", "Higher resolution and improved frame rates", "Varies by region and sale", "Currently unclear"],
          ],
        },
        note: "Nintendo regional listings can show slightly different estimated download sizes. Check the listing for your region before purchase.",
      },
      {
        heading: "Switch 1 vs Switch 2",
        bullets: [
          "Both versions support single-system play for one player.",
          "Nintendo describes the Switch 2 Edition as offering higher resolution and improved frame rates.",
          "Exact resolution and frame-rate targets are currently unclear.",
          "A Switch 2 upgrade pack is listed for owners of the Switch version.",
        ],
      },
      {
        heading: "Price, demo, and physical edition notes",
        paragraphs: [
          "Prices shown on eShop may vary by region and sale period. Community reports suggest a small price difference between the two editions and a paid upgrade pack, but the current regional eShop is the source of truth.",
          "The official game site lists the demo on Steam and Nintendo Switch. Exact Switch 2 demo support is currently unclear.",
          "Digital editions are listed now. Exact physical-edition timing is TBD.",
        ],
      },
    ],
    faqs: [
      { question: "When did Moonlight Peaks release on Switch?", answer: "Nintendo lists July 7, 2026 for the Switch editions." },
      { question: "Can I upgrade the Switch version for Switch 2?", answer: "Yes. Nintendo lists a Switch 2 Edition Upgrade Pack. Price and eligibility can vary by region." },
      { question: "Is Moonlight Peaks multiplayer on Switch?", answer: "No multiplayer mode is listed; Nintendo shows one player on a single system." },
    ],
    related: ["ps5", "steam-deck", "multiplayer"],
    sources: [NINTENDO, OFFICIAL_SITE],
  },
  ps5: {
    slug: "ps5",
    title: "Is Moonlight Peaks on PS5? – PlayStation & Xbox Status",
    description: "Moonlight Peaks is not on PS5 or Xbox. It is available on PC, macOS, Nintendo Switch, Switch 2, and Android. No PlayStation release has been announced.",
    h1: "Is Moonlight Peaks on PS5?",
    eyebrow: "Platform status",
    answer: "No. As of now, Moonlight Peaks is not available on PS5, and no PlayStation or Xbox version has been announced.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Current official platforms",
        table: {
          headers: ["Platform", "Status", "Demo"],
          rows: [
            ["Windows PC / Steam", "Available", "Available"],
            ["macOS / Steam", "Available", "Available through Steam"],
            ["Nintendo Switch", "Available", "Available"],
            ["Nintendo Switch 2", "Available", "Currently unclear"],
            ["Android / Google Play", "Available", "No separate demo listed"],
            ["PS5 / PS4", "Not announced", "No"],
            ["Xbox Series / Xbox One", "Not announced", "No"],
          ],
        },
      },
      {
        heading: "Could a PS5 version happen later?",
        paragraphs: [
          "Currently unclear. The absence of an announcement is not evidence that a port will never happen. This page will change only when the developer, publisher, or a platform holder publishes an update.",
        ],
      },
    ],
    faqs: [
      { question: "Can I buy Moonlight Peaks on PlayStation Store?", answer: "No listing is currently announced for PlayStation Store." },
      { question: "Is Moonlight Peaks on Xbox Game Pass?", answer: "No Xbox release or Game Pass version has been announced." },
      { question: "Where can I try the demo?", answer: "The official site lists demos on Steam and Nintendo Switch." },
    ],
    related: ["switch", "steam-deck", "multiplayer"],
    sources: [OFFICIAL_SITE, STEAM, NINTENDO, GOOGLE_PLAY],
  },
  multiplayer: {
    slug: "multiplayer",
    title: "Is Moonlight Peaks Multiplayer? Co-op & Online Play",
    description: "Moonlight Peaks is a single-player game with no multiplayer or co-op mode. Check current platforms and what Nintendo Switch Online does and does not add.",
    h1: "Is Moonlight Peaks Multiplayer?",
    eyebrow: "Game mode",
    answer: "No. Moonlight Peaks is listed as a single-player game, with no online co-op, local co-op, or competitive multiplayer mode.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "What the store listings say",
        bullets: [
          "Steam labels the game Single-player.",
          "Nintendo lists one player on a single system.",
          "No official store page lists online multiplayer or co-op.",
          "Relationship, farming, fishing, and town progression are designed for one player.",
        ],
      },
      {
        heading: "Online services",
        paragraphs: [
          "Cloud saves and other platform-level services do not turn the game into multiplayer. Nintendo Switch Online may support cloud-save functionality, while Steam provides Steam Cloud, but your farm is still a solo experience.",
        ],
      },
    ],
    faqs: [
      { question: "Does Moonlight Peaks require Nintendo Switch Online?", answer: "No multiplayer mode is listed. Nintendo Switch Online may support system-level features such as cloud saves, but Moonlight Peaks itself is a single-player game." },
      { question: "Can two people share a farm?", answer: "No shared-farm feature is officially listed." },
      { question: "Is local split-screen supported?", answer: "No split-screen mode is listed on the official stores." },
    ],
    related: ["switch", "ps5", "beginner-guide"],
    sources: [STEAM, NINTENDO],
  },
  "beginner-guide": {
    slug: "beginner-guide",
    title: "Moonlight Peaks Beginner Guide – First Week Tips & What to Do First",
    description: "Just started Moonlight Peaks? Follow a first-night walkthrough, learn which early tasks matter, unlock tools, and use practical tips for a strong first week.",
    h1: "Moonlight Peaks Beginner Guide",
    eyebrow: "Start here",
    answer: "Start by following Orlock's introduction, planting the first Blood Grape, registering at Town Hall, and learning the overnight routine before trying to optimize profit.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Character creation basics",
        bullets: [
          "Choose your character name, farm name, and Hellkitten name.",
          "Appearance choices are cosmetic and do not appear to change core gameplay.",
          "You can focus on the look you want without planning around stats.",
        ],
      },
      {
        heading: "First night checklist",
        bullets: [
          "Wake from the coffin at around 6 PM and meet Orlock.",
          "Follow the farm introduction and plant the Blood Grape provided for the tutorial.",
          "Visit Town Hall and register with Mayor Brook.",
          "Meet nearby residents as the opening tasks direct you.",
          "Return to your coffin before 6 AM; sleeping is the normal save point.",
        ],
      },
      {
        heading: "First seven days",
        bullets: [
          "Plant a manageable plot instead of spending the whole night watering.",
          "Gather flowers and forageables while learning the map.",
          "Check glowing ground spots and keep unusual materials until their use is clear.",
          "Talk to residents on routes you already travel; do not force a perfect social schedule.",
          "Follow tool and wand quests before expanding too aggressively.",
          "Check the job board for low-risk early rewards.",
          "End each night with enough time to reach the coffin safely.",
        ],
      },
      {
        heading: "Tool overview",
        table: {
          headers: ["Tool", "Early use", "Beginner note"],
          rows: [
            ["Shovel", "Prepare soil and interact with dig spots", "Keep it on the tool wheel"],
            ["Watering Can", "Water ordinary and magical crops", "Mana and water needs are separate systems"],
            ["Axe", "Clear wood and farm debris", "Avoid clearing everything at once"],
            ["Pickaxe", "Break rocks and mine", "Save ore until recipes are clear"],
            ["Broken Wand", "Starts the magic progression", "Repair it through the related quest"],
            ["Fishing Rod", "Fish after Noel's introduction", "Location data is still being verified"],
            ["Bug Net", "Catch insects", "Carry it while exploring"],
          ],
        },
      },
      {
        heading: "20 quick beginner tips",
        bullets: [
          "Sleep to save.", "Plan your route before leaving the farm.", "Be back by 6 AM.", "Use the tool wheel instead of carrying one tool mentally.", "Plant only what you can maintain.", "Keep one sample of unfamiliar materials.", "Gather flowers as you travel.", "Inspect glowing soil.", "Talk to residents on your route.", "Read the almanac for spell patterns.", "Protect some mana for quest spells.", "Check the job board regularly.", "Repair the wand early.", "Unlock the fishing rod when Noel's task appears.", "Treat exact event dates as flexible unless the journal states them.", "Use signs and landmarks to learn each region.", "Process crops only when the output is confirmed useful.", "Do not sell quest-looking items impulsively.", "Use dates and gifts after understanding heart requirements.", "Prioritize steady progress over a perfect first week."
        ],
      },
    ],
    faqs: [
      { question: "How does saving work?", answer: "The game normally saves when you sleep, so avoid closing it in the middle of a night." },
      { question: "What time does a new night begin?", answer: "The opening routine begins around 6 PM. Exact transitions can vary with scenes." },
      { question: "Should I sell every early forageable?", answer: "No. Keep at least one unfamiliar or quest-like item until its use is clear." },
    ],
    related: ["farming-guide", "fishing-guide", "money-guide"],
    sources: [OFFICIAL_SITE, STEAM],
  },
  "romance-guide": {
    slug: "romance-guide",
    title: "Moonlight Peaks Romance Guide – Dating, Marriage & Romance Options",
    description: "Moonlight Peaks romance guide covering romanceable characters, dating, gifts, marriage, and how relationships work in the vampire farming sim.",
    h1: "Moonlight Peaks Romance Guide",
    eyebrow: "Relationships",
    answer: "Yes. Official store descriptions advertise two dozen romanceable characters, while most current guides list 23 named options; the total may be clarified by future updates.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "How dating works",
        bullets: [
          "Build hearts by talking and giving appropriate gifts.",
          "At four hearts, eligible characters can typically receive a date invitation after their scene requirements are met.",
          "Choose Invite, then Ask on date; the outing normally begins after you sleep and start the next night.",
          "Multiple invitations can queue in a confusing order, so schedule one date at a time.",
          "Dates use short activities or minigames and continue relationship progression.",
        ],
      },
      {
        heading: "Key characters to know",
        table: {
          headers: ["Name", "Connection", "Romance status", "Important note"],
          rows: [
            ["Orlock", "Ambrosia family", "Listed among relationship characters", "Gift data TBD"],
            ["Saga", "Town resident", "Romanceable", "Requirements TBD"],
            ["Samael", "Orlock's nephew; Broken Lamp owner", "Romanceable after story unlock", "See the dedicated unlock guide"],
            ["Death", "Supernatural resident", "Romanceable", "Gift data TBD"],
            ["Fiona", "Town resident", "Romanceable", "Gift data TBD"],
            ["Luna", "Seed seller in Moonlit Pines", "Romanceable", "Gift data TBD"],
          ],
        },
        note: "This is a practical starter table, not a complete character database. Unknown gift preferences remain TBD.",
      },
      {
        heading: "Marriage and vampirism",
        paragraphs: [
          "Marriage is part of the relationship progression described by current guides. Exact proposal requirements and post-marriage changes should be confirmed in game as each route develops.",
          "The possibility of turning a spouse into a vampire is discussed in current game coverage, but route-specific conditions are still being verified. Treat the exact trigger as TBD rather than spending rare items based on a guess.",
        ],
      },
    ],
    faqs: [
      { question: "How many romance options are there?", answer: "Official descriptions say two dozen. Most current guides list 23 named characters, so this guide avoids presenting a fragile exact count as permanent." },
      { question: "When can I ask someone on a date?", answer: "Typically after four hearts and any required heart scene or story gate." },
      { question: "Can I date more than one character?", answer: "Current guide reports indicate you can issue multiple invitations, but queued dates can be hard to track." },
    ],
    related: ["samael-romance", "gift-guide", "treasure-hunt-clues"],
    sources: [STEAM, GOOGLE_PLAY, PC_GAMER_DATES],
  },
  "samael-romance": {
    slug: "samael-romance",
    title: "How to Unlock Samael Romance in Moonlight Peaks",
    description: "Step-by-step guide to dating Samael Ambrosia: unlock path, quest requirements, where to find him, known gifts, and common blockers.",
    h1: "How to Unlock Samael Romance in Moonlight Peaks",
    eyebrow: "Romance walkthrough",
    answer: "Samael becomes romanceable only after the Luna Bay story chain, Bride's Attendant Duty, a one-week wait, and Unfinished Business; you also need four hearts to ask him out.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Who and where is Samael?",
        paragraphs: ["Samael Ambrosia is Orlock's nephew and runs The Broken Lamp on the east side of town. His relationship panel initially stops at four friendship hearts, which is a story gate rather than a permanent rejection."],
      },
      {
        heading: "Unlock requirements checklist",
        bullets: [
          "Progress the main story through A Curious Passage.",
          "Complete The Mysterious Bay and gain access to Luna Bay.",
          "Lift the fallen tree with Arborascend and repair the bridge with Ludo as the story requests.",
          "Complete Bride's Attendant Duty.",
          "Wait about one in-game week for Orlock's home visit.",
          "Complete Unfinished Business.",
          "Reach four hearts with Samael and view the required heart scene.",
          "Use Invite, then Ask on date.",
        ],
      },
      {
        heading: "Common blockers",
        table: {
          headers: ["Blocker", "What to check"],
          rows: [
            ["Only four hearts are visible", "Continue the Luna Bay main-story chain"],
            ["Orlock has not visited", "Confirm Bride's Attendant Duty is complete, then wait about one week"],
            ["Date option is missing", "Finish Unfinished Business and reach four hearts"],
            ["Fallen tree will not move", "Buy Arborascend from Sabrina and preserve enough mana"],
          ],
        },
      },
      {
        heading: "Gift preferences",
        table: {
          headers: ["Gift", "Status", "Confidence"],
          rows: [
            ["Red wine", "Loved according to current guide reporting", "Guide-sourced"],
            ["Other loved gifts", "TBD", "Not verified"],
            ["Disliked gifts", "TBD", "Not verified"],
          ],
        },
      },
    ],
    faqs: [
      { question: "Is Samael romanceable?", answer: "Yes, but his romance hearts are locked behind main-story progress." },
      { question: "How long do I wait after Bride's Attendant Duty?", answer: "Current guide reporting says about one in-game week before Orlock visits." },
      { question: "Where does Samael work?", answer: "At The Broken Lamp on the east side of town." },
    ],
    related: ["romance-guide", "gift-guide", "fallen-tree", "treasure-hunt-clues"],
    sources: [PC_GAMER_SAMAEL, PC_GAMER_TREE],
  },
  "treasure-hunt-clues": {
    slug: "treasure-hunt-clues",
    title: "Moonlight Peaks Elvira Treasure Hunt Clues Guide",
    description: "Find Elvira's treasure with all five clue locations, clear map areas, exact search spots, and what to look for at each stop.",
    h1: "Elvira Treasure Hunt Clue Locations – Moonlight Peaks",
    eyebrow: "Quest locations",
    answer: "Elvira's hunt has five stops: The Broken Lamp, the Ambrosia graveyard, Webb of Wonders, Cave of Echoes, and Khazan Temple.",
    updated: "2026-07-13",
    sections: [
      { heading: "How to start", paragraphs: ["Accept Elvira's treasure-hunt task when it becomes available, then inspect each envelope in order. The clues are sequential, so visiting a later location early may not advance the quest."] },
      {
        heading: "All five clue locations",
        table: {
          headers: ["Clue", "Area", "Exact spot", "What to look for", "Note"],
          rows: [
            ["1", "The Broken Lamp", "Right side near the wine racks", "Envelope on the floor", "Inside Samael's bar"],
            ["2", "Ambrosia graveyard", "Upper-left area behind a bat-shaped headstone", "Partly hidden envelope", "Misty Shores region"],
            ["3", "Webb of Wonders", "Right side beside the pottery station", "Envelope near the work area", "Inside Sabrina's shop"],
            ["4", "Cave of Echoes", "Eastern side near the large hour bell", "Envelope between stone features", "Bring mining supplies"],
            ["5", "Khazan Temple", "Outside on the right side of the waterfall", "Final note on the ground", "Take the east path from Town Hall"],
          ],
        },
      },
      { heading: "Reward", paragraphs: ["Completing the chain awards a painting for your house. The exact artwork appearance may vary or be clarified by further reports."] },
    ],
    faqs: [
      { question: "How many clues are there?", answer: "Five, and they must be found in order." },
      { question: "Where is the Cave of Echoes clue?", answer: "On the eastern side of the mine near the large bell that marks time." },
      { question: "What is the treasure-hunt reward?", answer: "A painting that can be displayed in your house." },
    ],
    related: ["samael-romance", "romance-guide", "fallen-tree"],
    sources: [PC_GAMER_TREASURE],
  },
  "fallen-tree": {
    slug: "fallen-tree",
    title: "Where to Find the Fallen Tree in Moonlight Peaks – Location & Spell",
    description: "Find the fallen tree blocking the waterfall in Moonlight Peaks, learn the Moonlit Pines location, required Arborascend spell, and common mistakes.",
    h1: "Where to Find the Fallen Tree in Moonlight Peaks",
    eyebrow: "Quest solution",
    answer: "The fallen tree is in Moonlit Pines, blocking the small waterfall west of the stairs to Luna's seed cart and cottage. Cast Arborascend to move it.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "The Mysterious Bay checklist",
        bullets: [
          "Advance The Mysterious Bay until the task asks you to clear access.",
          "Visit Webb of Wonders and buy Arborascend from Sabrina.",
          "Keep enough mana available before leaving town.",
          "Travel to Moonlit Pines and locate Luna's seed cart.",
          "Walk west of the nearby stairs to the waterfall.",
          "Stand near the fallen log and cast Arborascend.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Do not begin by searching the Howling Marshes; the quest destination is in Moonlit Pines.",
          "Do not search Luna Bay itself before clearing the route.",
          "Do not spend all mana watering magical crops before the trip.",
          "Check the almanac if you forget the spell pattern instead of guessing repeatedly.",
        ],
      },
      { heading: "How to get Arborascend", paragraphs: ["Sabrina sells Arborascend at Webb of Wonders. Purchase availability may depend on normal spell progression; if it is not listed yet, continue the wand and magic quests and check again."] },
    ],
    faqs: [
      { question: "Which quest uses the fallen tree?", answer: "The Mysterious Bay." },
      { question: "Which spell moves the tree?", answer: "Arborascend." },
      { question: "Is the tree in Howling Marshes?", answer: "No. It is in Moonlit Pines near Luna's seed cart." },
    ],
    related: ["spells-guide", "samael-romance", "beginner-guide"],
    sources: [PC_GAMER_TREE],
  },
  "is-moonlight-peaks-worth-it": {
    slug: "is-moonlight-peaks-worth-it",
    title: "Is Moonlight Peaks Worth It? – Price, Platforms & What Players Say",
    description: "Should you buy Moonlight Peaks? Compare platforms, public Steam sentiment, gameplay systems, and practical reasons to buy now or wait.",
    h1: "Is Moonlight Peaks Worth It?",
    eyebrow: "Buying guide",
    answer: "For players who want a full single-player farming sim with a strong gothic-vampire theme, Moonlight Peaks is a reasonable buy; players sensitive to slow travel, loading, or early technical issues may prefer to wait for updates or try the demo first.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Price and platform snapshot",
        paragraphs: ["The game is sold on Steam, Nintendo Switch, Switch 2, and Google Play. Prices vary by storefront, region, edition, and sale period, so this page deliberately does not freeze a single price."],
        table: { headers: ["Question", "Practical answer"], rows: [["Can I try it first?", "Demo listed on Steam and Nintendo Switch"], ["Is it multiplayer?", "No, single-player only"], ["Is it on PS5 or Xbox?", "Not announced"], ["How are Steam reviews?", "Public rating is currently Very Positive; the percentage changes over time"]] },
      },
      {
        heading: "What you get",
        bullets: ["Farming and magical crops", "Fishing, mining, foraging, and crafting", "Spell-casting, potion-making, and shapeshifting", "Town stories across seven families", "Dating and marriage systems", "Gothic home and farm customization"],
      },
      {
        heading: "Who should buy now",
        bullets: ["Players who value atmosphere and a supernatural twist on the farming loop", "Solo players who enjoy relationship and town progression", "Players comfortable verifying performance on their chosen platform", "Anyone who enjoys the demo and wants a longer progression loop"],
      },
      {
        heading: "Who may want to wait",
        bullets: ["Players looking for co-op", "PS5 or Xbox-only players", "Steam Deck players bothered by long loading and small text", "Players who prefer mature post-launch patches and fully mapped gift or crop data"],
      },
    ],
    faqs: [
      { question: "Is this a first-person review?", answer: "No. This is a buying guide based on official store data and clearly attributed public coverage." },
      { question: "Are Steam ratings fixed?", answer: "No. Review counts and percentages change as more owners post reviews." },
      { question: "What is the safest way to decide?", answer: "Try the official demo where available and check the current storefront notes for your platform." },
    ],
    related: ["beginner-guide", "games-like-moonlight-peaks", "steam-deck"],
    sources: [STEAM, OFFICIAL_SITE, STEAM_DECK_HQ],
  },
  "money-guide": {
    slug: "money-guide",
    title: "How to Make Money Fast in Moonlight Peaks – Gold Farming Guide",
    description: "Earn coins in Moonlight Peaks with crops, processing, fishing, the job board, and a careful list of materials not to sell too early.",
    h1: "How to Make Money in Moonlight Peaks",
    eyebrow: "Economy guide",
    answer: "Use a mixed early economy: maintain affordable crops, complete job-board requests with spare items, fish during route downtime, and process surplus only when the result is known to be more useful.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Ranked money-making methods",
        table: { headers: ["Rank", "Method", "Why it helps", "Confidence"], rows: [["1", "Repeatable crops", "Predictable harvest cycle", "System confirmed; exact profits TBD"], ["2", "Job board", "Turns requested items into targeted rewards", "Guide-backed"], ["3", "Fishing", "Uses time away from crop maintenance", "System confirmed; values TBD"], ["4", "Keg processing", "Community reports suggest grape wine can improve value", "Community-reported"], ["5", "Foraging surplus", "No seed cost", "Values vary; keep quest items"]] },
      },
      {
        heading: "A safer processing economy",
        paragraphs: ["Community reports suggest kegs and grape wine can become useful income tools. Exact input-output prices are not yet verified here, so test one batch before committing an entire harvest."],
      },
      {
        heading: "Chester's selling box and the job board",
        bullets: ["Use Chester's selling box for confirmed surplus rather than every new item.", "Check the job board before selling a mixed stack; a request may use the same material.", "Prefer tasks you can complete on an existing route.", "Avoid a long detour for a reward whose value is currently unclear."],
      },
      {
        heading: "What not to sell early",
        bullets: ["Your only sample of an unfamiliar crop", "Ore needed for tool or wand progression", "Quest-marked items", "Rare forageables with unknown recipes", "A full seed reserve for the next planting cycle"],
      },
    ],
    faqs: [
      { question: "What is the best crop for profit?", answer: "Currently unclear across every season because exact verified grow-time and sell-price data is incomplete." },
      { question: "Should I turn all grapes into wine?", answer: "No. Community reports suggest processing can help, but test the current value and keep grapes needed for quests or gifts." },
      { question: "Should I sell ore early?", answer: "Usually not until immediate tool, wand, and crafting requirements are covered." },
    ],
    related: ["farming-guide", "fishing-guide", "beginner-guide"],
    sources: [OFFICIAL_SITE],
  },
  "gift-guide": {
    slug: "gift-guide",
    title: "Moonlight Peaks Gift Guide – Best Gifts for Every Character",
    description: "Moonlight Peaks gift guide with verified and community-reported preferences, gift mechanics, and clear TBD labels as character data grows.",
    h1: "Moonlight Peaks Gift Guide",
    eyebrow: "Relationship reference",
    answer: "Gift preferences are still being mapped. Use verified entries where available, treat community reports as leads, and use TBD instead of risking rare items on invented lists.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "How gift-giving works",
        bullets: ["Talk to a resident and choose the gift interaction when available.", "Loved and liked items improve relationship progress more efficiently than random gifts.", "Disliked items can waste a limited opportunity.", "Keep a note of in-game reactions; current public tables are incomplete."],
      },
      {
        heading: "Known gift table",
        table: { headers: ["Character", "Loved gifts", "Liked gifts", "Disliked gifts", "Source status"], rows: [["Samael", "Red wine", "TBD", "TBD", "Guide-reported"], ["Orlock", "TBD", "TBD", "TBD", "Unverified"], ["Saga", "TBD", "TBD", "TBD", "Unverified"], ["Death", "TBD", "TBD", "TBD", "Unverified"], ["Fiona", "TBD", "TBD", "TBD", "Unverified"], ["Luna", "TBD", "TBD", "TBD", "Unverified"]] },
        note: "A blank-looking database is better than a confident fake. This table will expand only with attributable observations.",
      },
      {
        heading: "Finding useful gifts",
        bullets: ["Keep one sample of crops, flowers, cooked items, and crafted goods.", "Use resident dialogue and reaction text as the strongest in-game clue.", "Check whether an item is needed for a quest before gifting it.", "Treat forum claims as community-reported until repeated or guide-backed."],
      },
    ],
    faqs: [
      { question: "What gift does Samael love?", answer: "Current guide reporting identifies red wine as a loved gift." },
      { question: "Why are so many entries TBD?", answer: "The game is new and many preferences do not yet have reliable, attributable confirmation." },
      { question: "Are community gift lists official?", answer: "No. Use them as leads and confirm with in-game reactions." },
    ],
    related: ["romance-guide", "samael-romance", "farming-guide"],
    sources: [PC_GAMER_SAMAEL],
  },
  "spells-guide": {
    slug: "spells-guide",
    title: "Moonlight Peaks Spells Guide – Magic, Mana & How to Unlock Spells",
    description: "Learn how magic works in Moonlight Peaks with wand repair, mana management, known spells, unlock notes, and shapeshifting basics.",
    h1: "Moonlight Peaks Spells Guide",
    eyebrow: "Magic guide",
    answer: "Repair the broken wand through early progression, learn patterns from the almanac, and manage mana between farm magic and quest spells.",
    updated: "2026-07-13",
    sections: [
      { heading: "Getting started with the wand", bullets: ["Keep the Broken Wand from the opening progression.", "Follow the repair quest rather than trying to use it immediately.", "Use the almanac's spell tab to review learned cast patterns.", "Leave spare mana when a quest requires magic outside the farm."] },
      {
        heading: "Known spell reference",
        table: { headers: ["Spell", "Known use", "Unlock detail", "Pattern"], rows: [["Aquaflux I", "Water-related farm utility", "Early magic progression", "Check the in-game almanac"], ["Arborascend I", "Lift or move specific tree obstacles", "Buy from Sabrina at Webb of Wonders", "Check the in-game almanac"], ["Ethereal Hands I", "Remote interaction utility", "TBD", "Check the in-game almanac"], ["Maturio I", "Crop growth utility", "TBD", "Check the in-game almanac"]] },
      },
      { heading: "Mana management", bullets: ["Mana is shared across farming and exploration spells.", "Do not empty the meter before a spell-gated quest.", "Food or upgrades may restore or expand practical casting capacity; exact values remain TBD.", "Use ordinary tools when speed is less important than preserving mana."] },
      { heading: "Shapeshifting", paragraphs: ["Official descriptions confirm multiple shapeshifting forms, including the familiar vampire bat concept. Exact forms and unlock steps are progression-sensitive, so this first-batch guide does not publish an unverified complete list."] },
    ],
    faqs: [
      { question: "Where can I review spell patterns?", answer: "Open the first spell section of the in-game almanac." },
      { question: "Where do I get Arborascend?", answer: "Buy it from Sabrina at Webb of Wonders after the relevant magic progression is available." },
      { question: "Why is a spell missing from the table?", answer: "Only currently attributable spell names are included; the list will expand with verified data." },
    ],
    related: ["fallen-tree", "beginner-guide", "farming-guide"],
    sources: [OFFICIAL_SITE, PC_GAMER_TREE],
  },
  "farming-guide": {
    slug: "farming-guide",
    title: "Moonlight Peaks Farming Guide – Crops, Seasons & Profit Tips",
    description: "Moonlight Peaks farming guide covering seasonal crops, magical plants, trees, herbs, mushrooms, and profit planning without guessed prices.",
    h1: "Moonlight Peaks Farming Guide",
    eyebrow: "Farm systems",
    answer: "Begin with a small plot, track season and grow time in game, reserve mana for magical crops, and expand only when watering still leaves time for quests and gathering.",
    updated: "2026-07-13",
    sections: [
      { heading: "Farming basics", bullets: ["Prepare soil with the shovel.", "Plant seeds suited to the current season.", "Water as required and monitor magical-crop mana costs.", "Harvest on time and keep one sample before selling a new crop.", "Use processing only after checking the current output value."] },
      {
        heading: "Seasonal planning table",
        table: { headers: ["Category", "Known example", "Grow time", "Seed price", "Planning note"], rows: [["Opening crop", "Blood Grape", "TBD", "Tutorial-provided initially", "Learn the basic loop"], ["Seasonal crops", "Multiple varieties", "TBD", "TBD", "Check Luna's current stock"], ["Magical crops", "Spell- or mana-linked varieties", "TBD", "TBD", "Protect mana for quests"], ["Trees", "Orchard options", "TBD", "TBD", "Leave long-term space"], ["Herbs", "Forage and recipe inputs", "TBD", "TBD", "Keep samples"], ["Mushrooms", "Forage and recipe inputs", "TBD", "TBD", "Do not assume every type is edible"]] },
        note: "Guide datasets report dozens of seeds, but this site intentionally does not reproduce a 53-row source table or invent missing values.",
      },
      { heading: "Profit without fake precision", bullets: ["Compare grow time, number of harvests left in the season, seed cost, and known sell value.", "Prefer crops you can water without sacrificing the whole night.", "Community reports suggest grape processing can help, but confirm the current keg result.", "Reserve a portion of every harvest for jobs, recipes, and gifts."] },
    ],
    faqs: [
      { question: "How many seeds are in Moonlight Peaks?", answer: "Current guide datasets describe 53, but exact membership and values are still being independently verified." },
      { question: "What is the best crop in every season?", answer: "Currently unclear without a stable, verified price-and-grow-time dataset." },
      { question: "Do magical crops use mana?", answer: "Magic and mana are integrated with farming; check each crop and spell requirement in game." },
    ],
    related: ["money-guide", "beginner-guide", "fishing-guide"],
    sources: [OFFICIAL_SITE],
  },
  "fishing-guide": {
    slug: "fishing-guide",
    title: "Moonlight Peaks Fishing Guide – Rod, Fish Locations & Tips",
    description: "Learn how to get the fishing rod from Noel, understand the fishing loop, plan upgrades, and track fish locations without invented species data.",
    h1: "Moonlight Peaks Fishing Guide",
    eyebrow: "Fishing basics",
    answer: "Unlock the fishing rod through Noel's early progression, equip it near fishable water, and use the on-screen timing cues; exact species and spawn tables are still being verified.",
    updated: "2026-07-13",
    sections: [
      { heading: "How to get the fishing rod", bullets: ["Meet Noel through normal town progression.", "Complete the introductory request or conversation that awards access to the rod.", "Check your inventory and tool wheel after the scene.", "If it has not appeared, continue opening quests and speak with Noel again on a later route."] },
      { heading: "How fishing works", bullets: ["Stand at a valid water edge and equip the rod.", "Cast only when the interaction indicator is active.", "Watch the bite and reel timing prompts rather than mashing immediately.", "Use short fishing sessions between travel objectives so the night remains productive."] },
      { heading: "Rod upgrades", paragraphs: ["Rod upgrades are part of the expected progression, but exact materials, costs, and tiers are currently unclear. Keep ore and specialist materials until the upgrade menu confirms what is required."] },
      { heading: "Known fish table", table: { headers: ["Species", "Location", "Season", "Time", "Status"], rows: [["TBD", "TBD", "TBD", "TBD", "Awaiting verified source data"]] }, note: "No fish species or locations are published here until they can be attributed reliably." },
    ],
    faqs: [
      { question: "Who gives you the fishing rod?", answer: "Noel, through early town progression." },
      { question: "Where is the best fishing spot?", answer: "Currently unclear; verified location and value data is still incomplete." },
      { question: "Why is the fish list marked TBD?", answer: "Publishing an empty verified list is safer than inventing species or spawn locations." },
    ],
    related: ["beginner-guide", "farming-guide", "money-guide"],
    sources: [OFFICIAL_SITE],
  },
  "steam-deck": {
    slug: "steam-deck",
    title: "Moonlight Peaks Steam Deck – Performance, Settings & Known Issues",
    description: "See how Moonlight Peaks runs on Steam Deck, with compatibility status, practical settings, loading notes, text-size concerns, and known issues.",
    h1: "Moonlight Peaks on Steam Deck",
    eyebrow: "Handheld performance",
    answer: "Moonlight Peaks is currently listed as Steam Deck Verified and is playable, but independent testing reports long loading screens, small text, and uneven performance that may need post-launch optimization.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Compatibility snapshot",
        table: { headers: ["Item", "Current status", "Source confidence"], rows: [["Steam Deck status", "Verified", "Steam / guide reporting"], ["Controller support", "Works out of the box", "Guide-tested"], ["Loading", "Frequent and sometimes long", "Guide-tested"], ["UI scaling", "Small text; limited adjustment", "Guide-tested"], ["Exact universal FPS", "TBD", "Hardware and scene dependent"]] },
      },
      { heading: "Recommended starting point", bullets: ["Start with default graphics settings.", "Steam Deck HQ recommends a 50 Hz refresh rate as a balance point.", "Leave TDP uncapped initially; aggressive caps may cause input lag.", "Test readability during the demo or refund window if small text is a concern.", "Install current game and SteamOS updates before troubleshooting."], note: "These are independent guide recommendations, not official guaranteed targets." },
      { heading: "Known issues", bullets: ["Long or frequent loading screens", "Small dialogue and interface text", "Occasional stutter or inability to hold the highest frame-rate target", "Independent review reported crashes and a stuck-character incident", "Limited performance options"] },
    ],
    faqs: [
      { question: "Is Moonlight Peaks Steam Deck Verified?", answer: "Yes, it is currently reported as Verified. Store status can change after updates." },
      { question: "What frame rate should I use?", answer: "Steam Deck HQ recommends trying 50 Hz. Exact performance varies, so treat it as a starting point." },
      { question: "How long is battery life?", answer: "An independent OLED test reported roughly four to five hours, but battery health, brightness, settings, and model can change the result." },
    ],
    related: ["switch", "ps5", "is-moonlight-peaks-worth-it"],
    sources: [STEAM, STEAM_DECK_HQ],
  },
  "games-like-moonlight-peaks": {
    slug: "games-like-moonlight-peaks",
    title: "10 Games Like Moonlight Peaks – Similar Cozy Farming Sims",
    description: "Try ten games like Moonlight Peaks, including farming sims with romance, magic, crafting, town stories, and different approaches to cozy progression.",
    h1: "Games Like Moonlight Peaks",
    eyebrow: "What to play next",
    answer: "Start with Wylde Flowers or Sun Haven for magic and romance, Stardew Valley or Fields of Mistria for the farming-town loop, and Fae Farm for lighter co-op-friendly fantasy farming.",
    updated: "2026-07-13",
    sections: [
      {
        heading: "Comparison table",
        table: {
          headers: ["Game", "Platforms", "Why it is similar", "Key difference"],
          rows: [
            ["Stardew Valley", "PC, consoles, mobile", "Farming, relationships, mines", "Pixel art and less supernatural focus"],
            ["Fields of Mistria", "PC", "Town relationships and magical farming", "Anime-inspired presentation"],
            ["Wylde Flowers", "PC, Switch, mobile", "Witchcraft, farming, romance", "More authored protagonist and story"],
            ["Coral Island", "PC, PS5, Xbox", "Large relationship cast and farming", "Tropical environmental focus"],
            ["Sun Haven", "PC, Switch", "Fantasy races, magic, farming", "More combat and RPG progression"],
            ["My Time at Sandrock", "PC, consoles", "Town bonds, crafting, romance", "Workshop building over crop farming"],
            ["Story of Seasons", "PC and consoles; varies by title", "Classic farm and relationship loop", "Less gothic and magical"],
            ["Rune Factory", "PC and consoles; varies by title", "Farming, romance, action RPG combat", "Combat is much more central"],
            ["Garden Witch Life", "PC and consoles", "Witchy garden and cozy crafting", "Smaller social and romance emphasis"],
            ["Fae Farm", "PC and consoles", "Fantasy farming, magic, crafting", "Supports multiplayer and lighter social writing"],
          ],
        },
      },
      { heading: "Choose by the feature you want", bullets: ["For the strongest witch-life story: Wylde Flowers.", "For familiar farming depth: Stardew Valley.", "For action combat with romance: Rune Factory.", "For colorful fantasy and co-op: Fae Farm.", "For crafting-heavy town rebuilding: My Time at Sandrock.", "For a supernatural farming-RPG blend: Sun Haven."] },
    ],
    faqs: [
      { question: "Which similar game has co-op?", answer: "Stardew Valley and Fae Farm are strong options if multiplayer matters." },
      { question: "Which game is closest to the witchy theme?", answer: "Wylde Flowers and Garden Witch Life emphasize witchcraft, though their structure and tone differ." },
      { question: "Are all ten games available everywhere?", answer: "No. Platform availability varies by title and can change; check the current official store before buying." },
    ],
    related: ["is-moonlight-peaks-worth-it", "romance-guide", "farming-guide"],
    sources: [OFFICIAL_SITE],
  },
};

export const guideList = Object.values(guides);

export function getGuide(slug: string) {
  return guides[slug];
}
