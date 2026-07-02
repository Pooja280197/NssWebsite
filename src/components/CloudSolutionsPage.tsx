import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Cloud, Map, Database, Server, Eye, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const strategySteps = [
  { icon: Map, color: '#29ABE2', title: 'Strategic Evaluation and Road mapping', desc: 'We conduct a comprehensive evaluation of your existing infrastructure, applications, and data culminating in a well-defined roadmap for your transition to the cloud. Our Cloud migration strategy in cloud computing considers your unique needs, compliance prerequisites, and cost factors to craft a strategy that optimally leverages cloud technology.' },
  { icon: Cloud, color: '#F7941D', title: 'Optimal Cloud Platform Selection', desc: 'Given the array of google cloud platform services, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), we guide you in selecting the most fitting platform, considering your requirements, budget constraints, and scalability aspirations.' },
  { icon: Database, color: '#29ABE2', title: 'Seamless Data Migration and Integration', desc: 'Our team of experts orchestrates a secure and frictionless migration of your data and applications to the cloud, prioritising minimal downtime and data integrity preservation. Additionally, we provide support in integrating your existing systems with cloud services to ensure streamlined and uninterrupted operations.' },
];

const trustPoints = [
  { icon: Server, color: '#29ABE2', title: 'We are Responsible', desc: 'We implement robust security measures to safeguard your data and applications, including data encryption, access controls, and regular security audits. We help you comply with industry regulations and standards, ensuring your cloud environment meets the necessary compliance requirements.' },
  { icon: RefreshCw, color: '#F7941D', title: 'We Handle Efficiently', desc: 'Our experts deploy and configure your cloud storage solutions, leveraging automation and DevOps principles to streamline the process and minimize manual intervention.' },
  { icon: Eye, color: '#29ABE2', title: 'We Monitor 24/7', desc: 'We proactively monitor your cloud environment, ensuring the availability, performance, and security of your systems. Our dedicated support team is available round-the-clock to address any concerns or incidents promptly.' },
  { icon: Map, color: '#F7941D', title: 'We Understand Concerns', desc: 'We analyze your cloud usage and expenses, identify cost-saving opportunities, and implement optimization strategies to help you achieve the best return on investment (ROI) from your cloud resources.' },
  { icon: RefreshCw, color: '#29ABE2', title: 'We are Continuous Learner', desc: "We stay up-to-date with the latest cloud technologies and trends, providing best cloud hosting recommendations on how to leverage new features and services to enhance your business operations. We are committed to delivering reliability." },
];

const faqs = [
  { q: 'What Cloud Platforms do you Support?', a: 'We provide expert services across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We help you choose the right platform based on your technical requirements, budget, and business goals.' },
  { q: 'What Cloud Migration Services do you offer?', a: 'We offer end-to-end cloud migration services including assessment, planning, data migration, application migration, testing, and go-live support. We ensure minimal downtime and data integrity throughout the migration process.' },
  { q: 'How can you Help us Optimize our Cloud Costs?', a: 'We conduct thorough cloud cost analysis, identify waste and over-provisioning, implement auto-scaling, reserved instance planning, and right-sizing recommendations. Clients typically see 20–40% cost reduction after our optimization engagement.' },
];

interface Props { onClose: () => void; }

export default function CloudSolutionsPage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: trustRef, isVisible: trustVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Cloud Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.92) 55%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">Cloud & Infrastructure</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Cloud Solutions <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Cloud power unlocked! We design, implement & manage secure, scalable cloud solutions that boost your productivity & cost-efficiency. Expert support keeps your environment running smoothly, so you can focus on growth.
          </p>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Our Approach</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Cloud Solutions <span className="gradient-text">Strategy!</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto mt-5 leading-relaxed">
              Believe in us! Our talented teams of experts are ever-ready to help you and work closely to create a comprehensive and multi-dimensional cloud migration strategy that line up with your business perspective.
            </p>
          </div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {strategySteps.map((s, i) => (
              <div
                key={s.title}
                className={`reveal service-card gradient-border ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
                >
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You Should Trust Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <span className="section-tag">Why Trust Us</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                You Should <span className="gradient-text">Trust Us!</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Why trust us? Because we are ever-ready to mechanize with the most interesting technologies in the world that turns out to be the most interesting with time. The reason behind is the continuous learning we have opted for and keeping ourselves updated with the trending tech world.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our best cloud hosting for WordPress includes cloud infrastructure services including architecture design, implementation and management to ensure smooth and errorless performance, security at peak and derive cost-efficiency.
              </p>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Cloud team"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={trustRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((t, i) => (
              <div
                key={t.title}
                className={`reveal rounded-3xl p-7 border group hover:-translate-y-2 transition-all duration-300 ${trustVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 90}ms`, borderColor: `${t.color}20`, background: `${t.color}05` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}BB)` }}
                >
                  <t.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-base mb-2">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
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
              Cloud Solutions <span className="gradient-text">FAQs</span>
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
