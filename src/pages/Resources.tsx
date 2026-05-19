import { FileText, Download, PlayCircle, Search } from 'lucide-react';
import { Card } from '../components/ui/Card';

const RESOURCES = [
  { type: 'PDF', title: 'Stem Cell Therapy Efficacy in Osteoarthritis', category: 'Clinical Study' },
  { type: 'Video', title: 'Understanding the Cellular Repair Process', category: 'Educational' },
  { type: 'Article', title: 'Post-Treatment Rehabilitation Guidelines', category: 'Patient Care' },
  { type: 'PDF', title: 'Proprietary MSC Expansion Whitepaper', category: 'Technical' },
  { type: 'Article', title: 'FDA Regulatory Landscape in 2026', category: 'Regulatory' },
  { type: 'Video', title: 'Patient Success Story: Neuropathy Recovery', category: 'Testimonial' },
];

export const Resources = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-brand-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Hub</h1>
            <p className="text-xl text-brand-100 mb-10">Access our comprehensive library of clinical studies, patient guides, and educational materials.</p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources, articles, studies..." 
                className="w-full h-14 pl-12 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:bg-white/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4 hide-scrollbar">
            {['All', 'Clinical Studies', 'Educational', 'Patient Care', 'Technical'].map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCES.map((res, i) => (
              <Card key={i} hover className="flex flex-col h-full cursor-pointer">
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    {res.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex-1">{res.title}</h3>
                
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 border-t border-slate-100 pt-4 mt-auto">
                  {res.type === 'PDF' && <Download className="h-4 w-4" />}
                  {res.type === 'Video' && <PlayCircle className="h-4 w-4" />}
                  {res.type === 'Article' && <FileText className="h-4 w-4" />}
                  {res.type}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
