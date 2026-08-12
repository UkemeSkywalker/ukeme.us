import GhostButton from './GhostButton';

type LiveProjectButtonProps = {
  href?: string;
  className?: string;
};

export default function LiveProjectButton({ href, className }: LiveProjectButtonProps) {
  return <GhostButton label="Live Project" href={href} className={className} />;
}
