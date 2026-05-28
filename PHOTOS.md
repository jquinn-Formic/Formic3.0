# Photo upload specs

Reference for everyone (Jonathan, Claude, future contributors) when adding photography to the Formic 3.0 site. Keeping files inside these limits keeps the site fast on mobile, makes Largest Contentful Paint scores stay green, and means we never have to revisit the asset library when traffic grows.

## File size + dimension targets

| Use | Where it appears | Source dimensions | Target file size | Format |
|---|---|---|---|---|
| **Hero / full-bleed** | Solution-page heroes, careers team photo, story heroes, /full-service hero | **1920×1080** max | **150–300 KB** | JPEG q78 or WebP q75 |
| **In-section** | The `.db-img` column on `db-grid` blocks (Results, Full Service, solution pages) | **1440×960** max | **80–180 KB** | JPEG q78 or WebP q75 |
| **Card thumbnails** | Story / article 16:9 index cards | **960×540** max | **40–80 KB** | JPEG q72 |
| **Customer logos** | Logo marquee on homepage | vector ideal | **<20 KB** SVG, **<30 KB** PNG | SVG preferred (transparent bg) |
| **Headshots** | Testimonials (careers slider, /full-service quote cards) | **600×600** max | **30–60 KB** | JPEG q78 |

## Hard rules

- **Never ship a photo over 500 KB** — it tanks Largest Contentful Paint on mobile.
- **WebP is ~30% smaller than JPEG** at equivalent quality and is supported in every modern browser. Use it when your export tool supports it.
- **Avoid HEIC / RAW / TIFF** — browsers won't render them reliably. Convert to JPEG or WebP first.
- **Convert GIFs > 500 KB to MP4 or WebM** — 10× smaller, identical visual. ffmpeg: `ffmpeg -i input.gif -movflags faststart -pix_fmt yuv420p output.mp4`.
- **Run finished files through [ImageOptim](https://imageoptim.com/mac)** (free Mac tool, drag-and-drop) — strips metadata and squeezes another 20–40% off with zero visible quality loss.

## Filenames

- **Descriptive kebab-case.** Names should read like a label: `Wyandot-Palletizing.jpg`, `Cameron-Cobot-Palletizing.jpg`, `Formic-Pallet-Wrap-Product.jpg`.
- **Never check in camera-roll names** like `R52_5055.jpg`, `IMG_8884.JPG`, `DSC_0143.jpg`.
- **Per-section reuse-friendly names** are best when the photo isn't customer-specific (e.g., `Formic-Operator-Detail.jpg`, `Formic-FPI-on-floor.jpg`).

## Where files live

- **`public/`** — site-wide photography that's reused across multiple pages (Talos-*, Focus-*, Formic-Header.mp4, hero photos). Files in `public/` are referenced from .astro as absolute paths starting with `/` (e.g. `<img src="/Wyandot-Palletizing.jpg" />`).
- **`public/stories/<slug>/`** — customer-story photos (already migrated; one folder per story).
- **`public/articles/<slug>/`** — article inline media (already migrated; one folder per article).
- **`public/logos/`** — customer logos used in the marquee.
- **`public/careers/`** — Formican headshots + team photos.
- **`public/solutions/`** — solution-specific photography (e.g. `industrial-palletizing.jpg`, `case-packer.jpg`).

## Quick workflow

1. **Resize** to max display dimension × 2 (for Retina): 1920px wide for hero, 1440px for in-section, 960px for card thumbnails.
2. **Export** JPEG at quality 78 (or WebP at quality 75).
3. **Drop the file through ImageOptim.**
4. **Check the file size** against the table above. If it's still over target, drop the JPEG quality 5–10 points or re-resize smaller.
5. **Rename** to descriptive kebab-case.
6. **Save to the right folder under `public/`.**
7. **Reference from .astro** as an absolute path: `<img src="/Your-Photo.jpg" alt="Descriptive alt text — value to the reader, not just contents" loading="lazy" />`.

## Alt text reminder

Alt text describes value to the reader, not just contents. From the design language in `CLAUDE.md`:

> alt="Formic palletizing cell — robot taking on the high-strain stacking task"

Not "robot.jpg" or "palletizer photo."
