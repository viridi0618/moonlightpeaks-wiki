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

const PCG_SAMAEL: GuideSource = { label: "PC Gamer — How to unlock Samael romance", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-date-samael-romance-unlock/", level: "Guide" };
const PCG_TREE: GuideSource = { label: "PC Gamer — Fallen tree location", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-lift-the-fallen-tree-location/", level: "Guide" };
const PCG_TREASURE: GuideSource = { label: "PC Gamer — Elvira treasure hunt clues", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-treasure-hunt-clues-location/", level: "Guide" };
const PCG_DATING: GuideSource = { label: "PC Gamer — Dating and romance guide", url: "https://www.pcgamer.com/games/life-sim/moonlight-peaks-date-how-to/", level: "Guide" };
const SDHQ: GuideSource = { label: "Steam Deck HQ — Performance review", url: "https://steamdeckhq.com/game-reviews/moonlight-peaks/", level: "Guide" };
const IGN_TIPS: GuideSource = { label: "IGN — Tips and tricks", url: "https://www.ign.com/wikis/moonlight-peaks/Tips_and_Tricks", level: "Guide" };
const EG_BEGINNER: GuideSource = { label: "Eurogamer — Top five things to do first", url: "https://www.eurogamer.net/top-five-things-to-do-first-moonlight-peaks", level: "Guide" };
const EG_ROMANCE: GuideSource = { label: "Eurogamer — Romance candidates list", url: "https://www.eurogamer.net/moonlight-peaks-romance-candidates", level: "Guide" };
const LG_BEGINNER: GuideSource = { label: "LadiesGamers — Beginner's guide", url: "https://ladiesgamers.com/moonlight-peaks-beginners-guide-tips-for-supernatural-farming-life", level: "Guide" };
const GR_ROMANCE: GuideSource = { label: "GameRant — All romanceable characters", url: "https://gamerant.com/moonlight-peaks-all-romanceable-characters", level: "Guide" };
const TR_ROMANCE: GuideSource = { label: "TechRaptor — Romance and marriage guide", url: "https://techraptor.net/gaming/guides/moonlight-peaks-romance-and-marriage-guide", level: "Guide" };
const BA_ROMANCE: GuideSource = { label: "Bonus Action — Romanceable characters", url: "https://bonus-action.com/guides/moonlight-peaks-romanceable-character-dating-guide", level: "Guide" };
const BA_FISHING: GuideSource = { label: "Bonus Action — How to get the fishing rod", url: "https://bonus-action.com/guides/moonlight-peaks-fishing-rod-guide", level: "Guide" };
const NS_FISHING: GuideSource = { label: "Neoseeker — Fishing guide", url: "https://www.neoseeker.com/moonlight-peaks/Fishing_Guide", level: "Guide" };
const TG_FISHING: GuideSource = { label: "TheGamer — All fish types", url: "https://www.thegamer.com/moonlight-peaks-fishing-fish-location-guide", level: "Guide" };
const NE_EVERYTHING: GuideSource = { label: "Nintendo Everything — Romanceable characters", url: "https://nintendoeverything.com/moonlight-peaks-romanceable-characters-complete-list-and-full-details", level: "Guide" };


export const guides: Record<string, Guide> = {
switch: {
    slug: "switch", title: "Is Moonlight Peaks on Switch? Switch & Switch 2 Guide",
    description: "Moonlight Peaks is available on Nintendo Switch and Switch 2. Compare versions, upgrade pack details, demo availability, file size, performance notes, and where to buy.",
    h1: "Is Moonlight Peaks on Nintendo Switch?", eyebrow: "Platform guide", updated: "2026-07-13",
    answer: "Yes. Moonlight Peaks released July 7, 2026 on both Nintendo Switch and Switch 2, with a Switch 2 Edition featuring higher resolution and improved frame rates. A digital upgrade path is available for Switch owners.",
    sections: [
      { heading: "Switch versions at a glance",
        table: { headers: ["Feature", "Nintendo Switch", "Nintendo Switch 2"],
          rows: [ ["Release date", "July 7, 2026", "July 7, 2026"], ["File size", "2.5 GB", "4.5 GB"], ["Players", "1 (single system)", "1 (single system)"], ["Resolution", "Not specified", "Higher than Switch 1 (exact numbers not published)"], ["Frame rate", "Not specified", "Improved — players report smooth, no drops"] ] },
        note: "Nintendo describes Switch 2 performance as 'higher resolution with improved frame rates' (eShop listing). No exact resolution or FPS targets published. Community reports (Reddit) confirm smooth performance with no frame drops on Switch 2." },
      { heading: "Switch 2 Edition upgrade", paragraphs: ["Switch 1 owners can purchase a Switch 2 Edition Upgrade Pack. Community reports suggest the upgrade costs around $5.00, though the exact price may vary by region and sale period. Nintendo does not publish a fixed upgrade price — check the eShop for your region's current listing."] },
      { heading: "Price notes", paragraphs: ["Prices across storefronts vary by region, edition, and sale period. Community-reported approximate prices: Switch 1 around $34.99, Switch 2 around $39.99. Always confirm the current eShop price before purchasing."], note: "All prices are approximate and subject to change. This guide does not list a fixed price because storefront and region differences can shift the number." },
      { heading: "Demo availability", paragraphs: ["A free demo is available on Nintendo Switch through the eShop. The demo lets you sample the opening hours before purchasing either edition."] },
      { heading: "Digital vs physical", bullets: ["Digital editions available now on the Nintendo eShop for both Switch and Switch 2.", "Physical cartridge availability is currently TBD — no official announcement has confirmed a retail release date.", "Check with your preferred retailer for physical pre-order or stock updates."] }
    ],
    faqs: [ { question: "When did Moonlight Peaks release on Switch?", answer: "July 7, 2026 for both Switch and Switch 2 editions." }, { question: "Can I upgrade from Switch 1 to Switch 2?", answer: "Yes. Nintendo lists a Switch 2 Edition Upgrade Pack. Community reports place the cost around $5.00 — check the eShop for your region." }, { question: "Is there a free demo?", answer: "Yes, a demo is available on the Nintendo Switch eShop." }, { question: "Does the Switch version support multiplayer?", answer: "No. Nintendo lists it as a single-system, single-player title." } ],
    related: ["ps5", "steam-deck", "multiplayer"], sources: [NINTENDO, OFFICIAL_SITE]
  },

ps5: {
    slug: "ps5", title: "Is Moonlight Peaks on PS5? — PlayStation & Xbox Status",
    description: "Moonlight Peaks is not on PS5 or Xbox. Available on PC (Steam), macOS, Nintendo Switch, Switch 2, and Android. No PlayStation or Xbox release has been announced.",
    h1: "Is Moonlight Peaks on PS5?", eyebrow: "Platform status", updated: "2026-07-13",
    answer: "No. As of July 2026, Moonlight Peaks is not available on PS5, PS4, Xbox Series X|S, or Xbox One. No PlayStation or Xbox version has been announced by the developer or publisher.",
    sections: [
      { heading: "Where you can play Moonlight Peaks",
        table: { headers: ["Platform", "Status", "Demo available"],
          rows: [ ["Windows PC / Steam", "Available", "Yes — Steam demo"], ["macOS / Steam", "Available", "Yes — through Steam"], ["Nintendo Switch", "Available", "Yes — eShop demo"], ["Nintendo Switch 2", "Available", "Currently unclear"], ["Android / Google Play", "Available", "No separate demo listed"], ["PS5 / PS4", "Not announced", "No"], ["Xbox Series X|S / Xbox One", "Not announced", "No"] ] } },
      { heading: "Could a PS5 version come later?", paragraphs: ["The absence of an announcement does not rule out a future port. However, the developer (Little Chicken) and publishers (XSEED Games / Marvelous Europe) have not confirmed any plans for PlayStation or Xbox. This page will be updated if an announcement is made."] },
      { heading: "What about Xbox Game Pass?", paragraphs: ["No Xbox release or Game Pass listing has been announced. The game is not currently part of any subscription service."] }
    ],
    faqs: [ { question: "Can I buy Moonlight Peaks on PlayStation Store?", answer: "No. No listing currently exists on the PlayStation Store." }, { question: "Is Moonlight Peaks coming to Xbox?", answer: "No Xbox version has been announced by the developer or publisher." }, { question: "Which platforms have the demo?", answer: "Steam and Nintendo Switch offer a free demo. Other platforms do not currently list one." } ],
    related: ["switch", "steam-deck", "multiplayer"], sources: [OFFICIAL_SITE, STEAM, NINTENDO, GOOGLE_PLAY]
  },

multiplayer: {
    slug: "multiplayer", title: "Is Moonlight Peaks Multiplayer? Co-op & Online Play",
    description: "Moonlight Peaks is a single-player game with no multiplayer or co-op mode. Available on Steam, Nintendo Switch, Switch 2, and Android.",
    h1: "Is Moonlight Peaks Multiplayer?", eyebrow: "Game mode", updated: "2026-07-13",
    answer: "No. Moonlight Peaks is a single-player game. Steam lists it as Single-player, and Nintendo describes it as one player on a single system. There is no local co-op, online co-op, or competitive multiplayer mode.",
    sections: [
      { heading: "What the store listings say", bullets: ["Steam: Listed as Single-player.", "Nintendo eShop: Single system, 1 player.", "Google Play: No multiplayer features mentioned.", "Official website: No multiplayer or co-op references."] },
      { heading: "Does Nintendo Switch Online add multiplayer?", paragraphs: ["No. Nintendo Switch Online does not add co-op or multiplayer to Moonlight Peaks. The service may support cloud save backups where the feature is available, but it does not change the single-player nature of the game."] },
      { heading: "Current platforms",
        table: { headers: ["Platform", "Players", "Multiplayer"], rows: [ ["Steam (PC / macOS)", "1", "None"], ["Nintendo Switch", "1", "None"], ["Nintendo Switch 2", "1", "None"], ["Android", "1", "None"] ] } }
    ],
    faqs: [ { question: "Does Moonlight Peaks have co-op?", answer: "No. There is no local or online co-op mode." }, { question: "Do I need Nintendo Switch Online?", answer: "Not for gameplay. NSO may offer cloud saves, but the game has no online multiplayer features." }, { question: "Can I play with friends?", answer: "No. Moonlight Peaks is a solo experience — you cannot visit other players' farms or play together." } ],
    related: ["switch", "ps5", "romance-guide"], sources: [STEAM, NINTENDO, OFFICIAL_SITE]
  },

"beginner-guide": {
    slug: "beginner-guide", title: "Moonlight Peaks Beginner Guide — First Week Tips & What to Do First",
    description: "Just started Moonlight Peaks? First night walkthrough, which crops to plant early, how to unlock tools, and 20 essential tips early players swear by.",
    h1: "Moonlight Peaks Beginner Guide", eyebrow: "Getting started", updated: "2026-07-13",
    answer: "You wake up in a coffin. Your uncle's drunk. The mayor doesn't like you. But here's what matters: plant Blood Grapes, register at Town Hall, talk to everyone you see, and do not sell your Broken Wand or ore. Unlock Kegs early, save mana for spells rather than watering every crop, and you'll be in a good place by the end of your first week.",
    sections: [
      { heading: "What kind of game is this?", paragraphs: ["Moonlight Peaks is a supernatural farming and life sim — think Stardew Valley but you're Dracula's kid starting over in a town full of werewolves, witches, mermaids and vampires. You farm by moonlight, learn spells, brew potions, mine, fish and date roughly two dozen townsfolk. There is no combat and no multiplayer. Just vibes. The game came out on 7 July 2026 from Little Chicken Game Company, published by XSEED Games / Marvelous Europe on PC, Mac, Switch, Switch 2 and Android."] },
      { heading: "Character creation — don't overthink it", paragraphs: ["You'll pick a name, a farm name, and a name for your Hellkitten companion. There's a lot of customisation — hairstyles, outfits, accessories — but it's all cosmetic. Nothing you pick here gates romance options or story beats or anything mechanical. You can buy more clothes later, so don't stress about getting this perfect."] },
      { heading: "Night 1 — what actually matters", bullets: ["Wake up in your coffin around 6 PM. Yes, that's your morning.", "Meet Orlock, your uncle. He's drunk and chaotic but gives you the Broken Wand and a starter farm plot.", "Plant Blood Grapes — they're the tutorial crop and teach the farming loop.", "Get to Town Hall and register with Mayor Brook. They're cold, don't take it personally.", "Talk to everyone you pass. Every resident you meet now saves you backtracking later.", "Do not sell or throw away the Broken Wand. The repair quest usually triggers around Night 18, but the exact timing can shift with your quest order and pace."] },
      { heading: "Your first week, night by night", bullets: ["Night 1: Blood Grapes → Town Hall → meet people → keep the Broken Wand.", "Night 2: Find Noel by the forest river to unlock the fishing rod quest.", "Nights 2–4: Forage everything — flowers, shells, herbs. Sell surplus through Chester, the shipping bin chest near your farm.", "Nights 4–6: Hoard Copper and Iron Ore. Don't sell them, no matter how broke you feel. Tool upgrades eat ore.", "First visit to Webb of Wonders (Sabrina's shop): buy Arborascend and whatever else she has. Spells gate a surprising amount of content.", "Unlock Keg crafting and build one. Processed crops (especially grape wine, per community reports) pay way more than raw produce.", "Keep talking to everyone. Relationships build slowly in this game — starting early is the difference between a smooth experience and a late-game conversation grind."], note: "Timing estimates are best-effort from launch guides. Your pace and quest choices shift when things trigger." },
      { heading: "Tools and how to unlock them",
        table: { headers: ["Tool", "How to get it", "Key use"],
          rows: [ ["Shovel", "Start of the game", "Prepare soil for planting"], ["Watering Can", "Start of the game", "Water non-enchanted crops"], ["Fishing Rod", "Meet Noel by the forest river (around Night 2)", "Fish in rivers, lakes, and Luna Bay"], ["Broken Wand", "Given by Orlock on Night 1", "Keep it — repair quest unlocks spells later"], ["Pickaxe", "Unlock mines through story progression", "Mine Copper, Iron, Gold, and gems"], ["Axe", "Progression-based unlock", "Clear wood debris and harvest trees"] ] } },
      { heading: "Mechanics the game doesn't spell out", bullets: ["You live by night, not day. Wake at 6 PM, get stuff done, get back before dawn.", "Stamina runs your whole life — farming, mining, fishing. Cooked meals stretch it further than raw food.", "Mana powers farm spells and quest spells from the same pool. Leave some in the tank before exploring.", "The tool wheel is way faster than opening your inventory — get used to it early.", "Chester the shipping bin (the animated chest) is your main income tap. Sell surplus there."] },
      { heading: "20 things early players wish they knew",
        bullets: [ "1. Keep the Broken Wand. The repair quest usually triggers around Night 18 but don't panic if it's late — your quest order and pace shift the timing.", "2. Build at least one Keg as soon as the crafting menu lets you. Processed goods sell for way more than raw crops.", "3. Talk to every single resident in week one. Relationships compound — skipping a week makes it a slog later.", "4. Don't sell Copper or Iron Ore. Tool upgrades require a lot of it. Sell crops and forageables instead.", "5. Use the tool wheel. Opening inventory to switch between shovel, watering can and fishing rod will drive you mad.", "6. When fishing with the basic rod, reel slightly to scare away fish you don't want. Don't burn stamina on huge fish you can't land.", "7. Grab the Warp Whistle from the statue near the Florist shop on Day 1 if you've got the time — community players swear by this one.", "8. Luna sells seasonal seeds at her cart in Moonlit Pines. Match your crops to the season or they'll underperform.", "9. Forage flowers and shells for quick early cash before your crops mature. Zero cost, pure profit.", "10. Keep one of every new crop, fish and forageable. Never sell your only sample — you'll regret it when a quest asks for it.", "11. Don't skip Town Hall registration. It's boring admin but it gates most of the opening quests.", "12. Visit Sabrina at Webb of Wonders as soon as possible. Her spells open up the map.", "13. Leave spare mana before heading out. Spell-gated obstacles are everywhere and they don't wait for you to regen.", "14. Push tools to Iron level first. Iron unlocks almost all harvestable materials.", "15. Cook your food. A stack of cooked meals goes twice as far as raw ingredients.", "16. Check the job board every night. Easy gold and relationship boosts for stuff you were already going to do.", "17. The almanac stores your spell patterns. Check it instead of guessing casts — failed spells waste mana.", "18. Once crops are steady, build multiple Kegs. Passive processing income is the most reliable gold in the game.", "19. Quests mark rare items for a reason. Don't accidentally sell them through Chester.", "20. Try the free demo before buying. It covers the opening hours and you'll know if the vibe clicks." ] }
    ],
    faqs: [ { question: "What should I do on my first night?", answer: "Plant Blood Grapes, register at Town Hall, meet the townsfolk, and keep the Broken Wand — a repair quest unlocks spellcasting later. Also, don't sell any ore." }, { question: "How do I get the fishing rod?", answer: "Meet Noel by the forest river around Night 2. Catch three fish and bring them to The Broken Lamp inn to unlock the rod." }, { question: "When do I unlock spells?", answer: "Guides commonly report the wand repair quest around Night 18 through Luna and Noel. It unlocks Aquaflux. Timing varies with your pace — don't stress if it's earlier or later." }, { question: "Should I sell ore early?", answer: "No. Copper and Iron Ore are needed for tool upgrades and crafting stations. Sell crops and forageables instead." } ],
    related: ["farming-guide", "fishing-guide", "money-guide", "spells-guide"], sources: [OFFICIAL_SITE, STEAM, LG_BEGINNER, EG_BEGINNER, IGN_TIPS]
  },

"romance-guide": {
    slug: "romance-guide", title: "Moonlight Peaks Romance Guide — Dating, Marriage & All 23 Options",
    description: "Dating in Moonlight Peaks: all 23 romance options, how to raise affection, best gifts, heart events, and why marrying a werewolf when you're a vampire is half the fun.",
    h1: "Moonlight Peaks Romance Guide", eyebrow: "Relationships", updated: "2026-07-13",
    answer: "For a lot of players, the romance is the reason to move to Moonlight Peaks. It's a town full of supernatural singles — werewolves, witches, mermaids, and Death himself — and the dating system has been a headline feature since the game's reveal. You can pursue roughly two dozen characters at once, marry one, and even turn your mortal spouse into a vampire. No gender-locking, no fuss.",
    sections: [
      { heading: "A big, inclusive cast", paragraphs: ["This is one of the genre's more generous rosters. The official launch line-up confirms 23 romanceable characters across six families — mermaids, witches, werewolves, vampires, humans and seers — plus two wild cards in Death and a Love Demon. Earlier coverage cited 15, so the cast clearly grew during development, and the developers have said they hope to keep adding to it.", "Crucially, romance is open to everyone. The character models are deliberately gender-neutral so the game never forces an identity on you. You can romance any eligible resident no matter how you build your own vampire. It's a thoughtful, low-friction approach that a lot of players have responded to."] },
      { heading: "Dateable characters & marriage candidates",
        table: { headers: ["Character", "Type / Family", "Notes"],
          rows: [
            ["Kim, Rei, Tae", "Mermaids (Hosu)", "Three mermaid romance options"],
            ["Fiona, Luna, Noel, Sabrina", "Witches (Webb)", "Four witch candidates. Luna runs the seed cart"],
            ["Saga, Ridge, Ludo", "Werewolves (Logan)", "Mayor Brook's family. Saga is fiercely loyal"],
            ["Orlock, Samael, Evan, Elvira, Mina", "Vampires (Ambrosia)", "Your own vampire family. Orlock is your drunk uncle"],
            ["Persephone, Jada, Winston", "Humans (Henderson)", "Three human townsfolk"],
            ["Aras, Alina, Dragan", "Seers (Khazan)", "Three seer romance options"],
            ["Death, Llemi", "Wild cards", "The Grim Reaper & the Love Demon"]
          ] },
        note: "A fun wrinkle: the town's vampires and werewolves rarely get along, trading petty spats. Since you play a vampire, pursuing a werewolf like Saga means romancing across that divide — which is half the charm. Every romanceable name above has or will have its own full character profile as we build out the guide." },
      { heading: "How dating actually works", paragraphs: ["We now know the shape of the relationship loop from launch playthroughs, and it's the familiar cozy-sim rhythm with a few nice touches.", "Talk to them regularly. Consistent, friendly contact raises affinity. A handy relationship menu tracks your standing with everyone — including whether you've talked to and gifted each resident, your last several gifts to them, and their loved/hated reactions.", "Give gifts they love — and make them yourself. Gifting is the fastest route to someone's heart, and Moonlight Peaks lets you craft gift items like a flower bouquet or an embroidered piece. A handmade present carries real charm. We list confirmed loved gifts on each character profile as they're known.", "Date around — carefully. You can pursue several people at once, but partners will notice and comment if you're juggling them. There's a mild jealousy system, not a hard rivalry. You marry one in the end. Turn a partner's date invitations down too often, though, and they'll break up with you and go quiet for a few days before forgiving you.", "Dates are little mini-games. Once you're dating, dates play out as short activities rather than passive scenes — assembling a bouquet in the colours your partner asks for, or roasting a marshmallow to their preferred doneness. You can actually fail one and lose relationship points, so they reward paying attention to your partner's tastes."] },
      { heading: "Marriage & settling down", paragraphs: ["You can get married in Moonlight Peaks — romance isn't just flirting. You can court a resident and settle down together, the classic cozy-sim happy ending. Any of the roughly two dozen romanceable residents is, in principle, a potential marriage candidate.", "There's a wonderfully on-brand perk to settling down: you can turn your spouse into a vampire. Marrying a mortal (or werewolf, or witch) doesn't have to mean watching them age while you don't — making them one of the undead is a confirmed option, a sweet bit of vampire-fantasy wish-fulfilment.", "One thing to set expectations on: there are no children in the game (confirmed, not just unimplemented). You can date and marry, but raising kids isn't a feature — so if that's on your wishlist, this isn't that kind of life-sim."] },
      { heading: "Romance pays off — literally", paragraphs: ["One detail worth knowing: building relationships unlocks special blueprints and crafting materials. Getting close to the locals isn't just for the story — it feeds back into your farm, crafting and home-building, giving you a real reason to court the whole town and not just your favourite."] },
      { heading: "Build friendships first", paragraphs: ["Romance grows out of the broader social system, so the beginner habit of greeting a few townsfolk each night pays off doubly here. Playing Nokturna with residents and remembering small details are easy ways to raise standing across the whole town, not just your crush."] }
    ],
    faqs: [ { question: "Can I date multiple characters at the same time?", answer: "Yes. Moonlight Peaks lets you date all romanceable characters simultaneously before marriage. Once you propose, other relationships freeze." }, { question: "Is romance gender-locked?", answer: "No. The dating system is gender-neutral — every candidate is available regardless of your character's identity." }, { question: "How many romance options are there?", answer: "23 confirmed at launch across six families plus two wild cards. The official store says 'two dozen' — the exact count may grow as the developers add more." }, { question: "Can I divorce and remarry?", answer: "No. Marriage is permanent — there is no divorce option. Explore all dating options before committing." }, { question: "Can I turn my spouse into a vampire?", answer: "Yes. After marriage, story progression unlocks a quest to turn a mortal spouse into a vampire." } ],
    related: ["samael-romance", "gift-guide", "beginner-guide"], sources: [OFFICIAL_SITE, EG_ROMANCE, GR_ROMANCE, TR_ROMANCE, BA_ROMANCE, NE_EVERYTHING, PCG_DATING]
  },

"samael-romance": {
    slug: "samael-romance", title: "How to Unlock Samael Romance in Moonlight Peaks",
    description: "Step-by-step guide to dating Samael Ambrosia: unlock conditions, quest requirements, where to find him, loved gifts (red wine), and common progression blockers.",
    h1: "How to Unlock Samael Romance in Moonlight Peaks", eyebrow: "Character guide", updated: "2026-07-13",
    answer: "Samael Ambrosia is your cousin (Orlock's nephew) and runs The Broken Lamp bar in Misty Shores. He is romanceable, likes red wine as a loved gift, and requires specific story progression and quest completion before dating unlocks.",
    sections: [
      { heading: "Who is Samael?", paragraphs: ["Samael Ambrosia is a vampire and member of the Ambrosia family. He runs The Broken Lamp, the town's bar and inn located in Misty Shores. He is Orlock's nephew, making him your cousin. Among the romanceable characters, he is one of the most popular options — community discussions frequently name him alongside Ridge and Saga as a top pick."] },
      { heading: "Where to find Samael", bullets: ["Primary location: The Broken Lamp bar in Misty Shores (open most nights).", "Alternative: Wandering near Moonlit Pines or the Town Hall area during certain quest stages.", "Check the in-game map if he is not at the bar — heart events may move him temporarily."] },
      { heading: "Unlock checklist (ordered steps)", bullets: ["1. Complete the 'Meet the Townsfolk' quest from Orlock — this gates most character interactions.", "2. Visit The Broken Lamp bar regularly and speak with Samael each night.", "3. Advance the Ambrosia family storyline to a point where Samael's personal quests open.", "4. Give loved gifts — current guide-reported data says red wine is a loved gift.", "5. Date Samael once you reach 4 heart status. Ask him on a date at the bar.", "6. Continue raising affection through dating, gifts, and his personal quests.", "7. At 8 hearts (4 pink + 4 red), the marriage proposal option unlocks."] },
      { heading: "Common blockers", bullets: ["Missed prerequisite: If you haven't finished 'Meet the Townsfolk,' Samael's deeper interactions stay locked.", "Wrong time: The Broken Lamp bar has hours — visiting during off-hours means Samael is absent.", "Low gift quality: Random disliked gifts slow progress. Stick to red wine or high-value items.", "Quest dependency: Some Ambrosia family quests require progress with Orlock or Evan first.", "Blood moon timing: Certain heart events may require specific weather or moon phases."] },
      { heading: "Gift preferences", paragraphs: ["Current guide data reports red wine as Samael's loved gift. Liked and disliked gifts are still being mapped by the community. Keep a note of his dialogue reactions to different items and check back as gift data expands."] },
      { heading: "Key story moments", paragraphs: ["Samael's story ties into the larger Ambrosia family arc and the mystery of why the town fell into decline — including what happened to your mother. His heart events reveal personal history, family tensions, and his own struggles outside Orlock's shadow."] }
    ],
    faqs: [ { question: "What gift does Samael love?", answer: "Red wine is the current guide-confirmed loved gift. Other preferences are still TBD." }, { question: "Where is Samael during the day?", answer: "The Broken Lamp bar in Misty Shores is his primary location. During certain quest stages, he may appear near Moonlit Pines." }, { question: "Can I date Samael and other characters?", answer: "Yes. You can date multiple characters simultaneously before marriage." }, { question: "Is Samael hard to romance?", answer: "He is not especially difficult — the main blocker is completing prerequisite quests and visiting the bar at the right time." } ],
    related: ["romance-guide", "gift-guide", "fallen-tree"], sources: [PCG_SAMAEL, GR_ROMANCE, EG_ROMANCE]
  },

"treasure-hunt-clues": {
    slug: "treasure-hunt-clues", title: "Moonlight Peaks Elvira Treasure Hunt Clues Guide",
    description: "Can't find Elvira's treasure? All five clue locations with exact spots, map areas, and what to look for at each location.",
    h1: "Elvira Treasure Hunt Clue Locations — Moonlight Peaks", eyebrow: "Quest solution", updated: "2026-07-13",
    answer: "Elvira's treasure hunt has five clues hidden across Misty Shores. They must be found in order. Locations: The Broken Lamp, Ambrosia graveyard, Webb of Wonders, Cave of Echoes, and Khazan Temple. The reward is a painting for your house.",
    sections: [
      { heading: "How to start the treasure hunt", paragraphs: ["Speak with Elvira to trigger the quest. She provides the first hint and asks you to track down a series of hidden clues scattered across town. The five clues must be discovered in order — finding a later clue early will not count until the previous ones are collected."] },
      { heading: "All five clue locations",
        table: { headers: ["#", "Location", "Exact spot", "What to look for", "Area notes"],
          rows: [
            ["1", "The Broken Lamp", "Check behind the bar counter or near the fireplace", "An envelope tucked near the counter edge", "Misty Shores inn — visit while Samael is working"],
            ["2", "Ambrosia graveyard", "Upper-left area behind a bat-shaped headstone", "A partly hidden envelope near the stone", "Misty Shores region — look for distinctive headstone"],
            ["3", "Webb of Wonders", "Right side beside the pottery station", "An envelope near Sabrina's work area", "Inside Sabrina's shop"],
            ["4", "Cave of Echoes", "Eastern side near the large hour bell", "An envelope between stone formations", "Bring mining supplies and a light source"],
            ["5", "Khazan Temple", "Outside on the right side of the waterfall", "The final note sitting on the ground", "Take the east path from Town Hall"]
          ] } },
      { heading: "Reward", paragraphs: ["Completing all five clues awards a decorative painting that can be displayed in your house. The artwork appearance may vary or be clarified by further community reports. The treasure hunt also advances Elvira's character story."] }
    ],
    faqs: [ { question: "How many clues are there?", answer: "Five, and they must be found in the correct order." }, { question: "Where is the Cave of Echoes clue?", answer: "On the eastern side of the mine near the large bell that marks time." }, { question: "What is the reward?", answer: "A painting for your house, plus story progression with Elvira." }, { question: "Can I skip a clue?", answer: "No. The clues must be found in order — the next one only appears after you collect the previous." } ],
    related: ["samael-romance", "romance-guide", "fallen-tree"], sources: [PCG_TREASURE]
  },

"fallen-tree": {
    slug: "fallen-tree", title: "Where to Find the Fallen Tree in Moonlight Peaks — Location & Spell",
    description: "Find the fallen tree blocking the waterfall in Moonlight Peaks. Exact location (Moonlit Pines), required Arborascend spell from Sabrina, and common player mistakes.",
    h1: "Where to Find the Fallen Tree in Moonlight Peaks", eyebrow: "Quest solution", updated: "2026-07-13",
    answer: "The fallen tree is in Moonlit Pines, blocking the small waterfall west of the stairs leading to Luna's seed cart and cottage. Cast Arborascend to lift it. Buy Arborascend from Sabrina at Webb of Wonders.",
    sections: [
      { heading: "Which quest is this?", paragraphs: ["This is part of 'The Mysterious Bay' questline. The fallen tree blocks a waterfall path, and removing it is required to progress the quest."] },
      { heading: "Step-by-step checklist", bullets: ["1. Advance 'The Mysterious Bay' until the task prompts you to clear access.", "2. Go to Webb of Wonders and buy the Arborascend spell from Sabrina.", "3. Ensure you have enough mana before leaving town — the spell takes mana to cast.", "4. Travel to Moonlit Pines. Find Luna's seed cart as a landmark.", "5. Walk west of the nearby stairs — you'll see a small waterfall blocked by a fallen tree.", "6. Stand near the log and cast Arborascend to move it.", "7. Continue through the cleared path to progress the quest."] },
      { heading: "How to get Arborascend", paragraphs: ["Arborascend is sold by Sabrina at Webb of Wonders. If it is not listed yet, continue your wand and magic quests and check again. The spell is part of normal spell progression and does not require special materials."] },
      { heading: "Common mistakes to avoid", bullets: ["Do not search the Howling Marshes — the tree is in Moonlit Pines, not the swamp.", "Do not search Luna Bay itself before clearing the route — you cannot reach it yet.", "Do not spend all mana on watering magical crops before the trip — Arborascend requires mana.", "Do not guess the spell pattern repeatedly. If you've forgotten it, check the in-game almanac.", "If Arborascend is not in Sabrina's shop, guides suggest advancing the wand repair quest first; the often-reported Night 18 timing may vary by version or quest order."] }
    ],
    faqs: [ { question: "Which quest uses the fallen tree?", answer: "The Mysterious Bay." }, { question: "Which spell moves the tree?", answer: "Arborascend, purchased from Sabrina at Webb of Wonders." }, { question: "Is the tree in Howling Marshes?", answer: "No. It is in Moonlit Pines, near Luna's seed cart and cottage." }, { question: "Why can't I find the tree?", answer: "Make sure you are west of the stairs near Luna's cart, not deeper into Moonlit Pines." } ],
    related: ["spells-guide", "samael-romance", "beginner-guide"], sources: [PCG_TREE]
  },

"is-moonlight-peaks-worth-it": {
    slug: "is-moonlight-peaks-worth-it", title: "Is Moonlight Peaks Worth It? — Price, Platforms & What Players Say",
    description: "Should you buy Moonlight Peaks? Compare platforms, Steam sentiment, gameplay systems, demo availability, and honest reasons to buy now or wait.",
    h1: "Is Moonlight Peaks Worth It?", eyebrow: "Buying guide", updated: "2026-07-13",
    answer: "For players who want a full single-player farming sim with a strong gothic-vampire atmosphere, Moonlight Peaks is a reasonable purchase. Players sensitive to slow travel, loading screens, or early technical issues may prefer to wait for patches or try the free demo first.",
    sections: [
      { heading: "What this page is (and is not)", paragraphs: ["This is a purchase decision guide based on publicly available data — Steam store information, community feedback, and attributed guide coverage. It is not a first-person review. We have not played the game on your behalf, and we do not pretend to. Use this alongside the official demo to make your own call."] },
      { heading: "Price and platform quick reference",
        table: { headers: ["Platform", "Approximate price", "Demo"],
          rows: [ ["Steam (PC/macOS)", "$34.99 (varies by region and sale)", "Yes — Steam demo"], ["Nintendo Switch", "~$34.99 (regional)", "Yes — eShop demo"], ["Nintendo Switch 2", "~$39.99 (+$5 upgrade from Switch 1)", "TBD"], ["Android (Google Play)", "Price varies", "No separate demo"] ] },
        note: "Prices are community-reported approximations. Always confirm the current listing before buying. Prices may vary by region, edition, and sale period." },
      { heading: "Steam reception", bullets: ["As of the latest check, the public rating was Very Positive; this changes as reviews are added.", "A public tracking snapshot reported a peak of 5,422 concurrent players. This is time-sensitive, not a permanent player count.", "Steam listed 59 achievements at launch; the total may vary after updates.", "Check the live Steam page for the latest rating, review count, and feature list."] },
      { heading: "What you get", bullets: ["Farming with cursed and enchanted crops, seasonal planning, and keg processing.", "Fishing with rod upgrades, multiple species, and location variety.", "Spellcasting — Aquaflux, Arborascend, Ethereal Hands, Maturio, and more through wand progression.", "Potion brewing — Alter Ego Elixir, Love Potion, skill tonics.", "Mining and foraging across caves, forests, and beaches.", "Romance with around two dozen candidates across seven supernatural families.", "Marriage with a unique vampire-spouse transformation mechanic.", "Shapeshifting forms — Bat Form (speed), Cat Form (creature interaction), Mermaid Form (underwater).", "Nokturna card minigame with collectible cards.", "Home and farm customization with gothic decor and upgrades.", "Seven distinct family storylines woven into the main plot."] },
      { heading: "Reasons to buy now", bullets: ["You enjoy cozy farming sims and want a darker, gothic setting.", "You value atmosphere and originality over mechanical innovation.", "You play solo — multiplayer is not part of this game's design.", "The demo left you wanting more.", "You like relationship-heavy games with deep character storylines.", "Platform: You own a PC, Switch, or Android device (the only supported platforms)."] },
      { heading: "Reasons to wait", bullets: ["You want co-op or multiplayer — this is a purely single-player game.", "You only own a PS5 or Xbox — no console port has been announced.", "Steam Deck users: Independent reviews note long loading screens, small text, and occasional stutter.", "You want fully-mapped crop prices, gift tables, and fish species — community data is still growing.", "You prefer to wait for post-launch patches fixing performance and UI scaling issues.", "Budget: The game launched at full price. If you prefer to wait for a sale, that's a valid approach."] }
    ],
    faqs: [ { question: "Is this a first-person review?", answer: "No. This is a buying guide based on Steam store data, community feedback, and attributed guide sources." }, { question: "What is the safest way to decide?", answer: "Try the free demo on Steam or Nintendo Switch. It covers the opening hours and gives you a direct feel for the gameplay loop." }, { question: "Are Steam ratings fixed?", answer: "No. Review counts and percentages change as more owners post reviews. Check the live Steam page for the latest score." } ],
    related: ["beginner-guide", "games-like-moonlight-peaks", "steam-deck"], sources: [STEAM, OFFICIAL_SITE, SDHQ]
  },

"money-guide": {
    slug: "money-guide", title: "How to Make Money Fast in Moonlight Peaks — Gold Farming Guide",
    description: "Best ways to earn coins in Moonlight Peaks: ranked money-making methods, keg processing, fishing for profit, job board strategy, and what NOT to sell early.",
    h1: "How to Make Money in Moonlight Peaks", eyebrow: "Economy guide", updated: "2026-07-13",
    answer: "Use a mixed economy: maintain crops with guide-reported profit potential, complete job board requests, fish during route downtime, and test Keg processing with surplus. Community reports suggest grape wine can improve crop value, but exact returns may vary by version or patch.",
    sections: [
      { heading: "Ranked money-making methods",
        table: { headers: ["Rank", "Method", "Why it works", "Confidence"],
          rows: [
            ["1", "Repeatable crops + Kegs", "Most reliable income. Process pumpkins and nightshade through Kegs for a value multiplier.", "System confirmed; exact GPM values TBD"],
            ["2", "Job board", "Targeted rewards for items you already have. Complete requests on existing routes.", "Guide-backed"],
            ["3", "Fishing", "Uses time between crop maintenance. Guide tables currently place Hammerhead Shark and Carp near the top for gold per minute; values may vary by patch.", "Guide-reported; currently being verified"],
            ["4", "Foraging surplus", "Flowers, shells, herbs — zero cost, pure profit. Sell what you don't need for quests.", "Values vary; keep quest items"],
            ["5", "Drying Racks", "Turn foraged herbs into higher-value dried goods. Cheap to build.", "Community-reported"]
          ] } },
      { heading: "The Keg economy", paragraphs: ["Kegs process raw crops into higher-value goods. Community reports consistently identify grape wine as a strong income tool. Build at least three Kegs as soon as the crafting menu unlocks and keep them running every night. Process pumpkins and nightshade for the best returns — cursed crops double as food and profit, so you never waste a harvest."] },
      { heading: "Chester's shipping bin and the job board", bullets: ["Sell confirmed surplus through Chester, not every new item you find.", "Check the job board before selling a mixed stack — a request may use the same material.", "Prefer tasks you can finish on your normal route rather than making a special trip.", "Community tip: build multiple Kegs right at the start and keep them running."] },
      { heading: "What not to sell early", bullets: ["Your only sample of an unfamiliar crop or fish.", "Copper Ore and Iron Ore — needed for tool upgrades and crafting stations.", "Quest-marked items.", "Rare forageables with unknown recipes.", "A full seed reserve for the next planting cycle."] }
    ],
    faqs: [ { question: "What is the best crop for profit?", answer: "Pumpkins and nightshade are strong cursed-crop staples. Exact gold-per-minute values are still being verified." }, { question: "Should I turn grapes into wine?", answer: "Community reports suggest yes — processing through Kegs improves value. Test one batch before committing an entire harvest." }, { question: "Should I sell ore early?", answer: "No. Keep Copper and Iron Ore until tool upgrades and crafting needs are covered." } ],
    related: ["farming-guide", "fishing-guide", "beginner-guide"], sources: [OFFICIAL_SITE, LG_BEGINNER]
  },

"gift-guide": {
    slug: "gift-guide", title: "Moonlight Peaks Gift Guide — Best Gifts for Every Character",
    description: "Moonlight Peaks gift guide: loved and disliked gifts for romanceable characters, gift-giving mechanics, and how to find the best gifts. Updated as community data grows.",
    h1: "Moonlight Peaks Gift Guide", eyebrow: "Relationship reference", updated: "2026-07-13",
    answer: "Gift preferences are still being mapped by the community. Give loved gifts for the fastest affection progress, use liked gifts as safe alternatives, and avoid disliked items. Keep notes of in-game reactions — public gift tables for this game are still incomplete.",
    sections: [
      { heading: "How gift-giving works", bullets: ["Talk to a character and choose the gift interaction when prompted.", "Loved gifts give the biggest affection boost — approximately 3x that of a neutral item.", "Liked gifts are a safe fallback if you don't have a loved item.", "Disliked gifts waste a daily opportunity and can slow relationship progress.", "Birthday gifts give a massive multiplied affection bonus — do not miss birthdays.", "Each character can receive one gift per day."] },
      { heading: "Known gift preferences",
        table: { headers: ["Character", "Loved gifts", "Liked gifts", "Disliked gifts", "Source confidence"],
          rows: [
            ["Samael", "Red wine", "TBD", "TBD", "Guide-reported"],
            ["Orlock", "TBD", "TBD", "TBD", "Unverified"],
            ["Saga", "TBD", "TBD", "TBD", "Unverified"],
            ["Ridge", "TBD", "TBD", "TBD", "Unverified"],
            ["Death", "TBD", "TBD", "TBD", "Unverified"],
            ["Fiona", "TBD", "TBD", "TBD", "Unverified"],
            ["Luna", "TBD", "TBD", "TBD", "Unverified"],
            ["Evan", "TBD", "TBD", "TBD", "Unverified"],
            ["Ludo", "TBD", "TBD", "TBD", "Unverified"]
          ] },
        note: "A table with many TBD entries is honest, not incomplete. Publishing invented gift data would waste your time and rare items. This table updates only with attributable observations from guide sources or verified community reports." },
      { heading: "How to discover gift preferences yourself", bullets: ["Keep one sample of every crop, cooked dish, flower, shell, ore, and crafted item.", "Use character dialogue and reaction text as the strongest in-game clue.", "Check family themes — Ambrosia family members may prefer wine and potions; Logan family may favor farm goods.", "Talk to family members — they sometimes hint at what another character likes.", "Take notes. No public gift database is complete yet, so your own observations are valuable."] }
    ],
    faqs: [ { question: "What gift does Samael love?", answer: "Red wine is the current guide-confirmed loved gift." }, { question: "Why are most entries TBD?", answer: "The game is new (released July 7, 2026) and gift preferences are still being discovered and verified by the community." }, { question: "Are community gift lists reliable?", answer: "Use them as leads, not facts. Confirm with in-game reactions before investing rare items." }, { question: "Do birthday gifts matter?", answer: "Yes — birthday gifts give a significantly larger affection bonus than normal gifts." } ],
    related: ["romance-guide", "samael-romance", "farming-guide"], sources: [PCG_SAMAEL]
  },

"spells-guide": {
    slug: "spells-guide", title: "Moonlight Peaks Spells Guide — Magic, Mana & How to Unlock Spells",
    description: "How to unlock magic in Moonlight Peaks: spell list with effects, mana management, wand upgrades, and shapeshifting forms. All known spells from Eurogamer and PC Gamer guides.",
    h1: "Moonlight Peaks Spells Guide", eyebrow: "Magic guide", updated: "2026-07-13",
    answer: "Repair the broken wand through story progression; guides commonly report the trigger around Night 18 via Luna and Noel. Guide sources also report a 5,000g Witch's Wand and Aquaflux II coverage of 48 crops, but the timing, price, and coverage may vary by version or patch.",
    sections: [
      { heading: "Getting started with the wand", bullets: ["Keep the Broken Wand from the opening scene with Orlock. Do not sell or discard it.", "Guides commonly report visiting Luna around Night 18 to trigger the wand repair quest; timing may vary by version, patch, pace, or quest order.", "Noel will repair your wand, unlocking spellcasting and the Aquaflux spell.", "Guide sources report a 5,000g Witch's Wand from Sabrina and Aquaflux II coverage of up to 48 crops; both details are currently being verified and may vary by version or patch.", "Use the in-game almanac to review learned spell patterns — guessing wastes mana."] },
      { heading: "Known spell reference",
        table: { headers: ["Spell", "Effect", "How to unlock", "Cost"],
          rows: [
            ["Aquaflux I", "Water multiple crops at once", "Guide-reported wand repair timing: around Night 18; may vary", "Guide-reported as a starter spell"],
            ["Aquaflux II", "Guide-reported coverage: up to 48 crops; may vary by patch", "Witch's Wand upgrade", "Guide-reported 5,000g; verify in the current version"],
            ["Arborascend I", "Lift fallen trees and wooden obstacles", "Buy from Sabrina at Webb of Wonders", "Purchase price TBD"],
            ["Ethereal Hands I", "Remote interaction with objects", "TBD", "TBD"],
            ["Maturio I", "Speed up crop growth", "TBD", "TBD"],
            ["Levitate", "Utility movement spell", "Spell shop", "Guide-reported 3,000g; verify in the current version"],
            ["Mind's Eye", "Exploration utility", "Spell shop", "Guide-reported 2,000g; verify in the current version"],
            ["Tomorrow's Tears", "Time manipulation", "Late game progression", "Guide-reported 10,000g; verify in the current version"]
          ] },
        note: "Spell names confirmed by Eurogamer and PC Gamer guide data. Unlock steps and costs are guide-reported and may vary slightly with game version or quest order." },
      { heading: "Mana management", bullets: ["Mana is shared across farming spells and quest spells — do not empty the meter before a spell-gated quest.", "Use the Mana Extractor (crafted with 3 Copper Bars + 3 Iron Bars, bring to Sabrina) to increase maximum mana.", "Rose Quartz from the Crystal Caves is required for some mana upgrades.", "Food and potions can restore mana — keep restorative items in your inventory.", "Use ordinary tools for routine tasks. Save mana for spells that have no non-magical alternative."] },
      { heading: "Shapeshifting forms", paragraphs: ["Official descriptions confirm multiple shapeshifting forms unlock through story progression: Bat Form (increased movement speed and aerial traversal), Cat Form (creature interaction), and Mermaid Form (underwater exploration). Exact unlock steps are progression-sensitive — this first-batch guide does not publish an unverified complete list."] }
    ],
    faqs: [ { question: "How do I unlock spells?", answer: "Guides commonly report the wand repair quest around Night 18: visit Luna, then Noel repairs your wand. This unlocks Aquaflux and spellcasting, but timing may vary by version, patch, pace, or quest order." }, { question: "Where do I get Arborascend?", answer: "Buy from Sabrina at Webb of Wonders after progressing the wand quest." }, { question: "How do I increase mana?", answer: "Craft a Mana Extractor (3 Copper Bars + 3 Iron Bars) and bring it to Sabrina. Rose Quartz from the Crystal Caves may also be required." }, { question: "When can I get the Witch's Wand?", answer: "Guide sources report a 5,000g price at Sabrina and Aquaflux II coverage of up to 48 crops. The price and coverage are currently being verified and may vary by version or patch." } ],
    related: ["fallen-tree", "beginner-guide", "farming-guide"], sources: [OFFICIAL_SITE, PCG_TREE]
  },

"farming-guide": {
    slug: "farming-guide", title: "Moonlight Peaks Farming Guide — All Crops, Seasons & Profit Tips",
    description: "Complete Moonlight Peaks farming guide: cursed and enchanted crops, seasonal planting by crop type, keg processing strategy, and which crops to plant for maximum profit.",
    h1: "Moonlight Peaks Farming Guide", eyebrow: "Farm systems", updated: "2026-07-13",
    answer: "Guide sources suggest cursed crops for steady food and income, with enchanted crops offering higher profit potential at a mana cost. Exact rankings and processing returns are community-reported snapshots and may vary by version or patch.",
    sections: [
      { heading: "Farming basics", bullets: ["Prepare soil with the shovel, plant seeds suited to the current season, and water daily.", "Cursed crops can be watered normally and grow year-round.", "Enchanted crops require the Aquaflux spell to water — without it, they wither.", "Harvest on time and keep one sample of each new crop before selling.", "Process crops through Kegs for significantly higher sell prices — pumpkins and nightshade benefit most.", "Use Drying Racks for foraged herbs — cheap to build and provide steady supplementary income."] },
      { heading: "Crop types and planning",
        table: { headers: ["Type", "Examples", "Watering", "Season", "Strategy"],
          rows: [
            ["Cursed crops", "Pumpkins, Nightshade, Shadow Wheat", "Normal watering can", "Year-round", "Staple food + profit. Process through Kegs."],
            ["Enchanted crops", "Enchanted Roses, Luna Seeds, Ghost Peppers", "Requires Aquaflux spell", "Seasonal or year-round", "Community guides report high profit potential at a mana cost; rankings may vary by patch."],
            ["Trees", "Orchard varieties", "Normal", "Year-round", "Long-term investment. Leave permanent space."],
            ["Herbs", "Multiple varieties", "Normal or forage", "Seasonal", "Use for cooking and potions. Process extras through Drying Racks."],
            ["Mushrooms", "Multiple varieties", "Forage", "Seasonal", "Not all are edible — verify before cooking."]
          ] },
        note: "Current guide datasets from Eurogamer report around 53 seeds total. This page intentionally does not reproduce a full 53-row data table or invent missing values. Farming strategy matters more than a spreadsheet of unverified numbers." },
      { heading: "Crop profitability ranking",
        table: { headers: ["Tier", "Crop", "Type", "Season", "Notes"],
          rows: [
            ["S", "Pumpkins", "Cursed", "All year", "Community-reported as a leading cursed crop by GPM; verify current prices."],
            ["A", "Nightshade", "Cursed", "All year", "Community-ranked secondary crop; exact profitability may vary."],
            ["A", "Enchanted Roses", "Enchanted", "All year", "Community guides report high profit potential; requires Aquaflux mana."],
            ["B", "Luna Seeds", "Enchanted", "Seasonal", "Community guides rank it highly during its seasonal window; exact profitability may vary."],
            ["B", "Ghost Peppers", "Enchanted", "All year", "Community-ranked option, often below roses; exact GPM may vary."],
            ["C", "Shadow Wheat", "Cursed", "All year", "Community charts rank it lower among staples; current GPM is still being verified."]
          ] },
        note: "Tier list adapted from community guide GPM (gold per minute) calculations. Exact sell prices are still being verified and may change with patches." },
      { heading: "Keg and processing strategy", bullets: ["Build at least 3 Kegs as soon as the crafting menu unlocks.", "Keg-processed pumpkins sell for roughly 3x the raw crop price (guide-reported estimate).", "Keep Kegs running every night — the processing time creates cash flow but pays off.", "Drying Racks are a cheaper secondary option for herbs and forageables.", "Do not process quest-required crops or your only sample of a new variety."] }
    ],
    faqs: [ { question: "How many seeds are in Moonlight Peaks?", answer: "Guide datasets from Eurogamer describe approximately 53 seed varieties. Exact membership and sell prices are still being independently verified." }, { question: "What is the best crop per season?", answer: "Community GPM guides currently rank pumpkins highly among cursed crops and Luna Seeds highly in their seasonal window. Exact profitability may vary by version or patch." }, { question: "Do I need Aquaflux to water all crops?", answer: "No. Cursed crops can be watered normally. Only enchanted crops require Aquaflux." }, { question: "How many Kegs should I build?", answer: "Start with at least 3. Add more as your crop supply grows." } ],
    related: ["money-guide", "beginner-guide", "fishing-guide"], sources: [OFFICIAL_SITE]
  },

"fishing-guide": {
    slug: "fishing-guide", title: "Moonlight Peaks Fishing Guide — Rod, Fish Locations & Tips",
    description: "How to get the fishing rod from Noel on Night 2, all fish species with spawn locations, rod upgrades, bite timing tips, and the best fish for gold.",
    h1: "Moonlight Peaks Fishing Guide", eyebrow: "Fishing basics", updated: "2026-07-13",
    answer: "Guides report getting the rod from Noel around Night 2 after 'Meet the Townsfolk.' They currently rank Hammerhead Shark and Carp highly for gold per minute, but locations, values, timing, and upgrade requirements may vary by version or patch.",
    sections: [
      { heading: "How to get the fishing rod", bullets: ["Complete Orlock's 'Meet the Townsfolk' quest first — this gates the fishing introduction.", "Around Night 2, find Noel by a river in the forest outside town. A cutscene will trigger.", "After speaking with Noel, a sparkling exclamation point appears in the forest above town.", "Catch three fish from nearby water and bring them to Noel at The Broken Lamp inn.", "Noel concedes you are a capable fisher, and you get to keep the rod."] },
      { heading: "How fishing works", bullets: ["Stand at a valid water edge (river, lake, or Luna Bay) and equip the rod.", "Cast only when the interaction indicator is active.", "Watch the bite and reel timing prompts — do not mash immediately.", "If a fish you don't want approaches the bait (e.g., a large fish when you have the basic rod), reel in slightly to divert it — no need to re-cast.", "Use short fishing sessions between travel objectives to keep the night productive."] },
      { heading: "Rod upgrades",
        table: { headers: ["Rod", "Catchable sizes", "Upgrade requirement"],
          rows: [
            ["Standard Fishing Rod", "Small only", "Free from Noel (Night 2)"],
            ["Premium Fishing Rod", "Large + Small", "Upgrade at Howling Hammer; requires Gold Ingots"],
            ["Enchanted Fishing Rod", "Large + Small", "Late-game upgrade; improved stats"]
          ] } },
      { heading: "Known fish species (partial — verified only)",
        table: { headers: ["Species", "Location", "Time/condition", "Rarity", "Size", "Rod required"],
          rows: [
            ["Snuffy", "Luna Bay", "Any time", "Uncommon", "Small", "Any rod"],
            ["Furybud", "Luna Bay", "Any time", "Rare", "Large", "Premium or Enchanted"],
            ["Moonflutter", "Luna Bay", "Full moon", "Uncommon", "Large", "Premium or Enchanted"],
            ["Gnasher", "Rivers flowing into Silverveil Lake", "Any time", "Uncommon", "Large", "Premium or Enchanted"],
            ["Whisper", "Various waters", "TBD", "Common", "Small", "Any rod"],
            ["Hammerhead Shark", "Luna Bay", "TBD", "Rare", "Large", "Premium or Enchanted"],
            ["Carp", "Rivers and lakes", "TBD", "Common", "Small", "Any rod"]
          ] },
        note: "Fish species, locations, and requirements are guide-reported from Neoseeker, TheGamer, and Bonus Action. Current guides rank Hammerhead Shark and Carp highly and estimate big-catch variants near 10x regular value; these claims are currently being verified and may vary by patch." },
      { heading: "Fishing tips", bullets: ["Reel in slightly to scare away unwanted fish — no need to recast entirely.", "Brew the Rapid Reel Potion (Mandrake + Wolfsbane) to fish faster.", "Community guides report a 250 Gold bet from Noel for catching 3 fish on your first attempt; quest terms may vary by version or patch.", "Guide tables list Whisper at 40 Gold base or 50 Gold at 1-star; these exact values are currently being verified and may vary by patch.", "Fish energy values matter too — some species give more stamina when eaten than others."] }
    ],
    faqs: [ { question: "Who gives you the fishing rod?", answer: "Noel, by a forest river around Night 2. Complete 'Meet the Townsfolk' first." }, { question: "What is the best fish for gold?", answer: "Current community charts rank Hammerhead Shark and Carp highly and estimate big-catch variants near 10x regular value. These exact values are currently being verified and may vary by patch." }, { question: "How do I upgrade my fishing rod?", answer: "Upgrade at the Howling Hammer. The Premium Rod requires Gold Ingots." }, { question: "Can I catch large fish with the basic rod?", answer: "No. Large fish require the Premium or Enchanted Fishing Rod." } ],
    related: ["beginner-guide", "farming-guide", "money-guide"], sources: [NS_FISHING, TG_FISHING, BA_FISHING]
  },

"steam-deck": {
    slug: "steam-deck", title: "Moonlight Peaks Steam Deck — Performance, Settings & Known Issues",
    description: "How Moonlight Peaks runs on Steam Deck: latest-check compatibility status, guide-reported settings, battery observations, loading, and text-size issues.",
    h1: "Moonlight Peaks on Steam Deck", eyebrow: "Handheld performance", updated: "2026-07-13",
    answer: "As of the latest check, Steam and independent coverage report Moonlight Peaks as Steam Deck Verified. That status may change by version or patch, while Steam Deck HQ testing reports long loading, small UI text, inconsistent performance, and occasional crashes.",
    sections: [
      { heading: "Compatibility snapshot",
        table: { headers: ["Item", "Status", "Notes"],
          rows: [
              ["Steam Deck status", "Guide-reported as Verified as of the latest check", "May change after a game or compatibility update"],
              ["ProtonDB rating", "Community-reported as Gold at the latest check", "Community rating; may change as reports are added"],
            ["Controller support", "Works out of the box", "Full gamepad support"],
            ["Loading screens", "Frequent and sometimes long", "Guide-tested — a common complaint"],
            ["UI text", "Small text; limited scaling options", "Guide-tested — readability concern"],
            ["Frame rate stability", "Mixed — dips below target", "Hardware and scene dependent"],
            ["Exact universal FPS target", "TBD", "Varies by area and settings"]
          ] } },
      { heading: "Recommended settings", bullets: ["Start with default graphics settings.", "Steam Deck HQ recommends trying a 50 Hz refresh rate as a balance between smoothness and stability.", "Leave TDP uncapped initially — aggressive power limits can cause input lag.", "Test readability during the demo or within the Steam refund window if small text is a concern.", "Install the latest game updates and SteamOS updates before troubleshooting.", "Adjust in-game settings and SteamOS Quick Access Menu (QAM) settings together for best results."], note: "Settings recommendations from independent guide testing, not official developer targets." },
      { heading: "Known issues", bullets: ["Long or frequent loading screens between areas.", "Small dialogue and interface text — limited UI scaling options.", "Occasional stutter or inability to maintain a consistent frame rate.", "Independent review from Steam Deck HQ reported crashes and a stuck-character incident.", "Limited in-game performance options compared to desktop PC."] },
      { heading: "Battery life", paragraphs: ["One independent, guide-reported OLED test observed roughly 4-5 hours. This is not a universal target and may vary with model, screen brightness, TDP settings, background processes, battery health, game version, and patch."] }
    ],
    faqs: [ { question: "Is Moonlight Peaks Steam Deck Verified?", answer: "As of the latest check, Steam and independent coverage list it as Verified. Store status may change after game or compatibility updates." }, { question: "What frame rate should I target?", answer: "Steam Deck HQ recommends trying 50 Hz. Exact performance varies by scene." }, { question: "How is battery life?", answer: "One independent, guide-reported OLED test observed roughly 4-5 hours. Results may vary with model, settings, battery health, game version, and patch." }, { question: "Does the text size affect gameplay?", answer: "Independent reviewers note small text with limited scaling options — it may be a concern on the smaller screen." } ],
    related: ["switch", "ps5", "is-moonlight-peaks-worth-it"], sources: [STEAM, SDHQ]
  },

"games-like-moonlight-peaks": {
    slug: "games-like-moonlight-peaks", title: "10 Games Like Moonlight Peaks — Similar Cozy Farming Sims",
    description: "Love Moonlight Peaks? Try Stardew Valley, Fields of Mistria, Wylde Flowers, Coral Island and more cozy farming sims with romance, magic, crafting, and town-building.",
    h1: "Games Like Moonlight Peaks", eyebrow: "What to play next", updated: "2026-07-13",
    answer: "For witchy romance and magic: Wylde Flowers. For farming depth: Stardew Valley. For co-op: Stardew Valley or Fae Farm. For the closest supernatural farming feel: Sun Haven.",
    sections: [
      { heading: "Comparison table",
        table: { headers: ["Game", "Platforms", "Why it's similar", "Key difference"],
          rows: [
            ["Stardew Valley", "PC, consoles, mobile", "Farming, relationships, mining, crafting", "Pixel art; less supernatural focus; supports co-op"],
            ["Fields of Mistria", "PC", "Town relationships, magical farming", "Anime-inspired art style; early access"],
            ["Wylde Flowers", "PC, Switch, mobile", "Witchcraft, farming, fully-voiced romance", "More authored protagonist and linear story"],
            ["Coral Island", "PC, PS5, Xbox", "Large relationship cast, farming, ocean cleanup", "Tropical environmental focus; 28 romance options"],
            ["Sun Haven", "PC, Switch", "Fantasy races, magic, farming, combat", "More RPG combat and skill tree progression"],
            ["My Time at Sandrock", "PC, consoles", "Town bonds, crafting, romance", "Workshop building instead of pure crop farming"],
            ["Story of Seasons series", "PC and consoles (varies)", "Classic farm and relationship loop", "Less gothic, more traditional pastoral farming"],
            ["Rune Factory series", "PC and consoles (varies)", "Farming, romance, dungeon combat", "Combat is much more central to gameplay"],
            ["Garden Witch Life", "PC, consoles", "Witchy garden, cozy crafting, potions", "Smaller social and romance emphasis"],
            ["Fae Farm", "PC, Switch", "Fantasy farming, magic, crafting, co-op", "Lighter social writing; supports multiplayer"]
          ] } },
      { heading: "Choose by what you want most", bullets: ["Witchy story + romance: Wylde Flowers.", "Farming depth + endless play: Stardew Valley.", "Action combat with romance: Rune Factory.", "Co-op fantasy farming: Fae Farm.", "Crafting-heavy town rebuilding: My Time at Sandrock.", "Supernatural RPG-farming blend: Sun Haven.", "Underwater + land farming: Coral Island.", "Cozy witch garden + potions: Garden Witch Life."] }
    ],
    faqs: [ { question: "Which similar game has co-op?", answer: "Stardew Valley and Fae Farm are strong options if multiplayer matters." }, { question: "Which game is closest to the witchy theme?", answer: "Wylde Flowers has the strongest witchcraft and narrative focus. Garden Witch Life is a lighter alternative." }, { question: "Are all ten games on Switch?", answer: "Most are, but check each game's current store listing — platform availability varies by title." } ],
    related: ["is-moonlight-peaks-worth-it", "romance-guide", "farming-guide"], sources: [OFFICIAL_SITE]
  },
};

export const guideList = Object.values(guides);

export function getGuide(slug: string) {
  return guides[slug];
}
