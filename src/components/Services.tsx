import { ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    title: 'Custom Software Development',
    desc: 'Automate and integrate your core business operations.',
    href: 'https://www.nagarsoftwaresolution.com/custom-software-development-services',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Web Development & Design',
    desc: 'Impactful websites built around your vision.',
    href: 'https://www.nagarsoftwaresolution.com/web-development-and-design-services',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Data Science & Analytics',
    desc: 'Unlock innovation and growth with analytics.',
    href: 'https://www.nagarsoftwaresolution.com/data-science-consulting-services',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'DevOps Development',
    desc: 'Accelerate delivery from code to production.',
    href: 'https://www.nagarsoftwaresolution.com/devops-development-services',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'CRM / Salesforce',
    desc: 'Streamline sales and customer engagement.',
    href: 'https://www.nagarsoftwaresolution.com/crm-software-development-software',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Enterprise Mobility',
    desc: 'Keep your workforce secure and connected.',
    href: 'https://www.nagarsoftwaresolution.com/enterprise-mobility-services',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Staff Augmentation',
    desc: 'Skilled experts to power your growth.',
    href: 'https://www.nagarsoftwaresolution.com/staff-augmentation-services',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'ServiceNow',
    desc: 'Efficient enterprise service delivery at scale.',
    href: 'https://www.nagarsoftwaresolution.com/service-now',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Cloud Solutions',
    desc: 'Secure, scalable cloud for modern teams.',
    href: 'https://www.nagarsoftwaresolution.com/cloud-solutions-services',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Smarter outcomes with AI and ML.',
    href: 'https://www.nagarsoftwaresolution.com/',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const { ref: sectionRef, isVisible } = useIntersectionObserver(0.08);

  const updateCardPerspective = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;

    track.querySelectorAll<HTMLElement>('.services-gallery-card').forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const offset = (cardCenter - centerX) / (trackRect.width * 0.5);
      const clamped = Math.max(-1, Math.min(1, offset));
      const rotateY = clamped * -18;
      const scale = 1 - Math.abs(clamped) * 0.06;
      const translateZ = (1 - Math.abs(clamped)) * 12;

      card.style.transform = `perspective(1200px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`;
    });
  }, []);

  const endDrag = () => {
    dragRef.current.active = false;
    trackRef.current?.classList.remove('is-dragging');
  };

  const onTrackMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    el.classList.add('is-dragging');
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current.active) return;
      const el = trackRef.current;
      if (!el) return;
      const dx = e.clientX - dragRef.current.startX;
      el.scrollLeft = dragRef.current.scrollLeft - dx;
    };
    const onUp = () => endDrag();

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateCardPerspective();
    track.addEventListener('scroll', updateCardPerspective);
    window.addEventListener('resize', updateCardPerspective);

    const blockWheel = (e: WheelEvent) => e.preventDefault();
    track.addEventListener('wheel', blockWheel, { passive: false });

    return () => {
      track.removeEventListener('scroll', updateCardPerspective);
      window.removeEventListener('resize', updateCardPerspective);
      track.removeEventListener('wheel', blockWheel);
    };
  }, [updateCardPerspective]);

  return (
    <section id="services" className="py-28 bg-slate-50 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41,171,226,0.04) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <span className="section-tag">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover your brighter digital future with NSS. Our solutions address your challenges, simplifying your operations and driving tangible business growth.
          </p>
        </div>

        <div className="services-gallery-stage">
          <div
            ref={trackRef}
            className="services-gallery-track"
            onMouseDown={onTrackMouseDown}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
          >
            {services.map((s, i) => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`services-gallery-card reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="services-gallery-card-media">
                  <img src={s.image} alt={s.title} loading="lazy" draggable={false} />
                </div>
                <div className="services-gallery-card-body">
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <span className="services-gallery-card-link">
                    Explore <ArrowUpRight size={14} className="services-gallery-card-link-icon" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
