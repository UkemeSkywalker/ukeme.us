import FadeIn from '../components/FadeIn';

type Service = {
  number: string;
  name: string;
  description: string;
  /** Optional supporting points listed under the description. */
  bullets?: string[];
};

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Cloud Infrastructure',
    description:
      'I design and manage secure, scalable cloud environments that support modern applications and data workloads.',
    bullets: [
      'AWS and GCP architecture',
      'Compute, networking, storage, and IAM',
      'Cloud monitoring and cost-aware infrastructure',
      'High availability, security, and reliability practices',
    ],
  },
  {
    number: '02',
    name: 'DevOps & Platform Engineering',
    description:
      'I create delivery systems that help teams release software consistently and safely.',
    bullets: [
      'CI/CD pipeline design and automation',
      'Docker and Kubernetes',
      'Environment standardization',
      'Git-based workflows and deployment automation',
      'Logging, monitoring, and operational visibility',
    ],
  },
  {
    number: '03',
    name: 'Infrastructure as Code',
    description:
      'I replace repetitive manual configuration with version-controlled, modularized, repeatable infrastructure.',
    bullets: [
      'Terraform for Infrastructure-as-Code',
      'Ansible for automated provisioning and configuration management',
      'Infrastructure provisioning and lifecycle management',
      'Testing and validation of infrastructure changes',
    ],
  },
  {
    number: '04',
    name: 'Blockchain Node Operations',
    description:
      'Managing and maintaining blockchain infrastructure to ensure network stability, security, and performance for decentralized networks',
    bullets: [
      'Node setup (L1s & L2s), deployment and lifecycle management',
      'Network monitoring, backups, upgrades, and incident response',
      'Validator and RPC node operations',
      'Infrastructure performance and availability optimization',
      'Web3 infrastructure automation'
    ],
  },
  {
    number: '05',
    name: 'Web Development & Design',
    description:
      'Design and develop clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

const HAIRLINE = '1px solid rgba(12, 12, 12, 0.15)';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        What I Do
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            className="flex items-start gap-4 py-8 sm:gap-6 sm:py-10 md:gap-10 md:py-12"
            style={{
              borderTop: HAIRLINE,
              // Close off the list so the last row is not left open-ended.
              borderBottom: i === SERVICES.length - 1 ? HAIRLINE : undefined,
            }}
          >
            <span
              className="font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-2 pt-1 sm:gap-3 md:gap-4">
              <h3
                className="font-medium uppercase leading-tight text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>

              {service.bullets && (
                <ul
                  className="max-w-2xl list-disc space-y-1 pl-5 font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
