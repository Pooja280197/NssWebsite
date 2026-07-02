import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type HeroSlide = {
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  alt: string;
  device: 'laptop' | 'phone';
  badge: string;
  badgeSecondary?: string;
  accent: 'blue' | 'orange';
};

const SLIDE_INTERVAL_MS = 6500;
const SLIDE_EXIT_MS = 650;
const SLIDE_ENTER_MS = 1600;

const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Data Science',
    description:
      'Unlock innovation and growth with advanced analytics, predictive models, and data-driven insights tailored to your business goals.',
    videoSrc:
      'https://videos.pexels.com/video-files/30445097/30445097-hd_1280_720_30fps.mp4',
    posterSrc:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Data Science analytics dashboard',
    device: 'laptop',
    badge: 'DATA INSIGHTS',
    accent: 'blue',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Migrate, scale, and secure your infrastructure with modern cloud architecture built for performance and reliability.',
    videoSrc:
      'https://videos.pexels.com/video-files/38055932/38055932-hd_1280_720_30fps.mp4',
    posterSrc:
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cloud solutions project dashboard',
    device: 'laptop',
    badge: 'CLOUD READY',
    accent: 'orange',
  },
  {
    title: 'CRM / Salesforce',
    description:
      'Streamline sales, service, and customer engagement with powerful CRM platforms customized for your workflow.',
    videoSrc:
      'https://videos.pexels.com/video-files/7448471/7448471-hd_1280_720_30fps.mp4',
    posterSrc:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'CRM and Salesforce dashboard',
    device: 'laptop',
    badge: 'CRM POWERED',
    accent: 'blue',
  },
  {
    title: 'Mobile App Development',
    description:
      'High-performance Android and iOS applications built for speed, scalability, and seamless user experiences.',
    videoSrc:
      'https://videos.pexels.com/video-files/4436860/4436860-hd_720_1280_30fps.mp4',
    posterSrc:
      'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Mobile app development dashboard',
    device: 'phone',
    badge: 'BIOMETRIC READY',
    badgeSecondary: 'NATIVE POWER',
    accent: 'orange',
  },
];

const LOOP_SLIDES = [
  HERO_SLIDES[HERO_SLIDES.length - 1],
  ...HERO_SLIDES,
  HERO_SLIDES[0],
];
const START_INDEX = 1;

function HeroScreenVideo({ slide }: { slide: HeroSlide }) {
  const [usePoster, setUsePoster] = useState(false);

  if (usePoster) {
    return (
      <img
        src={slide.posterSrc}
        alt={slide.alt}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    );
  }

  return (
    <video
      key={slide.videoSrc}
      src={slide.videoSrc}
      poster={slide.posterSrc}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      onError={() => setUsePoster(true)}
      className="absolute inset-0 w-full h-full object-cover object-top"
      aria-label={slide.alt}
    />
  );
}

function HeroLaptop({ slide }: { slide: HeroSlide }) {
  const dotClass =
    slide.accent === 'blue' ? 'hero-device-badge-dot-blue' : 'hero-device-badge-dot-orange';
  const glowClass =
    slide.accent === 'blue' ? 'hero-device-glow-blue' : 'hero-device-glow-orange';

  return (
    <div className="flex items-center justify-center w-full h-full p-4 sm:p-6 xl:p-10">
      <div className="hero-device-stage relative w-full max-w-[300px] sm:max-w-[460px] lg:max-w-[540px] xl:max-w-[600px]">
        <div className={`hero-device-glow ${glowClass}`} aria-hidden="true" />

        <div className="hero-laptop-screen relative bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/80 shadow-2xl rounded-xl sm:rounded-2xl p-[7px] pb-[5px] sm:p-[11px] sm:pb-[8px] xl:p-[12px] xl:pb-[9px]">
          <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-slate-700 z-10 top-[5px] sm:top-[6px] w-1.5 h-1.5 sm:w-2 sm:h-2" />
          <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden bg-slate-100">
            <HeroScreenVideo slide={slide} />
          </div>
        </div>

        <div className="hero-laptop-base relative bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-2xl mx-[-3%] h-3 sm:h-4 xl:h-[18px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-slate-500/80 w-12 sm:w-16 h-[2px] sm:h-[3px]" />
        </div>

        <div className="hero-device-badge -bottom-1 sm:-bottom-2 left-[6%] sm:left-[8%] gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[11px]">
          <span className={`hero-device-badge-dot ${dotClass} w-1.5 h-1.5 sm:w-2 sm:h-2`} />
          {slide.badge}
        </div>
      </div>
    </div>
  );
}

function HeroPhone({ slide }: { slide: HeroSlide }) {
  const dotClass =
    slide.accent === 'blue' ? 'hero-device-badge-dot-blue' : 'hero-device-badge-dot-orange';
  const glowClass =
    slide.accent === 'blue' ? 'hero-device-glow-blue' : 'hero-device-glow-orange';

  return (
    <div className="flex items-center justify-center w-full h-full p-3 sm:p-6 xl:p-10">
      <div className="hero-device-stage relative">
        <div className={`hero-device-glow ${glowClass}`} aria-hidden="true" />

        <div
          className="absolute top-1/2 -translate-y-1/2 font-black text-slate-100 select-none pointer-events-none leading-none tracking-tighter right-[-8px] sm:right-[-20px] xl:right-[-28px] text-[72px] sm:text-[130px] xl:text-[170px]"
          aria-hidden="true"
        >
          APP
        </div>

        <div className="relative z-10 w-[118px] sm:w-[210px] xl:w-[230px]">
          <div className="hero-phone-frame relative bg-gradient-to-b from-slate-900 to-black border border-slate-700/90 shadow-2xl rounded-[1.6rem] sm:rounded-[2.4rem] xl:rounded-[2.6rem] p-[5px] sm:p-2 xl:p-2.5">
            <div className="absolute left-1/2 -translate-x-1/2 bg-black z-20 rounded-full top-2.5 sm:top-3.5 xl:top-4 w-14 sm:w-[72px] xl:w-20 h-3.5 sm:h-4 xl:h-5" />
            <div className="relative overflow-hidden bg-white aspect-[9/19] rounded-[1.2rem] sm:rounded-[1.9rem] xl:rounded-[2.1rem]">
              <HeroScreenVideo slide={slide} />
            </div>
          </div>

          <div className="hero-device-badge -left-6 sm:-left-10 xl:-left-12 bottom-[38%] sm:bottom-[36%] whitespace-nowrap gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[7px] sm:text-[10px] xl:text-[11px]">
            <span className={`hero-device-badge-dot ${dotClass} w-1 h-1 sm:w-1.5 sm:h-1.5`} />
            {slide.badge}
          </div>

          {slide.badgeSecondary && (
            <div className="hero-device-badge -right-5 sm:-right-10 xl:-right-12 top-[28%] sm:top-[30%] whitespace-nowrap gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[7px] sm:text-[10px] xl:text-[11px]">
              <span className={`hero-device-badge-dot ${dotClass} w-1 h-1 sm:w-1.5 sm:h-1.5`} />
              {slide.badgeSecondary}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function HeroSlideRow({
  slide,
  onExplore,
  onConsult,
}: {
  slide: HeroSlide;
  onExplore: () => void;
  onConsult: () => void;
}) {
  return (
    <div className="min-w-full flex flex-col lg:flex-row bg-white">
      <div className="relative z-10 w-full lg:w-[50%] xl:w-[48%] bg-white flex items-center">
        <div className="hero-slide-left w-full max-w-[540px] mx-auto lg:mx-0 px-5 sm:px-7 lg:pr-8 pt-24 pb-6 lg:py-0 lg:min-h-[540px] md:min-h-[600px] lg:min-h-[640px] flex flex-col justify-center">
          <h1 className="text-[2.35rem] sm:text-5xl lg:text-[50px] xl:text-[54px] font-semibold leading-[1.12] tracking-[0.02em] text-slate-900">
            <span className="relative inline-block pb-1">Grow Your</span>{' '}
            <span className="inline text-slate-900">Business With</span>
          </h1>

          <div className="mt-1 sm:mt-4 text-[2.35rem] sm:text-5xl lg:text-[50px] xl:text-[54px] font-bold leading-[1.12] tracking-[0.02em] min-h-[1.2em]">
            <span className="hero-title-gradient-blue">{slide.title}</span>
          </div>

          <p className="mt-7 sm:mt-8 text-slate-600 text-[15px] sm:text-base lg:text-[17px] leading-[1.75] max-w-[480px]">
            {slide.description}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
            <button onClick={onExplore} className="btn-primary btn-primary-ltr font-normal">
              Explore Services
              <ArrowRight size={18} />
            </button>
            <button onClick={onConsult} className="btn-outline-blue btn-outline-blue-ltr font-normal">
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center overflow-visible bg-white min-h-[240px] sm:min-h-[280px] lg:min-h-0 lg:py-8">
        {slide.device === 'phone' ? <HeroPhone slide={slide} /> : <HeroLaptop slide={slide} />}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [slideIndex, setSlideIndex] = useState(START_INDEX);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number | null>(null);
  const slideIndexRef = useRef(START_INDEX);
  const isAnimatingRef = useRef(false);

  const startTransition = useCallback((toIndex: number) => {
    if (isAnimatingRef.current) return;

    const fromIndex = slideIndexRef.current;
    if (fromIndex === toIndex) return;

    isAnimatingRef.current = true;
    setPrevSlideIndex(fromIndex);
    setSlideIndex(toIndex);
    slideIndexRef.current = toIndex;

    window.setTimeout(() => {
      isAnimatingRef.current = false;
      setPrevSlideIndex(null);

      if (toIndex === LOOP_SLIDES.length - 1) {
        slideIndexRef.current = START_INDEX;
        setSlideIndex(START_INDEX);
      }
    }, SLIDE_ENTER_MS);
  }, []);

  const advanceSlide = useCallback(() => {
    const current = slideIndexRef.current;
    if (current >= LOOP_SLIDES.length - 1) return;
    startTransition(current + 1);
  }, [startTransition]);

  useEffect(() => {
    slideIndexRef.current = slideIndex;
  }, [slideIndex]);

  useEffect(() => {
    const id = setInterval(advanceSlide, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [advanceSlide]);

  const goToSlide = (index: number) => {
    startTransition(index + 1);
  };

  const dotIndex = (slideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;

  const scrollToSection = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={heroRef}
      className="relative bg-white max-w-7xl mx-auto overflow-hidden"
    >
      <div className="hero-deco-circle w-2.5 h-2.5 bg-emerald-200/70 top-[20%] left-[6%] hidden sm:block absolute z-10" />
      <div className="hero-deco-circle w-3 h-3 bg-sky-200/60 top-[32%] right-[8%] hidden sm:block absolute z-10" />
      <div
        className="hero-deco-triangle hidden sm:block absolute top-[24%] right-[16%] z-10"
        style={{
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderBottom: '9px solid rgba(249,115,22,0.35)',
        }}
      />
      <div
        className="hero-deco-triangle hidden sm:block absolute bottom-[42%] right-[10%] z-10"
        style={{
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: '8px solid rgba(59,130,246,0.35)',
        }}
      />

      <div className="relative mt-4 overflow-hidden pb-10 lg:pb-12 min-h-[540px] md:min-h-[600px] lg:min-h-[640px]">
        {prevSlideIndex !== null && (
          <div
            key={`exit-${prevSlideIndex}`}
            className="hero-slide-exit absolute inset-0 w-full"
            style={{ animationDuration: `${SLIDE_EXIT_MS}ms` }}
          >
            <HeroSlideRow
              slide={LOOP_SLIDES[prevSlideIndex]}
              onExplore={() => scrollToSection('#services')}
              onConsult={() => scrollToSection('#contact')}
            />
          </div>
        )}

        <div
          key={`slide-${slideIndex}-${prevSlideIndex ?? 'idle'}`}
          className={`absolute inset-0 w-full ${prevSlideIndex !== null ? 'hero-slide-enter' : ''}`}
          style={prevSlideIndex !== null ? { animationDuration: `${SLIDE_ENTER_MS}ms` } : undefined}
        >
          <HeroSlideRow
            slide={LOOP_SLIDES[slideIndex]}
            onExplore={() => scrollToSection('#services')}
            onConsult={() => scrollToSection('#contact')}
          />
        </div>

        <div className="flex justify-center lg:justify-start lg:absolute lg:bottom-8 lg:left-[6%] gap-2 z-20 mt-6 lg:mt-0">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={`${slide.title}-dot`}
              type="button"
              aria-label={`Go to ${slide.title} slide`}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ease-out ${
                i === dotIndex
                  ? `w-8 ${slide.accent === 'blue' ? 'bg-gradient-brand-blue' : 'bg-gradient-brand-orange'}`
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
