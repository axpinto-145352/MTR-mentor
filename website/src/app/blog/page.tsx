import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Mid-Term Rental Tips, Strategies & Market Insights",
  description:
    "Expert mid-term rental tips, market insights, and strategies from Michelle Romano. Learn how to build, furnish, and manage profitable MTR properties.",
  alternates: { canonical: "https://www.midtermmentor.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-warm">Blog</p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Mid-Term Rental <span className="text-warm">Insights</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Strategies, tips, and market analysis to help you build a profitable mid-term rental business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-2 text-xs text-text-lighter">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-text group-hover:text-warm-dark transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-light line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-md bg-cream px-2 py-0.5 text-[11px] font-medium text-warm-dark">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-warm-dark hover:text-warm"
                >
                  Read more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
