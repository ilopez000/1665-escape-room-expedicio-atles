# Expedició Atles · escape room de la sessió 3 del MP 1665

Escape room en línia per a la **sessió 3 de l'AEA1** del mòdul **1665 Digitalització aplicada als sectors productius**
(el mapa dels entorns IT i OT d'una empresa). Fet amb **Astro**. Tot el joc funciona al navegador de l'alumne: no cal
servidor ni base de dades.

## La història

El **Grup Vela** ha crescut fins a tenir cinc negocis (una gestoria, una exportadora, un hotel, una botiga i una empresa
de transport) i ha comprat tecnologia a trossos. Ningú no sap què té ni què es comunica amb què. L'antic responsable de
sistemes va deixar l'atles de tota la tecnologia del grup dins d'un cofre amb una contrasenya de sis lletres. L'alumnat
fa de **cartògraf/a** de la Societat Cartogràfica Prat: recorre sis etapes, a cada una **desplega les notes** (la teoria)
i supera les **proves**. Cada etapa dona una lletra; amb les sis s'obre el cofre (contrasenya: **PLANTA**).

## Les etapes

| Etapa | Contingut del recurs de la sessió 3 | Proves |
|---|---|---|
| 01 · El port de sortida | Per què fer un mapa, els sis passos, la llegenda | Bona pràctica o error de mapa (8) |
| 02 · L'illa de l'oficina (AFI) | Inventari IT: departaments, sistemes, qui els gestiona, on buscar | Sistema → departament (8) + 3 preguntes |
| 03 · El bosc dels aparells (GAT) | Inventari OT i «envia dades?» | Marcar els 8 OT entre 14 + on va a parar la dada (6) |
| 04 · El mirador de les diferències (CI) | Comparar IT i OT amb fets concrets | Genèrica o concreta (8) + fet → criteri (5) |
| 05 · Les terres de les tres capes (MK) | Model de nivells, tres capes, mapa resolt | Planta, frontera o negoci (12) + ordenar els nivells |
| 06 · El pont i la torre de guaita (TR) | Fitxa de connexió i riscos de connectar | Ordenar la fitxa (amb 2 intrusos) + risc → mesura (6) |
| El cofre | Repàs | Contrasenya + 5 preguntes |

## Informe i enviament al professor

En començar, l'alumne escriu **nom i cognoms** i tria el **grup** (AFI1, CI1, GAT1, MK1A, MK1B, TR1). Al final surt
l'informe (rang, XP, precisió, insígnies, detall per etapa i autoavaluació) i el botó **Envia l'informe**, que obre el
programa de correu de l'alumne amb el missatge ja escrit per a **ilopez@pratfp.com** (enllaç `mailto:`). Si l'ordinador no
té cap programa de correu configurat, el botó **Copia l'informe** el copia al porta-retalls per enganxar-lo al correu de
l'escola. També es pot desar en PDF.

## Mecànica

- Cada prova val **100 XP**; cada comprovació amb errors en treu 10 i cada pista 30 (mínim 30). Màxim: 1.200 XP.
- Cada error fa baixar la **precisió** del mapa un 4%. No hi ha «game over».
- Les etapes s'obren en ordre i la partida es desa al navegador. Una etapa superada es pot repassar sense canviar la puntuació.

## Imatges

Diagrames: elaboració pròpia (els mateixos del recurs de la sessió 3), a `public/img`. Les fotografies són de domini
públic (CC0), de rawpixel i StockSnap, trobades a Openverse. No es guarden al repositori: les baixa i les optimitza
l'script `scripts/descarrega-fotos.mjs`, que s'executa sol abans de `npm run build` i de `npm run dev`.

## Com s'executa al teu ordinador

Cal **Node.js 22 o superior**. Doble clic a `executa-escape-room.bat` (o `npm install` i `npm run dev`). S'obre a
`http://localhost:4323`.

## Com canviar el contingut

Tot el text del joc és a `src/data/joc.ts`: la història, les notes, les proves, les pistes, les preguntes finals, els
rangs, la checklist i l'adreça de correu del docent (`CORREU_DOCENT`).

## Publicació

Cloudflare Pages connectat a aquest repositori: ordre `npm run build`, carpeta `dist`, Node 22 (`.node-version`).

---

Ignacio López Aylagas · Prat FP · MP 1665 · curs 2026-27
