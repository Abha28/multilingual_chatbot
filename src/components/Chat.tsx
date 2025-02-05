import React, { useState } from 'react';
import { Send, Globe2 } from 'lucide-react';

const Chat = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [message, setMessage] = useState('');

  const languages = [
    "English", "Hindi", "Bengali", "Telugu", "Tamil",
    "Marathi", "Gujarati", "Kannada", "Malayalam"
  ];

  const [messages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "bot",
      time: "10:00 AM"
    },
    {
      id: 2,
      text: "I have a question about the courses.",
      sender: "user",
      time: "10:01 AM"
    },
    {
      id: 3,
      text: "Sure! I'd be happy to help you with information about our courses. What would you like to know?",
      sender: "bot",
      time: "10:01 AM"
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 bg-indigo-600 dark:bg-indigo-800 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Educational Support Chat</h2>
          <div className="flex items-center space-x-2">
            <Globe2 className="h-5 w-5 text-white" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded px-2 py-1 text-sm"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs opacity-75 mt-1 block">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-4 border-t dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Type your message in ${selectedLanguage}...`}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;