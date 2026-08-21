/* Illustrations au trait, dessinées à la main en SVG.
   Pas de captures d'écran : un schéma éditorial qui dit ce que fait le produit. */

import './Visuals.css';

export function EmbliaVisual() {
  return (
    <svg
      className="viz"
      viewBox="0 0 420 320"
      role="img"
      aria-label="Schéma : une carte de visite numérique partagée par lien et par QR code"
    >
      {/* carte du fond, décalée */}
      <g className="viz__ghost">
        <rect x="52" y="46" width="238" height="146" rx="6" />
      </g>

      {/* carte principale */}
      <g className="viz__card">
        <rect x="36" y="62" width="238" height="146" rx="6" />
        {/* bandeau d'accent */}
        <rect className="viz__fill-accent" x="36" y="62" width="238" height="9" rx="0" />

        {/* avatar */}
        <circle className="viz__stroke" cx="76" cy="112" r="17" />
        <path className="viz__stroke" d="M68 118a9 9 0 0 1 16 0" />
        <circle className="viz__stroke" cx="76" cy="106" r="5.5" />

        {/* lignes de texte */}
        <rect className="viz__ink" x="104" y="100" width="86" height="8" rx="1.5" />
        <rect className="viz__mute" x="104" y="114" width="120" height="5" rx="1.5" />
        <rect className="viz__mute" x="104" y="124" width="72" height="5" rx="1.5" />

        {/* pastilles de contact */}
        <g className="viz__stroke">
          <rect x="56" y="152" width="34" height="20" rx="10" />
          <rect x="96" y="152" width="34" height="20" rx="10" />
          <rect x="136" y="152" width="34" height="20" rx="10" />
        </g>
        <rect className="viz__fill-accent" x="176" y="152" width="74" height="20" rx="10" />
      </g>

      {/* QR code */}
      <g className="viz__qr">
        <rect x="288" y="150" width="102" height="102" rx="4" />
        {/* repères d'angle */}
        <rect className="viz__ink" x="298" y="160" width="22" height="22" rx="2" />
        <rect className="viz__paper" x="304" y="166" width="10" height="10" />
        <rect className="viz__ink" x="358" y="160" width="22" height="22" rx="2" />
        <rect className="viz__paper" x="364" y="166" width="10" height="10" />
        <rect className="viz__ink" x="298" y="220" width="22" height="22" rx="2" />
        <rect className="viz__paper" x="304" y="226" width="10" height="10" />
        {/* modules */}
        <g className="viz__ink">
          <rect x="330" y="160" width="7" height="7" />
          <rect x="341" y="171" width="7" height="7" />
          <rect x="330" y="182" width="7" height="7" />
          <rect x="352" y="193" width="7" height="7" />
          <rect x="330" y="204" width="7" height="7" />
          <rect x="363" y="204" width="7" height="7" />
          <rect x="341" y="215" width="7" height="7" />
          <rect x="330" y="226" width="7" height="7" />
          <rect x="352" y="226" width="7" height="7" />
          <rect x="374" y="215" width="7" height="7" />
          <rect x="363" y="237" width="7" height="7" />
          <rect x="341" y="237" width="7" height="7" />
        </g>
      </g>

      {/* trait de liaison carte → QR */}
      <path
        className="viz__link"
        d="M274 135c22 0 26 15 26 15"
        strokeDasharray="4 5"
      />

      {/* légendes */}
      <text className="viz__cap" x="36" y="232">
        une page publique
      </text>
      <text className="viz__cap" x="288" y="270">
        un scan
      </text>
    </svg>
  );
}

export function GlanceHudVisual() {
  /* barres d'activité du graphe de frames */
  const bars = [14, 22, 18, 30, 24, 41, 27, 19, 34, 23, 16, 29, 21, 37, 25];

  return (
    <svg
      className="viz"
      viewBox="0 0 420 320"
      role="img"
      aria-label="Schéma : un panneau de métriques superposé à une application en cours d'exécution"
    >
      {/* l'application mesurée, en fond */}
      <g className="viz__ghost">
        <rect x="30" y="24" width="228" height="272" rx="16" />
        <line x1="56" y1="70" x2="182" y2="70" />
        <line x1="56" y1="92" x2="232" y2="92" />
        <line x1="56" y1="114" x2="150" y2="114" />
        <rect x="56" y="146" width="176" height="62" rx="5" />
        <line x1="56" y1="236" x2="212" y2="236" />
        <line x1="56" y1="258" x2="168" y2="258" />
      </g>
      <text className="viz__cap" x="30" y="312">
        l’application mesurée
      </text>

      {/* le panneau, posé par-dessus */}
      <g className="viz__hud">
        <rect x="150" y="70" width="238" height="168" rx="6" />

        {/* barre de titre */}
        <rect className="viz__fill-ink" x="150" y="70" width="238" height="26" rx="0" />
        <text className="viz__hud-title" x="164" y="88">
          GLANCEHUD
        </text>
        {/* poignée de déplacement */}
        <g className="viz__handle">
          <circle cx="360" cy="83" r="2" />
          <circle cx="368" cy="83" r="2" />
          <circle cx="376" cy="83" r="2" />
        </g>

        {/* métriques */}
        {[
          ['FPS', '120', 112],
          ['CPU', '18 %', 134],
          ['RAM', '215 MB', 156],
          ['NET', '↑120 ↓560', 178],
        ].map(([k, v, y]) => (
          <g key={k}>
            <text className="viz__hud-key" x="164" y={y}>
              {k}
            </text>
            <text className="viz__hud-val" x="228" y={y}>
              {v}
            </text>
          </g>
        ))}

        {/* pastille d'état, verte tant que ça tient la cadence */}
        <circle className="viz__fill-accent" cx="372" cy="108" r="4" />

        {/* histogramme des temps de frame */}
        <line className="viz__hud-rule" x1="164" y1="196" x2="374" y2="196" />
        {bars.map((h, i) => (
          <rect
            key={i}
            className={h > 32 ? 'viz__fill-accent' : 'viz__fill-paper'}
            x={164 + i * 14}
            y={222 - h / 1.6}
            width={9}
            height={h / 1.6}
          />
        ))}
        <text className="viz__hud-key" x="164" y="234">
          FRAME TIME
        </text>
      </g>

      <path
        className="viz__link"
        d="M258 250c0-8 40-10 40-14"
        strokeDasharray="4 5"
      />
      <text className="viz__cap viz__cap--accent" x="236" y="266">
        overlay natif
      </text>
    </svg>
  );
}

export function KarneoVisual() {
  return (
    <svg
      className="viz"
      viewBox="0 0 420 320"
      role="img"
      aria-label="Schéma : la courbe de kilométrage projette la date du prochain entretien"
    >
      {/* téléphone */}
      <g className="viz__card">
        <rect x="26" y="26" width="150" height="268" rx="18" />
        <rect className="viz__fill-accent" x="26" y="26" width="150" height="7" rx="0" />
        <rect className="viz__mute" x="82" y="42" width="38" height="4" rx="2" />

        {/* en-tête véhicule */}
        <rect className="viz__ink" x="44" y="64" width="62" height="8" rx="1.5" />
        <rect className="viz__mute" x="44" y="78" width="96" height="5" rx="1.5" />

        {/* frise d'entretiens */}
        <line className="viz__rule" x1="52" y1="106" x2="52" y2="262" />
        {[112, 152, 192, 232].map((y, i) => (
          <g key={y}>
            <circle
              className={i === 3 ? 'viz__fill-accent' : 'viz__dot'}
              cx="52"
              cy={y}
              r={i === 3 ? 5.5 : 4}
            />
            <rect className="viz__ink" x="66" y={y - 8} width={i === 3 ? 62 : 48} height="6" rx="1.5" />
            <rect className="viz__mute" x="66" y={y + 2} width="80" height="4" rx="1.5" />
          </g>
        ))}
      </g>

      {/* graphe de projection */}
      <g className="viz__chart">
        {/* axes */}
        <line className="viz__rule" x1="212" y1="248" x2="400" y2="248" />
        <line className="viz__rule" x1="212" y1="72" x2="212" y2="248" />

        {/* seuil « dû à 90 000 km » */}
        <line
          className="viz__threshold"
          x1="212"
          y1="104"
          x2="400"
          y2="104"
          strokeDasharray="5 5"
        />
        <text className="viz__cap viz__cap--accent" x="212" y="94">
          seuil 90 000 km
        </text>

        {/* relevés mesurés */}
        <path
          className="viz__curve"
          d="M212 232 L246 216 L280 198 L314 176"
        />
        {[
          [212, 232],
          [246, 216],
          [280, 198],
          [314, 176],
        ].map(([cx, cy]) => (
          <circle key={cx} className="viz__dot" cx={cx} cy={cy} r="3.6" />
        ))}

        {/* projection */}
        <path
          className="viz__curve viz__curve--proj"
          d="M314 176 L366 104"
          strokeDasharray="5 5"
        />
        <circle className="viz__fill-accent" cx="366" cy="104" r="5.5" />

        {/* rappel de la date projetée */}
        <line
          className="viz__threshold"
          x1="366"
          y1="104"
          x2="366"
          y2="248"
          strokeDasharray="3 5"
        />
        <text className="viz__cap viz__cap--accent" x="330" y="266">
          rappel projeté
        </text>

        <text className="viz__cap" x="212" y="284">
          relevés du compteur
        </text>
      </g>
    </svg>
  );
}
