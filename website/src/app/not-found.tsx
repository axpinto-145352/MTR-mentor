import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white pt-20">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="text-6xl font-extrabold text-warm">404</p>
        <h1 className="mt-4 text-2xl font-bold text-text">Page Not Found</h1>
        <p className="mt-2 text-text-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-warm px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-warm-light"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
