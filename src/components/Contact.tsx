import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '308, Shagun Arcade, Vijay Nagar, Indore (MP), India',
    color: '#29ABE2',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@nagarsoftwaresolution.com',
    href: 'mailto:info@nagarsoftwaresolution.com',
    color: '#F7941D',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 7772999694 | +91 88780 03344',
    href: 'tel:+917772999694',
    color: '#29ABE2',
  },
];

const whyNss = [
  'Free initial consultation & project scoping',
  'Dedicated project manager assigned to you',
  '24/7 technical support & maintenance',
  'Agile delivery with transparent updates',
  'On-time delivery guaranteed',
  'Post-launch support included',
];

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useIntersectionObserver();
  const { ref: rightRef, isVisible: rightVisible } = useIntersectionObserver();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  const inputClass = "w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 hover:border-slate-300 focus:border-[#F7941D] focus:ring-4 focus:ring-[#F7941D]/10";

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41,171,226,0.04) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Start a Conversation</span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mt-4 mb-5">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Get a free consultation. Tell us about your project and our team will get back within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 xl:gap-16 items-start">
          {/* Left: Info */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''}`}>
            {/* Contact info cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 group"
                  style={{ borderColor: `${item.color}20`, background: `${item.color}04` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}BB)` }}
                  >
                    <item.icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: `${item.color}90` }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-navy-800 font-semibold text-sm hover:underline transition-colors break-all"
                        style={{ '--hover-c': item.color } as React.CSSProperties}
                        onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = item.color}
                        onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#0D1B2A'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-navy-800 font-semibold text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Why NSS dark card */}
            <div
              className="rounded-3xl p-7"
              style={{ background: 'linear-gradient(135deg, #0D1B2A, #152538)', border: '1px solid rgba(41,171,226,0.12)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #F7941D, #E07B0A)' }}
                >
                  <CheckCircle2 size={15} className="text-white" />
                </div>
                <h4 className="text-white font-black text-base">Why Choose NSS?</h4>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {whyNss.map((item, i) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: i % 2 === 0 ? '#29ABE2' : '#F7941D' }}
                    />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center gap-6 rounded-3xl p-16 border-2"
                style={{ borderColor: 'rgba(41,171,226,0.2)', background: 'rgba(41,171,226,0.03)' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #29ABE2, #1B8FC5)' }}
                >
                  <CheckCircle2 size={36} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-navy-800 mb-3">Message Sent!</h3>
                  <p className="text-slate-500 text-lg">Our team will get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="btn-primary mt-2"
                >
                  Send Another Message
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={onChange}
                      placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={onChange}
                      placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={onChange}
                      placeholder="+91 xxxxxxxxxx" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                    <select name="service" value={form.service} onChange={onChange} className={inputClass}>
                      <option value="">Select a service</option>
                      <option>Custom Software Development</option>
                      <option>Web Development & Design</option>
                      <option>Data Science & Analytics</option>
                      <option>DevOps Development</option>
                      <option>CRM / Salesforce</option>
                      <option>Enterprise Mobility</option>
                      <option>Staff Augmentation</option>
                      <option>Cloud Solutions</option>
                      <option>AI & Machine Learning</option>
                      <option>ServiceNow</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Details *</label>
                  <textarea name="message" required value={form.message} onChange={onChange}
                    rows={5} placeholder="Tell us about your project, goals, and timeline..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>

                <p className="text-center text-slate-400 text-xs">
                  We typically respond within 2-4 business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
