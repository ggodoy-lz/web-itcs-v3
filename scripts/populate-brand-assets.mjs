/**
 * Rellena public/assets/img/brand/ con SVG/PNG.
 * Fuentes: simple-icons (npm, CC0), Wikimedia (marcas comunes) y favicons 128px como respaldo.
 */
import { access, copyFile, mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, "..");
const brandDir = join(root, "public", "assets", "img", "brand");
const siDir = join(root, "node_modules", "simple-icons", "icons");

const UA =
  "Mozilla/5.0 (compatible; ZotechSite/1.0; +https://example.local; asset-fetch)";

const copyIcon = (slug, outName) =>
  copyFile(join(siDir, `${slug}.svg`), join(brandDir, outName));

async function download(url, outPath) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buf);
}

const faviconPng = (domain, outName) =>
  download(
    `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}/&size=128`,
    join(brandDir, outName),
  );

async function main() {
  await mkdir(brandDir, { recursive: true });

  // Simple Icons (CC0) — archivos en node_modules
  const copies = [
    ["veeam", "veeam.svg"],
    ["vmware", "vmware.svg"],
    ["zoho", "manageengine.svg"],
    ["cisco", "cisco.svg"],
    ["hp", "hp.svg"],
    ["redhat", "redhat.svg"],
    ["qnap", "qnap.svg"],
    ["synology", "synology.svg"],
    ["samsung", "samsung.svg"],
    ["fortinet", "fortinet.svg"],
    ["dell", "dell.svg"],
  ];

  for (const [slug, out] of copies) {
    try {
      await copyIcon(slug, out);
      console.log("copy", out);
    } catch (e) {
      console.warn("copy skip", out, e.message);
    }
  }

  // Wikimedia (logos de empresa, uso conforme a la guía de Commons)
  const wiki = [
    [
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      "microsoft.svg",
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      "ibm.svg",
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
      "adobe.svg",
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg",
      "hpe.svg",
    ],
  ];
  for (const [u, f] of wiki) {
    try {
      await download(u, join(brandDir, f));
      console.log("wiki", f);
    } catch (e) {
      console.warn("wiki fail", f, e.message);
    }
  }

  // Favicons 128px (Google) — nítidos en carruseles pequeños
  const favs = [
    ["sophos.com", "sophos.png"],
    ["yeastar.com", "yeastar.png"],
    ["commscope.com", "commscope.png"],
    ["everexceed.com", "everexceed.png"],
    ["www.everexceed.com", "everexceed_b.png"],
    ["cet-power.com", "cet.png"],
    ["www.cet-group.com", "cet_b.png"],
    ["vcp.com.py", "vcp.png"],
  ];
  for (const [domain, file] of favs) {
    try {
      await faviconPng(domain, file);
      console.log("favicon", file);
    } catch (e) {
      console.warn("favicon fail", file, e.message);
    }
  }

  try {
    await access(join(brandDir, "everexceed.png"));
  } catch {
    try {
      await copyFile(
        join(brandDir, "everexceed_b.png"),
        join(brandDir, "everexceed.png"),
      );
      console.log("fallback everexceed.png from everexceed_b.png");
    } catch {
      // ignore
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
