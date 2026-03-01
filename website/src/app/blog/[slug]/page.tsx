import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../posts";
import BlogLeadMagnet from "@/components/BlogLeadMagnet";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.midtermmentor.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Michelle Romano"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mt-10 mb-4 font-serif text-2xl font-bold text-primary"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }

              if (block.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="mt-8 mb-3 text-lg font-bold text-text"
                  >
                    {block.replace("### ", "")}
                  </h3>
                );
              }

              if (block.startsWith("- ")) {
                const items = block.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="my-4 space-y-2 pl-1" role="list">
                    {items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-text-light leading-relaxed"
                      >
                        <svg
                          className="mt-1.5 h-4 w-4 shrink-0 text-warm"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item.replace(/^- /, "")) }} />
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.startsWith("1. ") || /^\d+\.\s/.test(block)) {
                const items = block.split("\n").filter((l) => /^\d+\.\s/.test(l));
                return (
                  <ol key={i} className="my-4 space-y-2 pl-1 list-none counter-reset-item">
                    {items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-text-light leading-relaxed"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm/10 text-xs font-bold text-warm-dark">
                          {j + 1}
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item.replace(/^\d+\.\s/, "")) }} />
                      </li>
                    ))}
                  </ol>
                );
              }

              return (
                <p
                  key={i}
                  className="my-4 text-text-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block) }}
                />
              );
            })}
          </div>

          {/* Lead Magnet CTA */}
          <BlogLeadMagnet />
        </div>
      </article>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Michelle Romano",
            },
            publisher: {
              "@type": "Organization",
              name: "Mid-Term Mentor",
              url: "https://www.midtermmentor.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.midtermmentor.com/blog/${post.slug}`,
            },
          }),
        }}
      />
    </>
  );
}

function formatInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}
