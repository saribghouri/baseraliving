import type { ReactElement } from 'react';
import type { ArtKey } from '@/lib/products';

/**
 * Detailed vector illustrations used until real photography is available.
 * Every scene shares one gradient set so the whole site reads as one material palette.
 */

const Defs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={`${id}-wood`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#8A6A48" />
      <stop offset="45%" stopColor="#6E5136" />
      <stop offset="100%" stopColor="#523B27" />
    </linearGradient>
    <linearGradient id={`${id}-woodLight`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#A98559" />
      <stop offset="100%" stopColor="#7E5F3F" />
    </linearGradient>
    <linearGradient id={`${id}-woodPale`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#D6C4A2" />
      <stop offset="50%" stopColor="#C4AF8B" />
      <stop offset="100%" stopColor="#B19B77" />
    </linearGradient>
    <linearGradient id={`${id}-fabric`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#CFC4B0" />
      <stop offset="100%" stopColor="#A89C86" />
    </linearGradient>
    <linearGradient id={`${id}-fabricDeep`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#B9AC95" />
      <stop offset="100%" stopColor="#8E8170" />
    </linearGradient>
    <linearGradient id={`${id}-brass`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#D8B888" />
      <stop offset="100%" stopColor="#9A7647" />
    </linearGradient>
    <radialGradient id={`${id}-shadow`}>
      <stop offset="0%" stopColor="rgba(22,20,15,.22)" />
      <stop offset="100%" stopColor="rgba(22,20,15,0)" />
    </radialGradient>
  </defs>
);

const Floor = ({ id, cx = 200, cy = 268, rx = 150, ry = 14 }: { id: string; cx?: number; cy?: number; rx?: number; ry?: number }) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${id}-shadow)`} />
);

type S = { id: string };

const scenes: Record<ArtKey, (p: S) => ReactElement> = {
  sofa: ({ id }) => (
    <g>
      <Floor id={id} />
      <rect x="62" y="150" width="276" height="26" rx="8" fill={`url(#${id}-wood)`} />
      <rect x="70" y="96" width="260" height="58" rx="12" fill={`url(#${id}-fabricDeep)`} />
      <path d="M78 104h244" stroke="#9A8D78" strokeWidth="1" opacity=".6" />
      <rect x="86" y="140" width="110" height="34" rx="9" fill={`url(#${id}-fabric)`} />
      <rect x="204" y="140" width="110" height="34" rx="9" fill={`url(#${id}-fabric)`} />
      <rect x="56" y="112" width="30" height="66" rx="10" fill={`url(#${id}-woodLight)`} />
      <rect x="314" y="112" width="30" height="66" rx="10" fill={`url(#${id}-woodLight)`} />
      <rect x="78" y="176" width="10" height="26" rx="3" fill={`url(#${id}-wood)`} />
      <rect x="312" y="176" width="10" height="26" rx="3" fill={`url(#${id}-wood)`} />
      <rect x="112" y="108" width="42" height="34" rx="8" fill={`url(#${id}-fabric)`} transform="rotate(-6 133 125)" />
    </g>
  ),

  chair: ({ id }) => (
    <g>
      <Floor id={id} rx={92} />
      <path d="M144 132h112v16H144z" fill={`url(#${id}-wood)`} />
      <rect x="150" y="70" width="100" height="62" rx="14" fill={`url(#${id}-fabricDeep)`} />
      <path d="M160 82h80M160 96h80M160 110h80" stroke="#93856F" strokeWidth="1.2" opacity=".5" />
      <rect x="152" y="140" width="96" height="20" rx="7" fill={`url(#${id}-fabric)`} />
      <rect x="132" y="88" width="16" height="72" rx="6" fill={`url(#${id}-woodLight)`} />
      <rect x="252" y="88" width="16" height="72" rx="6" fill={`url(#${id}-woodLight)`} />
      <path d="M142 160l-12 84h12l10-84zM258 160l12 84h-12l-10-84z" fill={`url(#${id}-wood)`} />
      <path d="M150 210h100" stroke={`url(#${id}-wood)`} strokeWidth="8" strokeLinecap="round" />
    </g>
  ),

  table: ({ id }) => (
    <g>
      <Floor id={id} rx={140} />
      <rect x="46" y="128" width="308" height="20" rx="6" fill={`url(#${id}-woodLight)`} />
      <rect x="46" y="144" width="308" height="9" rx="3" fill={`url(#${id}-wood)`} />
      <path d="M70 134h260M70 140h190" stroke="#4E3826" strokeWidth=".9" opacity=".35" />
      <rect x="76" y="153" width="15" height="96" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="309" y="153" width="15" height="96" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="76" y="198" width="248" height="10" rx="3" fill={`url(#${id}-woodPale)`} opacity=".85" />
    </g>
  ),

  bed: ({ id }) => (
    <g>
      <Floor id={id} rx={160} />
      <rect x="54" y="86" width="86" height="130" rx="12" fill={`url(#${id}-fabricDeep)`} />
      <path d="M68 100v100M84 96v106M100 96v106M116 100v100" stroke="#8D8069" strokeWidth="1.2" opacity=".55" />
      <rect x="132" y="150" width="224" height="52" rx="10" fill={`url(#${id}-woodLight)`} />
      <rect x="138" y="132" width="212" height="26" rx="9" fill="#EFEAE0" />
      <rect x="150" y="116" width="66" height="30" rx="9" fill={`url(#${id}-fabric)`} />
      <rect x="222" y="116" width="66" height="30" rx="9" fill={`url(#${id}-fabric)`} />
      <path d="M138 176h212" stroke="#5A422C" strokeWidth="1.2" opacity=".4" />
      <rect x="140" y="202" width="12" height="26" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="336" y="202" width="12" height="26" rx="4" fill={`url(#${id}-wood)`} />
    </g>
  ),

  wardrobe: ({ id }) => (
    <g>
      <Floor id={id} rx={118} />
      <rect x="84" y="36" width="232" height="218" rx="8" fill={`url(#${id}-wood)`} />
      <rect x="94" y="46" width="102" height="198" rx="5" fill={`url(#${id}-woodLight)`} />
      <rect x="204" y="46" width="102" height="198" rx="5" fill={`url(#${id}-woodLight)`} />
      <path d="M104 60h82M104 74h82M214 60h82M214 74h82" stroke="#5B422C" strokeWidth=".8" opacity=".3" />
      <circle cx="188" cy="146" r="4.5" fill={`url(#${id}-brass)`} />
      <circle cx="212" cy="146" r="4.5" fill={`url(#${id}-brass)`} />
      <rect x="90" y="254" width="14" height="14" rx="3" fill="#3E2C1D" />
      <rect x="296" y="254" width="14" height="14" rx="3" fill="#3E2C1D" />
    </g>
  ),

  desk: ({ id }) => (
    <g>
      <Floor id={id} rx={145} />
      <rect x="44" y="118" width="312" height="18" rx="5" fill={`url(#${id}-woodLight)`} />
      <rect x="60" y="122" width="180" height="10" rx="3" fill="#6B4A32" opacity=".55" />
      <rect x="44" y="132" width="312" height="8" rx="3" fill={`url(#${id}-wood)`} />
      <rect x="58" y="140" width="116" height="74" rx="5" fill={`url(#${id}-wood)`} />
      <rect x="68" y="152" width="96" height="22" rx="4" fill={`url(#${id}-woodLight)`} />
      <rect x="68" y="182" width="96" height="22" rx="4" fill={`url(#${id}-woodLight)`} />
      <circle cx="116" cy="163" r="3.5" fill={`url(#${id}-brass)`} />
      <circle cx="116" cy="193" r="3.5" fill={`url(#${id}-brass)`} />
      <rect x="60" y="214" width="112" height="36" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="330" y="140" width="14" height="110" rx="4" fill={`url(#${id}-wood)`} />
    </g>
  ),

  shelf: ({ id }) => (
    <g>
      <Floor id={id} rx={110} />
      <rect x="96" y="24" width="208" height="232" rx="6" fill={`url(#${id}-wood)`} />
      <rect x="106" y="34" width="188" height="212" rx="3" fill="#2A1F16" opacity=".35" />
      {[74, 124, 174, 224].map((y) => (
        <rect key={y} x="106" y={y} width="188" height="8" rx="2" fill={`url(#${id}-woodLight)`} />
      ))}
      <rect x="116" y="44" width="9" height="30" rx="2" fill="#7A5C3E" />
      <rect x="128" y="48" width="8" height="26" rx="2" fill="#B08E6B" />
      <rect x="139" y="42" width="10" height="32" rx="2" fill="#5C4630" />
      <rect x="152" y="50" width="7" height="24" rx="2" fill="#9A8768" />
      <rect x="240" y="46" width="44" height="28" rx="3" fill={`url(#${id}-fabric)`} />
      <rect x="116" y="96" width="9" height="28" rx="2" fill="#8E7350" />
      <rect x="128" y="92" width="8" height="32" rx="2" fill="#6B5238" />
      <circle cx="262" cy="110" r="14" fill={`url(#${id}-brass)`} opacity=".8" />
      <rect x="116" y="148" width="60" height="26" rx="3" fill={`url(#${id}-fabricDeep)`} />
    </g>
  ),

  ottoman: ({ id }) => (
    <g>
      <Floor id={id} rx={92} ry={11} />
      <rect x="116" y="130" width="168" height="66" rx="16" fill={`url(#${id}-fabric)`} />
      <path d="M116 158h168" stroke="#9C9079" strokeWidth="1.3" opacity=".55" />
      <circle cx="200" cy="146" r="4" fill="#8E8170" />
      <rect x="124" y="196" width="12" height="26" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="264" y="196" width="12" height="26" rx="4" fill={`url(#${id}-wood)`} />
    </g>
  ),

  console: ({ id }) => (
    <g>
      <Floor id={id} rx={135} />
      <rect x="54" y="108" width="292" height="16" rx="5" fill={`url(#${id}-woodLight)`} />
      <rect x="54" y="122" width="292" height="7" rx="3" fill={`url(#${id}-wood)`} />
      <rect x="74" y="129" width="252" height="52" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="86" y="140" width="110" height="30" rx="4" fill={`url(#${id}-woodLight)`} />
      <rect x="204" y="140" width="110" height="30" rx="4" fill={`url(#${id}-woodLight)`} />
      <rect x="128" y="153" width="26" height="4" rx="2" fill={`url(#${id}-brass)`} />
      <rect x="246" y="153" width="26" height="4" rx="2" fill={`url(#${id}-brass)`} />
      <rect x="82" y="181" width="12" height="66" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="306" y="181" width="12" height="66" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="82" y="214" width="236" height="8" rx="3" fill={`url(#${id}-woodPale)`} opacity=".8" />
    </g>
  ),

  kitchen: ({ id }) => (
    <g>
      <Floor id={id} rx={160} />
      {/* wall cabinets */}
      <rect x="52" y="34" width="296" height="62" rx="5" fill={`url(#${id}-wood)`} />
      {[60, 134, 208, 282].map((x) => (
        <rect key={x} x={x} y="42" width="58" height="46" rx="3" fill={`url(#${id}-woodLight)`} />
      ))}
      {[112, 186, 260].map((x) => (
        <rect key={x} x={x} y="60" width="3" height="12" rx="1.5" fill={`url(#${id}-brass)`} />
      ))}
      {/* tiled splashback */}
      <rect x="52" y="96" width="296" height="52" fill="#E9E2D4" />
      <path d="M52 113h296M52 130h296M100 96v52M150 96v52M200 96v52M250 96v52M300 96v52" stroke="#D6CCBA" strokeWidth="1" />
      {/* tap */}
      <path d="M232 148v-22h16v8" stroke="#8C8578" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* worktop and base cabinets */}
      <rect x="44" y="146" width="312" height="12" rx="3" fill={`url(#${id}-woodPale)`} />
      <rect x="52" y="158" width="296" height="92" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="60" y="166" width="88" height="24" rx="3" fill={`url(#${id}-woodLight)`} />
      <rect x="60" y="196" width="88" height="46" rx="3" fill={`url(#${id}-woodLight)`} />
      <rect x="156" y="166" width="88" height="76" rx="3" fill={`url(#${id}-woodLight)`} />
      <rect x="252" y="166" width="88" height="76" rx="3" fill={`url(#${id}-woodLight)`} />
      <rect x="92" y="176" width="24" height="4" rx="2" fill={`url(#${id}-brass)`} />
      <rect x="92" y="216" width="24" height="4" rx="2" fill={`url(#${id}-brass)`} />
      <rect x="236" y="196" width="4" height="22" rx="2" fill={`url(#${id}-brass)`} />
      <rect x="260" y="196" width="4" height="22" rx="2" fill={`url(#${id}-brass)`} />
    </g>
  ),

  bunk: ({ id }) => (
    <g>
      <Floor id={id} rx={130} />
      <rect x="72" y="28" width="14" height="230" rx="5" fill={`url(#${id}-wood)`} />
      <rect x="314" y="28" width="14" height="230" rx="5" fill={`url(#${id}-wood)`} />
      <rect x="78" y="96" width="244" height="16" rx="5" fill={`url(#${id}-woodLight)`} />
      <rect x="86" y="78" width="228" height="20" rx="7" fill="#EFEAE0" />
      <rect x="96" y="64" width="54" height="18" rx="6" fill={`url(#${id}-fabric)`} />
      <rect x="78" y="212" width="244" height="16" rx="5" fill={`url(#${id}-woodLight)`} />
      <rect x="86" y="194" width="228" height="20" rx="7" fill="#EFEAE0" />
      <rect x="96" y="180" width="54" height="18" rx="6" fill={`url(#${id}-fabric)`} />
      <path d="M78 40h244" stroke={`url(#${id}-wood)`} strokeWidth="9" strokeLinecap="round" />
      <path d="M120 40v56M170 40v56M220 40v56M270 40v56" stroke={`url(#${id}-woodLight)`} strokeWidth="6" strokeLinecap="round" />
      <path d="M334 112v108" stroke={`url(#${id}-wood)`} strokeWidth="8" strokeLinecap="round" />
      <path d="M326 130h30M326 158h30M326 186h30" stroke={`url(#${id}-woodLight)`} strokeWidth="7" strokeLinecap="round" />
    </g>
  ),

  playtable: ({ id }) => (
    <g>
      <Floor id={id} rx={130} />
      <rect x="92" y="132" width="216" height="15" rx="6" fill={`url(#${id}-woodPale)`} />
      <rect x="92" y="145" width="216" height="7" rx="3" fill={`url(#${id}-wood)`} />
      <rect x="108" y="152" width="13" height="82" rx="5" fill={`url(#${id}-wood)`} />
      <rect x="279" y="152" width="13" height="82" rx="5" fill={`url(#${id}-wood)`} />
      <rect x="44" y="172" width="58" height="10" rx="4" fill={`url(#${id}-woodPale)`} />
      <rect x="52" y="120" width="12" height="56" rx="5" fill={`url(#${id}-wood)`} />
      <rect x="48" y="182" width="10" height="52" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="88" y="182" width="10" height="52" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="298" y="172" width="58" height="10" rx="4" fill={`url(#${id}-woodPale)`} />
      <rect x="336" y="120" width="12" height="56" rx="5" fill={`url(#${id}-wood)`} />
      <rect x="302" y="182" width="10" height="52" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="342" y="182" width="10" height="52" rx="4" fill={`url(#${id}-wood)`} />
      <rect x="152" y="112" width="32" height="20" rx="3" fill="#B08E6B" />
      <circle cx="214" cy="122" r="11" fill="#7A5C3E" />
      <path d="M240 132l16-22 16 22z" fill="#C2A15C" />
    </g>
  ),

  toybox: ({ id }) => (
    <g>
      <Floor id={id} rx={106} ry={12} />
      <rect x="98" y="128" width="204" height="112" rx="8" fill={`url(#${id}-wood)`} />
      <rect x="110" y="140" width="180" height="88" rx="5" fill={`url(#${id}-woodLight)`} />
      <rect x="92" y="108" width="216" height="24" rx="8" fill={`url(#${id}-woodPale)`} />
      <rect x="184" y="114" width="32" height="7" rx="3" fill={`url(#${id}-brass)`} />
      <circle cx="146" cy="176" r="15" fill="#B08E6B" opacity=".55" />
      <rect x="182" y="162" width="28" height="28" rx="4" fill="#7A5C3E" opacity=".5" />
      <path d="M240 190l18-28 18 28z" fill="#C2A15C" opacity=".55" />
      <rect x="104" y="240" width="16" height="16" rx="4" fill="#3E2C1D" />
      <rect x="280" y="240" width="16" height="16" rx="4" fill="#3E2C1D" />
    </g>
  ),

  board: ({ id }) => (
    <g>
      <Floor id={id} rx={96} ry={10} />
      <path d="M92 96h188a26 26 0 0 1 26 26v84a26 26 0 0 1-26 26H92z" fill={`url(#${id}-woodPale)`} />
      <path d="M92 96h188a26 26 0 0 1 26 26v10H92z" fill="#B49A70" opacity=".5" />
      <path d="M110 112v112M132 104v128M158 108v120M186 102v126M216 110v112M248 116v100" stroke="#9A8258" strokeWidth="1.6" opacity=".45" />
      <circle cx="288" cy="120" r="7" fill="none" stroke="#7E6640" strokeWidth="3" />
      <rect x="66" y="96" width="30" height="136" rx="6" fill={`url(#${id}-wood)`} />
    </g>
  ),

  box: ({ id }) => (
    <g>
      <Floor id={id} rx={96} ry={11} />
      <rect x="106" y="140" width="188" height="88" rx="6" fill={`url(#${id}-wood)`} />
      <rect x="118" y="152" width="164" height="64" rx="4" fill={`url(#${id}-woodLight)`} />
      <path d="M100 118l100-28 100 28v24H100z" fill={`url(#${id}-woodPale)`} />
      <path d="M100 142h200" stroke="#6B5238" strokeWidth="2" opacity=".5" />
      <rect x="186" y="128" width="28" height="8" rx="3" fill={`url(#${id}-brass)`} />
      <circle cx="200" cy="184" r="9" fill={`url(#${id}-brass)`} />
      <path d="M130 162h140" stroke="#7E6544" strokeWidth="1.2" opacity=".5" />
    </g>
  ),

  clock: ({ id }) => (
    <g>
      <Floor id={id} rx={86} ry={10} />
      <circle cx="200" cy="146" r="88" fill={`url(#${id}-wood)`} />
      <circle cx="200" cy="146" r="72" fill={`url(#${id}-woodPale)`} />
      <circle cx="200" cy="146" r="64" fill="none" stroke="#8A7150" strokeWidth="1.5" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
        <rect key={a} x="199" y="86" width="2.4" height={a % 90 === 0 ? 14 : 8} rx="1"
          fill="#5C4630" transform={`rotate(${a} 200 146)`} />
      ))}
      <path d="M200 146V104" stroke="#3E2C1D" strokeWidth="4" strokeLinecap="round" />
      <path d="M200 146l30 20" stroke="#3E2C1D" strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="146" r="5" fill={`url(#${id}-brass)`} />
    </g>
  ),

  pen: ({ id }) => (
    <g>
      <Floor id={id} rx={120} ry={9} />
      <rect x="84" y="196" width="232" height="14" rx="5" fill={`url(#${id}-wood)`} />
      <path d="M96 196l18-96h172l18 96z" fill={`url(#${id}-woodPale)`} opacity=".25" />
      <g transform="rotate(-16 200 150)">
        <path d="M140 148h108l16 10-16 10H140z" fill={`url(#${id}-woodLight)`} />
        <path d="M118 152l22-4v20l-22-4z" fill={`url(#${id}-brass)`} />
        <path d="M110 158l10-6v12z" fill="#3E2C1D" />
        <rect x="236" y="150" width="16" height="16" rx="3" fill={`url(#${id}-brass)`} />
      </g>
      <rect x="120" y="176" width="160" height="10" rx="4" fill={`url(#${id}-wood)`} opacity=".4" />
    </g>
  ),
};

export default function Illustration({
  art, id, className = '',
}: { art: ArtKey; id: string; className?: string }) {
  const Scene = scenes[art] ?? scenes.chair;
  return (
    <svg viewBox="0 0 400 300" className={`h-full w-full ${className}`} role="img" aria-hidden="true">
      <Defs id={id} />
      <Scene id={id} />
    </svg>
  );
}
