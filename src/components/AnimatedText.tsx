import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { Fragment, useRef, type CSSProperties } from 'react';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

type CharProps = {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
};

/**
 * A single character that brightens as the scroll progress sweeps past it. The
 * dimmed copy stays in the layout so the line never reflows; the animated copy
 * is stacked on top of it.
 */
function Char({ char, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

/**
 * Reveals a paragraph character by character as it moves through the viewport.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={paragraphRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        // Keep whole words together so a reveal never breaks a word across lines.
        const wordChars = word.split('').map((char) => {
          const start = charIndex / totalChars;
          const end = (charIndex + 1) / totalChars;
          charIndex += 1;
          return { char, range: [start, end] as [number, number] };
        });

        // Account for the space that follows this word.
        charIndex += 1;

        return (
          <Fragment key={`${word}-${wordIndex}`}>
            <span className="inline-block">
              {wordChars.map(({ char, range }, i) => (
                <Char key={i} char={char} range={range} progress={scrollYProgress} />
              ))}
            </span>
            {/* The separator lives outside the word so lines can still wrap here. */}
            {wordIndex < words.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </p>
  );
}
