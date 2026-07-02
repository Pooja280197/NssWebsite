import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown,
  Code2, Globe, BarChart3, GitBranch, Users, Smartphone,
  UserPlus, Headphones, Cloud, Brain,
  Building2, Award, Target, Briefcase, MapPin, Mail, Phone,
  ArrowRight, Zap, Shield, TrendingUp, Package, BookOpen, Layers
} from 'lucide-react';

/* ─── Dropdown data ──────────────────────────────────────── */
const servicesCategories = [
  {
    category: 'Development',
    color: '#4B5563',
    items: [
      { icon: Code2, label: 'Custom Software Development', href: '__service__:custom-software' },
      { icon: Globe, label: 'Web Development & Design', href: '__service__:web-dev' },
      { icon: Smartphone, label: 'Enterprise Mobility', href: '__service__:enterprise-mobility' },
    ],
  },
  {
    category: 'Data & AI',
    color: '#4B5563',
    items: [
      { icon: BarChart3, label: 'Data Science & Analytics', href: '__service__:data-science' },
      { icon: Brain, label: 'AI & Machine Learning', href: '__service__:ai-ml' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: '#4B5563',
    items: [
      { icon: Cloud, label: 'Cloud Solutions', href: '__service__:cloud-solutions' },
      { icon: GitBranch, label: 'DevOps Development', href: '__service__:devops' },
    ],
  },
  {
    category: 'Enterprise',
    color: '#4B5563',
    items: [
      { icon: Users, label: 'CRM / Salesforce', href: '__service__:salesforce' },
      { icon: Headphones, label: 'ServiceNow', href: '__service__:servicenow' },
      { icon: UserPlus, label: 'Staff Augmentation', href: '__service__:staff-augmentation' },
    ],
  },
];

const productItems = [
  {
    icon: Package,
    label: 'CleanPlan',
    desc: 'CleanPlan, an award-winning Australian technology platform, empowers cleaning businesses to manage daily operations.',
    href: '#products',
    color: '#4B5563',
  },
  {
    icon: Layers,
    label: 'Rexo ERP',
    desc: "Our aim with enterprise resource planning is to streamline and modernize your company's processes.",
    href: '#products',
    color: '#4B5563',
  },
  {
    icon: BookOpen,
    label: 'Education ERP',
    desc: 'Streamline your institution with our all-in-one ERP solution, built for education.',
    href: '#products',
    color: '#4B5563x',
  },
];

const aboutItems = [
  {
    icon: Building2,
    label: 'About NSS',
    desc: 'Our story, mission & vision',
    href: '__about__',
    color: '#4B5563',
  },
  {
    icon: Award,
    label: 'Why Choose Us',
    desc: 'What sets us apart',
    href: '__about__',
     color: '#4B5563',
    // color: '#F7941D',
  },
  {
    icon: Target,
    label: 'Our Values',
    desc: 'Principles that guide us',
    href: '__about__',
    color: '#4B5563',
    //  color: '#29ABE2',
  },
  {
    icon: Briefcase,
    label: 'Careers',
    desc: 'Join our growing team',
    href: '#contact',
    color: '#4B5563',
  },
];

const aboutStats = [
  { value: '10+', label: 'Years Experience', icon: TrendingUp },
  { value: '500+', label: 'Projects Delivered', icon: Zap },
  { value: '98%', label: 'Client Satisfaction', icon: Shield },
];

/* ─── Dropdown hook ──────────────────────────────────────── */
function useDropdown() {
  const [open, setOpen] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = (key: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(key);
  };
  const hide = () => {
    timerRef.current = setTimeout(() => setOpen(null), 120);
  };
  const stay = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  return { open, show, hide, stay, setOpen };
}

/* ─── Component ──────────────────────────────────────────── */
interface NavbarProps {
  onAboutOpen: () => void;
  onHomeOpen: () => void;
  onServiceOpen?: (slug: string) => void;
}

export default function Navbar({ onAboutOpen, onHomeOpen, onServiceOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { open, show, hide, stay, setOpen } = useDropdown();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setOpen(null);
    if (href === '__about__') {
      onAboutOpen();
    } else if (href === '__home__') {
      onHomeOpen();
    } else if (href.startsWith('__service__:')) {
      const slug = href.replace('__service__:', '');
      onServiceOpen?.(slug);
    } else if (href.startsWith('#')) {
      onHomeOpen();
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 150);
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const isLight = scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isLight
          ? 'bg-[#ffffff] backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] border-b border-slate-100/80'
          : 'bg-[#ffffff] backdrop-blur-none shadow-[0_2px_10px_rgba(0,0,0,0.08)] border-b border-slate-100/80 border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); handleNav('__home__'); }}
              className="flex items-center group flex-shrink-0"
            >
              <div
                className={`rounded-xl overflow-hidden transition-all duration-400 ${isLight
                  ? 'shadow-none'
                  : ''
                  }`}
              >
                <img
                  src="/mainNSSLogo.png"
                  alt="Nagar Software Solutions"
                  className="h-[58px] w-auto object-contain"
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">

              {/* Services (mega dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => show('services')}
                onMouseLeave={hide}
              >
                <button
                  className={`relative flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 group/nav ${isLight
                    ? open === 'services' ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                    : open === 'services' ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                    }`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open === 'services' ? 'rotate-180' : ''}`}
                  />
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left
                      ${open === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}
                    style={{ background: 'var(--gradient-duo)' }}
                  />
                </button>

                {/* Services mega dropdown */}
                <div
                  onMouseEnter={stay}
                  onMouseLeave={hide}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] transition-all duration-200 ${open === 'services'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                >
                  {/* Arrow */}
                  <div className="flex justify-center mb-[-1px]">
                    <div className="w-3 h-3 bg-slate-800 border-l border-t border-slate-700 rotate-45 relative z-10" />
                  </div>

                  <div className="bg-slate-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-slate-700 overflow-hidden">
                    {/* Top accent bar */}
                    <div className="h-[3px]" style={{ background: 'var(--gradient-duo)' }} />

                    <div className="p-6">
                      {/* Header row */}
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-0.5">What We Offer</p>
                          {/* <h3 className="text-lg font-black text-white">Our Services</h3> */}
                        </div>
                        {/* <a
                          href="#services"
                          onClick={e => { e.preventDefault(); handleNav('#services'); }}
                          className="inline-flex items-center gap-1.5 text-sm font-normal px-4 py-2 rounded-full transition-all duration-200 hover:gap-2.5"
                          style={{
                            background: 'linear-gradient(to right, #fbbf24, #f97316, #ea580c)',
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(249,115,22,0.35)',
                          }}
                        >
                          View All Services <ArrowRight size={16} />
                        </a> */}
                      </div>

                      {/* Categories grid */}
                      <div className="grid grid-cols-4 gap-4">
                        {servicesCategories.map((cat, catIdx) => (
                          <div key={cat.category}>
                            {/* Category label */}
                            <div
                              className={`text-[10px] font-black uppercase tracking-widest mb-2.5 pb-1.5 border-b border-slate-600 ${catIdx % 2 === 0 ? 'text-sky-400' : 'text-orange-400'}`}
                            >
                              {cat.category}
                            </div>
                            {/* Items */}
                            <ul className="space-y-0.5">
                              {cat.items.map((item) => (
                                <li key={item.label}>
                                  <a
                                    href={item.href}
                                    onClick={e => {
                                      e.preventDefault();
                                      handleNav(item.href);
                                    }}
                                    className="flex items-center gap-2.5 px-2 py-2 rounded-xl transition-all duration-150 group/item hover:bg-slate-700/60"
                                  >
                                    <div
                                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover/item:scale-110 bg-slate-700/80 ${catIdx % 2 === 0 ? 'text-sky-400' : 'text-orange-400'}`}
                                    >
                                      <item.icon size={14} />
                                    </div>
                                    <span className="text-[13px] font-medium text-slate-300 group-hover/item:text-white leading-tight transition-colors duration-150">
                                      {item.label}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Bottom featured banner */}
                      {/* <div className="mt-5 rounded-xl px-4 py-3 flex items-center justify-between bg-slate-700/50 border border-slate-600">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-duo)' }}>
                            <Zap size={15} className="text-white" />
                          </div>
                          <div>
                            <p className="text-[12px] font-black text-slate-100">Not sure which service you need?</p>
                            <p className="text-[11px] text-slate-400">Get a free consultation with our experts</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNav('#contact')}
                          className="text-[12px] font-normal px-3.5 py-1.5 rounded-lg transition-all duration-200 border border-slate-500 text-slate-200 hover:bg-slate-600 hover:text-white hover:border-slate-500"
                        >
                          Get Free Consultation
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* About (dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => show('about')}
                onMouseLeave={hide}
              >
                <button
                  className={`relative flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 group/nav ${isLight
                    ? open === 'about' ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                    : open === 'about' ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                    }`}
                >
                  About
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open === 'about' ? 'rotate-180' : ''}`}
                  />
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left
                      ${open === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}
                    style={{ background: 'var(--gradient-duo)' }}
                  />
                </button>

                {/* About dropdown */}
                <div
                  onMouseEnter={stay}
                  onMouseLeave={hide}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] transition-all duration-200 ${open === 'about'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                >
                  <div className="flex justify-center mb-[-1px]">
                    <div className="w-3 h-3 bg-slate-800 border-l border-t border-slate-700 rotate-45 relative z-10" />
                  </div>

                  <div className="bg-slate-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-slate-700 overflow-hidden">
                    <div className="h-[3px]" style={{ background: 'var(--gradient-duo)' }} />

                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-1">Company</p>
                      {/* <h3 className="text-base font-black text-white mb-4">About NSS</h3> */}

                      {/* About items grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {aboutItems.map((item, idx) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={e => { e.preventDefault(); handleNav(item.href); }}
                            className="flex items-start gap-3 p-3 rounded-xl transition-all duration-150 hover:bg-slate-700/60 group/ai"
                          >
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-150 group-hover/ai:scale-110 bg-slate-700/80 ${idx % 2 === 0 ? 'text-sky-400' : 'text-orange-400'}`}
                            >
                              <item.icon size={17} />
                            </div>
                            <div>
                              <p className="text-[13px] font-bold text-slate-200 group-hover/ai:text-white transition-colors leading-tight">
                                {item.label}
                              </p>
                              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Stats strip */}
                      {/* <div className="rounded-xl p-3 grid grid-cols-3 divide-x divide-slate-600 bg-slate-700/50 border border-slate-600">
                        {aboutStats.map((stat) => (
                          <div key={stat.label} className="flex flex-col items-center gap-0.5 px-2">
                            <stat.icon size={13} className="text-sky-400" />
                            <span
                              className="text-base font-black leading-none"
                              style={{ background: 'var(--gradient-duo)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                            >
                              {stat.value}
                            </span>
                            <span className="text-[10px] text-slate-400 text-center leading-tight">{stat.label}</span>
                          </div>
                        ))}
                      </div> */}

                      {/* Contact info */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 pt-3 border-t border-slate-600">
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                          <MapPin size={11} className="text-sky-400" />
                          India
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                          <Mail size={11} className="text-orange-400" />
                          info@nagarsoftwaresolution.com
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                          <Phone size={11} className="text-sky-400" />
                          +91 7000000000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => show('products')}
                onMouseLeave={hide}
              >
                <button
                  className={`relative flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 group/nav ${isLight
                    ? open === 'products' ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                    : open === 'products' ? 'text-orange-500' : 'text-slate-600 hover:text-orange-500'
                    }`}
                >
                  Products
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open === 'products' ? 'rotate-180' : ''}`}
                  />
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left
                      ${open === 'products' ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'}`}
                    style={{ background: 'var(--gradient-duo)' }}
                  />
                </button>

                <div
                  onMouseEnter={stay}
                  onMouseLeave={hide}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[400px] transition-all duration-200 ${open === 'products'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                >
                  <div className="flex justify-center mb-[-1px]">
                    <div className="w-3 h-3 bg-slate-800 border-l border-t border-slate-700 rotate-45 relative z-10" />
                  </div>

                  <div className="bg-slate-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-slate-700 overflow-hidden">
                    <div className="h-[3px]" style={{ background: 'var(--gradient-duo)' }} />
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-1">Our Products</p>
                      {/* <h3 className="text-base font-black text-white mb-4">Product Suite</h3> */}
                      <div className="space-y-1">
                        {productItems.map((item, idx) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={e => { e.preventDefault(); handleNav(item.href); }}
                            className="flex items-start gap-3.5 p-3 rounded-xl transition-all duration-150 hover:bg-slate-700/60 group/pi"
                          >
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-150 group-hover/pi:scale-110 bg-slate-700/80 ${idx % 2 === 0 ? 'text-sky-400' : 'text-orange-400'}`}
                            >
                              <item.icon size={17} />
                            </div>
                            <div>
                              <p className="text-[13px] font-bold text-slate-200 group-hover/pi:text-white transition-colors leading-tight">
                                {item.label}
                              </p>
                              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plain nav links */}
              {(['Blog', 'Contact'] as const).map((label) => {
                const href = label === 'Blog' ? '#blogs' : '#contact';
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 group/nav ${isLight
                      ? 'text-slate-600 hover:text-orange-500'
                      : 'text-slate-600 hover:text-orange-500'
                      }`}
                  >
                    {label}
                    <span
                      className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left scale-x-0 group-hover/nav:scale-x-100"
                      style={{ background: 'var(--gradient-duo)' }}
                    />
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNav("#contact")}
                className="
      relative overflow-hidden rounded-full
      border border-orange-500
      px-6 py-3 text-sm font-medium
      text-orange-500
      transition-all duration-500
      group
    "
              >
                <span
                  className="
        absolute inset-0 rounded-full
        bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600
        origin-left scale-x-0
        transition-transform duration-500
        group-hover:scale-x-100
      "
                ></span>

                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Free Consultation
                </span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2.5 rounded-xl transition-all ${isLight
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 h-[2px] transition-all duration-100"
            style={{
              width: `${scrollProgress}%`,
              background: 'var(--gradient-duo)',
            }}
          />
        )}
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className="absolute inset-0 bg-navy-900/80 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[85vw] max-w-[340px] h-full bg-white shadow-2xl transition-transform duration-400 flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 flex-shrink-0">
            <img
              src="/WhatsApp_Image_2026-05-14_at_5.24.49_PM.jpeg"
              alt="NSS"
              className="h-9 w-auto object-contain"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                className="w-full text-left px-4 py-3.5 text-slate-700 font-semibold rounded-xl hover:bg-orange-100 hover:text-orange-500 transition-all duration-200 flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180 text-orange-500' : 'text-slate-400'}`}
                />
              </button>
              {mobileExpanded === 'services' && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-slate-100 space-y-3 pb-2">
                  {servicesCategories.map((cat) => (
                    <div key={cat.category}>
                      <p
                        className="text-[10px] font-black uppercase tracking-widest mb-1.5 px-2"
                        style={{ color: cat.color }}
                      >
                        {cat.category}
                      </p>
                      {cat.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleNav(item.href)}
                          className="w-full text-left flex items-center gap-2.5 px-2 py-2 rounded-lg text-[13px] text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-all duration-150"
                        >
                          <div
                            className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                            style={{ background: `${cat.color}15` }}
                          >
                            <item.icon size={12} style={{ color: cat.color }} />
                          </div>
                          {item.label}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* About accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'about' ? null : 'about')}
                className="w-full text-left px-4 py-3.5 text-slate-700 font-semibold rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-all duration-200 flex items-center justify-between"
              >
                <span>About</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileExpanded === 'about' ? 'rotate-180 text-orange-500' : 'text-slate-400'}`}
                />
              </button>
              {mobileExpanded === 'about' && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-slate-100 space-y-0.5 pb-2">
                  {aboutItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNav(item.href)}
                      className="w-full text-left flex items-center gap-2.5 px-2 py-2.5 rounded-lg transition-all duration-150 hover:bg-slate-50 group"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}12` }}
                      >
                        <item.icon size={14} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-slate-700">{item.label}</p>
                        <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Products accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                className="w-full text-left px-4 py-3.5 text-slate-700 font-semibold rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-all duration-200 flex items-center justify-between"
              >
                <span>Products</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileExpanded === 'products' ? 'rotate-180 text-orange-500' : 'text-slate-400'}`}
                />
              </button>
              {mobileExpanded === 'products' && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-slate-100 space-y-0.5 pb-2">
                  {productItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNav(item.href)}
                      className="w-full text-left flex items-center gap-2.5 px-2 py-2.5 rounded-lg transition-all duration-150 hover:bg-slate-50 group"
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}12` }}
                      >
                        <item.icon size={14} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-slate-700">{item.label}</p>
                        <p className="text-[11px] text-slate-500 leading-tight line-clamp-1">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plain links */}
            {[
              { label: 'Blog', href: '#blogs' },
              { label: 'Contact', href: '#contact' },
            ].map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3.5 text-slate-700 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 hover:text-orange-500 transition-all duration-200 flex items-center justify-between group"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span>{link.label}</span>
                <span
                  className="w-5 h-5 rounded-lg flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'var(--gradient-orange)', color: 'white' }}
                >
                  →
                </span>
              </button>
            ))}
          </nav>

          <div className="px-5 py-4 border-t border-slate-100 flex-shrink-0">
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary w-full justify-center"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
