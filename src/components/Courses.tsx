import React, { useState } from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    description: "Learn full-stack web development from scratch",
    duration: "48 hours",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    languages: ["Hindi", "English", "Tamil"]
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Master the basics of data science and analytics",
    duration: "36 hours",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    languages: ["English", "Bengali", "Telugu"]
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies",
    duration: "24 hours",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    languages: ["Hindi", "Marathi", "Gujarati"]
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Learn modern digital marketing strategies",
    duration: "24 hours",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    languages: ["Hindi", "Marathi", "Gujarati"]
  }
];

const Courses = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const languages = ["All", "Hindi", "English", "Tamil", "Telugu", "Marathi", "Gujarati"];

  const filteredCourses = selectedLanguage === "All"
    ? courses
    : courses.filter(course => course.languages.includes(selectedLanguage));

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
          Our Courses
        </h1>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
        >
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  {course.rating}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.languages.map(lang => (
                  <span
                    key={lang}
                    className="px-2 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 rounded"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;