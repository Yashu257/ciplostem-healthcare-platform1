import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Microscope, Users, Stethoscope, Brain, LineChart, Sparkles, Heart, TrendingUp, Zap } from 'lucide-react';
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
      {/* Hero Section - Premium Interactive Entry Cards */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-950/95 to-purple-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 py-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
              AI-Powered Regenerative Medicine
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Enter the Future of
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Healthcare Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Choose your path to advanced regenerative medicine powered by AI and cutting-edge cellular therapy
            </p>
          </motion.div>

          {/* Premium Interactive Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* FOR DOCTORS CARD */}
            <Link to="/doctors">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent backdrop-blur-xl border border-blue-400/20 group-hover:border-blue-400/40 transition-all duration-500" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 md:p-10 flex flex-col">
                  {/* Icon Badge */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Stethoscope className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    FOR DOCTORS
                  </h2>
                  
                  <p className="text-slate-300 text-lg mb-8">
                    Advanced clinical tools and AI-powered insights for regenerative medicine
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {[
                      { icon: LineChart, text: 'Clinical Evidence & Research Analytics' },
                      { icon: Brain, text: 'AI Doctor Assistant & Diagnostics' },
                      { icon: Activity, text: 'Medical Dashboards & Patient Tracking' },
                      { icon: Microscope, text: 'Futuristic Medical Visualizations' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 text-slate-200 group-hover:text-white transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                          <item.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-sm md:text-base">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 group-hover:border-blue-400/40 transition-all">
                    <span className="text-white font-semibold">Access Clinical Portal</span>
                    <ArrowRight className="w-6 h-6 text-blue-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Knee Anatomy Graphic Overlay */}
                <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 to-transparent rounded-full blur-3xl" />
                </div>
              </motion.div>
            </Link>

            {/* FOR PATIENTS CARD */}
            <Link to="/patients">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent backdrop-blur-xl border border-purple-400/20 group-hover:border-purple-400/40 transition-all duration-500" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 md:p-10 flex flex-col">
                  {/* Icon Badge */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    FOR PATIENTS
                  </h2>
                  
                  <p className="text-slate-300 text-lg mb-8">
                    Personalized regenerative therapy and AI-guided recovery support
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {[
                      { icon: Sparkles, text: 'Self Assessment & Eligibility Check' },
                      { icon: TrendingUp, text: 'Treatment Journey & Progress Tracking' },
                      { icon: Zap, text: 'AI Patient Assistant & Support' },
                      { icon: Activity, text: 'Regenerative Medicine Visualizations' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 text-slate-200 group-hover:text-white transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                          <item.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-sm md:text-base">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 group-hover:border-purple-400/40 transition-all">
                    <span className="text-white font-semibold">Start Your Journey</span>
                    <ArrowRight className="w-6 h-6 text-purple-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Medical Visual Overlay */}
                <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-500 to-transparent rounded-full blur-3xl" />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-slate-400 mb-4">Powered by Advanced AI & Cellular Regeneration Technology</p>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                FDA Compliant
              </span>
              <span className="flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                15+ Years Research
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                10k+ Treatments
              </span>
            </div>
          </motion.div>
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
