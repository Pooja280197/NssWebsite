import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCounter } from '../hooks/useCounter';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 500, suffix: '+', label: 'Projects Delivered', sub: 'Across 20+ countries', color: '#29ABE2', glow: 'rgba(41,171,226,0.2)' },
  { icon: Users, value: 200, suffix: '+', label: 'Happy Clients', sub: 'Long-term partnerships', color: '#F7941D', glow: 'rgba(247,148,29,0.2)' },
  { icon: Award, value: 10, suffix: '+', label: 'Years Experience', sub: 'In digital innovation', color: '#29ABE2', glow: 'rgba(41,171,226,0.2)' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Satisfaction', sub: 'Industry-leading NPS', color: '#F7941D', glow: 'rgba(247,148,29,0.2)' },
];

function StatCard({ icon: Icon, value, suffix, label, sub, color, glow, start, delay }: {
  icon: typeof TrendingUp; value: number; suffix: string; label: string; sub: string;
  color: string; glow: string; start: boolean; delay: number;
}) {
  const count = useCounter(value, 2400, start);
  return (
    <div
      className="stat-card reveal flex flex-col items-center text-center group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
      >
        <Icon size={24} style={{ color }} />
      </div>

      {/* Number */}
      <div
        className="text-5xl lg:text-6xl font-black mb-1 tabular-nums"
        style={{
          color,
          textShadow: `0 0 40px ${glow}`,
          lineHeight: 1,
        }}
      >
        {count}{suffix}
      </div>

      <div className="text-white font-bold text-base mt-3 mb-1">{label}</div>
      <div className="text-slate-500 text-xs font-medium">{sub}</div>

      {/* Bottom accent line */}
      <div className="mt-5 h-0.5 w-12 rounded-full mx-auto opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"
        style={{ background: color }}
      />
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver(0.15);

  return (
    <section className="relative py-24 overflow-hidden bg-navy-800">
      {/* Background */}
      <div className="absolute inset-0 hero-grid-bg opacity-30" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(41,171,226,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 reveal" style={{ transitionDelay: '0ms' }}>
          <span className="section-tag-dark">Our Track Record</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4">
            By The <span className="gradient-text">Numbers</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} start={isVisible} delay={i * 130} />
          ))}
        </div>
      </div>
    </section>
  );
}
