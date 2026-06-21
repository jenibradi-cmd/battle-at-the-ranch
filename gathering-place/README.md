# GATHERING PLACE
### A house of lifestyle brands for slow, intentional living and the art of gathering

> **The house thesis.** Gathering Place exists to make ordinary life feel *consecrated* — to give people beautiful, story-rich objects and rituals for the moments that matter: the morning, the table, the bath, the garden, the gift, the grief, the celebration, the gathering. We are not a single store; we are a **house of brands** that share one customer, one set of values, and one operating system — while each brand owns a distinct world, voice, and category territory.

---

## Why a house, not a single brand

A single brand has a ceiling: one voice, one aesthetic, one customer mood. A **house of brands** lets Gathering Place serve the same discerning, time-affluent-seeking customer across many moments of her life *without diluting any one brand's clarity* — while sharing the expensive, hard-won infrastructure (sourcing relationships, artisan networks, buying discipline, private-label development, logistics) underneath.

**Model: a house of brands on a shared operating system.**
- **Distinct on top:** each brand has its own name, world, customer mood, category territory, and creative voice.
- **Shared underneath:** one buying methodology, one global sourcing & maker network, one set of values, one logistics/PL development backbone, and (over time) one membership/loyalty layer that lets a customer belong to the *house*, not just buy from a brand.

This is the Williams-Sonoma Inc. lesson (Pottery Barn, West Elm, Williams Sonoma, Rejuvenation — distinct brands, shared sourcing/ops muscle) executed at boutique altitude with a slow-living soul.

---

## Repository structure

```
gathering-place/
├── README.md                          ← you are here (the house: vision + architecture)
├── shared/                            ← cross-brand operating system (serves every brand)
│   └── BUYER_DECISION_PLAYBOOK.md     ← how we choose product A over B–G; scorecard,
│                                         disqualifiers, worked examples, live-search prompt pack,
│                                         and the verified global maker directory
└── brands/
    └── stillwater/                    ← BRAND 01 (the anchor brand)
        ├── README.md                  ← Stillwater brand brief
        └── STRATEGY.md                ← the full 10-part buying/merchandising/sourcing strategy
```

**How to use this repo**
- Adding a product to any brand? Start in `shared/BUYER_DECISION_PLAYBOOK.md` — the scorecard and disqualifiers are house standard.
- Sourcing a maker for any brand? The verified maker directory + live-search prompt pack live in the playbook and are house-wide assets.
- Building a brand's assortment? See that brand's `STRATEGY.md`.

---

## The shared operating system (what every brand inherits)

1. **One customer at the center.** Women ~38–62, $180k+ HHI, "time-affluent-seeking" — money but starved of unhurried time; flexes *discernment*, not logos. (Full anthropology in Stillwater's `STRATEGY.md`, Part 1 — the customer is shared across the house.)
2. **One buying methodology.** The 9-factor scorecard, the 5 auto-disqualifiers, the tie-breaker rule (exclusivity → story → terms), and good-better-best role-casting. See `shared/BUYER_DECISION_PLAYBOOK.md`.
3. **One global maker network.** A shared, vetted artisan/manufacturer directory and a repeatable live-search discovery system — so a sourcing win for one brand becomes an asset for all.
4. **One private-label & logistics backbone.** Shared PL development, packaging/IP systems, freight/customs, and QC discipline.
5. **One set of values.** Provenance over anonymity. Curation over assortment. Sell the scene, not the SKU. Timelessness over trend. Congregation over transactions.
6. **One loyalty layer (roadmap).** A house membership that spans brands — belong to Gathering Place, not just shop a brand.

---

## Brand roster

| # | Brand | Status | Territory / world |
|---|---|---|---|
| 01 | **Stillwater** | Defined — see `brands/stillwater/` | Spa essentials, rituals, home goods, antiques, garden, jewelry, gifts, slow apparel/accessories, and experiences — the consecration of ordinary time. |
| 02+ | *(future brands)* | Whitespace | See "Adding a brand" below. |

### Stillwater (Brand 01 — the anchor)
The flagship and proof-of-concept for the house operating system. Owns ritual as its moat (especially **grief, Sabbath, and hospitality rituals**), funds itself with private-label spa/ritual consumables (65–75% GM), and builds credibility with curated antiques and best-tier artisan goods. Full detail in `brands/stillwater/`.

### Adding a brand (the house template)
Each new brand should: (a) serve the *same house customer* in a *distinct moment/mood*, (b) avoid cannibalizing a sibling's territory, (c) reuse the shared operating system, and (d) earn a clear role in the house portfolio (anchor / margin / reach / halo). To stand one up, copy the Stillwater folder pattern: a `README.md` brand brief + a `STRATEGY.md` built on the shared playbook.

**Illustrative whitespace** (suggestions, not commitments — each would extend the house without overlapping Stillwater):
- A dedicated **table & gathering** brand (entertaining, serveware, the host's world).
- A **garden & growing** brand (seeds, tools, the seasonal/homestead-aesthete).
- A **paper & correspondence** brand (stationery, cards, the ritual of the written word).
- A **larder / estate-food** brand (preserves, oils, pantry — the Blackberry Farm "estate-as-product" lane).
- A **little ones / family** brand (heirloom children's goods, christening/milestone).

---

## Status

- **Brand 01 (Stillwater):** strategy complete (10-part) + shared buying playbook with verified makers.
- **House operating system:** buying methodology, sourcing/maker network, and live-search discovery system documented and reusable.
- **Next:** define Brand 02's territory and role; stand up the shared membership/loyalty layer.

*This folder is self-contained and ready to be extracted into its own dedicated GitHub repository (`gathering-place`) whenever you'd like — every path is relative, so it travels intact.*
