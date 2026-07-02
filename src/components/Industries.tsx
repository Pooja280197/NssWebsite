import { Pill, Heart, Factory, ShoppingBag, Coffee, Landmark, ShoppingCart, Plane, Shield, GraduationCap, Tv2, Layers, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const industries = [
  { icon: Pill, label: 'Pharmaceutical', color: '#29ABE2' },
  { icon: Heart, label: 'Healthcare', color: '#F7941D' },
  { icon: Factory, label: 'Manufacturing', color: '#29ABE2' },
  { icon: ShoppingBag, label: 'Retail', color: '#F7941D' },
  { icon: Coffee, label: 'Hospitality', color: '#29ABE2' },
  { icon: Landmark, label: 'Banking', color: '#F7941D' },
  { icon: ShoppingCart, label: 'E-Commerce', color: '#29ABE2' },
  { icon: Plane, label: 'Travel', color: '#F7941D' },
  { icon: Shield, label: 'Insurance', color: '#29ABE2' },
  { icon: GraduationCap, label: 'Education', color: '#F7941D' },
  { icon: Tv2, label: 'Media', color: '#29ABE2' },
  { icon: Layers, label: 'SaaS', color: '#F7941D' },
  { icon: Building2, label: 'Real Estate', color: '#29ABE2' },
  { icon: TrendingUp, label: 'Fintech', color: '#F7941D' },
];

export default function Industries() {
  const { ref, isVisible } = useIntersectionObserver(0.04);

  return (
    <section id="industries" className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid-bg opacity-30" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(41,171,226,0.06) 0%, transparent 70%)' }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(247,148,29,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag-dark">Domain Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-5">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            NSS serves global clients across industries with personalized IT services, empowering them to become data-driven, future-ready enterprises.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
        >
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className={`reveal ${isVisible ? 'visible' : ''} group cursor-default`}
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              <div
                className="rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = `${ind.color}10`;
                  el.style.border = `1px solid ${ind.color}35`;
                  el.style.boxShadow = `0 8px 30px ${ind.color}20`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'rgba(255,255,255,0.04)';
                  el.style.border = '1px solid rgba(255,255,255,0.07)';
                  el.style.boxShadow = '';
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}AA)` }}
                >
                  <ind.icon size={22} className="text-white" />
                </div>
                <span className="text-slate-300 text-xs font-semibold text-center leading-tight group-hover:text-white transition-colors">
                  {ind.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-500 mb-6 text-sm">Don't see your industry? We work across all sectors.</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Discuss Your Project
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
