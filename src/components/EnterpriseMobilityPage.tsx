import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Smartphone, Shield, GitMerge, Settings, Headphones, Brain } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'At NSS, we excel in crafting custom mobility applications tailored to your unique business needs. Whether its for iOS, Android, or cross-platform, we ensure your employees have access to the tools they need, anytime, anywhere.',
    color: '#29ABE2',
    gradient: 'linear-gradient(135deg, #29ABE2, #1B8FC5)',
  },
  {
    icon: Settings,
    title: 'Mobile Device Management',
    desc: 'Simplify device management, security, and control across your organisation. Our MDM solutions ensure that your devices are secure, updated, and compliant with your company\'s policies.',
    color: '#F7941D',
    gradient: 'linear-gradient(135deg, #F7941D, #E07B0A)',
  },
  {
    icon: GitMerge,
    title: 'Enterprise Application Integration',
    desc: 'Seamlessly integrate existing systems and data sources into mobile applications to create a unified and efficient business ecosystem.',
    color: '#29ABE2',
    gradient: 'linear-gradient(135deg, #29ABE2, #1B8FC5)',
  },
  {
    icon: Shield,
    title: 'Security and Compliance',
    desc: 'We take data security and compliance seriously. Our solutions ensure that your corporate data remains secure and compliant with industry regulations.',
    color: '#F7941D',
    gradient: 'linear-gradient(135deg, #F7941D, #E07B0A)',
  },
  {
    icon: CheckCircle2,
    title: 'Enterprise Mobility Strategy',
    desc: 'Develop a comprehensive mobility strategy that aligns with your business objectives. NSS assists in roadmap planning, ROI analysis, and ensuring your mobility initiatives deliver tangible results.',
    color: '#29ABE2',
    gradient: 'linear-gradient(135deg, #29ABE2, #1B8FC5)',
  },
  {
    icon: Headphones,
    title: 'Support and Maintenance',
    desc: 'Our dedicated support team is available round the clock to address any issues or concerns, ensuring your mobile environment runs smoothly at all times.',
    color: '#F7941D',
    gradient: 'linear-gradient(135deg, #F7941D, #E07B0A)',
  },
];

const techBouquet = [
  {
    title: 'IoT Integration',
    desc: 'Leverage the Internet of Things (IoT) to connect devices, sensors, and data streams to enhance decision-making and streamline operations.',
    img: 'https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Blockchain Security',
    desc: 'Secure your mobile transactions and data with blockchain technology, ensuring data integrity and trust.',
    img: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'AI and Machine Learning',
    desc: 'Harness artificial intelligence and machine learning to provide predictive analytics, intelligent automation, and personalized user experiences.',
    img: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const faqs = [
  { q: 'How can Enterprise Mobility Improve my Employee Productivity and Collaboration?', a: 'Enterprise mobility empowers employees to access critical business tools and data from any device, anywhere. This drives real-time collaboration, faster decision-making, and streamlined workflows — resulting in measurable productivity gains across your organization.' },
  { q: 'What are the biggest security concerns with enterprise mobility, and how can I address them?', a: 'Key concerns include device theft, data breaches, and unsecured networks. NSS addresses these through MDM solutions, data encryption, multi-factor authentication, secure VPN access, and regular security audits to protect your corporate data.' },
];

interface Props { onClose: () => void; }

export default function EnterpriseMobilityPage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: techRef, isVisible: techVisible } = useIntersectionObserver(0.1);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Enterprise Mobility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.9) 50%, rgba(6,13,24,0.45) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">Mobility Solutions</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Enterprise <span className="gradient-text">Mobility</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Stay agile, stay connected with NSS. We power up your workforce with secure, cutting-edge Enterprise Mobility solutions, boosting productivity and unlocking growth. Let's navigate the evolving business world together, ethically and efficiently.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Our Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Our Services In Enterprise Mobility <span className="gradient-text">Includes</span>
            </h2>
          </div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal rounded-3xl p-7 group hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${i * 90}ms`,
                  background: s.gradient,
                }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-white/20 transition-transform group-hover:scale-110 duration-300">
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-white text-base mb-3">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Bouquet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Advanced Tech</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Technology <span className="gradient-text">Bouquet</span>
            </h2>
          </div>
          <div ref={techRef} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {techBouquet.map((tech, i) => (
              <div
                key={tech.title}
                className={`reveal group ${techVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="rounded-3xl overflow-hidden shadow-md mb-5 hover:-translate-y-1 transition-transform duration-300">
                  <img src={tech.img} alt={tech.title} className="w-full h-52 object-cover" />
                </div>
                <h3 className="font-black text-navy-800 text-base mb-2">{tech.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose NSS for mobility */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Why NSS for <span className="gradient-text">Enterprise Mobility?</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Cross-Platform', 'Secure by Design', 'MDM Solutions', 'IoT Ready', 'AI-Powered', '24/7 Support'].map((item, i) => (
              <div
                key={item}
                className="stat-card flex flex-col items-center text-center gap-3 group hover:-translate-y-1 cursor-default"
              >
                <Brain size={20} style={{ color: i % 2 === 0 ? '#29ABE2' : '#F7941D' }} className="transition-transform group-hover:scale-110" />
                <span className="text-white text-xs font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Have Questions?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Enterprise Mobility <span className="gradient-text">FAQs</span>
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
