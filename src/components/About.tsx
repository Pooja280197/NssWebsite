import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const pillars = [
  { icon: Zap, title: 'Innovation First', desc: 'Cutting-edge tech solutions built for scale', color: '#29ABE2' },
  { icon: Shield, title: 'Enterprise Grade', desc: 'ISO-certified, secure, and reliable systems', color: '#F7941D' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving clients across 20+ countries', color: '#29ABE2' },
  { icon: Lightbulb, title: 'Strategic Partner', desc: 'End-to-end consulting and execution', color: '#F7941D' },
];

const highlights = [
  'Wide portfolio of next-gen IT services',
  'Consulting & resource outsourcing',
  'Driving growth and innovation',
  'Trusted by global enterprises',
  'End-to-end software solutions',
  'Agile delivery methodology',
];

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useIntersectionObserver();
  const { ref: rightRef, isVisible: rightVisible } = useIntersectionObserver();
  const { ref: pillarsRef, isVisible: pillarsVisible } = useIntersectionObserver(0.1);

  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: Split layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-24">

          {/* Left: Image */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="NSS Team"
                  className="w-full h-[480px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(6,13,24,0.3) 0%, transparent 50%)' }}
                />
              </div>

              {/* Experience badge */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-5 shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #0D1B2A, #152538)', border: '1px solid rgba(41,171,226,0.2)' }}
              >
                <div className="text-4xl font-black" style={{ color: '#29ABE2' }}>10<span style={{ color: '#F7941D' }}>+</span></div>
                <div className="text-slate-400 text-xs font-semibold mt-1">Years of Excellence</div>
              </div>

              {/* Clients badge */}
              <div className="absolute -top-5 -right-5 glass-light rounded-2xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #F7941D, #E07B0A)' }}
                  >
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-black text-navy-800 text-lg leading-none" style={{ color: '#F7941D' }}>200+</div>
                    <div className="text-slate-500 text-xs font-medium mt-0.5">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Decorative shape */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(41,171,226,0.06), rgba(247,148,29,0.06))', border: '1px solid rgba(41,171,226,0.1)' }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <span className="section-tag">About NSS</span>

            <h2 className="text-4xl lg:text-5xl xl:text-[52px] font-black text-navy-800 mt-5 mb-6 leading-tight">
              Your Trusted Digital{' '}
              <span className="gradient-text">Transformation</span>{' '}
              Partner
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              Nagar Software Solution is a digital transformation partner that provides services, solutions, and product offerings structured to deliver growth and innovation. We provide a wide portfolio of consulting, resource outsourcing, and next-gen IT services.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              We enable clients to attain their business goals by leveraging AI, Cloud, Data Science, CRM, and Enterprise Mobility — transforming unprecedented dreams into grand reality.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 group">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #F7941D, #E07B0A)' }}
                  >
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Our Services <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-brand"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom: Pillars grid ── */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`reveal rounded-3xl p-6 group hover:-translate-y-2 transition-all duration-300 ${pillarsVisible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                background: `linear-gradient(135deg, ${pillar.color}06 0%, white 100%)`,
                border: `1px solid ${pillar.color}18`,
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}CC)` }}
              >
                <pillar.icon size={22} className="text-white" />
              </div>
              <h3 className="font-black text-navy-800 text-base mb-2">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
