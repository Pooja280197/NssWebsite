import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Users, Zap, DollarSign, Target, Shield, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const whyChoose = [
  { icon: TrendingUp, color: '#29ABE2', title: 'Flexibility and Scalability', sub: 'Adapt Quickly to Changing Demands', desc: 'Easily scale your workforce up or down to meet project requirements, ensuring optimal resource allocation without long-term commitments.' },
  { icon: Target, color: '#F7941D', title: 'Access to Specialized Expertise', sub: 'Get the Best in the Industry', desc: 'Gain immediate access to top-tier professionals with specialized skills. No extensive training required — just the expertise you need, when you need it.' },
  { icon: Shield, color: '#29ABE2', title: 'Reduced Hiring Risks', sub: 'Minimize Your Recruitment Risks', desc: 'Alleviate the pressures of hiring, onboarding, and managing employees. With NSS Staff Augmentation, bring in temporary experts without the long-term obligations.' },
  { icon: Users, color: '#F7941D', title: 'Prevent Burnout', sub: 'Maintain Team Well-being', desc: 'Distribute workload effectively by augmenting your staff, preventing burnout, and keeping your core team focused and motivated.' },
  { icon: Zap, color: '#29ABE2', title: 'Speedy Resource Deployment', sub: 'Stay Ahead with Rapid Deployment', desc: 'Fill skills gaps or address resource shortages quickly, ensuring your projects stay on track and meet deadlines.' },
  { icon: DollarSign, color: '#F7941D', title: 'Cost-Effective Solutions', sub: 'Optimize Your Budget', desc: "Avoid the full-time employment costs. Scale your team on-demand, managing your budget more effectively while still accessing the expertise you need." },
  { icon: Target, color: '#29ABE2', title: 'Enhance Strategic Focus', sub: 'Focus on What Matters Most', desc: 'Outsource specialized tasks to our experts, allowing your in-house team to concentrate on core business activities and strategic growth.' },
];

const roles = [
  'DevOps Engineers', 'Data Scientists', 'Software Developers', 'Cloud Specialists',
  'QA Engineers', 'UI/UX Designers', 'Business Analysts', 'Project Managers',
  'Cybersecurity Experts', 'Mobile App Developers', 'Full Stack Developers', 'ML Engineers',
];

const faqs = [
  { q: 'What is the Recruitment Process for Finding Qualified Candidates?', a: 'We conduct a rigorous multi-step screening process including technical assessments, cultural fit interviews, and background verification. Our database of pre-vetted professionals means we can place the right candidate in days, not weeks.' },
  { q: 'What IT Roles Can You Fill through Staff Augmentation', a: 'We cover a wide range of IT roles including software developers, DevOps engineers, data scientists, cloud architects, QA engineers, UI/UX designers, business analysts, project managers, and cybersecurity specialists across all experience levels.' },
  { q: 'What Are the Benefits of Using Staff Augmentation Compared to Hiring Directly', a: 'Staff augmentation offers significant advantages: no recruitment overhead, no long-term employment liabilities, immediate access to specialized skills, flexible scaling, and reduced onboarding time. You get the expertise without the full-time commitment.' },
];

interface Props { onClose: () => void; }

export default function StaffAugmentationPage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Staff Augmentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.92) 55%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">Talent Solutions</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Unlock the Power of Expertise<br />with <span className="gradient-text">NSS Staff Augmentation</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Quickly scale your team with skilled professionals tailored to your business needs. Get the right talent, when you need it.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Our Approach"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
            <div className="reveal-right">
              <span className="section-tag">Our Approach</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                Our Approach Is Straightforward <span className="gradient-text">And Powerful</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Need skilled professionals, now or for the long term? NSS Staff Augmentation connects you with experienced, diverse talent to boost your team and agility. Our rigorous selection ensures a perfect fit, driving productivity and innovation without long-term hiring commitments.
              </p>
              <button
                onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
                className="btn-primary"
              >
                Find Your Talent <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <span className="section-tag">Recruitment Process</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                Streamlined Recruitment For <span className="gradient-text">Quality Results</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We carefully vet candidates to match your specific needs. From technical screenings to cultural fit, our process ensures that you get the right professionals for your projects.
              </p>
              <div className="space-y-3">
                {['Requirement analysis & job profiling', 'Technical screening & skills assessment', 'Cultural fit interviews', 'Background & reference verification', 'Onboarding & integration support'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#29ABE2, #1B8FC5' : '#F7941D, #E07B0A'})` }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Recruitment"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Fill */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="IT Roles"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
            <div className="reveal-right">
              <span className="section-tag">Roles We Fill</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                Comprehensive IT <span className="gradient-text">Staffing Solutions</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Whether you need DevOps engineers, data scientists, software developers, or cloud specialists, we have the talent to fill a wide range of IT roles.
              </p>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, i) => (
                  <span
                    key={role}
                    className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{
                      background: i % 2 === 0 ? 'rgba(41,171,226,0.1)' : 'rgba(247,148,29,0.1)',
                      color: i % 2 === 0 ? '#29ABE2' : '#F7941D',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(41,171,226,0.25)' : 'rgba(247,148,29,0.25)'}`,
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Why NSS?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Why Choose <span className="gradient-text">Staff Augmentation?</span>
            </h2>
          </div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((w, i) => (
              <div
                key={w.title}
                className={`reveal service-card gradient-border group ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `linear-gradient(135deg, ${w.color}, ${w.color}BB)` }}
                >
                  <w.icon size={20} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-sm mb-1">{w.title}</h3>
                <p className="text-xs font-bold mb-2" style={{ color: w.color }}>{w.sub}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
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
              Staff Augmentation <span className="gradient-text">FAQs</span>
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
