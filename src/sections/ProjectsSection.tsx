import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

type Project = {
  number: string;
  name: string;
  category: string;
  images: [string, string, string];
};

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
];

// Softened from the full-width card radii so the corners stay in proportion
// now that three cards share a row.
const CARD_RADIUS = 'rounded-[32px] md:rounded-[40px]';
const IMAGE_RADIUS = 'rounded-[20px] md:rounded-[28px]';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`${CARD_RADIUS} flex h-full flex-col gap-5 border-2 border-[#D7E2EA] p-4 sm:p-5 md:p-6`}
      style={{ background: '#0C0C0C' }}
    >
      <header className="flex items-center gap-4">
        <span
          className="font-black leading-none text-[#D7E2EA]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 72px)' }}
        >
          {project.number}
        </span>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">
            {project.category}
          </span>
          <h3
            className="font-medium uppercase leading-tight text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.5rem)' }}
          >
            {project.name}
          </h3>
        </div>
      </header>

      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-2 flex flex-col gap-3">
          <img
            src={project.images[0]}
            alt={`${project.name} preview`}
            loading="lazy"
            className={`${IMAGE_RADIUS} w-full object-cover`}
            style={{ height: 'clamp(90px, 9vw, 140px)' }}
          />
          <img
            src={project.images[1]}
            alt={`${project.name} preview`}
            loading="lazy"
            className={`${IMAGE_RADIUS} w-full object-cover`}
            style={{ height: 'clamp(110px, 12vw, 190px)' }}
          />
        </div>

        <img
          src={project.images[2]}
          alt={`${project.name} preview`}
          loading="lazy"
          className={`${IMAGE_RADIUS} col-span-3 h-full w-full object-cover`}
        />
      </div>

      {/* Pushed to the bottom so the buttons line up across the row. */}
      <LiveProjectButton className="mt-auto w-full text-center" />
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </FadeIn>

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.number} delay={i * 0.1} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
