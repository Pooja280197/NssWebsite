import { ArrowLeft, CheckCircle2, Users, Lightbulb, Shield, Target, TrendingUp, Zap, Code2, Cloud, BarChart3, Award, Heart, Globe, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const beliefs = [
  { icon: Users, title: 'Expert Team', desc: 'Our NSS family boasts talented professionals, each contributing unique skills to our diverse portfolio.' },
  { icon: TrendingUp, title: 'Rich Experience', desc: 'With an average of 8+ years of experience, our team brings a wealth of industry knowledge, guaranteeing unmatched expertise.' },
  { icon: Heart, title: 'Client Success', desc: "Our success is best reflected in our satisfied clients. With 200+ happy clients, we've proven our ability to deliver results." },
  { icon: Shield, title: 'Quality & Security', desc: 'We adhere to the highest quality standards with rigorous QA processes and robust cybersecurity practices.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We continuously explore new tools, frameworks, and technologies to keep our clients ahead of the curve.' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving clients across 20+ countries, we understand diverse market needs and deliver solutions that scale globally.' },
];

const whyUs = [
  { icon: Code2, color: '#29ABE2', title: '100% Client Satisfaction', desc: 'We measure success by your success. Every project is treated with dedicated attention to exceed expectations.' },
  { icon: Zap, color: '#F7941D', title: 'Tech DNA', desc: 'Technology is at our core. We are built by technologists, for businesses that want to harness the power of innovation.' },
  { icon: Users, color: '#29ABE2', title: 'Expert Team', desc: 'Skilled professionals with expertise across various technologies and domains ensure your project gets top-tier talent.' },
  { icon: Target, color: '#F7941D', title: 'Collaborative & Transparent', desc: 'Two-way conversations with our clients help us draft the perfect plan for every project, step by step.' },
  { icon: Shield, color: '#29ABE2', title: 'Quality & Security', desc: 'Rigorous QA processes and industry-best cybersecurity practices protect your data and ensure high-quality delivery.' },
  { icon: TrendingUp, color: '#F7941D', title: 'Velocity', desc: 'We move fast without breaking things. Agile delivery cycles and dedicated project managers keep projects on track.' },
];

const projectSteps = [
  { step: '01', title: 'Understand', desc: 'NSS believes in two-way conversations. We understand the client\'s demand and create a thorough plan based on it.' },
  { step: '02', title: 'Plan & Draft', desc: 'A detailed solution document is prepared and shared with the client for suggestion or approval before any work begins.' },
  { step: '03', title: 'Build', desc: 'Once approved, we initiate development with our expert team. Daily updates are shared by the assigned project manager.' },
  { step: '04', title: 'Deliver', desc: 'After completing requirements, deliverables are handed to the client with full documentation and post-launch support.' },
];

const stats = [
  { value: '98%', label: 'Timely Delivery' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Leadership' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '15+', label: 'Industries Served' },
  { value: '95%', label: 'Client Retention' },
];

interface AboutPageProps {
  onClose: () => void;
}

export default function AboutPage({ onClose }: AboutPageProps) {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver(0.1);
  const { ref: beliefRef, isVisible: beliefVisible } = useIntersectionObserver(0.05);
  const { ref: whyRef, isVisible: whyVisible } = useIntersectionObserver(0.05);
  const { ref: processRef, isVisible: processVisible } = useIntersectionObserver(0.08);
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-navy-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-30" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,171,226,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, rgba(6,13,24,0.6), transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div ref={heroRef} className={`reveal ${heroVisible ? 'visible' : ''}`}>
            <span className="section-tag-dark mb-5">Who We Are</span>
            <h1 className="text-5xl lg:text-7xl font-black text-white mt-5 mb-6 leading-tight">
              About <span className="gradient-text">Nagar Software</span><br />Solutions
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl leading-relaxed mb-10">
              Your trusted partner in IT solutions and innovation. A digital transformation partner structured to deliver growth and innovation through next-gen IT services, consulting, and software solutions.
            </p>
            <blockquote className="border-l-4 pl-6 italic text-slate-300 text-lg max-w-2xl" style={{ borderColor: '#F7941D' }}>
              "The Goal is to Turn Data into Information, and Information into Insights."
              <footer className="text-slate-500 text-sm not-italic mt-2">— Carly Fiorina, Former CEO of Hewlett-Packard</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="section-tag">Our Mission</span>
              <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-5 mb-6 leading-tight">
                Digital <span className="gradient-text">Transformation</span> at Scale
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Nagar Software Solution is a digital or virtual platform that transforms the exceptional visions of either small businesses or large enterprises into a grand reality.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                We are the Data Developers, Data Visualizers, Data Engineers, Big Data Innovators, and Big Goal-achievers of all our beloved clients. NSS is enthusiastic and ever-ready to mechanize with the most disruptive yet interesting technologies in the market.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                From Big Data and Analytics, Data Science, AI, to Blockchain Technology — we provide a wide portfolio of consulting, resource outsourcing, and next-gen IT services.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'IT Consulting', icon: Target, color: '#29ABE2' },
                  { label: 'Cloud Services', icon: Cloud, color: '#F7941D' },
                  { label: 'Digital Transformation', icon: BarChart3, color: '#29ABE2' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-2xl border border-slate-100 hover:border-[#29ABE2] hover:bg-blue-50/30 transition-all duration-300 group">
                    <item.icon size={22} className="mb-2 transition-transform group-hover:scale-110" style={{ color: item.color }} />
                    <span className="text-xs font-bold text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="NSS Team at work"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,13,24,0.3) 0%, transparent 50%)' }} />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-5 shadow-2xl" style={{ background: 'linear-gradient(135deg, #0D1B2A, #152538)', border: '1px solid rgba(41,171,226,0.2)' }}>
                  <div className="text-4xl font-black" style={{ color: '#29ABE2' }}>10<span style={{ color: '#F7941D' }}>+</span></div>
                  <div className="text-slate-400 text-xs font-semibold mt-1">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats counter ── */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Fueling <span className="gradient-text">Growth and Success</span>
            </h2>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`stat-card reveal text-center ${statsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl font-black mb-1" style={{ color: i % 2 === 0 ? '#29ABE2' : '#F7941D' }}>{s.value}</div>
                <div className="text-slate-400 text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── We Believe In ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Our Culture</span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5">
              We <span className="gradient-text">Believe In</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              NSS aims to deliver Big Data Solutions through transparency, clean code, continuous learning, and adaptation — our prime values that drive everything we build.
            </p>
          </div>
          <div ref={beliefRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((b, i) => (
              <div
                key={b.title}
                className={`reveal service-card gradient-border group ${beliefVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#29ABE2' : '#F7941D'}, ${i % 2 === 0 ? '#1B8FC5' : '#E07B0A'})` }}
                >
                  <b.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-base mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose NSS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Why NSS?</span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5">
              Why Choose <span className="gradient-text">NSS?</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Tap into our team of skilled professionals with expertise across various technologies. From developers and designers to experienced project managers, we deliver outstanding results.
            </p>
          </div>
          <div ref={whyRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className={`reveal rounded-3xl p-7 border group hover:-translate-y-2 transition-all duration-300 ${whyVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 90}ms`, borderColor: `${item.color}18`, background: `${item.color}04` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}BB)` }}
                >
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client-Centric Approach ── */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="section-tag-dark">Our Approach</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mt-5 mb-6 leading-tight">
                <span className="gradient-text">Client-Centric</span> Approach
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-5">
                Our clients are at the heart of everything we do. We believe in building strong and lasting partnerships based on trust, transparency, and mutual success.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                We take the time to understand our clients' goals, challenges, and unique requirements, allowing us to deliver tailor-made solutions that address their specific needs. Our client-centric approach ensures that we consistently exceed expectations and deliver exceptional value.
              </p>
              <div className="space-y-3">
                {['Deep understanding of client business goals', 'Transparent communication at every stage', 'Dedicated project manager for each engagement', 'Post-launch support and continuous improvement'].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: i % 2 === 0 ? '#29ABE2' : '#F7941D' }} />
                    <span className="text-slate-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Client meeting"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Management Strategy ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5">
              Project Management <span className="gradient-text">Strategy</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our prime tools include Jira, Asana, Slack, and Redmine for smooth implementation of projects and fulfilling client demands.
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectSteps.map((step, i) => (
              <div
                key={step.step}
                className={`reveal relative group ${processVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Connector line */}
                {i < projectSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 -z-10"
                    style={{ background: 'linear-gradient(90deg, #29ABE2, #F7941D)' }}
                  />
                )}
                <div className="bg-slate-50 rounded-3xl p-7 border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 font-black text-lg text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#29ABE2, #1B8FC5' : '#F7941D, #E07B0A'})` }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-black text-navy-800 text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Associates & Partners ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Ecosystem</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Associates & <span className="gradient-text">Partners</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['ZMC Partners', 'Zee Wee', 'Techlene', 'MindCrew', 'FloorWalk', 'ZingMind', 'Chwogle', 'InnoTech', 'Salesforce Partner', 'ServiceNow Partner', 'AWS Partner'].map((partner, i) => (
              <div
                key={partner}
                className="px-6 py-3.5 rounded-2xl border text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default"
                style={{ borderColor: i % 2 === 0 ? 'rgba(41,171,226,0.25)' : 'rgba(247,148,29,0.25)', color: i % 2 === 0 ? '#29ABE2' : '#F7941D', background: i % 2 === 0 ? 'rgba(41,171,226,0.04)' : 'rgba(247,148,29,0.04)' }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Ready to Work <span className="gradient-text">With Us?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10">Let's build something great together. Get a free consultation from our expert team today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="btn-primary text-base"
            >
              Get Free Consultation <ArrowRight size={18} />
            </button>
            <button onClick={onClose} className="btn-ghost-dark text-base">
              <ArrowLeft size={16} /> Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
