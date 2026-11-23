import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

type Project = {
  number: string;
  name: string;
  category: string;
  url: string;
  /** Landing page screenshot, stored in public/projects. */
  image: string;
};

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Gino Foods',
    category: 'Client',
    url: 'https://ginonaija.ng/',
    image: '/projects/ginonaija.webp',
  },
  {
    number: '02',
    name: 'NBA Surulere',
    category: 'Client',
    url: 'https://nbasurulerebranch.com/',
    image: '/projects/nbasurulere.webp',
  },
  {
    number: '03',
    name: 'Kwedu Initiatives',
    category: 'Client',
    url: 'https://kwedu.org/',
    image: '/projects/kwedu.webp',
  },
  {
    number: '04',
    name: 'IPP Global',
    category: 'Client',
    url: 'https://ippgbl.com/',
    image: '/projects/ippgbl.webp',
  },
  {
    number: '05',
    name: 'Aquada Box Store',
    category: 'Client',
    url: 'https://aquadabox.com/store/',
    image: '/projects/aquadabox.webp',
  },
  {
    number: '06',
    name: 'TinyPixo',
    category: 'Client',
    url: 'https://tinypixo.com/',
    image: '/projects/tinypixo.webp',
  },
  {
    number: '07',
    name: 'Mac Tidar Mail',
    category: 'Client',
    url: 'https://mail.mactidar.com/',
    image: '/projects/mactidar.webp',
  },
  {
    number: '08',
    name: 'Zetca',
    category: 'Client',
    url: 'https://zetca.pro/',
    image: '/projects/zetca.webp',
  },
  {
    number: '09',
    name: 'Mac Tidar Cloud',
    category: 'Client',
    url: 'https://cloud.mactidar.com/',
    image: '/projects/mactidarcloud.webp',
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

      <img
        src={project.image}
        alt={`${project.name} landing page`}
        loading="lazy"
        className={`${IMAGE_RADIUS} aspect-[16/10] w-full object-cover object-top`}
      />

      {/* Pushed to the bottom so the buttons line up across the row. */}
      <LiveProjectButton href={project.url} className="mt-auto w-full text-center" />
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
