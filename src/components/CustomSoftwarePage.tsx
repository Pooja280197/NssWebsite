import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Cloud, Database, Layout, Settings, Server } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Cloud,
    title: 'SAAS Development',
    sub: 'Unleashing the Power of Cloud-based Software!',
    desc: 'We aim to develop Software-as-a-Service (SaaS) solutions that connect the scalability and accessibility of cloud computing. Whether you need a stout CRM, ERP, software, or project management platform, we create SaaS applications for real-time collaboration and sheltered data storage. With our SaaS development expertise, benefits can be accomplished i.e. flexible subscription models, automatic updates, and on-demand scalability.',
    accent: 'blue' as const,
  },
  {
    icon: Server,
    title: 'AWS Development',
    sub: "Leveraging Cloud's Complete Potential",
    desc: 'From cloud infrastructure setup and configuration to increasing scalable and resilient applications, we combine the power of AWS services such as Amazon EC2, Amazon S3, and Amazon RDS to ensure optimal performance, security, and cost-efficiency. Our AWS development solutions enable businesses to leverage the benefits of cloud computing, with high availability, global reach, and seamless integration with other AWS services.',
    accent: 'orange' as const,
  },
  {
    icon: Layout,
    title: 'Front end and Back end Solutions',
    sub: 'Shaping Engaging and Powerful Interfaces',
    desc: 'Our front-end solutions targets on creating visually tempting, intuitive, and responsive user interfaces that engage customers and boost their interaction with your software applications. Our back-end development expertise ensures core functionality, performance, and security of your software. By combining front-end and back-end solutions seamlessly, we deliver software applications that provide a delightful user experience.',
    accent: 'blue' as const,
  },
  {
    icon: Settings,
    title: 'CMS Development',
    sub: 'Stay Update the Worldly Affairs with CMS',
    desc: 'Our CMS development solutions empower you with user-friendly interfaces, unplagiarized content and customizable workflows. Whether you need a CMS for a website, e-commerce platform, or intranet, we create solutions that abridge content creation, organization, and distribution, allowing managing digital presence and engaging audience.',
    accent: 'orange' as const,
  },
  {
    icon: Database,
    title: 'Database Solutions',
    sub: 'Ensuring Efficient Data Management',
    desc: 'Our database solutions present secure, scalable, and high-performance databases that meet your precise requirements. Whether you need a relational database management system (RDBMS) or a NoSQL database, we design and optimize database architectures that check data integrity, accessibility, and efficient query processing.',
    accent: 'blue' as const,
  },
];

const faqs = [
  { q: 'What Programming Languages and Frameworks do you use?', a: 'We work with a wide range of technologies including React, Angular, Vue, Node.js, Python, PHP, Java, .NET, and more. We choose the best stack based on your project requirements and scalability needs.' },
  { q: 'How do you Ensure the Quality and Security of Custom Software?', a: 'We follow rigorous QA processes including unit testing, integration testing, and security audits. Our team adheres to industry best practices and compliance standards to deliver secure, reliable software.' },
  { q: 'What Ongoing Support do you offer for Custom Software?', a: 'We provide comprehensive post-launch support including bug fixes, performance monitoring, feature enhancements, and 24/7 technical assistance to ensure your software runs smoothly.' },
];

interface Props { onClose: () => void; }

export default function CustomSoftwarePage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  const updateScrollState = useCallback(() => {
    const el = scrollRowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scrollCards = (direction: 'left' | 'right') => {
    const el = scrollRowRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -el.clientWidth : el.clientWidth, behavior: 'smooth' });
  };

  const endDrag = () => {
    dragRef.current.active = false;
    scrollRowRef.current?.classList.remove('is-dragging');
  };

  const onScrollRowMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRowRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.classList.add('is-dragging');
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current.active) return;
      const el = scrollRowRef.current;
      if (!el) return;
      const dx = e.clientX - dragRef.current.startX;
      el.scrollLeft = dragRef.current.scrollLeft - dx;
    };
    const onUp = () => endDrag();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  useEffect(() => {
    const el = scrollRowRef.current;
    if (!el) return;
    const blockWheel = (e: WheelEvent) => e.preventDefault();
    el.addEventListener('wheel', blockWheel, { passive: false });
    return () => el.removeEventListener('wheel', blockWheel);
  }, []);

  useEffect(() => {
    const el = scrollRowRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Custom Software Development"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.92) 50%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">Development Services</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Custom Software<br /><span className="gradient-text">Development Services</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Looking for trusted custom software development services to bring your web-based projects to life? Look no further.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="showcase-image-card">
                <div className="showcase-image-inner">
                  <img
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=700"
                    alt="Development"
                  />
                  <div className="showcase-image-shine" aria-hidden="true" />
                </div>
                <div className="showcase-floating-badge bg-gradient-brand-blue">Innovation Driven</div>
              </div>
            </div>
            <div className="reveal-right">
              <span className="section-tag">Your Project | Our Proficiency</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                Customized Software <span className="gradient-text">Development Services</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                We are prepared to take on your project because we have experience with a wide range of languages and frameworks for front-end, back-end, and web design development.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Acknowledged as one of the leading B2B providers of custom application development, we offer an array of superior, personalized web development solutions that enable your company to prosper on the internet.
              </p>
              <button
                onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
                className="btn-primary"
              >
                Start Your Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-slate-50 relative">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}
        />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="section-tag">What We Offer</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
                Customized Software <span className="gradient-text">Development Services</span>
              </h2>
            </div>
            <div ref={ref} className="cards-scroll-wrap">
              <button
                type="button"
                onClick={() => scrollCards('left')}
                disabled={!canScrollLeft}
                aria-label="Show previous cards"
                className="cards-scroll-btn cards-scroll-btn-left"
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>

              <div
                ref={scrollRowRef}
                className="cards-scroll-row"
                onMouseDown={onScrollRowMouseDown}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
              >
                {services.map((s, i) => (
                  <div
                    key={s.title}
                    className={`reveal service-card gradient-border service-card-scroll group ${isVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <span className="absolute top-6 right-6 text-[10px] font-black tracking-[0.2em] text-slate-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className={`brand-icon ${s.accent === 'blue' ? 'brand-icon-blue' : 'brand-icon-orange'}`}>
                      <s.icon size={22} />
                    </div>
                    <h3 className="font-black text-navy-800 text-base mb-2 pr-8 leading-snug">{s.title}</h3>
                    <p className={`text-xs font-bold mb-3 line-clamp-2 ${s.accent === 'blue' ? 'gradient-text-blue' : 'gradient-text'}`}>
                      {s.sub}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-6 flex-1">{s.desc}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollCards('right')}
                disabled={!canScrollRight}
                aria-label="Show next cards"
                className="cards-scroll-btn cards-scroll-btn-right"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>
            </div>
          </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Have Questions?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Custom Software Developments <span className="gradient-text">FAQs</span>
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${faqVisible ? 'visible' : ''} ${openFaq === i ? 'border-orange-400 shadow-md shadow-orange-100' : 'border-slate-200 hover:border-slate-300'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  className="w-full text-left flex items-center justify-between px-6 py-5 gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-orange-500 flex-shrink-0" />
                    <span className="font-bold text-navy-800 text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={16} className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-orange-500' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 text-sm leading-relaxed pl-7">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-6">
            Schedule Your Appointment Now And Let Us Take Care Of The Rest!
          </h2>
          <button
            onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
            className="btn-primary"
          >
            Request Demo <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
