import React from 'react';
import { BookOpen, Users, Globe2 } from 'lucide-react';
import { useTranslation } from './TranslationProvider';

const Home = () => {
  const { translate } = useTranslation();

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {translate('Learn Without Language Barriers')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {translate('Access quality education in multiple Indian languages')}
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {[
          {
            icon: BookOpen,
            title: 'Expert-Led Courses',
            description: 'Learn from industry experts in your preferred language'
          },
          {
            icon: Users,
            title: 'Interactive Learning',
            description: 'Engage with peers and mentors in your native language'
          },
          {
            icon: Globe2,
            title: 'Multilingual Support',
            description: 'Content available in multiple Indian languages'
          }
        ].map((feature, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <feature.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {translate(feature.title)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {translate(feature.description)}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt={translate('Students learning')}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 flex items-center">
            <div className="px-8 md:px-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {translate('Start Your Learning Journey Today')}
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-xl">
                {translate('Join thousands of students learning in their preferred language')}
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {translate('Explore Courses')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;