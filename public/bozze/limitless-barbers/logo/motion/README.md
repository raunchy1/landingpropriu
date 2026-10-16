# Limitless Barbers — marchio "Editorial Rule"

Nuovo sistema di marchio (2026), alternativo al lockup con emblema circolare in
`../`. Impostazione editoriale/luxury: Bodoni Moda ad alto contrasto, oro su nero,
filetto-rasoio con losanga e insegna da barbiere (barber pole).

| File | Uso |
| --- | --- |
| `limitless-mark-animated.svg` | Versione animata (SVG + CSS, nessuna libreria). Intro della hero e pagina di anteprima. |
| `limitless-mark.svg` | Lockup verticale statico — fallback dell'animazione, usato nel footer. |
| `limitless-mark-on-black.svg` / `.png` | Lo stesso lockup con fondo nero incorporato (social, presentazioni). |
| `limitless-horizontal.svg` | Lockup orizzontale (barber pole + logotipo) per l'header. |
| `limitless-favicon.svg` / `-32.png` / `limitless-apple-touch-icon.png` | Icona: monogramma "L" con mini barber pole. |
| `index.html` | Pagina di anteprima con pulsante "rivedi". |

## Animazione

Durata complessiva ≈ **3,6 s**, una sola esecuzione al caricamento:

1. `0,00–1,00 s` — losanga e filetto si aprono dal centro verso i bordi;
2. `0,25–1,74 s` — le nove lettere di LIMITLESS si **disegnano** in sequenza
   (contorno con `stroke-dasharray`/`stroke-dashoffset`);
3. `1,24–1,99 s` — il contorno sfuma nel pieno con gradiente oro metallico;
4. `1,86–3,31 s` — **riflesso** diagonale che attraversa il lettering
   (rettangolo in gradiente mascherato dalle lettere);
5. `1,79–2,96 s` — BARBERS e il payoff salgono in dissolvenza;
6. `1,94–3,59 s` — il barber pole si apre in larghezza e le righe scorrono una volta.

`prefers-reduced-motion: reduce` disattiva ogni animazione e mostra subito il
lockup finale (nella pagina di anteprima viene caricato direttamente il file statico).

Le lettere sono tracciati (Bodoni Moda 500 / opsz 96, Jost 300–400): nessun font
esterno da caricare, resa identica ovunque.
