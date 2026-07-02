import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Smartphone, Search, Monitor, Zap, Layers, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const strategies = [
  {
    num: '1',
    title: 'Multiplying Work Competence',
    desc: "Captivated by first sight! Our designers blend artistry with strategy to craft stunning websites that reflect your brand, all while collaborating closely with you. Let's build something beautiful, together.",
    color: '#29ABE2',
  },
  {
    num: '2',
    title: 'Personalized Web Development',
    desc: "We craft bespoke web solutions to meet your unique goals, using responsive design and seamless navigation for an exceptional user experience across all devices. Our team leverages cutting-edge tech for peak performance, security, and scalability.",
    color: '#F7941D',
  },
  {
    num: '3',
    title: 'Centrality of User Experience',
    desc: "Users first! We design for intuitive navigation, engaging interactions, and clear calls to action. Backed by research, we build beautiful, user-friendly websites that delight visitors at every click.",
    color: '#29ABE2',
  },
  {
    num: '4',
    title: 'Adaptability Across Devices',
    desc: "Your mobile users matter! Our design experts ensure your website shines on every screen, big or small. We meticulously craft and test responsive experiences, bringing your vision to life seamlessly across devices. Together, let's build a mobile-first future.",
    color: '#F7941D',
  },
  {
    num: '5',
    title: 'Search Engine Optimization (SEO) Integration',
    desc: "Built for search success, our websites fuse SEO best practices like clean code, fast loading, and optimized content & meta tags. Climb search rankings and attract organic traffic with our powerful web solutions.",
    color: '#29ABE2',
  },
  {
    num: '6',
    title: 'Continual Assistance and Sustenance',
    desc: "Tailored websites, exceptional experience. We craft unique web solutions to match your goals, using responsive design and smooth navigation for all devices. Our tech-savvy team ensures peak performance, security, and growth.",
    color: '#F7941D',
  },
  {
    num: '7',
    title: 'Enhanced UI/UX Emphasis',
    desc: "We obsess over UI/UX, crafting intuitive interfaces and engaging features for peak usability. Your website's success is our passion, driving us to deliver exceptional design that aligns with your goals, brand, and target audience.",
    color: '#29ABE2',
  },
];

const faqs = [
  { q: 'What types of Websites do you Develop?', a: 'We develop a wide range of websites including corporate websites, e-commerce platforms, portfolio sites, web applications, CMS-powered sites, and custom web portals tailored to your specific business needs.' },
  { q: 'What Content Management Systems (CMS) do you work with?', a: 'We work with popular CMS platforms like WordPress, Drupal, Joomla, and also build custom CMS solutions. We help you choose the right platform based on your content strategy and technical requirements.' },
  { q: 'How do you Handle Website Maintenance and Updates?', a: "We provide comprehensive website maintenance packages including regular updates, security patches, content updates, performance optimization, and 24/7 monitoring to ensure your site stays secure and up-to-date." },
];

interface Props { onClose: () => void; }

export default function WebDevPage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Web Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.92) 50%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">Design & Development</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Web Development<br /><span className="gradient-text">and Design Services</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Passionate about crafting unforgettable online experiences, our team of web wizards builds impactful, functional websites tailored to your vision. From sleek minimalism to powerful e-commerce, we bring your digital dreams to life.
          </p>
        </div>
      </section>

      {/* Strategy section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Our Approach</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Our Strategy To Transform Ideas Into{' '}
              <span className="gradient-text">Fascinating Reality!</span>
            </h2>
          </div>

          {/* Alternating steps */}
          <div ref={ref} className="space-y-8">
            {[
              [strategies[0], strategies[1]],
              [strategies[2], strategies[3]],
              [strategies[4], strategies[5]],
            ].map((pair, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pair.map((s, i) => {
                  const icons = [Monitor, Zap, Smartphone, Layers, Search, RefreshCw];
                  const Icon = icons[(rowIdx * 2 + i) % icons.length];
                  return (
                    <div
                      key={s.num}
                      className={`reveal service-card gradient-border flex items-start gap-5 ${isVisible ? 'visible' : ''}`}
                      style={{ transitionDelay: `${(rowIdx * 2 + i) * 80}ms` }}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-white text-lg shadow-md"
                        style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
                      >
                        {s.num}
                      </div>
                      <div>
                        <h3 className="font-black text-navy-800 text-base mb-2">{s.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
            {/* Last item centered */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div
                className={`reveal service-card gradient-border flex items-start gap-5 lg:col-start-1 ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: '560ms' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-white text-lg shadow-md"
                  style={{ background: 'linear-gradient(135deg, #29ABE2, #1B8FC5)' }}
                >
                  7
                </div>
                <div>
                  <h3 className="font-black text-navy-800 text-base mb-2">{strategies[6].title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{strategies[6].desc}</p>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="UI/UX"
                  className="w-full h-48 object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">What You Get</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Comprehensive <span className="gradient-text">Web Solutions</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Responsive Design', 'E-Commerce', 'CMS Integration', 'SEO Optimized', 'Progressive Web Apps', 'API Integration'].map((item, i) => (
              <div
                key={item}
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default"
                style={{ borderColor: i % 2 === 0 ? 'rgba(41,171,226,0.15)' : 'rgba(247,148,29,0.15)' }}
              >
                <CheckCircle2 size={20} className="mb-3 transition-transform group-hover:scale-110" style={{ color: i % 2 === 0 ? '#29ABE2' : '#F7941D' }} />
                <span className="text-xs font-bold text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Have Questions?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Web Development and Design <span className="gradient-text">FAQs</span>
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${faqVisible ? 'visible' : ''} ${openFaq === i ? 'border-[#F7941D] shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  className="w-full text-left flex items-center justify-between px-6 py-5 gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: '#F7941D', flexShrink: 0 }} />
                    <span className="font-bold text-navy-800 text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={16} className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#F7941D]' : ''}`} />
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
