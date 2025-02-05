import React from 'react';
import { Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About WebBot
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're committed to breaking language barriers in education by providing quality learning materials in multiple Indian languages.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Our mission"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To democratize education by making it accessible in multiple Indian languages, ensuring that language is never a barrier to learning and growth.
          </p>
          <div className="space-y-4">
            {[
              { icon: Award, text: "Quality education in your language" },
              { icon: Users, text: "Expert instructors from across India" },
              { icon: Target, text: "Focused on student success" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <item.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-700 dark:text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-8 mt-12">
        {[
          {
            stat: "50,000+",
            label: "Active Students",
            description: "Learning across different languages"
          },
          {
            stat: "15+",
            label: "Languages",
            description: "Supporting major Indian languages"
          },
          {
            stat: "1000+",
            label: "Courses",
            description: "Covering various subjects"
          }
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {item.stat}
            </div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
              {item.label}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;