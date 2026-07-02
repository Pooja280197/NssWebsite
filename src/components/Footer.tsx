import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const serviceLinks = [
  ['Custom Software Dev', 'https://www.nagarsoftwaresolution.com/custom-software-development-services'],
  ['Web Development & Design', 'https://www.nagarsoftwaresolution.com/web-development-and-design-services'],
  ['Data Science & Analytics', 'https://www.nagarsoftwaresolution.com/data-science-consulting-services'],
  ['DevOps Development', 'https://www.nagarsoftwaresolution.com/devops-development-services'],
  ['Cloud Solutions', 'https://www.nagarsoftwaresolution.com/cloud-solutions-services'],
  ['CRM / Salesforce', 'https://www.nagarsoftwaresolution.com/crm-software-development-software'],
];

const productLinks = [
  ['CleanPlan', 'https://www.nagarsoftwaresolution.com/cleanplan-product-for-workflow-management-platform'],
  ['Rexo ERP', 'https://www.nagarsoftwaresolution.com/rexo-erp-software-solutions'],
  ['Education ERP', 'https://www.nagarsoftwaresolution.com/erp-solutions-for-education'],
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(41,171,226,0.4), rgba(247,148,29,0.4), transparent)' }}
      />

      {/* ── CTA banner ── */}
      <div className="relative z-10 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FAB96A' }}>
                Ready to get started?
              </p>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
                Transform Your Business{' '}
                <span className="gradient-text">Today</span>
              </h3>
              <p className="text-slate-500 text-sm">Get a free consultation. No commitment required.</p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start Free Consultation
              </button>
              <a
                href="mailto:info@nagarsoftwaresolution.com"
                className="btn-ghost-dark"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main links ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand col */}
          <div>
            <div className="mb-6">
              <div
                className="inline-block rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.92)', padding: '8px 12px' }}
              >
                <img
                  src="/WhatsApp_Image_2026-05-14_at_5.24.49_PM.jpeg"
                  alt="NSS"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              A digital transformation partner delivering growth and innovation through next-gen IT services, consulting, and software solutions.
            </p>

            {/* Social */}
            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="https://www.nagarsoftwaresolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(247,148,29,0.15)';
                    el.style.color = '#f97316';
                    el.style.borderColor = 'rgba(247,148,29,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(255,255,255,0.05)';
                    el.style.color = '#64748b';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5
              className="text-xs font-black uppercase tracking-widest mb-5"
              style={{ color: '#FAB96A' }}
            >
              Services
            </h5>
            <ul className="space-y-3">
              {serviceLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-sm font-medium flex items-center gap-1.5 group hover:translate-x-1 transition-all duration-200 w-fit"
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#3b82f6'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#64748b'}
                  >
                    <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: '#3b82f6' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Company */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: '#FAB96A' }}>
              Products
            </h5>
            <ul className="space-y-3 mb-8">
              {productLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-sm font-medium flex items-center gap-1.5 group hover:translate-x-1 transition-all duration-200 w-fit"
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#f97316'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#64748b'}
                  >
                    <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: '#f97316' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: '#FAB96A' }}>
              Company
            </h5>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="https://www.nagarsoftwaresolution.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-sm font-medium flex items-center gap-1.5 group hover:translate-x-1 transition-all duration-200 w-fit"
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#3b82f6'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#64748b'}
                  >
                    <span className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: '#3b82f6' }} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: '#FAB96A' }}>
              Contact
            </h5>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(41,171,226,0.12)' }}
                >
                  <MapPin size={14} style={{ color: '#3b82f6' }} />
                </div>
                <span className="text-slate-500 text-sm leading-relaxed">
                  308, Shagun Arcade, Vijay Nagar, Indore (MP), India
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(247,148,29,0.12)' }}
                >
                  <Mail size={14} style={{ color: '#f97316' }} />
                </div>
                <a href="mailto:info@nagarsoftwaresolution.com"
                  className="text-slate-500 text-sm transition-colors hover:text-[#f97316] break-all">
                  info@nagarsoftwaresolution.com
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(41,171,226,0.12)' }}
                >
                  <Phone size={14} style={{ color: '#3b82f6' }} />
                </div>
                <div className="text-slate-500 text-sm">
                  <a href="tel:+917772999694" className="block hover:text-[#3b82f6] transition-colors">+91 7772999694</a>
                  <a href="tel:+918878003344" className="block hover:text-[#f97316] transition-colors">+91 88780 03344</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            &copy; 2025 Nagar Software Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(247,148,29,0.1)', border: '1px solid rgba(247,148,29,0.2)', color: '#f97316' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
              el.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = 'rgba(247,148,29,0.1)';
              el.style.color = '#f97316';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
