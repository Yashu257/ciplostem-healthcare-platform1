import { FileText, Activity, Heart, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';

export const Patients = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000" 
            alt="Patient Care" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Patient Journey</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We guide you through every step of your regenerative therapy journey, ensuring safety, transparency, and the best possible outcomes for your specific condition.
            </p>
            <Link to="/self-assessment">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Start Self-Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: '1. Evaluation', desc: 'Comprehensive review of your medical history and imaging.' },
              { icon: Activity, title: '2. Custom Protocol', desc: 'Developing a targeted regenerative treatment plan tailored to you.' },
              { icon: Heart, title: '3. Procedure', desc: 'Minimally invasive stem cell administration by specialists.' },
              { icon: CheckCircle2, title: '4. Recovery', desc: 'Guided rehabilitation and long-term outcome tracking.' },
            ].map((step, i) => (
              <Card key={i} className="relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-500 transform origin-top transition-transform scale-y-0 group-hover:scale-y-100" />
                <step.icon className="h-10 w-10 text-brand-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Explanations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=1200" 
                alt="Doctor talking to patient" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Conditions We Treat</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Orthopedics & Sports Medicine</h3>
                  <p className="text-slate-600">Osteoarthritis, tendon injuries, cartilage defects, and joint degeneration. Accelerating healing and reducing inflammation.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Neurological Conditions</h3>
                  <p className="text-slate-600">Investigational protocols for neuropathy and neurodegenerative disorders focusing on neural repair and protection.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Autoimmune Disorders</h3>
                  <p className="text-slate-600">Immunomodulatory therapies utilizing mesenchymal stem cells (MSCs) to help regulate immune responses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
