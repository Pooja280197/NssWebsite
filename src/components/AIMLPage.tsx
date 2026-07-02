import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Brain, Cpu, MessageSquare, Eye, TrendingUp, Zap, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const aiServices = [
  { icon: MessageSquare, color: '#29ABE2', title: 'Natural Language Processing (NLP)', desc: 'Document and conversation intelligence, extractive NER, summarisation, intent, entity linking, semantic search, and RAG with offline/online evaluations.' },
  { icon: Eye, color: '#F7941D', title: 'Computer Vision & Image Recognition', desc: 'Real-time detection, classification, OCR, and segmentation for QA, safety monitoring, and remote sensing.' },
  { icon: TrendingUp, color: '#29ABE2', title: 'Predictive Analytics & Forecasting', desc: 'Time-series, causal impact, and probabilistic models. Precise confidence intervals, backtests, and decision thresholds.' },
];

const deliverySteps = [
  { step: '01', title: 'Discover (1–2 weeks)', desc: 'Select high-ROI use cases; assess data, risks, and KPIs.' },
  { step: '02', title: 'Design (1–2 weeks)', desc: 'Target architecture, model choices, acceptance criteria, and runbook.' },
  { step: '03', title: 'Build (2–4 weeks)', desc: 'Data pipelines, models, integrations, experiments and evaluations.' },
  { step: '04', title: 'Deploy (1–2 weeks)', desc: 'CI/CD, observability, access controls, and rollback plans.' },
  { step: '05', title: 'Scale (ongoing)', desc: 'Performance tuning, retraining, onboarding new use cases, governance reviews.' },
];

const platforms = [
  { cat: 'Cloud & Data', color: '#29ABE2', tools: 'AWS | Azure | GCP | Snowflake | Databricks | Kafka' },
  { cat: 'ML/LLM Frameworks', color: '#F7941D', tools: 'PyTorch | TensorFlow | scikit-learn | XGBoost | Hugging Face' },
  { cat: 'Ops & Infra', color: '#29ABE2', tools: 'Docker | Kubernetes | MLflow | Feast | Grafana/Prometheus | vector stores | pgvector/FAISS/Pinecone' },
];

const engagementModels = [
  { model: 'Discovery Sprint', bestFor: 'Validate use cases & ROI', duration: '1–2 weeks', deliverable: 'Use-case matrix, data assessment, solution outline, budgetary estimate' },
  { model: 'Prototype / PoC', bestFor: 'De-risk approach & feasibility', duration: '4–8 weeks', deliverable: 'Proven value in one business area' },
  { model: 'Pilot', bestFor: 'Prove value in one business area', duration: '8–16 weeks', deliverable: 'Limited-scope production, SOPs/runbooks, training' },
  { model: 'Dedicated Team', bestFor: 'Roadmap delivery', duration: '3–12 months', deliverable: 'Backlog delivery, releases, SLAs' },
  { model: 'Managed Service', bestFor: 'Post go-live operations', duration: 'Ongoing', deliverable: 'Monitoring, retraining, incident response' },
];

const whyNSS = [
  'We lock KPIs, budget guardrails, and stop criteria before any build.',
  'Security as a constraint: RBAC, encryption, secrets, audit logs, data minimisation.',
  'Ship small, learn early: CI/CD for ML, automated tests, gated releases.',
  'Patterns over templates: Cross-industry wire adapted to your domain and compliance.',
  'No black boxes: Weekly demos, shared backlog, and SLAs tied to outcomes.',
];

const faqs = [
  { q: 'How do you ensure data security and compliance?', a: 'We implement security as a constraint from day one — RBAC, encryption at rest and in transit, secret management, audit logging, and data minimisation. We align with GDPR, HIPAA, SOC 2, and other relevant compliance frameworks.' },
  { q: 'How fast can we see value?', a: 'With our Discovery Sprint, you get a use-case matrix and budgetary estimate in 1–2 weeks. A Prototype/PoC typically proves value in 4–8 weeks, with limited-scope production following in 8–16 weeks.' },
  { q: 'Can you work with our data platform?', a: 'Yes. We work across AWS, Azure, GCP, Snowflake, Databricks, Kafka, and more. We also work with your existing data warehouses, BI tools, and MLOps infrastructure.' },
  { q: 'Do you support MLOps/LLMOps after go live?', a: 'Absolutely. Our Managed Service engagement covers monitoring, automated retraining, drift detection, incident response, and continuous model improvement.' },
  { q: 'What if our data is messy or sparse?', a: 'We begin every engagement with a data assessment. We handle data wrangling, feature engineering, synthetic data generation where appropriate, and advise on data collection strategies to improve model quality over time.' },
  { q: 'How do you evaluate LLM quality and safety?', a: 'We implement automated evaluation pipelines measuring accuracy, relevance, hallucination rate, toxicity, and bias. We use both reference-based and LLM-as-judge evaluations with human-in-the-loop review for critical applications.' },
];

interface Props { onClose: () => void; }

export default function AIMLPage({ onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const { ref: engRef, isVisible: engVisible } = useIntersectionObserver(0.05);
  const { ref: faqRef, isVisible: faqVisible } = useIntersectionObserver(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative min-h-[440px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="AI & Machine Learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,13,24,0.95) 55%, rgba(6,13,24,0.55) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <span className="section-tag-dark mb-4 block w-fit">AI & Machine Learning</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
            AI/ML Development Services<br /><span className="gradient-text">for Mid-Market &amp; Enterprise</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            At Nagar Software Solution, our AI development services help you answer fundamental business questions fast. We plan, build, and operate production AI end-to-end — from strategy and PoC to MLOps and ongoing model care. Security and governance are constraints, not afterthoughts.
          </p>
        </div>
      </section>

      {/* Comprehensive AI Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Comprehensive <span className="gradient-text">AI &amp; ML Services</span>
            </h2>
          </div>
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {aiServices.map((s, i) => (
              <div
                key={s.title}
                className={`reveal rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms`, background: `linear-gradient(135deg, ${s.color}, ${s.color}BB)` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-black text-white text-base mb-3">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-step delivery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <span className="section-tag">How We Work</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-8 leading-snug">
                Our 5-Step <span className="gradient-text">Delivery Playbook</span>
              </h2>
              <div className="space-y-4">
                {deliverySteps.map((step, i) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-black text-sm shadow-md"
                      style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#29ABE2, #1B8FC5' : '#F7941D, #E07B0A'})` }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <p className="font-black text-navy-800 text-sm mb-1">{step.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="AI Delivery"
                  className="w-full h-[460px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Tech Stack</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Platforms &amp; Tools <span className="gradient-text">We Build On</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {platforms.map((p) => (
              <div key={p.cat} className="grid grid-cols-[160px_1fr] gap-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <div className="flex items-center justify-center px-5 py-4 font-black text-white text-sm text-center" style={{ background: p.color }}>
                  {p.cat}
                </div>
                <div className="flex items-center px-6 py-4 bg-white text-slate-600 text-sm font-medium">{p.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Engagement Models <span className="gradient-text">(What Working Together Looks Like)</span>
            </h2>
          </div>
          <div ref={engRef} className="overflow-x-auto">
            <table className="w-full min-w-[640px] rounded-2xl overflow-hidden">
              <thead>
                <tr style={{ background: 'linear-gradient(90deg, #29ABE2, #F7941D)' }}>
                  {['Model', 'Best For', 'Typical Duration', 'Key Deliverables'].map(h => (
                    <th key={h} className="text-left px-5 py-4 text-white font-black text-sm">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {engagementModels.map((m, i) => (
                  <tr
                    key={m.model}
                    className={`reveal ${engVisible ? 'visible' : ''} transition-colors`}
                    style={{ transitionDelay: `${i * 80}ms`, background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)' }}
                  >
                    <td className="px-5 py-4 font-black text-sm" style={{ color: '#29ABE2' }}>{m.model}</td>
                    <td className="px-5 py-4 text-slate-300 text-sm">{m.bestFor}</td>
                    <td className="px-5 py-4 text-slate-300 text-sm">{m.duration}</td>
                    <td className="px-5 py-4 text-slate-400 text-xs leading-relaxed">{m.deliverable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why NSS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal-left">
              <span className="section-tag">Why NSS?</span>
              <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-5 mb-6 leading-snug">
                Why Choose NSS for <span className="gradient-text">Enterprise AI</span>
              </h2>
              <div className="space-y-4">
                {whyNSS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: i % 2 === 0 ? '#29ABE2' : '#F7941D' }} />
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="AI Enterprise"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Have Questions?</span>
            <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div ref={faqRef} className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal rounded-2xl border overflow-hidden transition-all duration-300 ${faqVisible ? 'visible' : ''} ${openFaq === i ? 'border-[#F7941D] shadow-md' : 'border-slate-200'}`}
                style={{ transitionDelay: `${i * 70}ms` }}
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
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">Ready to accelerate with AI?</h2>
          <p className="text-slate-400 mb-8">Book a free AI Discovery Call to prioritize high-ROI use cases and plan your first 90 days.</p>
          <button onClick={() => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }} className="btn-primary">
            Book a Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
