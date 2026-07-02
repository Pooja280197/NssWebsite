import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const HERO_IMG =
  'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  const { text: typedText, isDeleting } = useTypewriter();
  const heroRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={heroRef}
      className="relative bg-white overflow-hidden min-h-[540px] md:min-h-[600px] lg:min-h-[640px]
      max-w-7xl mx-auto "
    >
      {/* SVG clip — reference-style organic wave mask */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="heroWaveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.20 0 L 1 0 L 1 1 C 0.93 0.97, 0.72 1, 0.60 0.97 C 0.30 0.93, 0.16 0.82, 0.11 0.68 C 0.07 0.54, 0.20 0.38, 0.09 0.22 C 0.05 0.10, 0.22 0, 0.20 0 Z" />
          </clipPath>
          <clipPath id="heroWaveClipMobile" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1 0 L 1 1 C 0.88 0.97, 0.58 1, 0.34 0.94 C 0.18 0.84, 0.08 0.92, 0.05 0.78 C 0.02 0.64, 0 0.50, 0 0.36 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative flex flex-col lg:flex-row min-h-[540px] md:min-h-[600px] lg:min-h-[640px] mt-4">
        {/* Left — content */}
        <div className="relative z-10 w-full lg:w-[50%] xl:w-[48%] bg-white flex items-center">
          <div className="hero-deco-circle w-2.5 h-2.5 bg-emerald-200/70 top-[20%] left-[6%] hidden sm:block absolute" />
          <div className="hero-deco-circle w-3 h-3 bg-sky-200/60 top-[32%] right-[8%] hidden sm:block absolute" />
          <div
            className="hero-deco-triangle hidden sm:block absolute top-[24%] right-[16%]"
            style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '9px solid rgba(249,115,22,0.35)' }}
          />
          <div
            className="hero-deco-triangle hidden sm:block absolute bottom-[42%] right-[10%]"
            style={{ borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '8px solid rgba(59,130,246,0.35)' }}
          />

          <div className="w-full max-w-[540px] px-5 sm:px-7  lg:pr-8 pt-24 pb-12 lg:py-0 lg:min-h-[540px] md:min-h-[600px] lg:min-h-[640px] flex flex-col justify-center">
            {/* Headline */}
            <div
              className={`hero-enter ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: '160ms' }}
            >
              <h1 className="text-[2.35rem] sm:text-5xl lg:text-[50px] xl:text-[54px] font-black leading-[1.12] tracking-tight text-slate-900">
                <span className="relative inline-block pb-1">
                  Grow Your
                  <span className="absolute bottom-0 left-0 h-[3px] w-16 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600" />
                </span>{' '}
                <span className="inline text-slate-900">
                  Business With
                </span>
              </h1>

              <div className="mt-3 sm:mt-4 text-[2.35rem] sm:text-5xl lg:text-[50px] xl:text-[54px] font-black leading-[1.12] tracking-tight min-h-[1.2em]">
                <span className={`typewriter-line gradient-text ${isDeleting ? 'opacity-80' : 'opacity-100'}`}>
                  {typedText}
                </span>
                <span className="typewriter-cursor" aria-hidden="true" />
              </div>
            </div>

            {/* Subtitle */}
            <div
              className={`hero-enter mt-7 sm:mt-8 ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-slate-600 text-[15px] sm:text-base lg:text-[17px] leading-[1.75] max-w-[480px]">
                Nagar Software Solutions Pvt. Ltd. — transforming the unprecedented dreams of small businesses and large enterprises into reality with next-gen IT services.
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`hero-enter mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: '420ms' }}
            >
              <button onClick={() => scrollToSection('#services')} className="btn-primary btn-primary-ltr font-normal">
                Explore Services
                <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('#contact')} className="btn-outline-blue btn-outline-blue-ltr font-normal">
                Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Right — reference wavy image */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[56%] xl:w-[54%]">
          <div className="hero-wave-clip w-full h-full">
            <img
              src={HERO_IMG}
              alt="Team building a website"
              className="w-full h-full object-cover object-[center_25%]"
            />
          </div>
        </div>

        {/* Mobile image with bottom wave */}
        <div className="lg:hidden w-full h-56 sm:h-64 relative mt-2">
          <div className="hero-wave-clip-mobile w-full h-full">
            <img
              src={HERO_IMG}
              alt="Team building a website"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* <button
        onClick={() => scrollToSection('#services')}
        className="absolute bottom-6 left-1/2 lg:left-[23%] -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-400 hover:text-blue-500 transition-colors animate-bounce-subtle"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Discover</span>
        <ChevronDown size={16} />
      </button> */}
    </section>
  );
}
