import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="wrap">
        <div className="eyebrow">404</div>
        <h1 className="my-5 text-5xl">This page has been retired</h1>
        <p className="muted mx-auto mb-8 max-w-md">
          The piece or page you were looking for is no longer here.
        </p>
        <Link href="/collection" className="btn"><span>Back to the collection</span></Link>
      </div>
    </section>
  );
}
