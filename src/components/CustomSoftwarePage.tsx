import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Cloud, Database, Layout, Settings, Server, Code2 } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    icon: Cloud,
    title: 'SAAS Development',
    sub: 'Unleashing the Power of Cloud-based Software!',
    desc: 'We aim to develop Software-as-a-Service (SaaS) solutions that connect the scalability and accessibility of cloud computing. Whether you need a stout CRM, ERP, software, or project management platform, we create SaaS applications for real-time collaboration and sheltered data storage. With our SaaS development expertise, benefits can be accomplished i.e. flexible subscription models, automatic updates, and on-demand scalability.',
    color: '#29ABE2',
    bg: 'rgba(41,171,226,0.08)',
  },
  {
    icon: Server,
    title: 'AWS Development',
    sub: 'Leveraging Cloud\'s Complete Potential',
    desc: 'From cloud infrastructure setup and configuration to increasing scalable and resilient applications, we combine the power of AWS services such as Amazon EC2, Amazon S3, and Amazon RDS to ensure optimal performance, security, and cost-efficiency. Our AWS development solutions enable businesses to leverage the benefits of cloud computing, with high availability, global reach, and seamless integration with other AWS services.',
    color: '#F7941D',
    bg: 'rgba(247,148,29,0.08)',
  },
  {
    icon: Layout,
    title: 'Front end and Back end Solutions',
    sub: 'Shaping Engaging and Powerful Interfaces',
    desc: 'Our front-end solutions targets on creating visually tempting, intuitive, and responsive user interfaces that engage customers and boost their interaction with your software applications. Our back-end development expertise ensures core functionality, performance, and security of your software. By combining front-end and back-end solutions seamlessly, we deliver software applications that provide a delightful user experience.',
    color: '#29ABE2',
    bg: 'rgba(41,171,226,0.08)',
  },
  {
    icon: Settings,
    title: 'CMS Development',
    sub: 'Stay Update the Worldly Affairs with CMS',
    desc: 'Our CMS development solutions empower you with user-friendly interfaces, unplagiarized content and customizable workflows. Whether you need a CMS for a website, e-commerce platform, or intranet, we create solutions that abridge content creation, organization, and distribution, allowing managing digital presence and engaging audience.',
    color: '#F7941D',
    bg: 'rgba(247,148,29,0.08)',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    sub: 'Ensuring Efficient Data Management',
    desc: 'Our database solutions present secure, scalable, and high-performance databases that meet your precise requirements. Whether you need a relational database management system (RDBMS) or a NoSQL database, we design and optimize database architectures that check data integrity, accessibility, and efficient query processing.',
    color: '#29ABE2',
    bg: 'rgba(41,171,226,0.08)',
  },
];

const faqs = [
  { q: 'What Programming Languages and Frameworks do you use?', a: 'We work with a wide range of technologies including React, Angular, Vue, Node.js, Python, PHP, Java, .NET, and more. We choose the best stack based on your project requirements and scalability needs.' },
  { q: 'How do you Ensure the Quality and Security of Custom Software?', a: 'We follow rigorous QA processes including unit testing, integration testing, and security audits. Our team adheres to industry best practices and compliance standards to deliver secure, reliable software.' },
  { q: 'What Ongoing Support do you offer for Custom Software?', a: 'We provide comprehensive post-launch support including bug fixes, performance monitoring, feature enhancements, and 24/7 technical assistance to ensure your software runs smoothly.' },
];

interface Props { onClose: () => void; }

export default function CustomSoftwarePage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Custom Software Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.92) 50%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">Development Services</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Custom Software<br /><span className="gradient-text">Development Services</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            Looking for trusted custom software development services to bring your web-based projects to life? Look no further.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <img
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Development"
                className="w-full rounded-3xl shadow-xl object-cover h-[380px]"
              />
            </div>
            <div className="reveal-right">
              <span className="section-tag">Your Project | Our Proficiency</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                Customized Software <span className="gradient-text">Development Services</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                We are prepared to take on your project because we have experience with a wide range of languages and frameworks for front-end, back-end, and web design development.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Acknowledged as one of the leading B2B providers of custom application development, we offer an array of superior, personalized web development solutions that enable your company to prosper on the internet.
              </p>
              <button
                onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
                className="btn-primary"
              >
                Start Your Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Customized Software <span className="gradient-text">Development Services</span>
            </h2>
          </div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal service-card gradient-border group ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
                >
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-base mb-1">{s.title}</h3>
                <p className="text-xs font-bold mb-3" style={{ color: s.color }}>{s.sub}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
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
              Custom Software Developments <span className="gradient-text">FAQs</span>
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${faqVisible ? 'visible' : ''} ${openFaq === i ? 'border-[#F7941D] shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  className="w-full text-left flex items-center justify-between px-6 py-5 gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: '#F7941D', flexShrink: 0 }} />
                    <span className="font-bold text-navy-800 text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={16} className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#F7941D]' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 text-sm leading-relaxed pl-7">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-6">
            Schedule Your Appointment Now And Let Us Take Care Of The Rest!
          </h2>
          <button
            onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
            className="btn-primary"
          >
            Request Demo <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
