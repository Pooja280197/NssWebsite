import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const products = [
  {
    id: 0,
    name: 'CleanPlan',
    tagline: 'Systemize Your Cleaning Process',
    badge: 'Award Winning Platform',
    desc: 'An award-winning Australian technology platform that empowers cleaning businesses to manage daily operations, digitize tasks, and control their workforce — all in one place.',
    features: ['Workforce Management', 'Task Digitization', 'Client Billing', 'Compliance Tracking', 'Real-time Reporting', 'Mobile App'],
    color: '#29ABE2',
    gradient: 'linear-gradient(135deg, #29ABE2, #1B8FC5)',
    bgPattern: 'rgba(41,171,226,0.06)',
    href: 'https://www.nagarsoftwaresolution.com/cleanplan-product-for-workflow-management-platform',
  },
  {
    id: 1,
    name: 'Rexo ERP',
    tagline: 'Amalgamation Of All Planning',
    badge: 'Enterprise Grade',
    desc: 'Our enterprise resource planning solution aims to streamline and modernize your company\'s processes, integrating all departments into a single, unified digital workspace.',
    features: ['Finance & Accounting', 'HR Management', 'Supply Chain', 'Business Intelligence', 'Multi-branch Support', 'Analytics Dashboard'],
    color: '#F7941D',
    gradient: 'linear-gradient(135deg, #F7941D, #E07B0A)',
    bgPattern: 'rgba(247,148,29,0.06)',
    href: 'https://www.nagarsoftwaresolution.com/rexo-erp-software-solutions',
  },
  {
    id: 2,
    name: 'Education ERP',
    tagline: 'Emerging the Virtual Campus Concept',
    badge: 'EdTech Solution',
    desc: 'Streamline your educational institution with our all-in-one ERP solution built specifically for schools, colleges, and universities — fostering a true virtual campus experience.',
    features: ['Student Management', 'Academic Scheduling', 'Fee Management', 'Parent Portal', 'Attendance Tracking', 'Result Management'],
    color: '#1B8FC5',
    gradient: 'linear-gradient(135deg, #29ABE2, #F7941D)',
    bgPattern: 'rgba(41,171,226,0.05)',
    href: 'https://www.nagarsoftwaresolution.com/erp-solutions-for-education',
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useIntersectionObserver(0.08);
  const product = products[active];

  return (
    <section id="products" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">What We've Built</span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Proven software solutions that simplify operations and help your business flourish. Trusted by clients across the globe.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                active === p.id ? 'text-white shadow-lg scale-105' : 'text-slate-500 bg-slate-100 hover:bg-slate-200'
              }`}
              style={active === p.id ? { background: p.gradient, boxShadow: `0 8px 25px ${p.color}35` } : {}}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Product showcase */}
        <div
          ref={ref}
          key={active}
          className={`reveal ${isVisible ? 'visible' : ''}`}
        >
          <div
            className="rounded-3xl overflow-hidden border"
            style={{ borderColor: `${product.color}20` }}
          >
            <div className="grid lg:grid-cols-2 min-h-[480px]">
              {/* Left: Visual */}
              <div
                className="relative flex items-center justify-center p-10 lg:p-14"
                style={{ background: product.bgPattern }}
              >
                {/* Background decoration */}
                <div className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 30% 50%, ${product.color}12 0%, transparent 60%)` }}
                />
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full"
                  style={{ background: `radial-gradient(circle, ${product.color}08 0%, transparent 70%)`, transform: 'translate(30%, -30%)' }}
                />

                {/* Central product card */}
                <div className="relative z-10 w-full max-w-sm">
                  {/* Badge */}
                  <div
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white mb-6"
                    style={{ background: product.gradient }}
                  >
                    {product.badge}
                  </div>

                  {/* Big product name */}
                  <div
                    className="text-6xl xl:text-7xl font-black mb-3 leading-none"
                    style={{ background: product.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {product.name}
                  </div>

                  <div className="text-slate-500 font-semibold text-sm mb-8">{product.tagline}</div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold"
                        style={{ background: `${product.color}12`, color: product.color }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-navy-800">
                <h3 className="text-3xl font-black text-white mb-4">{product.name}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">{product.desc}</p>

                {/* Feature list */}
                <div className="grid grid-cols-2 gap-3 mb-10">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 group">
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ color: product.color }}
                      />
                      <span className="text-slate-300 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg self-start"
                  style={{ background: product.gradient, boxShadow: `0 8px 25px ${product.color}35` }}
                >
                  Learn More
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Product nav arrows */}
          <div className="flex justify-center gap-3 mt-6">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`h-1.5 rounded-full transition-all duration-300 ${active === p.id ? 'w-8' : 'w-2 hover:w-4'}`}
                style={{ background: active === p.id ? p.gradient : '#E2E8F0' }}
              />
            ))}
          </div>
        </div>

        {/* All products quick nav */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 ${
                active === p.id ? 'shadow-lg' : 'hover:shadow-md'
              }`}
              style={{
                borderColor: active === p.id ? `${p.color}40` : '#E2E8F0',
                background: active === p.id ? `${p.color}06` : 'white',
              }}
            >
              <div>
                <div
                  className="font-black text-sm mb-0.5"
                  style={{ color: active === p.id ? p.color : '#0D1B2A' }}
                >
                  {p.name}
                </div>
                <div className="text-slate-500 text-xs">{p.tagline}</div>
              </div>
              <ChevronRight size={16} style={{ color: active === p.id ? p.color : '#94A3B8' }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
