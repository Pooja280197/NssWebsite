import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, BarChart3, Database, TrendingUp, Search, PieChart, Activity } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const dataScienceFeatures = [
  'Analyzing and interpreting large sets of data to uncover valuable insights',
  'Uses statistical techniques and tools to identify patterns, trends and correlations in data',
  'Insights used for better business decisions, improve processes and drive growth',
  'No industries include finance, healthcare, marketing, HR, education, manufacturing, banking and insurance, media and entertainment, etc.',
  'Supports organisations and enterprises to understand their customers, optimize operations and target success.',
];

const dataEngFeatures = [
  'Comprises design, development and management of Data Infrastructure',
  'Provides systems to benefit data-analysis and its processing',
  'Focuses on the gathering, storage, organisation of data for efficient analysis and retrieval',
  'Allows to scalable data processing, data integration and data storage',
  'Safeguarding the availability and reliability of data for analytic purpose',
  'Preparing data for effective data analytics and insights',
];

const lifecycleSteps = [
  { num: '01', label: 'Business Understanding' },
  { num: '02', label: 'Data Mining' },
  { num: '03', label: 'Data Cleaning' },
  { num: '04', label: 'Data Exploration' },
  { num: '05', label: 'Feature Engineering' },
  { num: '06', label: 'Predictive Modelling' },
  { num: '07', label: 'Data Visualisation' },
  { num: '08', label: 'Model Deployment' },
  { num: '09', label: 'Launch Vehicle' },
  { num: '10', label: 'Continuous Monitoring' },
];

const strategyItems = [
  { icon: Database, color: '#3b82f6', title: 'Descriptive Analysis', desc: 'Statistical interpretation used to investigate historical data to recognize patterns and relationships like "What has happened?"' },
  { icon: Search, color: '#f97316', title: 'Diagnostic Analysis', desc: 'Statistical analysis used to answer the question "Why did it happen?" It features techniques such as drill-down, data discovery, data mining and correlations.' },
  { icon: TrendingUp, color: '#3b82f6', title: 'Predictive Analysis', desc: 'Using data to forecast future outcomes using AI and ML. Statistical models to find patterns, and predicting future behaviour like "What will happen?"' },
  { icon: Activity, color: '#f97316', title: 'Prescriptive Analysis', desc: 'Analyzing the optimal course of action and best practices for better outcomes in the project like "What should we do to make it happen?"' },
];

const faqs = [
  { q: 'What types of Data Analysis do you Specialize in?', a: 'We specialize in descriptive, diagnostic, predictive, and prescriptive analytics across industries including finance, healthcare, retail, manufacturing, and more. Our team handles everything from data wrangling to model deployment.' },
  { q: 'How can you Help us Turn Data Into Actionable Insights?', a: 'We follow a structured data science lifecycle — from business understanding, data mining, and cleaning through to predictive modeling and visualization — delivering insights that directly inform strategic decisions.' },
  { q: 'How can your Data Science Solutions help us Achieve our Business Goals?', a: 'Our solutions identify hidden patterns, optimize operations, forecast demand, reduce churn, and personalize customer experiences — all translated into measurable business outcomes.' },
];

interface Props { onClose: () => void; }

export default function DataSciencePage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: stratRef, isVisible: stratVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Data Science"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.93) 55%, rgba(6,13,24,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">Analytics & Insights</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            Data Science <span className="gradient-text">&amp; Analytics</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
            We go beyond numbers. Our data scientists unlock innovation, insights, and growth for your business. We offer a world of data-driven solutions tailored to your needs, fueled by our passion for possibilities.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <span className="section-tag">What We Do</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                Powering <span className="gradient-text">Data Analytics!</span>
              </h2>
              <ul className="space-y-3 mb-8">
                {dataScienceFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: i % 2 === 0 ? '#3b82f6' : '#f97316' }} />
                    <span className="text-slate-600 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
                className="btn-primary"
              >
                Get a Free Consultation <ArrowRight size={16} />
              </button>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Data Analytics"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Data Engineering"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
            <div className="reveal-right">
              <span className="section-tag">Infrastructure</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-5 leading-snug">
                Comprehending <span className="gradient-text">Data Engineering!</span>
              </h2>
              <ul className="space-y-3">
                {dataEngFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: i % 2 === 0 ? '#3b82f6' : '#f97316' }} />
                    <span className="text-slate-600 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Lifecycle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Process</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Knowing Data Science <span className="gradient-text">Lifecycle!</span>
            </h2>
          </div>
          <div ref={ref} className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {lifecycleSteps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal flex flex-col items-center text-center p-5 rounded-2xl border hover:-translate-y-1 transition-all duration-300 cursor-default ${isVisible ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${i * 60}ms`,
                  borderColor: i % 2 === 0 ? 'rgba(41,171,226,0.2)' : 'rgba(247,148,29,0.2)',
                  background: i % 2 === 0 ? 'rgba(41,171,226,0.04)' : 'rgba(247,148,29,0.04)',
                }}
              >
                <span className="text-2xl font-black mb-1" style={{ color: i % 2 === 0 ? '#3b82f6' : '#f97316' }}>{step.num}</span>
                <span className="text-xs font-bold text-slate-600 leading-tight">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Data */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <span className="section-tag-dark mb-5 block">Big Data Solutions</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-snug">
                Empowering Your Business With <span className="gradient-text">Big Data Solutions!</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                In the world of technological incredibility, all large and complex data sets are collected and stored by any means of technology. However, due to most technical errors in storage, Big Data Solutions has emerged to be a vital epitome of its remedial aspects. Let me give you crisp pointers on big data and our service matters.
              </p>
              <div className="space-y-3">
                {[
                  'Creation of customized subject-wise exam reports',
                  'Generation of term reports with exam report cards',
                  'Shortlist to teachers to enter marks and update it',
                  'Managing fee receipts and outstanding amounts for students/classes',
                  'Configurable structure for fees or calculators',
                  'Provision for scholarship, fee waivers and optional fees',
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: i < 3 ? '#3b82f6' : '#f97316' }} />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Big Data"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Building */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Approach</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Our Strategy <span className="gradient-text">Building!</span>
            </h2>
          </div>
          <div ref={stratRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strategyItems.map((s, i) => (
              <div
                key={s.title}
                className={`reveal service-card gradient-border flex items-start gap-5 ${stratVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
                >
                  <s.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-navy-800 text-base mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Have Questions?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Data Science and Analytics <span className="gradient-text">FAQs</span>
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${faqVisible ? 'visible' : ''} ${openFaq === i ? 'border-[#f97316] shadow-md' : 'border-slate-200'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button className="w-full text-left flex items-center justify-between px-6 py-5 gap-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: '#f97316', flexShrink: 0 }} />
                    <span className="font-bold text-navy-800 text-sm">{faq.q}</span>
                  </div>
                  <ChevronDown size={16} className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#f97316]' : ''}`} />
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
