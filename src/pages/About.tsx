export const About = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About CiploStem</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We are a collective of scientists, clinicians, and engineers dedicated to advancing human health through the power of regenerative medicine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To democratize access to safe, effective, and scientifically-validated stem cell therapies. We aim to shift the paradigm of modern healthcare from managing symptoms to treating the root cause of cellular degradation and disease.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2020 by a team of leading researchers from top global medical institutions, CiploStem has rapidly grown into a premier enterprise provider of clinical regenerative solutions.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200" 
                alt="Medical Research Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Innovation Timeline</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2020', title: 'Foundation', desc: 'CiploStem established with initial $50M research grant.' },
              { year: '2022', title: 'Clinical Trials Phase I', desc: 'Successful completion of safety trials for proprietary expansion protocol.' },
              { year: '2024', title: 'FDA Fast Track', desc: 'Received accelerated approval pathway for joint regeneration therapy.' },
              { year: '2026', title: 'Global Enterprise Launch', desc: 'Rolling out integrated clinical platforms to 150+ partner hospitals.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-24 shrink-0 text-right font-bold text-brand-600 text-xl pt-1">{item.year}</div>
                <div className="w-4 h-4 mt-2 rounded-full bg-accent-500 shrink-0 relative">
                  {i !== 3 && <div className="absolute top-4 left-1/2 -ml-px w-0.5 h-full bg-slate-200" style={{ height: 'calc(100% + 2rem)' }} />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
