import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Videos', href: '#videos' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Pinned to the top of the viewport for the whole page. It sits outside the
 * hero so it keeps its place once the hero has scrolled away, and it is
 * translucent because it passes over both the dark and the white panels.
 */
export default function Navbar() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 border-b border-[#D7E2EA]/10 bg-[#0C0C0C]/85 backdrop-blur-md"
      style={{ height: 'var(--nav-height)' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="no-scrollbar flex h-full items-center gap-5 overflow-x-auto px-6 sm:justify-between sm:gap-0 sm:overflow-x-visible md:px-10"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="whitespace-nowrap text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {label}
          </a>
        ))}
      </FadeIn>
    </div>
  );
}
