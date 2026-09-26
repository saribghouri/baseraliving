export default function Ornament({ align = 'center', dark = false }: { align?: 'center' | 'left'; dark?: boolean }) {
  const line = dark ? 'bg-[#3A342B]' : 'bg-[rgb(var(--rule))]';
  return (
    <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
      <i className={`block h-px w-16 ${line}`} />
      <b className={`block h-1.5 w-1.5 rotate-45 ${dark ? 'bg-brass' : 'bg-walnut'}`} />
      {align === 'center' && <i className={`block h-px w-16 ${line}`} />}
    </div>
  );
}
