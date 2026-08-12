type GhostButtonProps = {
  label: string;
  href?: string;
  external?: boolean;
  /** 'light' reads on the dark panels, 'dark' on the white ones. */
  tone?: 'light' | 'dark';
  className?: string;
};

const TONES = {
  light: 'border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10',
  dark: 'border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C]/10',
} as const;

/** Outlined pill used for secondary calls to action. */
export default function GhostButton({
  label,
  href,
  external = false,
  tone = 'light',
  className = '',
}: GhostButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-block whitespace-nowrap rounded-full border-2 px-8 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-200 sm:px-10 sm:py-3.5 sm:text-base ${TONES[tone]} ${className}`}
    >
      {label}
    </a>
  );
}
