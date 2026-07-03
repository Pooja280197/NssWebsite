import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type HeroSlide = {
  title: string;
  description: string;
  youtubeId: string;
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

/** Autoplay + loop dashboard demos inside device mockups */
function buildYoutubeEmbedUrl(videoId: string) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    fs: '0',
    iv_load_policy: '3',
    disablekb: '1',
    cc_load_policy: '0',
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Data Science',
    description:
      'Unlock innovation and growth with advanced analytics, predictive models, and data-driven insights tailored to your business goals.',
    youtubeId: 'XSAHwE21Buk',
    posterSrc:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Power BI analytics dashboard demo',
    device: 'laptop',
    badge: 'DATA INSIGHTS',
    accent: 'blue',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Migrate, scale, and secure your infrastructure with modern cloud architecture built for performance and reliability.',
    youtubeId: 'R32mM31awa8',
    posterSrc:
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cloud platform dashboard demo',
    device: 'laptop',
    badge: 'CLOUD READY',
    accent: 'orange',
  },
  {
    title: 'CRM / Salesforce',
    description:
      'Streamline sales, service, and customer engagement with powerful CRM platforms customized for your workflow.',
    youtubeId: '3wSQyJ5Y9Os',
    posterSrc:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Salesforce CRM dashboard demo',
    device: 'laptop',
    badge: 'CRM POWERED',
    accent: 'blue',
  },
  {
    title: 'Mobile App Development',
    description:
      'High-performance Android and iOS applications built for speed, scalability, and seamless user experiences.',
    youtubeId: 'XSAHwE21Buk',
    posterSrc:
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mobile dashboard and app UI demo',
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

function HeroScreenYoutube({ slide }: { slide: HeroSlide }) {
  const embedUrl = buildYoutubeEmbedUrl(slide.youtubeId);

  return (
    <div className="hero-screen-media">
      <img
        src={slide.posterSrc}
        alt=""
        aria-hidden="true"
        className="hero-screen-poster"
      />
      <div className={`hero-youtube-wrap hero-youtube-wrap-${slide.device}`}>
        <iframe
          key={slide.youtubeId}
          src={embedUrl}
          title={slide.alt}
          className="hero-youtube-player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
        />
      </div>
      <div className="hero-screen-shine" aria-hidden="true" />
    </div>
  );
}

function HeroDeviceVisual({ slide }: { slide: HeroSlide }) {
  const glowClass =
    slide.accent === 'blue' ? 'hero-device-glow-blue' : 'hero-device-glow-orange';

  return (
    <div className="hero-visual-panel">
      <div className={`hero-visual-backdrop hero-visual-backdrop-${slide.accent}`} aria-hidden="true" />
      <div className="hero-device-orbit hero-device-orbit-outer" aria-hidden="true" />
      <div className="hero-device-orbit hero-device-orbit-inner" aria-hidden="true" />
      <div className={`hero-device-glow ${glowClass}`} aria-hidden="true" />
      {slide.device === 'phone' ? <HeroPhone slide={slide} /> : <HeroLaptop slide={slide} />}
    </div>
  );
}

function HeroLaptop({ slide }: { slide: HeroSlide }) {
  const dotClass =
    slide.accent === 'blue' ? 'hero-device-badge-dot-blue' : 'hero-device-badge-dot-orange';

  return (
    <div className="hero-device-stage hero-device-stage-laptop">
      <div className="hero-laptop-screen relative bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/80 shadow-2xl rounded-xl sm:rounded-2xl p-[7px] pb-[5px] sm:p-[11px] sm:pb-[8px] xl:p-[12px] xl:pb-[9px]">
        <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-slate-600 z-10 top-[5px] sm:top-[6px] w-1.5 h-1.5 sm:w-2 sm:h-2" />
        <div className="hero-laptop-display relative aspect-[16/10] overflow-hidden rounded-[4px] bg-slate-950">
          <HeroScreenYoutube slide={slide} />
        </div>
      </div>

      <div className="hero-laptop-base relative mx-[-3%] h-3 rounded-b-2xl bg-gradient-to-b from-slate-700 to-slate-900 sm:h-4 xl:h-[18px]">
        <div className="absolute left-1/2 top-0 h-[2px] w-12 -translate-x-1/2 rounded-full bg-slate-500/80 sm:h-[3px] sm:w-16" />
      </div>

      <div className="hero-laptop-shadow" aria-hidden="true" />

      <div className="hero-device-badge hero-device-badge-float -bottom-1 left-[6%] gap-1.5 px-2.5 py-1 text-[9px] sm:-bottom-2 sm:left-[8%] sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[11px]">
        <span className={`hero-device-badge-dot ${dotClass} h-1.5 w-1.5 sm:h-2 sm:w-2`} />
        {slide.badge}
      </div>
    </div>
  );
}

function HeroPhone({ slide }: { slide: HeroSlide }) {
  const dotClass =
    slide.accent === 'blue' ? 'hero-device-badge-dot-blue' : 'hero-device-badge-dot-orange';

  return (
    <div className="hero-device-stage hero-device-stage-phone">
      <div className="hero-phone-glow-text" aria-hidden="true">
        APP
      </div>

      <div className="relative z-10 w-[128px] sm:w-[220px] xl:w-[240px]">
        <div className="hero-phone-frame relative rounded-[1.7rem] border border-slate-700/90 bg-gradient-to-b from-slate-900 to-black p-[5px] shadow-2xl sm:rounded-[2.4rem] sm:p-2 xl:rounded-[2.6rem] xl:p-2.5">
          <div className="absolute left-1/2 top-2.5 z-20 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black sm:top-3.5 sm:h-4 sm:w-[72px] xl:top-4 xl:h-5 xl:w-20" />
          <div className="hero-phone-display relative aspect-[9/19] overflow-hidden rounded-[1.25rem] bg-slate-950 sm:rounded-[1.9rem] xl:rounded-[2.1rem]">
            <HeroScreenYoutube slide={slide} />
          </div>
        </div>

        <div className="hero-device-badge hero-device-badge-float -left-6 bottom-[38%] gap-1 whitespace-nowrap px-1.5 py-0.5 text-[7px] sm:-left-10 sm:bottom-[36%] sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-[10px] xl:-left-12 xl:text-[11px]">
          <span className={`hero-device-badge-dot ${dotClass} h-1 w-1 sm:h-1.5 sm:w-1.5`} />
          {slide.badge}
        </div>

        {slide.badgeSecondary && (
          <div
            className="hero-device-badge hero-device-badge-float -right-5 top-[28%] gap-1 whitespace-nowrap px-1.5 py-0.5 text-[7px] sm:-right-10 sm:top-[30%] sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-[10px] xl:-right-12 xl:text-[11px]"
            style={{ animationDelay: '0.6s' }}
          >
            <span className={`hero-device-badge-dot ${dotClass} h-1 w-1 sm:h-1.5 sm:w-1.5`} />
            {slide.badgeSecondary}
          </div>
        )}
      </div>
    </div>
  );
}

const HERO_CORNER_RINGS = [
  { corner: 'tr', size: 'sm' as const, tone: 'blue' as const },
  { corner: 'bl', size: 'sm' as const, tone: 'warm' as const },
] as const;

const HERO_BG_VIDEO =
  'https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4';
const HERO_BG_POSTER =
  'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920';

function HeroBackgroundVideo() {
  const [usePoster, setUsePoster] = useState(false);

  return (
    <div className="hero-bg-media">
      {usePoster ? (
        <img src={HERO_BG_POSTER} alt="" className="hero-bg-media-layer" />
      ) : (
        <video
          src={HERO_BG_VIDEO}
          poster={HERO_BG_POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => setUsePoster(true)}
          className="hero-bg-media-layer"
          aria-hidden="true"
        />
      )}
      <div className="hero-bg-media-overlay" />
    </div>
  );
}

function HeroFloatingOrbs() {
  return (
    <>
      <div className="hero-orb hero-orb-blue" aria-hidden="true" />
      <div className="hero-orb hero-orb-orange" aria-hidden="true" />
      <div className="hero-orb hero-orb-mix" aria-hidden="true" />
    </>
  );
}

function HeroCornerRings({
  corner,
  size,
  tone,
}: {
  corner: 'tr' | 'bl';
  size: 'lg' | 'sm';
  tone: 'blue' | 'warm';
}) {
  const ringCount = size === 'lg' ? 8 : 6;

  return (
    <div
      className={`hero-corner-rings hero-corner-rings-${corner} hero-corner-rings-${size} hero-corner-rings-tone-${tone}`}
      aria-hidden="true"
    >
      {Array.from({ length: ringCount }).map((_, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.45}s` }} />
      ))}
    </div>
  );
}

function HeroSlideRow({
  slide,
  onExplore,
  onConsult,
  animateContent = false,
}: {
  slide: HeroSlide;
  onExplore: () => void;
  onConsult: () => void;
  animateContent?: boolean;
}) {
  const titleGradient =
    slide.accent === 'blue' ? 'hero-title-gradient-blue' : 'hero-title-gradient-orange';

  return (
    <div className="flex min-w-full flex-col bg-transparent lg:flex-row">
      <div className="relative z-10 flex w-full items-center bg-transparent lg:w-[50%] xl:w-[48%]">
        <div className="hero-slide-left mx-auto flex w-full max-w-[560px] flex-col justify-center px-1 pb-6 pt-20 sm:px-2 lg:mx-0 lg:min-h-[540px] lg:py-0 lg:pr-10 md:min-h-[600px] lg:min-h-[640px]">
          <p className="hero-eyebrow">Next Generation IT Solutions</p>

          <h1 className="hero-headline text-[2.25rem] sm:text-[2.65rem] lg:text-[3rem] xl:text-[3.25rem]">
            <span className="block">Grow Your</span>
            <span className="block">Business With</span>
            <span
              key={slide.title}
              className={`hero-headline-accent mt-2 block ${titleGradient} ${animateContent ? 'hero-dynamic-in' : ''}`}
            >
              {slide.title}
            </span>
          </h1>

          <p
            key={slide.description}
            className={`hero-description mt-4 max-w-[500px] text-[15px] sm:mt-5 sm:text-base lg:text-[17px] ${animateContent ? 'hero-dynamic-in' : ''}`}
          >
            {slide.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-5">
            <button onClick={onExplore} className="btn-primary btn-primary-ltr font-semibold">
              Explore Services
              <ArrowRight size={18} />
            </button>
            <button onClick={onConsult} className="btn-outline-blue btn-outline-blue-ltr font-semibold">
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="hero-visual-wrap flex min-h-[260px] w-full items-center justify-center overflow-visible bg-transparent sm:min-h-[300px] lg:min-h-0 lg:w-[50%] lg:py-6 xl:w-[52%]">
        <HeroDeviceVisual slide={slide} />
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
    <div className="hero-shell">
      <div className="hero-bg" aria-hidden="true">
        <HeroBackgroundVideo />
        <HeroFloatingOrbs />
        {HERO_CORNER_RINGS.map(({ corner, size, tone }) => (
          <HeroCornerRings key={corner} corner={corner} size={size} tone={tone} />
        ))}
      </div>

      <section
        ref={heroRef}
        className="hero-content relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="relative mt-2 min-h-[540px] overflow-hidden bg-transparent pb-10 md:min-h-[600px] lg:min-h-[640px] lg:pb-12">
          {prevSlideIndex !== null && (
            <div
              key={`exit-${prevSlideIndex}`}
              className="hero-slide-exit absolute inset-0 z-10 w-full bg-transparent"
              style={{ animationDuration: `${SLIDE_EXIT_MS}ms` }}
            >
              <HeroSlideRow
                slide={LOOP_SLIDES[prevSlideIndex]}
                onExplore={() => scrollToSection('#services')}
                onConsult={() => scrollToSection('#contact')}
                animateContent={false}
              />
            </div>
          )}

          <div
            key={`slide-${slideIndex}-${prevSlideIndex ?? 'idle'}`}
            className={`absolute inset-0 z-10 w-full bg-transparent ${prevSlideIndex !== null ? 'hero-slide-enter' : ''}`}
            style={prevSlideIndex !== null ? { animationDuration: `${SLIDE_ENTER_MS}ms` } : undefined}
          >
            <HeroSlideRow
              slide={LOOP_SLIDES[slideIndex]}
              onExplore={() => scrollToSection('#services')}
              onConsult={() => scrollToSection('#contact')}
              animateContent={prevSlideIndex !== null}
            />
          </div>

          <div className="relative z-20 mt-6 flex justify-center gap-2 lg:absolute lg:bottom-8 lg:left-8 lg:mt-0 lg:justify-start">
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
    </div>
  );
}
