type GhostButtonProps = {
  label: string;
  href?: string;
  external?: boolean;
  className?: string;
};

/** Outlined pill used for secondary calls to action on dark backgrounds. */
export default function GhostButton({
  label,
  href,
  external = false,
  className = '',
}: GhostButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-block whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
    </a>
  );
}
