import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Patients } from './pages/Patients';
import { Doctors } from './pages/Doctors';
import { SelfAssessment } from './pages/SelfAssessment';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { AIAssistant } from './pages/AIAssistant';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="patients" element={<Patients />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="self-assessment" element={<SelfAssessment />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ai-assistant" element={<AIAssistant />} />
      </Route>
    </Routes>
  );
}

export default App;
