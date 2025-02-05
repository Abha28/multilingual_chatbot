import React from 'react';
import { Globe2, BookOpen, MessageCircle, Users, Moon, Sun, LogOut } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  setCurrentSection,
  isDark,
  setIsDark,
  currentLanguage,
  setCurrentLanguage,
  isAuthenticated,
  onLogout
}) => {
  const languages = [
    "English", "Hindi", "Bengali", "Telugu", "Tamil",
    "Marathi", "Gujarati", "Kannada", "Malayalam"
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">WebBot AI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              {[
                { id: 'home', label: 'Home', icon: null },
                { id: 'about', label: 'About Us', icon: Users },
                { id: 'courses', label: 'Courses', icon: BookOpen },
                { id: 'languages', label: 'Languages', icon: Globe2 },
                { id: 'chat', label: 'Chat Support', icon: MessageCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setCurrentSection(id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium
                    ${currentSection === id
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-indigo-500 hover:text-white'
                    }`}
                >
                  {Icon && <Icon className="h-4 w-4 mr-1" />}
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="px-2 py-1 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {isAuthenticated && (
              <button
                onClick={onLogout}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-red-500 hover:text-white"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;