import { useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';
import {
  ARTICLE_COUNT,
  DEV_TO_PROFILE_URL,
  DEV_TO_USERNAME,
  FALLBACK_ARTICLES,
  type Article,
} from '../data/articles';

const DEV_TO_ENDPOINT = `https://dev.to/api/articles?username=${DEV_TO_USERNAME}&per_page=${ARTICLE_COUNT}`;

const CARD_RADIUS = 'rounded-[32px] md:rounded-[40px]';

/** The handful of fields we use from the dev.to payload. */
type DevToArticle = {
  id: number;
  title: string;
  url: string;
  cover_image: string | null;
  description: string | null;
  published_timestamp: string | null;
  reading_time_minutes: number | null;
  tag_list: string[] | null;
};

function toArticle(raw: DevToArticle): Article {
  return {
    id: raw.id,
    title: raw.title,
    url: raw.url,
    coverImage: raw.cover_image ?? '',
    description: raw.description ?? '',
    publishedAt: raw.published_timestamp ?? '',
    readingMinutes: raw.reading_time_minutes ?? 0,
    tags: (raw.tag_list ?? []).slice(0, 3),
  };
}

/**
 * Serves the bundled snapshot straight away, then replaces it with whatever
 * dev.to currently returns. A failed request leaves the snapshot in place.
 */
function useDevToArticles() {
  const [articles, setArticles] = useState<Article[]>(FALLBACK_ARTICLES);

  useEffect(() => {
    const controller = new AbortController();

    fetch(DEV_TO_ENDPOINT, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`dev.to responded ${response.status}`);
        return response.json() as Promise<DevToArticle[]>;
      })
      .then((raw) => {
        if (Array.isArray(raw) && raw.length > 0) {
          setArticles(raw.slice(0, ARTICLE_COUNT).map(toArticle));
        }
      })
      .catch(() => {
        // Offline, rate limited, or unmounted -- the snapshot already covers it.
      });

    return () => controller.abort();
  }, []);

  return articles;
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function ArticleCard({ article }: { article: Article }) {
  const publishedOn = formatDate(article.publishedAt);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${CARD_RADIUS} group flex h-full flex-col overflow-hidden border-2 border-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/5`}
    >
      {article.coverImage && (
        <img
          src={article.coverImage}
          alt=""
          loading="lazy"
          className="w-full object-cover"
          style={{ aspectRatio: '1000 / 420' }}
        />
      )}

      <div className="flex h-full flex-col gap-3 p-5 md:p-6">
        <div className="flex items-center gap-2 text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">
          {publishedOn && <span>{publishedOn}</span>}
          {publishedOn && article.readingMinutes > 0 && <span aria-hidden="true">·</span>}
          {article.readingMinutes > 0 && <span>{article.readingMinutes} min read</span>}
        </div>

        <h3
          className="font-medium leading-snug text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)' }}
        >
          {article.title}
        </h3>

        <p className="line-clamp-3 text-sm font-light leading-relaxed text-[#D7E2EA] opacity-60">
          {article.description}
        </p>

        {article.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#D7E2EA]/40 px-3 py-1 text-[0.65rem] font-light uppercase tracking-widest text-[#D7E2EA] opacity-70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export default function ArticlesSection() {
  const articles = useDevToArticles();

  return (
    <section
      id="articles"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Articles
      </FadeIn>

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {articles.map((article, i) => (
          <FadeIn key={article.id} delay={(i % 3) * 0.1} className="h-full">
            <ArticleCard article={article} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 flex justify-center sm:mt-16 md:mt-20">
        <GhostButton label="Read More" href={DEV_TO_PROFILE_URL} external />
      </FadeIn>
    </section>
  );
}
