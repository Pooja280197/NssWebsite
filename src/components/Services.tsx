import { Code2, Globe, BarChart3, GitBranch, Users, Smartphone, UserPlus, Headphones, Cloud, Brain, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  { num: '01', icon: Code2, title: 'Custom Software Development', desc: 'Productivity showcases and clever solutions that integrate and automate your core business operations seamlessly.', accent: 'blue' as const, href: 'https://www.nagarsoftwaresolution.com/custom-software-development-services' },
  { num: '02', icon: Globe, title: 'Web Development & Design', desc: 'Our team of web wizards builds impactful, functional websites tailored to your vision and business objectives.', accent: 'orange' as const, href: 'https://www.nagarsoftwaresolution.com/web-development-and-design-services' },
  { num: '03', icon: BarChart3, title: 'Data Science & Analytics', desc: 'Our data scientists unlock innovation, insights, and growth for your business through advanced analytics.', accent: 'blue' as const, href: 'https://www.nagarsoftwaresolution.com/data-science-consulting-services' },
  { num: '04', icon: GitBranch, title: 'DevOps Development', desc: 'Streamline development, testing, and deployment, accelerating time-to-market with modern DevOps pipelines.', accent: 'orange' as const, href: 'https://www.nagarsoftwaresolution.com/devops-development-services' },
  { num: '05', icon: Users, title: 'CRM / Salesforce', desc: "Salesforce is the world's leading CRM platform. We help all sizes of companies streamline sales operations.", accent: 'blue' as const, href: 'https://www.nagarsoftwaresolution.com/crm-software-development-software' },
  { num: '06', icon: Smartphone, title: 'Enterprise Mobility', desc: 'Stay agile and connected. We power your workforce with secure, cutting-edge Enterprise Mobility solutions.', accent: 'orange' as const, href: 'https://www.nagarsoftwaresolution.com/enterprise-mobility-services' },
  { num: '07', icon: UserPlus, title: 'Staff Augmentation', desc: 'NSS Staff Augmentation connects you with skilled professionals to power your business growth immediately.', accent: 'blue' as const, href: 'https://www.nagarsoftwaresolution.com/staff-augmentation-services' },
  { num: '08', icon: Headphones, title: 'ServiceNow', desc: 'Businesses need efficient service delivery. NSS offers comprehensive ServiceNow solutions for enterprises.', accent: 'orange' as const, href: 'https://www.nagarsoftwaresolution.com/service-now' },
  { num: '09', icon: Cloud, title: 'Cloud Solutions', desc: 'We design, implement & manage secure, scalable cloud solutions that boost productivity & cost-efficiency.', accent: 'blue' as const, href: 'https://www.nagarsoftwaresolution.com/cloud-solutions-services' },
  { num: '10', icon: Brain, title: 'AI & Machine Learning', desc: 'Leverage AI & ML to automate operations, uncover insights, and unlock smarter business outcomes at scale.', accent: 'orange' as const, href: 'https://www.nagarsoftwaresolution.com/' },
];

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver(0.04);

  return (
    <section id="services" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41,171,226,0.04) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover your brighter digital future with NSS. Our solutions address your challenges, simplifying your operations and driving tangible business growth.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((s, i) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`service-card service-card-premium reveal group ${isVisible ? 'visible' : ''} ${s.accent === 'blue' ? 'service-card-blue' : 'service-card-orange'}`}
              style={{ transitionDelay: `${i * 55}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className={`text-[11px] font-black tabular-nums tracking-wider ${s.accent === 'blue' ? 'text-sky-400/70' : 'text-orange-400/70'}`}
                >
                  {s.num}
                </span>
                <div className={`brand-icon w-11 h-11 rounded-xl ${s.accent === 'blue' ? 'brand-icon-blue' : 'brand-icon-orange'}`}>
                  <s.icon size={20} />
                </div>
              </div>

              <h3 className="font-black text-navy-800 text-[15px] leading-snug mb-3 transition-colors duration-200 group-hover:text-slate-900">
                {s.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">{s.desc}</p>

              <div
                className={`inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 group-hover:gap-2.5 ${s.accent === 'blue' ? 'gradient-text-blue' : 'gradient-text'}`}
              >
                Learn More
                <div
                  className={`w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${s.accent === 'blue' ? 'bg-sky-500/10' : 'bg-orange-500/10'}`}
                >
                  <ArrowUpRight size={11} className={s.accent === 'blue' ? 'text-blue-600' : 'text-orange-600'} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
