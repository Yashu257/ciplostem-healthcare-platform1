import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const QUESTIONS = [
  {
    id: 1,
    title: "What is your primary area of concern?",
    options: ["Knee Pain", "Hip Pain", "Shoulder Pain", "Neuropathy", "Other"]
  },
  {
    id: 2,
    title: "How long have you been experiencing these symptoms?",
    options: ["Less than 6 months", "6-12 months", "1-3 years", "More than 3 years"]
  },
  {
    id: 3,
    title: "Have you tried conservative treatments? (Select all that apply)",
    options: ["Physical Therapy", "Cortisone Injections", "Pain Medication", "None of the above"],
    multi: true
  }
];

export const SelfAssessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});

  const handleSelect = (option: string) => {
    const currentQ = QUESTIONS[step];
    if (currentQ.multi) {
      const currentAnswers = (answers[step] as string[]) || [];
      const isSelected = currentAnswers.includes(option);
      let newAnswers;
      if (isSelected) {
        newAnswers = currentAnswers.filter(a => a !== option);
      } else {
        newAnswers = [...currentAnswers, option];
      }
      setAnswers({ ...answers, [step]: newAnswers });
    } else {
      setAnswers({ ...answers, [step]: option });
    }
  };

  const handleNext = () => {
    if (step < QUESTIONS.length) {
      setStep(step + 1);
    }
  };

  const isCompleted = step === QUESTIONS.length;
  const currentQ = QUESTIONS[step];
  const hasAnsweredCurrent = answers[step] !== undefined && answers[step].length > 0;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {step > 0 && !isCompleted && (
              <button onClick={() => setStep(step - 1)} className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h1 className="text-3xl font-bold text-slate-900">Treatment Eligibility</h1>
          </div>
          {!isCompleted && (
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-brand-500 h-full transition-all duration-500"
                style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                  {currentQ.title}
                </h2>
                
                <div className="space-y-3 mb-8">
                  {currentQ.options.map((opt) => {
                    const isSelected = currentQ.multi 
                      ? (answers[step] as string[] || []).includes(opt)
                      : answers[step] === opt;
                    
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all ${
                          isSelected 
                            ? 'border-brand-500 bg-brand-50 text-brand-900' 
                            : 'border-slate-100 hover:border-brand-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleNext} disabled={!hasAnsweredCurrent} size="lg">
                    {step === QUESTIONS.length - 1 ? 'Submit Assessment' : 'Next Question'}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="completed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-10 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Assessment Complete</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Based on your responses, you may be a candidate for our regenerative therapies. A clinical specialist will review your profile and contact you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg">Schedule Consultation</Button>
                  <Button variant="outline" size="lg">Return Home</Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
