import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, GitMerge, Code2, Package, DollarSign, Activity, Shield } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const devopsServices = [
  { icon: GitMerge, color: '#29ABE2', title: 'Continuous Integration and Continuous Deployment (CI/CD)', desc: 'At NSS we automate the build, test, and deployment processes, ensuring that your software is always in a deployable state. Our CI/CD pipelines are tailored to your specific needs, ensuring that your software is always in a deployable state. Our CI/CD pipelines are tailored for rapid and reliable software releases.' },
  { icon: Code2, color: '#F7941D', title: 'Infrastructure as Code (IaC)', desc: 'Implement IaC to manage your infrastructure using code, enabling easier scalability, reproducibility, and version control. Our experts can design and maintain infrastructure templates for AWS, Azure, Google Cloud, and other cloud platforms.' },
  { icon: Package, color: '#29ABE2', title: 'Containerization and Orchestration', desc: 'We specialize in containerization using Docker and orchestration using Kubernetes. Containerization simplifies software deployment and scaling, while Kubernetes orchestrates containerized applications for efficient resource utilization.' },
  { icon: DollarSign, color: '#F7941D', title: 'Cost Optimization', desc: 'DevOps practices streamline processes, reduce manual labor, and leverage automation to optimize resource utilization and minimize infrastructure costs. By adopting efficient practices like infrastructure as code and continuous monitoring, organizations can achieve significant cost savings while delivering value to customers more effectively.' },
  { icon: Activity, color: '#29ABE2', title: 'Uptime Monitoring and Alerts', desc: 'Implement comprehensive monitoring and alerting solutions to ensure your applications and infrastructure are performing optimally. We work with industry-leading monitoring tools to keep your systems healthy.' },
  { icon: Shield, color: '#F7941D', title: 'Security and Backup', desc: 'We prioritize security and compliance in DevOps. Our solutions include security scanning, vulnerability assessments, and compliance checks to maintain a secure software development and deployment pipeline.' },
];

const techMentor = [
  { title: 'Version Control with Git', desc: 'Utilize Git and version control systems like GitLab, GitHub, and Bitbucket for source code management and collaboration.' },
  { title: 'Containerization Tools', desc: 'Docker and container orchestration with Kubernetes provide efficient application packaging and deployment.' },
  { title: 'Infrastructure as Code (IaC)', desc: 'Use tools like Terraform, Ansible, and AWS CloudFormation to define and manage infrastructure as code.' },
  { title: 'CI/CD Pipeline Tools', desc: 'We employ tools such as Jenkins, Travis CI, CircleCI, and GitLab CI/CD to automate and streamline software delivery.' },
  { title: 'Monitoring and Logging Tools', desc: 'Implement monitoring and alerting solutions with Prometheus, Grafana, ELK Stack (Cloudwatch, Nagios, Logstash, Kibana), and more.' },
];

const faqs = [
  { q: 'What are the key benefits of Implementing DevOps in my Software Development Process?', a: 'DevOps accelerates delivery cycles, improves deployment frequency, reduces failure rates, shortens lead time for changes, and improves mean time to recovery (MTTR). Most importantly, it aligns development and operations teams toward shared business goals.' },
  { q: 'What are the biggest challenges of adopting DevOps in a Traditional Development Environment?', a: 'The biggest challenges include cultural resistance, siloed teams, legacy infrastructure, lack of automation, and inadequate tooling. NSS provides change management guidance alongside technical implementation to smooth the transition.' },
  { q: 'How can I measure the Success of my DevOps Implementation?', a: 'We measure success using DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. We baseline your current state and track improvement over engagement milestones.' },
];

interface Props { onClose: () => void; }

export default function DevOpsPage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="DevOps"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.93) 55%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">CI/CD & Automation</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            DevOps <span className="gradient-text">Development Services</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            NSS helps you dominate the digital race. Our DevOps solutions streamline development, testing, and deployment, accelerating time-to-market & securing high-quality apps. Unleash the power of DevOps with NSS.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              DevOps Services <span className="gradient-text">&amp; Solutions</span>
            </h2>
          </div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsServices.map((s, i) => (
              <div
                key={s.title}
                className={`reveal service-card gradient-border group ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
                >
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-navy-800 text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Certified badge + tagline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10" style={{ background: 'linear-gradient(135deg, rgba(41,171,226,0.06), rgba(247,148,29,0.06))', border: '1px solid rgba(41,171,226,0.15)' }}>
            <div className="w-32 h-32 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-xl" style={{ background: 'linear-gradient(135deg, #FF9900, #E68A00)' }}>
              <div className="text-center text-white">
                <p className="text-xs font-bold opacity-80">aws certified</p>
                <p className="text-lg font-black leading-tight">DevOps<br />Engineer</p>
                <p className="text-xs font-bold opacity-80 mt-1">PROFESSIONAL</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-navy-800 leading-snug">
                NSS Proudly Boasts A Certified Team Of Developers Specialized In DevOps Development,{' '}
                <span className="gradient-text">Ensuring Streamlined Processes, Efficient Deployments,</span>{' '}
                And Optimized Infrastructure For Our Clients' Projects.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Mentor */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="DevOps Tools"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="reveal-right">
              <span className="section-tag">Tech Stack</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-8 leading-snug">
                Technologies <span className="gradient-text">Mentor</span>
              </h2>
              <div className="space-y-5">
                {techMentor.map((t, i) => (
                  <div key={t.title} className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                      style={{ background: i % 2 === 0 ? '#29ABE2' : '#F7941D' }}
                    />
                    <div>
                      <p className="font-black text-navy-800 text-sm mb-1">{t.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Have Questions?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              DevOps Development <span className="gradient-text">FAQs</span>
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${faqVisible ? 'visible' : ''} ${openFaq === i ? 'border-[#F7941D] shadow-md' : 'border-slate-200'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button className="w-full text-left flex items-center justify-between px-6 py-5 gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: '#F7941D', flexShrink: 0 }} />
                    <span className="font-bold text-navy-800 text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={16} className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#F7941D]' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-5"><p className="text-slate-500 text-sm leading-relaxed pl-7">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-6">Schedule Your Appointment Now And Let Us Take Care Of The Rest!</h2>
          <button onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }} className="btn-primary">
            Request Demo <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
