import { ClipboardList, Code2, FlaskConical, Rocket, Search, type LucideIcon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ballWaveOffsets = [
  'process-ball-wave-0',
  'process-ball-wave-1',
  'process-ball-wave-2',
  'process-ball-wave-3',
  'process-ball-wave-4',
];

const steps: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Our design approach is to simplify. We embrace creating something meaningful.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We map requirements, timelines, and milestones for a clear project roadmap.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Design & Dev',
    description: 'At this step, we cater to requirement-backed web and software services.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Rigorous QA ensures performance, security, and reliability before launch.',
    icon: FlaskConical,
  },
  {
    number: '05',
    title: 'Project Deliver',
    description: 'We deliver on time with full documentation and post-launch support.',
    icon: Rocket,
  },
];

function ProcessBall({ number }: { number: string }) {
  return (
    <div className="process-timeline-ball bg-gradient-brand-blue">
      {number}
    </div>
  );
}

function ProcessCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="process-step-card gradient-border group flex h-full w-full flex-col">
      <div className="mb-3 flex min-h-[2.75rem] items-center gap-3">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:scale-105">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-black leading-snug text-navy-800">{title}</h3>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-slate-500">{description}</p>
    </article>
  );
}

export default function Process() {
  const { ref, isVisible } = useIntersectionObserver(0.12);

  return (
    <section id="process" className="process-section relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto mb-16 max-w-3xl text-center reveal ${isVisible ? 'visible' : ''}`}>
          <span className="section-tag">Process We Follow</span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5 leading-tight">
            Industry Best Practices <span className="gradient-text">to the Core</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            A proven five-step workflow that keeps every project structured, transparent, and delivery-ready.
          </p>
        </div>

        <div ref={ref}>
          {/* Mobile / tablet */}
          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:hidden">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal flex h-full flex-col ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="flex justify-center">
                  <ProcessBall number={step.number} />
                </div>
                <div className="mt-6 flex flex-1 w-full">
                  <ProcessCard title={step.title} description={step.description} icon={step.icon} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop — balls on wavy line (top row), cards below (one row) */}
          <div className="process-timeline-desktop hidden lg:block">
            <div className="process-timeline-balls-row">
              <div className="process-timeline-line" aria-hidden="true">
                <svg viewBox="0 0 1920 140" preserveAspectRatio="none" className="h-full w-full">
                  <path
                    d="M0 34 C180 86 320 92 472 58 C610 27 660 24 760 58 C900 105 1050 82 1162 42 C1302 -8 1448 22 1580 72 C1700 118 1812 92 1920 54"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeDasharray="10 10"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </div>

              <div className="process-timeline-balls-grid">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`reveal flex justify-center ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className={ballWaveOffsets[index]}>
                      <ProcessBall number={step.number} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="process-timeline-cards-row">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`reveal h-full ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 90 + 120}ms` }}
                >
                  <ProcessCard title={step.title} description={step.description} icon={step.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
