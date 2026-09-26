import Reveal from './Reveal';

export default function RoomFeatures({
  title, items,
}: { title: string; items: [string, string][] }) {
  return (
    <section className="py-20">
      <div className="wrap">
        <Reveal><h2 className="mb-10 text-[clamp(26px,3.6vw,40px)]">{title}</h2></Reveal>
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {items.map(([head, body], i) => (
            <Reveal key={head} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="border-t pt-5" style={{ borderColor: 'rgb(var(--rule))' }}>
                <h3 className="mb-2 text-[21px]">{head}</h3>
                <p className="muted text-sm">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
