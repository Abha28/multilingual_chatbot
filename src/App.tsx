import React, { useState } from 'react';
import { Globe2, BookOpen, MessageCircle, Users, Moon, Sun, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Languages from './components/Languages';
import Chat from './components/Chat';
import Auth from './components/Auth';
import TranslationProvider from './components/TranslationProvider';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');

  if (!isAuthenticated && currentSection !== 'home') {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <TranslationProvider language={currentLanguage}>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <Navbar 
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            isDark={isDark}
            setIsDark={setIsDark}
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            isAuthenticated={isAuthenticated}
            onLogout={() => setIsAuthenticated(false)}
          />
          
          <main className="container mx-auto px-4 py-8">
            {currentSection === 'home' && <Home />}
            {currentSection === 'about' && <About />}
            {currentSection === 'courses' && <Courses />}
            {currentSection === 'languages' && <Languages />}
            {currentSection === 'chat' && <Chat />}
          </main>
        </div>
      </TranslationProvider>
    </div>
  );
}

export default App;