import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Microscope, Users, Stethoscope, Heart, Brain, Sparkles, TrendingUp, BarChart3, FileText, Zap, Target, LineChart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Floating particles animation
const FloatingParticle = ({ delay = 0, duration = 20 }: { delay?: number; duration?: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-cyan-400/30 rounded-full blur-sm"
    animate={{
      y: [0, -100, 0],
      x: [0, 50, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<'doctor' | 'patient' | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* Futuristic Hero Section with Interactive Cards */}
      <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.5} duration={15 + Math.random() * 10} />
          ))}
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">AI-Powered Regenerative Medicine</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Enter the Future of</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                Healthcare Innovation
              </span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Advanced stem cell therapy powered by artificial intelligence. Choose your path to regenerative healing.
            </p>
          </motion.div>

          {/* Premium Interactive Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* DOCTOR CARD */}
            <Link to="/doctors">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onHoverStart={() => setHoveredCard('doctor')}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur-xl border border-cyan-500/20" />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: hoveredCard === 'doctor' 
                        ? ['0 0 20px rgba(6,182,212,0.3)', '0 0 60px rgba(6,182,212,0.6)', '0 0 20px rgba(6,182,212,0.3)']
                        : '0 0 0px rgba(6,182,212,0)'
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">FOR DOCTORS</h2>
                          <p className="text-cyan-300 text-sm">Clinical Excellence Portal</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredCard === 'doctor' ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-6 h-6 text-cyan-400" />
                      </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="flex-1 space-y-4">
                      <motion.div 
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <BarChart3 className="w-5 h-5 text-cyan-400" />
                          <h3 className="text-white font-semibold">Clinical Evidence</h3>
                        </div>
                        <p className="text-slate-300 text-sm">Access peer-reviewed research and treatment outcomes</p>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <LineChart className="w-5 h-5 text-blue-400" />
                          <h3 className="text-white font-semibold">Research Analytics</h3>
                        </div>
                        <p className="text-slate-300 text-sm">Real-time data visualization and patient tracking</p>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp className="w-5 h-5 text-purple-400" />
                          <h3 className="text-white font-semibold">Medical Dashboards</h3>
                        </div>
                        <p className="text-slate-300 text-sm">Comprehensive patient management system</p>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Brain className="w-5 h-5 text-cyan-300" />
                          <h3 className="text-white font-semibold">AI Doctor Assistant</h3>
                        </div>
                        <p className="text-cyan-200 text-sm">Intelligent treatment recommendations powered by ML</p>
                      </motion.div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Advanced Medical Visuals</span>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-100" />
                          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-200" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: hoveredCard === 'doctor'
                        ? 'linear-gradient(to top, rgba(6,182,212,0.1), rgba(6,182,212,0), rgba(6,182,212,0.1))'
                        : 'linear-gradient(to top, rgba(6,182,212,0), rgba(6,182,212,0), rgba(6,182,212,0))'
                    }}
                  />
                </div>
              </motion.div>
            </Link>

            {/* PATIENT CARD */}
            <Link to="/patients">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onHoverStart={() => setHoveredCard('patient')}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  {/* Glassmorphism Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent backdrop-blur-xl border border-purple-500/20" />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: hoveredCard === 'patient' 
                        ? ['0 0 20px rgba(168,85,247,0.3)', '0 0 60px rgba(168,85,247,0.6)', '0 0 20px rgba(168,85,247,0.3)']
                        : '0 0 0px rgba(168,85,247,0)'
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">FOR PATIENTS</h2>
                          <p className="text-purple-300 text-sm">Healing Journey Portal</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredCard === 'patient' ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-6 h-6 text-purple-400" />
                      </motion.div>
                    </div>

                    {/* Features Grid */}
                    <div className="flex-1 space-y-4">
                      <motion.div 
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-purple-400" />
                          <h3 className="text-white font-semibold">Self Assessment</h3>
                        </div>
                        <p className="text-slate-300 text-sm">AI-powered eligibility screening and health evaluation</p>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Target className="w-5 h-5 text-pink-400" />
                          <h3 className="text-white font-semibold">Treatment Journey</h3>
                        </div>
                        <p className="text-slate-300 text-sm">Personalized roadmap from consultation to recovery</p>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Activity className="w-5 h-5 text-blue-400" />
                          <h3 className="text-white font-semibold">Recovery Support</h3>
                        </div>
                        <p className="text-slate-300 text-sm">24/7 monitoring and post-treatment care guidance</p>
                      </motion.div>

                      <motion.div 
                        className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Sparkles className="w-5 h-5 text-purple-300" />
                          <h3 className="text-white font-semibold">AI Patient Assistant</h3>
                        </div>
                        <p className="text-purple-200 text-sm">Your personal health companion for regenerative medicine</p>
                      </motion.div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Regenerative Medicine Visuals</span>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse delay-100" />
                          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-200" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-purple-500/0 via-purple-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: hoveredCard === 'patient'
                        ? 'linear-gradient(to top, rgba(168,85,247,0.1), rgba(168,85,247,0), rgba(168,85,247,0.1))'
                        : 'linear-gradient(to top, rgba(168,85,247,0), rgba(168,85,247,0), rgba(168,85,247,0))'
                    }}
                  />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-slate-400 text-sm mb-4">Powered by Advanced AI & Machine Learning</p>
            <div className="flex items-center justify-center gap-8 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                FDA Compliant
              </span>
              <span className="flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                Clinical Grade
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Real-time Analytics
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
