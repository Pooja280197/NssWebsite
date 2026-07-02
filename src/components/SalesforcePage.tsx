import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Cloud, Users, BarChart3, Smartphone, Zap, Globe } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const salesforceClouds = [
  { icon: BarChart3, color: '#29ABE2', title: 'Sales Cloud', desc: 'Elevate your sales performance with Salesforce Sales Cloud. We help you manage leads, opportunities, and customer accounts, and enable your sales team to work more efficiently and collaboratively.' },
  { icon: Users, color: '#F7941D', title: 'Service Cloud', desc: 'Deliver exceptional customer service with Salesforce Service Cloud. Our solutions encompass case management, knowledge bases, and omni-channel support to ensure customer satisfaction.' },
  { icon: Zap, color: '#29ABE2', title: 'Marketing Cloud', desc: 'Unleash the power of marketing automation with Salesforce Marketing Cloud. Our experts can help you create personalized customer journeys, send targeted campaigns, and track marketing performance.' },
  { icon: Globe, color: '#F7941D', title: 'Commerce Cloud', desc: 'Drive e-commerce success with Salesforce Commerce Cloud. We enable you to build and manage online stores that deliver seamless, personalized shopping experiences.' },
  { icon: Users, color: '#29ABE2', title: 'Community Cloud', desc: 'Foster collaboration and engagement with Salesforce Community Cloud. We help you build online communities for your customers, partners, and employees to interact and share knowledge.' },
  { icon: Cloud, color: '#F7941D', title: 'Custom App Development', desc: 'Tailor Salesforce to your specific needs with custom application development. We design and build apps that align with your business processes.' },
];

const technologies = [
  { icon: Cloud, color: '#29ABE2', title: 'Salesforce Platform', desc: 'We harness the full capabilities of the Salesforce platform, including Lightning, Apex, Visualforce, and Heroku, to design and deploy tailored solutions.' },
  { icon: Zap, color: '#F7941D', title: 'Integration Capabilities', desc: 'We ensure seamless integration with other systems, enabling a unified and connected ecosystem.' },
  { icon: BarChart3, color: '#29ABE2', title: 'AI and Analytics', desc: 'Leverage Salesforce Einstein for AI-driven insights, predictive analytics, and chatbots that enhance customer engagement and decision-making.' },
  { icon: Smartphone, color: '#F7941D', title: 'Mobile App Development', desc: 'Extend Salesforce functionality to mobile devices with custom app development, ensuring accessibility and convenience for your team.' },
];

const faqs = [
  { q: 'What Salesforce Services do you offer?', a: 'We offer end-to-end Salesforce services including implementation, customization, integration, migration, managed services, and training. We work across Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, and custom AppExchange development.' },
  { q: 'Do you have Certified Salesforce Developers on your team?', a: 'Yes. Our team includes Salesforce Certified Administrators, Developers, Consultants, and Architects. Our certifications span multiple Salesforce products and disciplines to ensure expert delivery on every engagement.' },
  { q: 'What are the Benefits of using a Salesforce Partner for our Projects?', a: 'Working with a certified Salesforce partner gives you access to specialized expertise, proven delivery methodologies, and direct access to Salesforce resources. You benefit from faster implementation, reduced risk, and a solution built to Salesforce best practices.' },
];

interface Props { onClose: () => void; }

export default function SalesforcePage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: techRef, isVisible: techVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Salesforce CRM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.92) 55%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">CRM Solutions</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            CRM Development <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Thrive in today's competitive landscape with NSS's powerful Salesforce solutions. Supercharge customer relationships, streamline sales & service, and unlock new heights for your business.
          </p>
        </div>
      </section>

      {/* Salesforce Automation */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag-dark">Products</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-4">
              Salesforce <span className="gradient-text">Automation Software</span>
            </h2>
          </div>
          {/* Top 3 featured */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-5">
              {salesforceClouds.slice(0, 3).map((cloud, i) => (
                <div
                  key={cloud.title}
                  className="reveal-left rounded-2xl p-6 flex items-start gap-5"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${cloud.color}, ${cloud.color}BB)` }}
                  >
                    <cloud.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base mb-1">{cloud.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{cloud.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Salesforce Dashboard"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* Bottom 3 */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {salesforceClouds.slice(3).map((cloud, i) => (
              <div
                key={cloud.title}
                className={`reveal rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms`, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${cloud.color}, ${cloud.color}BB)` }}
                >
                  <cloud.icon size={18} className="text-white" />
                </div>
                <h3 className="font-black text-white text-sm mb-2">{cloud.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{cloud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Follow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Salesforce Technologies"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
            <div className="reveal-right">
              <span className="section-tag">Tech Stack</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-8 leading-snug">
                Technologies <span className="gradient-text">We Follow</span>
              </h2>
              <div ref={techRef} className="space-y-5">
                {technologies.map((tech, i) => (
                  <div
                    key={tech.title}
                    className={`reveal flex items-start gap-4 ${techVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ background: `linear-gradient(135deg, ${tech.color}, ${tech.color}BB)` }}
                    >
                      <tech.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-navy-800 text-sm mb-1">{tech.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Have Questions?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              CRM Development Service <span className="gradient-text">FAQs</span>
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${faqVisible ? 'visible' : ''} ${openFaq === i ? 'border-[#F7941D] shadow-md' : 'border-slate-200'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button className="w-full text-left flex items-center justify-between px-6 py-5 gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: '#F7941D', flexShrink: 0 }} />
                    <span className="font-bold text-navy-800 text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={16} className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#F7941D]' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-5"><p className="text-slate-500 text-sm leading-relaxed pl-7">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-6">Schedule Your Appointment Now And Let Us Take Care Of The Rest!</h2>
          <button onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }} className="btn-primary">
            Request Demo <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
