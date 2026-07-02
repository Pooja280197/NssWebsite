import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const blogs = [
  {
    category: 'Artificial Intelligence',
    catColor: '#29ABE2',
    title: 'From Smart to Strategic: How Agentic AI is Quietly Reshaping Software in 2025',
    excerpt: "AI is changing gears — quietly but fundamentally. In 2025, we're witnessing the rise of agentic AI that doesn't just answer questions but takes autonomous action across complex workflows and systems.",
    readTime: '6 min read',
    date: 'May 2025',
    featured: true,
    gradient: 'linear-gradient(135deg, #29ABE2 0%, #1B8FC5 100%)',
    href: 'https://www.nagarsoftwaresolution.com/agentic-ai-2025-software-evolution',
  },
  {
    category: 'Technology Trends',
    catColor: '#F7941D',
    title: 'How Big Brands Are Transforming Markets with Technology',
    excerpt: 'Big brands are leveraging cutting-edge advancements to create new market opportunities and competitive advantages.',
    readTime: '5 min read',
    date: 'Apr 2025',
    featured: false,
    gradient: 'linear-gradient(135deg, #F7941D 0%, #E07B0A 100%)',
    href: 'https://www.nagarsoftwaresolution.com/how-big-brands-are-transforming-markets-with-technology',
  },
  {
    category: 'Data Science',
    catColor: '#1B8FC5',
    title: 'How Real-Time Anomaly Detection Algorithms Are Changing the Game',
    excerpt: 'Real-time anomaly detection helps spot unusual patterns instantly, enabling immediate response and preventing failures.',
    readTime: '7 min read',
    date: 'Mar 2025',
    featured: false,
    gradient: 'linear-gradient(135deg, #29ABE2 0%, #F7941D 100%)',
    href: 'https://www.nagarsoftwaresolution.com/real-time-anomaly-detection-algorithms',
  },
];

export default function Blogs() {
  const { ref, isVisible } = useIntersectionObserver(0.06);

  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <section id="blogs" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.04) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-tag">Knowledge Hub</span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <a
            href="https://www.nagarsoftwaresolution.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-brand flex-shrink-0 self-start sm:self-auto"
          >
            All Articles
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Layout: featured large + 2 small */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6"
        >
          {/* Featured */}
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-navy-800 rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-400 shadow-xl hover:shadow-2xl reveal ${isVisible ? 'visible' : ''}`}
          >
            {/* Gradient header */}
            <div
              className="h-52 relative overflow-hidden flex-shrink-0"
              style={{ background: featured.gradient }}
            >
              <div className="absolute inset-0 hero-grid-bg opacity-20" />
              <div className="absolute inset-0"
                style={{ background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)' }}
              />
              {/* Floating circles */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/8" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20">
                  {featured.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/20 text-white">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold mb-4">
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="flex items-center gap-1.5">
                  <Clock size={11} />
                  {featured.readTime}
                </span>
              </div>

              <h3 className="text-white font-black text-xl leading-snug mb-4 group-hover:text-[#7DCFEF] transition-colors flex-1">
                {featured.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all duration-200"
                style={{ color: '#7DCFEF' }}
              >
                Read Article
                <ArrowUpRight size={15} />
              </div>
            </div>
          </a>

          {/* Small cards */}
          <div className="flex flex-col gap-6">
            {rest.map((blog, i) => (
              <a
                key={blog.title}
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white rounded-3xl overflow-hidden flex flex-col border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm reveal ${isVisible ? 'visible' : ''} flex-1`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {/* Color strip */}
                <div className="h-2 flex-shrink-0" style={{ background: blog.gradient }} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{ background: `${blog.catColor}12`, color: blog.catColor }}
                    >
                      {blog.category}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">{blog.date}</span>
                  </div>

                  <h3 className="text-navy-800 font-black text-base leading-snug mb-3 group-hover:text-[#29ABE2] transition-colors flex-1 line-clamp-3">
                    {blog.title}
                  </h3>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                      <Clock size={11} /> {blog.readTime}
                    </span>
                    <div
                      className="flex items-center gap-1 text-xs font-bold group-hover:gap-2 transition-all duration-200"
                      style={{ color: blog.catColor }}
                    >
                      Read More <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
