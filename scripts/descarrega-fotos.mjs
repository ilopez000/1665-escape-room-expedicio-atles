// Descarrega les fotografies de domini públic (CC0) que fa servir el joc i les optimitza.
// S'executa sol abans de `npm run build` i de `npm run dev`. Si una foto ja hi és, no la torna a baixar.
// Fonts: rawpixel i StockSnap (llicència CC0), trobades a Openverse.
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const FOTOS = [
  { fitxer: 'foto-intro.webp', url: 'https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTQxODg3My1pbWFnZS1rd3Z4eWE4aC5qcGc.jpg' },
  { fitxer: 'foto-s1.webp', url: 'https://images.rawpixel.com/editor_1024/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg5NTI3NDEtaW1hZ2Uta3d2eDhja3IuanBn.jpg' },
  { fitxer: 'foto-s2.webp', url: 'https://cdn.stocksnap.io/img-thumbs/960w/VQXYE2ZEHC.jpg' },
  { fitxer: 'foto-s3.webp', url: 'https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3B1MjM1MjgyMC1pbWFnZS1rd3Z3amlmaC5qcGc.jpg' },
  { fitxer: 'foto-s4.webp', url: 'https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZyY29udGFpbmVyX2xpZnRlcl9jb250YWluZXJfcG9ydC1pbWFnZS1reWJidGJmNy5qcGc.jpg' },
  { fitxer: 'foto-s5.webp', url: 'https://images.rawpixel.com/editor_1024/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmw0MzA5MTk4NDEyNS1pbWFnZS1rdHdtemE0ay5qcGc.jpg' },
  { fitxer: 'foto-s6.webp', url: 'https://cdn.stocksnap.io/img-thumbs/960w/5Z56VEKLQY.jpg' },
  { fitxer: 'foto-final.webp', url: 'https://cdn.stocksnap.io/img-thumbs/960w/HSHO6ZFX7S.jpg' },
];

const dir = new URL('../public/img/', import.meta.url);
mkdirSync(dir, { recursive: true });

for (const { fitxer, url } of FOTOS) {
  const desti = new URL(fitxer, dir);
  if (existsSync(desti)) continue;
  try {
    const resposta = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (escape room 1665)' } });
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
    const dades = Buffer.from(await resposta.arrayBuffer());
    await sharp(dades).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 60 }).toFile(fileURLToPath(desti));
    console.log(`✓ ${fitxer}`);
  } catch (error) {
    console.warn(`⚠ No s'ha pogut baixar ${fitxer}: ${error.message}`);
  }
}
