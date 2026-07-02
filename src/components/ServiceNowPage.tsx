import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Settings, Layers, Monitor, Users, Headphones, Zap } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  { icon: Settings, color: '#29ABE2', title: 'ServiceNow Implementation', desc: 'We are experts in deploying ServiceNow, tailoring it to your organization\'s unique requirements. Our implementation ensures a smooth transition to ServiceNow, aligning it with your business needs.' },
  { icon: Layers, color: '#F7941D', title: 'ServiceNow Customization', desc: 'Customize your ServiceNow instance to match your specific processes and workflows. We help you design forms, workflows, and automations that streamline your service management.' },
  { icon: Monitor, color: '#29ABE2', title: 'IT Service Management (ITSM)', desc: 'Streamline IT service operations with ServiceNow ITSM. We optimize incident, problem, change, and asset management to improve IT service delivery and customer satisfaction.' },
  { icon: Settings, color: '#F7941D', title: 'IT Operations Management (ITOM)', desc: 'Gain real-time visibility into your IT infrastructure with ServiceNow ITOM. We offer solutions for event management, and orchestration to enhance operational efficiency.' },
  { icon: Users, color: '#29ABE2', title: 'Customer Service Management (CSM)', desc: 'Elevate customer service with ServiceNow CSM. We help you create a seamless customer experience, from case management to self-service portals.' },
  { icon: Headphones, color: '#F7941D', title: 'HR Service Delivery', desc: 'Enhance your HR service delivery processes with ServiceNow. We provide solutions for onboarding, benefits administration, and employee self-service.' },
];

const technologies = [
  { color: '#29ABE2', title: 'ServiceNow Platform', desc: 'As a ServiceNow partner, we connect the full capabilities of the ServiceNow platform, including IT Service Management, IT Operations Management, and Customer Service Management modules.' },
  { color: '#F7941D', title: 'Custom Application Development', desc: "Tailor ServiceNow to your unique needs through custom application development using ServiceNow's application framework." },
  { color: '#29ABE2', title: 'Integration Capabilities', desc: 'We ensure seamless integration with other systems and applications to create a unified service environment.' },
  { color: '#F7941D', title: 'Automation and Orchestration', desc: "Utilize ServiceNow's automation and orchestration capabilities to streamline service processes and improve efficiency." },
  { color: '#29ABE2', title: 'Mitigation of Burnout', desc: 'Avoid overburdening your in-house team by distributing work to augmented staff, preventing employee burnout and maintaining a healthier work-life balance.' },
];

const faqs = [
  { q: 'What ServiceNow Solutions do you offer?', a: 'We provide a full range of ServiceNow solutions including ITSM, ITOM, CSM, HR Service Delivery, and custom application development. We handle everything from initial implementation and configuration to ongoing managed services and optimization.' },
  { q: 'Which Industries does ServiceNow offer?', a: 'ServiceNow serves virtually every industry — including financial services, healthcare, government, manufacturing, retail, and technology. Our team has experience implementing ServiceNow across these sectors, understanding each industry\'s unique compliance and workflow requirements.' },
  { q: 'What are the Best Practices for Optimizing my ServiceNow Instance?', a: 'Key best practices include keeping your instance on a supported version, following out-of-the-box configurations before customizing, implementing proper change management, using Update Sets for migrations, regular performance health checks, and end-user training programs.' },
];

interface Props { onClose: () => void; }

export default function ServiceNowPage({ onClose }: Props) {
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
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="ServiceNow"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.93) 55%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">ITSM & ITOM</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Service <span className="gradient-text">Now</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Businesses today need efficient service delivery. NSS offers ServiceNow solutions to streamline your processes, empowering you to deliver exceptional service to both customers and employees.
          </p>
        </div>
      </section>

      {/* Services split hero */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="reveal-left space-y-5">
              {services.slice(0, 3).map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-2xl p-6 bg-white border border-slate-100 hover:border-[#29ABE2] hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-black text-navy-800 text-base mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="ServiceNow Platform"
                  className="w-full h-[460px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* Bottom 3 cards */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.slice(3).map((s, i) => (
              <div
                key={s.title}
                className={`reveal service-card gradient-border group ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
                >
                  <s.icon size={20} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-sm mb-2">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Our Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              <span className="gradient-text">Technologies</span>
            </h2>
          </div>
          <div ref={techRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech, i) => (
              <div
                key={tech.title}
                className={`reveal rounded-2xl p-6 border group hover:-translate-y-1 transition-all duration-300 ${techVisible ? 'visible' : ''} ${i === technologies.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${i * 90}ms`, borderColor: `${tech.color}22`, background: `${tech.color}05` }}
              >
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: tech.color }} />
                <h3 className="font-black text-navy-800 text-base mb-2">{tech.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NSS for ServiceNow */}
      <section className="py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-black text-white">
              Why NSS for <span className="gradient-text">ServiceNow?</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Certified Partner', 'ITSM Experts', 'Custom Development', '24/7 Managed Services'].map((item, i) => (
              <div key={item} className="stat-card flex flex-col items-center text-center gap-3 group hover:-translate-y-1 cursor-default">
                <Zap size={20} style={{ color: i % 2 === 0 ? '#29ABE2' : '#F7941D' }} className="transition-transform group-hover:scale-110" />
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
              Service Now <span className="gradient-text">FAQs</span>
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
