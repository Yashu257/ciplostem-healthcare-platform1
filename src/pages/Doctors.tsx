import { BookOpen, Network, Presentation, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Doctors = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <span className="text-brand-400 font-semibold tracking-wider uppercase mb-4 block">For Medical Professionals</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Clinical Partnerships & Research</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Integrate enterprise-grade regenerative medicine into your practice. Access proprietary protocols, rigorous clinical data, and comprehensive physician training.
            </p>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Request Clinical Briefing
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Network className="h-10 w-10 text-brand-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Partner Network</h3>
              <p className="text-slate-600 mb-6">Join our network of 150+ certified clinics. Gain access to centralized cell processing, logistics, and quality control.</p>
              <a href="#" className="text-brand-600 font-semibold flex items-center hover:text-brand-700">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Card>

            <Card className="p-8 bg-brand-50 border-brand-100">
              <BookOpen className="h-10 w-10 text-brand-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Clinical Research</h3>
              <p className="text-slate-600 mb-6">Review our peer-reviewed publications, ongoing FDA clinical trials, and detailed efficacy data across specialties.</p>
              <a href="#" className="text-brand-600 font-semibold flex items-center hover:text-brand-700">
                View Publications <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Card>

            <Card className="p-8">
              <Presentation className="h-10 w-10 text-brand-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Physician Training</h3>
              <p className="text-slate-600 mb-6">Comprehensive CME-accredited training programs on injection techniques, ultrasound guidance, and cell handling.</p>
              <a href="#" className="text-brand-600 font-semibold flex items-center hover:text-brand-700">
                View Schedule <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Request Briefing</h2>
            <p className="text-slate-600 mb-8">Fill out the form below to receive detailed technical specifications, clinical outcome data, and partnership information.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Medical Specialty</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">NPI Number (Optional)</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                <input type="email" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
              <Button type="submit" size="lg" className="w-full">Submit Request</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
