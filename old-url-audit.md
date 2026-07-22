# Old URL audit

Status: waiting for the Google Search Console high-click URL export for July 1-17.

This audit will determine whether any historical URLs need explicit permanent redirects. Do not add redirects based only on guessed URL variants; evaluate the supplied GSC data against the live response chain, canonical target, sitemap entry, and internal-link target first.

## Current canonical route inventory

All current routes use the no-trailing-slash form.

| Current URL | Expected status | Trailing-slash variant |
| --- | ---: | --- |
| `/` | 200 | n/a |
| `/switch` | 200 | `/switch/` -> 308 `/switch` |
| `/ps5` | 200 | `/ps5/` -> 308 `/ps5` |
| `/multiplayer` | 200 | `/multiplayer/` -> 308 `/multiplayer` |
| `/beginner-guide` | 200 | `/beginner-guide/` -> 308 `/beginner-guide` |
| `/romance-guide` | 200 | `/romance-guide/` -> 308 `/romance-guide` |
| `/samael-romance` | 200 | `/samael-romance/` -> 308 `/samael-romance` |
| `/treasure-hunt-clues` | 200 | `/treasure-hunt-clues/` -> 308 `/treasure-hunt-clues` |
| `/fallen-tree` | 200 | `/fallen-tree/` -> 308 `/fallen-tree` |
| `/is-moonlight-peaks-worth-it` | 200 | `/is-moonlight-peaks-worth-it/` -> 308 `/is-moonlight-peaks-worth-it` |
| `/money-guide` | 200 | `/money-guide/` -> 308 `/money-guide` |
| `/gift-guide` | 200 | `/gift-guide/` -> 308 `/gift-guide` |
| `/spells-guide` | 200 | `/spells-guide/` -> 308 `/spells-guide` |
| `/farming-guide` | 200 | `/farming-guide/` -> 308 `/farming-guide` |
| `/fishing-guide` | 200 | `/fishing-guide/` -> 308 `/fishing-guide` |
| `/steam-deck` | 200 | `/steam-deck/` -> 308 `/steam-deck` |
| `/games-like-moonlight-peaks` | 200 | `/games-like-moonlight-peaks/` -> 308 `/games-like-moonlight-peaks` |

## GSC review worksheet

Populate this table after the July 1-17 high-click URL list is provided.

| GSC URL | Clicks | Current response chain | Matching current page | In sitemap | Internal links | Recommendation | Reason |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| _Pending GSC export_ |  |  |  |  |  |  |  |

## Redirect decision rules

- Keep the platform-level trailing-slash 308 normalization for simple `/slug/` variants.
- Add an explicit 301 only when an old URL has meaningful GSC clicks or backlinks and maps unambiguously to a current page.
- Do not redirect unrelated, soft-404, parameter-only, or spam URLs to a generic page.
- Avoid redirect chains: every approved old URL should point directly to the final no-trailing-slash URL.
- Recheck the old URL after implementation and record the exact status and `Location` header.
