import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Microscope, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/90 via-white/80 to-accent-50/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Advanced Medical Facility" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div initial="initial" animate="animate" variants={fadeIn}>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
                Pioneering Regenerative Medicine
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                Healing at the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
                  Cellular Level.
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
                CiploStem provides enterprise-grade stem cell therapy and regenerative solutions. We empower patients and clinicians with cutting-edge science to accelerate recovery and restore quality of life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/patients">
                  <Button size="lg" className="w-full sm:w-auto group">
                    For Patients
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Clinical Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {[
              { label: 'Successful Treatments', value: '10k+' },
              { label: 'Clinical Trials', value: '25+' },
              { label: 'Partner Hospitals', value: '150+' },
              { label: 'Years of Research', value: '15+' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise Healthcare Excellence</h2>
            <p className="text-slate-600">Delivering premium regenerative therapies backed by rigorous clinical data and highest safety standards.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover className="p-8">
              <div className="h-12 w-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <Microscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Advanced Research</h3>
              <p className="text-slate-600 leading-relaxed">State-of-the-art stem cell isolation and expansion techniques ensuring maximum viability and potency.</p>
            </Card>
            
            <Card hover className="p-8">
              <div className="h-12 w-12 bg-accent-100 rounded-xl flex items-center justify-center mb-6 text-accent-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">FDA Compliant</h3>
              <p className="text-slate-600 leading-relaxed">Rigorous adherence to regulatory standards ensuring patient safety and treatment efficacy.</p>
            </Card>

            <Card hover className="p-8">
              <div className="h-12 w-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Personalized Protocols</h3>
              <p className="text-slate-600 leading-relaxed">Tailored regenerative therapies matching specific patient profiles and physiological requirements.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Scientist looking through microscope"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 glass-effect p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-semibold text-slate-900">Clinical Focus</span>
                </div>
                <p className="text-sm text-slate-600">Collaborating with top-tier research institutions globally.</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">Transforming the Future of Medicine</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Regenerative medicine focuses on developing and applying new treatments to heal tissues and organs and restore function lost due to aging, disease, damage, or defects.
              </p>
              <ul className="space-y-4">
                {[
                  'Targeted cellular therapies for joint and tissue repair',
                  'Proprietary stem cell expansion technology',
                  'Comprehensive post-treatment monitoring',
                  'Integration with traditional clinical workflows'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="h-6 w-6 text-brand-500 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="outline" size="lg">Learn About Our Technology</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Assistant CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/50 to-accent-900/50 mix-blend-multiply" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Meet Your AI Health Assistant</h2>
            <p className="text-xl text-slate-300 mb-10">
              Get immediate answers about our therapies, check preliminary eligibility, or explore our knowledge base using our enterprise AI healthcare companion.
            </p>
            <Link to="/ai-assistant">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Start Conversation Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
