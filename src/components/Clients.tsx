const brands = [
  'Salesforce', 'Microsoft Azure', 'AWS', 'Google Cloud', 'ServiceNow', 'SAP',
  'Oracle', 'IBM', 'Atlassian', 'Twilio', 'ZMC Partners', 'Zee Wee',
  'Techlene', 'MindCrew', 'FloorWalk', 'ZingMind', 'Chwogle', 'InnoTech',
];

export default function Clients() {
  const row1 = [...brands, ...brands];
  const row2 = [...brands.slice().reverse(), ...brands.slice().reverse()];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="section-tag">Our Ecosystem</span>
          <h2 className="text-3xl lg:text-4xl font-black text-navy-800 mt-4 mb-4">
            Trusted By <span className="gradient-text">Global Leaders</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            Delivering advanced software solutions that empower businesses globally. Industry partnerships that drive innovation at scale.
          </p>
        </div>
      </div>

      {/* Row 1 — forward */}
      <div className="relative mb-4">
        <div className="flex animate-marquee gap-4 w-max">
          {row1.map((brand, i) => (
            <div
              key={`f-${i}`}
              className="flex-none flex items-center px-6 py-3.5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-[#29ABE2] hover:bg-blue-50/50 transition-all duration-300 cursor-default group"
            >
              <div
                className="w-2 h-2 rounded-full mr-3 group-hover:scale-125 transition-transform"
                style={{ background: i % 2 === 0 ? '#29ABE2' : '#F7941D' }}
              />
              <span className="text-slate-600 font-semibold text-sm whitespace-nowrap group-hover:text-navy-800 transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* Row 2 — reverse */}
      <div className="relative">
        <div className="flex gap-4 w-max" style={{ animation: 'marquee 52s linear infinite reverse' }}>
          {row2.map((brand, i) => (
            <div
              key={`r-${i}`}
              className="flex-none flex items-center px-6 py-3.5 rounded-2xl border transition-all duration-300 cursor-default group"
              style={{ borderColor: 'rgba(247,148,29,0.15)', background: 'rgba(247,148,29,0.02)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#F7941D';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(247,148,29,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(247,148,29,0.15)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(247,148,29,0.02)';
              }}
            >
              <div
                className="w-2 h-2 rounded-full mr-3"
                style={{ background: i % 2 === 0 ? '#F7941D' : '#29ABE2' }}
              />
              <span className="text-slate-500 font-medium text-sm whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
