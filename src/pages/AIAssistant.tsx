import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Stethoscope, FileQuestion, ActivitySquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
};

const SUGGESTIONS = [
  { icon: Stethoscope, text: "Am I a candidate for stem cell therapy?" },
  { icon: ActivitySquare, text: "What conditions do you treat?" },
  { icon: FileQuestion, text: "Explain the clinical procedure." },
];

export const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello. I am the CiploStem AI Assistant. I can provide information on our therapies, eligibility, or help route you to the correct clinical specialist. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: "Thank you for your question. As an AI placeholder, I'd typically process your query about regenerative medicine and provide an evidence-based response from our clinical knowledge base. For now, please feel free to explore our website or contact our team directly!"
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-0 h-screen flex flex-col bg-slate-50">
      <div className="container mx-auto px-4 md:px-8 flex-1 py-6 flex flex-col h-full max-w-5xl">
        <div className="bg-white rounded-3xl shadow-soft border border-slate-200 flex flex-col h-full overflow-hidden">
          
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-4 bg-white z-10">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-md">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">CiploStem AI</h2>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
              </p>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 space-y-6">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'bot' && (
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <Bot className="h-5 w-5 text-brand-600" />
                  </div>
                )}
                
                <div className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                  msg.type === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-sm' 
                    : 'bg-white shadow-sm border border-slate-100 text-slate-700 rounded-bl-sm'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>

                {msg.type === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                    <User className="h-5 w-5 text-slate-500" />
                  </div>
                )}
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex gap-4 justify-start">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                  <Bot className="h-5 w-5 text-brand-600" />
                </div>
                <div className="bg-white shadow-sm border border-slate-100 rounded-2xl rounded-bl-sm px-6 py-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce delay-75" />
                  <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce delay-150" />
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          {/* Suggestions & Input */}
          <div className="p-6 bg-white border-t border-slate-100">
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-3 mb-6">
                {SUGGESTIONS.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(sug.text)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-brand-500 hover:text-brand-600 transition-colors"
                  >
                    <sug.icon className="h-4 w-4" />
                    {sug.text}
                  </button>
                ))}
              </div>
            )}

            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="flex items-center gap-4 relative"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about therapies, conditions, or clinical data..."
                className="flex-1 h-14 pl-6 pr-16 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-slate-900"
              />
              <Button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-2 bottom-2 rounded-full w-10 h-10 p-0 flex items-center justify-center bg-brand-600 hover:bg-brand-700"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
