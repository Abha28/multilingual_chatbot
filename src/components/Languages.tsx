import React from 'react';
import { Globe2, BookOpen, MessageCircle } from 'lucide-react';

const languages = [
  { name: "Hindi", speakers: "500M+", flag: "🇮🇳" },
  { name: "Bengali", speakers: "265M+", flag: "🇮🇳" },
  { name: "Telugu", speakers: "85M+", flag: "🇮🇳" },
  { name: "Marathi", speakers: "83M+", flag: "🇮🇳" },
  { name: "Tamil", speakers: "75M+", flag: "🇮🇳" },
  { name: "Gujarati", speakers: "55M+", flag: "🇮🇳" },
  { name: "Kannada", speakers: "45M+", flag: "🇮🇳" },
  { name: "Malayalam", speakers: "38M+", flag: "🇮🇳" }
];

const Languages = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Supported Languages
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn in your preferred language with our comprehensive multilingual support
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {languages.map((lang) => (
          <div key={lang.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">{lang.flag}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {lang.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {lang.speakers} speakers
            </p>
          </div>
        ))}
      </div>

      <section className="grid md:grid-cols-3 gap-8 mt-12">
        {[
          {
            icon: Globe2,
            title: "Native Support",
            description: "Learn from instructors who speak your language"
          },
          {
            icon: BookOpen,
            title: "Localized Content",
            description: "Study materials in your preferred language"
          },
          {
            icon: MessageCircle,
            title: "Language Support",
            description: "Get help in your native language"
          }
        ].map((feature, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <feature.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Languages;