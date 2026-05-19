import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-brand-400 to-accent-400 p-2 rounded-xl">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                CiploStem
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Pioneering the future of regenerative medicine and stem cell therapy with enterprise-grade clinical solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/patients" className="hover:text-brand-400 transition-colors">For Patients</Link></li>
              <li><Link to="/doctors" className="hover:text-brand-400 transition-colors">For Doctors</Link></li>
              <li><Link to="/resources" className="hover:text-brand-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/ai-assistant" className="hover:text-brand-400 transition-colors">AI Assistant</Link></li>
              <li><Link to="/self-assessment" className="hover:text-brand-400 transition-colors">Self Assessment</Link></li>
              <li><Link to="#" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-400 shrink-0" />
                <span>123 Medical Innovation Blvd,<br />Boston, MA 02115</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-400 shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-400 shrink-0" />
                <span>contact@ciplostem.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} CiploStem. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>HIPAA Compliant</span>
            <span>FDA Registered</span>
            <span>ISO 13485</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
