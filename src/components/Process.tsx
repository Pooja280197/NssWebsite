import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Our design approach is to simplify. We embrace creating something.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We denounce righteous indignation and dislike men who beguiled',
  },
  {
    number: '03',
    title: 'Design & Dev',
    description: 'At this step, we cater to requirement backed web services',
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Our design approach is to simplify. We embrace creating something.',
    
  },
  {
    number: '05',
    title: 'Project Deliver',
    description: 'We denounce righteous indignation and dislike men who beguiled',
  },
];

export default function Process() {
  const { ref, isVisible } = useIntersectionObserver(0.12);

  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="absolute -left-48 -top-64 h-[560px] w-[900px] rounded-[50%] bg-slate-100/80" />
      <div className="absolute left-0 right-0 top-[330px] hidden h-32 lg:block">
        <svg
          viewBox="0 0 1920 140"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0 34 C180 86 320 92 472 58 C610 27 660 24 760 58 C900 105 1050 82 1162 42 C1302 -8 1448 22 1580 72 C1700 118 1812 92 1920 54"
            fill="none"
            stroke="#6d5dfc"
            strokeWidth="3"
            strokeDasharray="10 10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-24">
          <p className="mb-5 text-lg font-bold text-[#6d5dfc] sm:text-xl">
            Process we follow
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[54px]">
            Industry Best Practices to the Core
          </h2>
        </div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-7">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal flex flex-col ${index % 2 === 1 ? 'lg:translate-y-[-38px]' : ''} ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-11 flex justify-center lg:mb-12">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_0_55px_rgba(109,93,252,0.2)]">
                  <div
                    className={`flex h-[76px] w-[76px] items-center justify-center rounded-full text-[28px] font-black ${
                      step.featured ? 'bg-[#40b6c9] text-slate-500' : 'bg-[#5f49ee] text-white'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              <article
                className={`relative min-h-[224px] px-9 py-10 ${
                  step.featured
                    ? 'bg-[#9182ed] text-white lg:mt-[-1px] before:absolute before:-top-[18px] before:left-10 before:h-0 before:w-0 before:border-b-[18px] before:border-l-[25px] before:border-b-[#9182ed] before:border-l-transparent'
                    : 'bg-slate-50 text-slate-900'
                }`}
              >
                <h3
                  className={`mb-5 text-[26px] font-black leading-tight ${
                    step.featured ? 'text-[#c7c1aa]' : 'text-slate-950'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-[20px] leading-[1.7] ${
                    step.featured ? 'text-white/80' : 'text-slate-500'
                  }`}
                >
                  {step.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
