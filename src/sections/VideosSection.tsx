import { Play } from 'lucide-react';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import GhostButton from '../components/GhostButton';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@thenodeopsguy';

type Video = {
  id: string;
  title: string;
};

const VIDEOS: Video[] = [
  { id: 'RTiuTZjGPeU', title: 'AWS Daily with Ukeme' },
  { id: 'h-KsDTuQt-I', title: 'System Design for DevOps & Cloud Engineers' },
  { id: 'XxOsNEciTbg', title: 'Containerize and Deploy a Next.js App on AWS App Runner' },
  {
    id: 'AYiU_tAOErg',
    title: 'Launch a Windows Virtual Machine using Amazon LightSail - AWS Daily With Ukeme',
  },
  { id: 'GYf1N-bwTVs', title: 'Token deployment using hardhat goerli testnet' },
  { id: 'hk4F3i8gS5w', title: '🚀 Deploy A React Weather App to Amazon ECS 🌦️' },
];

const FRAME_RADIUS = 'rounded-[20px] md:rounded-[28px]';

function VideoCard({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  // Not every upload has a maxres thumbnail, so fall back on first error.
  const [thumbnail, setThumbnail] = useState(
    `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
  );

  return (
    <article className="flex h-full flex-col gap-4">
      <div
        className={`${FRAME_RADIUS} relative aspect-video overflow-hidden border-2 border-[#0C0C0C]`}
      >
        {isPlaying ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="group block h-full w-full"
          >
            <img
              src={thumbnail}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
              onError={() =>
                setThumbnail(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`)
              }
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-200 group-hover:bg-black/45">
              {/* Light badge on an arbitrary thumbnail, so it reads on any frame. */}
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 transition-transform duration-200 group-hover:scale-110 md:h-16 md:w-16">
                <Play className="ml-0.5 h-6 w-6 fill-[#0C0C0C] text-[#0C0C0C] md:h-7 md:w-7" />
              </span>
            </span>
          </button>
        )}
      </div>

      <h3
        className="font-medium leading-snug text-[#0C0C0C]"
        style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)' }}
      >
        {video.title}
      </h3>

      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-xs font-light uppercase tracking-widest text-[#0C0C0C] opacity-60 transition-opacity duration-200 hover:opacity-100"
      >
        Watch on YouTube
      </a>
    </article>
  );
}

export default function VideosSection() {
  return (
    <section
      id="videos"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Videos
      </FadeIn>

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {VIDEOS.map((video, i) => (
          <FadeIn key={video.id} delay={(i % 3) * 0.1} className="h-full">
            <VideoCard video={video} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 flex justify-center sm:mt-16 md:mt-20">
        <GhostButton label="View More" href={YOUTUBE_CHANNEL_URL} external tone="dark" />
      </FadeIn>
    </section>
  );
}
