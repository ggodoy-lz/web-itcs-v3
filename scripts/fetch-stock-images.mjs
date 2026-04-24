/**
 * Rellena public/assets/img/ con fotos de Unsplash (licencia: https://unsplash.com/license).
 * Solo usa IDs de foto comprobados con fetch (200).
 * Uso: node scripts/fetch-stock-images.mjs
 */
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, "..");
const imgRoot = join(root, "public", "assets", "img");

const UA =
  "Mozilla/5.0 (compatible; ZotechSite/1.0; +https://example.local; stock-images)";

const j = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=82&auto=format&fit=crop`;
const p = (id, w, h) => `${j(id, w, h)}&fm=png`;

async function downloadTo(url, relpath) {
  const out = join(imgRoot, relpath);
  await mkdir(dirname(out), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} → ${relpath}\n  ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) {
    throw new Error(`Muy pocos bytes en ${relpath}`);
  }
  await writeFile(out, buf);
  return out;
}

async function copyFileTo(fromAbs, relpath) {
  const out = join(imgRoot, relpath);
  await mkdir(dirname(out), { recursive: true });
  await copyFile(fromAbs, out);
}

const SHAPE_PNG = p("1504384308090-c894fdcc538d", 320, 320);
const BLOB2 = p("1451187580459-43490279c0fa", 320, 320);

const SHAPE_PATHS = [
  "shape/shape-1.png",
  "shape/shape-2.png",
  "shape/shape-3.png",
  "shape/shape-4.png",
  "shape/shape-5.png",
  "shape/shape-5-black.png",
  "shape/shape-6.png",
  "shape/shape-7.png",
  "shape/shape-8.png",
  "shape/shape-9.png",
  "shape/shape-10.png",
  "shape/shape-11.png",
  "shape/shape-12.png",
  "shape/shape-15.png",
  "shape/shape-16.png",
  "shape/shape-17.png",
  "shape/shape-18.png",
  "shape/shape-19.png",
  "shape/shape-20.png",
  "shape/shape-22.png",
  "shape/shape-23.png",
  "shape/shape-24.png",
  "process/shape-1.png",
  "process/shape-2.png",
  "process/shape-3.png",
  "process/shape-4.png",
  "process/shape-5.png",
  "process/shape-6.png",
  "process/shape-7.png",
  "team/shape-1.png",
  "team/shape-2.png",
  "about/shape-1.png",
  "service/shape-1.png",
  "service/shape-2.png",
  "service/service-icon-1.png",
  "service/service-icon-2.png",
  "service/service-icon-3.png",
  "cta/cta-shape-1.png",
  "testimonial/quote-1.png",
];

const GROUPS = [
  {
    url: j("1558494949-ef010cbdcc31", 1600, 1000),
    dests: [
      "team/01.jpg",
      "process/01.jpg",
      "service/01.jpg",
      "service/08.jpg",
      "feature/01.jpg",
      "case/09.jpg",
      "team/bg-img.jpg",
    ],
  },
  {
    url: j("1563013544-824ae1b704d3", 1600, 1000),
    dests: [
      "team/02.jpg",
      "process/02.jpg",
      "service/02.jpg",
      "feature/02.jpg",
      "case/10.jpg",
      "funfact-1.jpg",
    ],
  },
  {
    url: j("1451187580459-43490279c0fa", 1600, 1000),
    dests: [
      "team/03.jpg",
      "process/03.jpg",
      "service/03.jpg",
      "feature/03.jpg",
      "case/11.jpg",
    ],
  },
  {
    url: j("1591488320449-011701bb6704", 1600, 1000),
    dests: [
      "team/04.jpg",
      "feature/04.jpg",
      "case/12.jpg",
      "process/process-bg.jpg",
      "funfact-2.jpg",
    ],
  },
  {
    url: j("1522071820081-009f0129c71c", 1200, 800),
    dests: [
      "case/13.jpg",
      "case/14.jpg",
      "case/bg.jpg",
      "service/details-2.jpg",
      "blog/details-1.jpg",
      "blog/details-2.jpg",
    ],
  },
  {
    url: j("1497366216548-37526070297c", 1200, 900),
    dests: [
      "about/01.jpg",
      "about/04.jpg",
      "about/08.jpg",
      "service/details-1.jpg",
      "faq/01.jpg",
      "blog/bg-1.jpg",
      "feature/bg01.jpg",
    ],
  },
  {
    url: j("1504384308090-c894fdcc538d", 1200, 800),
    dests: [
      "blog/01.jpg",
      "blog/02.jpg",
      "blog/03.jpg",
      "blog/04.jpg",
      "blog/05.jpg",
      "blog/06.jpg",
    ],
  },
  {
    url: j("1551434678-e076c223a692", 1200, 800),
    dests: [
      "blog/07.jpg",
      "blog/08.jpg",
      "blog/09.jpg",
      "blog/10.jpg",
      "blog/11.jpg",
      "blog/12.jpg",
      "blog/13.jpg",
      "blog/14.jpg",
    ],
  },
  {
    url: j("1563013544-824ae1b704d3", 1200, 800),
    dests: [
      "blog/blog-1.jpg",
      "blog/pp1.jpg",
      "blog/pp2.jpg",
    ],
  },
  {
    url: j("1522071820081-009f0129c71c", 1200, 800),
    dests: ["blog/blog-2.jpg", "blog/pp3.jpg", "funfact-bg.jpg", "blog/blog-3.jpg"],
  },
  {
    url: j("1504384308090-c894fdcc538d", 1200, 800),
    dests: ["blog/pp4.jpg", "apps-bg.jpg"],
  },
  {
    url: j("1563013544-824ae1b704d3", 1200, 800),
    dests: [
      "gallery/10.jpg",
      "gallery/11.jpg",
      "gallery/12.jpg",
      "gallery/13.jpg",
    ],
  },
  {
    url: j("1551434678-e076c223a692", 1200, 800),
    dests: [
      "gallery/14.jpg",
      "gallery/15.jpg",
      "gallery/16.jpg",
      "gallery/17.jpg",
      "gallery/18.jpg",
    ],
  },
  {
    url: j("1504384308090-c894fdcc538d", 1200, 800),
    dests: [
      "team/09.jpg",
      "team/10.jpg",
      "team/11.jpg",
      "team/12.jpg",
    ],
  },
  {
    url: j("1591488320449-011701bb6704", 1200, 800),
    dests: ["feature/05.jpg", "breadcrumb.jpg", "faq/02.jpg"],
  },
  {
    url: j("1560250097-0b93528c311a", 900, 1000),
    dests: ["team/05.jpg"],
  },
  { url: j("1573496359142-b8d87734a5a2", 900, 1000), dests: ["team/06.jpg"] },
  { url: j("1519085360753-af0119f7cbe7", 900, 1000), dests: ["team/07.jpg"] },
  { url: j("1580489944761-15a19d654956", 900, 1000), dests: ["team/08.jpg"] },
  {
    url: j("1472099645785-5658abf4ff4e", 800, 800),
    dests: ["team/details-1.jpg", "blog/author_img1.jpg"],
  },
  {
    url: p("1472099645785-5658abf4ff4e", 800, 800),
    dests: ["Avatar.png"],
  },
  {
    url: j("1438761681033-6461ffad8d80", 800, 800),
    dests: ["blog/author_img2.jpg"],
  },
  {
    url: p("1451187580459-43490279c0fa", 1600, 1000),
    dests: [
      "world.png",
      "world-2.png",
      "about/01-bg.png",
      "hero/hero-1-1-bg.png",
    ],
  },
  {
    url: p("1504384308090-c894fdcc538d", 1000, 1000),
    dests: [
      "about/02.png",
      "about/03.png",
      "about/05.png",
      "about/06.png",
      "about/07.png",
      "about/10.png",
    ],
  },
  {
    url: p("1497366216548-37526070297c", 1000, 1000),
    dests: ["why-choose/01.png", "why-choose/02.png"],
  },
  { url: j("1497366216548-37526070297c", 1200, 800), dests: ["about/09.jpg"] },
  {
    url: p("1522071820081-009f0129c71c", 1000, 1000),
    dests: ["why-choose/03.png", "why-choose/04.png", "why-choose/06.png", "app-01.png"],
  },
  {
    url: p("1551434678-e076c223a692", 1000, 1000),
    dests: [
      "why-choose/bg-01.png",
      "hero/hero-1.png",
    ],
  },
  {
    url: j("1563013544-824ae1b704d3", 1200, 1000),
    dests: ["hero/hero-3.jpg", "hero/hero-3-2.jpg", "hero/hero-3-3.jpg"],
  },
  {
    url: p("1563013544-824ae1b704d3", 1200, 1000),
    dests: ["hero/hero-2.png", "hero/hero-2-light.png"],
  },
  {
    url: p("1591488320449-011701bb6704", 1200, 1000),
    dests: [
      "hero/hero-4.png",
      "hero/hero-4-1-bg.png",
    ],
  },
  {
    url: p("1522071820081-009f0129c71c", 1000, 1000),
    dests: ["hero/hero-4-social.png"],
  },
  { url: p("1580489944761-15a19d654956", 500, 500), dests: ["avatar-2.png"] },
  { url: p("1563013544-824ae1b704d3", 800, 800), dests: ["404.png", "testimonial/03.png"] },
  { url: p("1560250097-0b93528c311a", 600, 600), dests: ["testimonial/01.png"] },
  { url: p("1573496359142-b8d87734a5a2", 600, 600), dests: ["testimonial/02.png"] },
  { url: p("1519085360753-af0119f7cbe7", 600, 600), dests: ["testimonial/04.png"] },
  { url: p("1580489944761-15a19d654956", 600, 600), dests: ["testimonial/05.png"] },
  { url: p("1438761681033-6461ffad8d80", 600, 600), dests: ["testimonial/06.png"] },
];

async function main() {
  console.log("Descargas Unsplash (verificación de duplicados)…");
  const used = new Set();
  for (const g of GROUPS) {
    for (const d of g.dests) {
      if (used.has(d)) {
        throw new Error(`Ruta duplicada en config: ${d}`);
      }
      used.add(d);
    }
  }

  for (const g of GROUPS) {
    if (!g.dests.length) continue;
    const [first, ...rest] = g.dests;
    const abs = await downloadTo(g.url, first);
    console.log("ok", first);
    for (const d of rest) {
      await copyFileTo(abs, d);
      console.log("copy", d);
    }
  }

  console.log("Formas e iconos (PNG)…");
  const shape1 = await downloadTo(SHAPE_PNG, "_generated/shape-blob.png");
  for (const s of SHAPE_PATHS) {
    await copyFileTo(shape1, s);
  }
  const abs2 = await downloadTo(BLOB2, "_generated/shape-blob-2.png");
  for (const s of [
    "process/shape-6.png",
    "process/shape-7.png",
    "shape/shape-11.png",
    "shape/shape-12.png",
  ]) {
    await copyFileTo(abs2, s);
  }
  console.log("Listo. Imágenes en", imgRoot);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
