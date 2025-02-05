import React, { createContext, useContext, ReactNode } from 'react';

interface TranslationContextType {
  translate: (text: string) => string;
  currentLanguage: string;
}

const TranslationContext = createContext<TranslationContextType>({
  translate: (text) => text,
  currentLanguage: 'English'
});

interface TranslationProviderProps {
  children: ReactNode;
  language: string;
}

const translations: Record<string, Record<string, string>> = {
  Hindi: {
    // Navigation
    'Home': 'होम',
    'About Us': 'हमारे बारे में',
    'Courses': 'पाठ्यक्रम',
    'Languages': 'भाषाएं',
    'Chat Support': 'चैट सहायता',
    'Logout': 'लॉग आउट',
    
    // Home Page
    'Learn Without Language Barriers': 'भाषा की बाधाओं के बिना सीखें',
    'Access quality education in multiple Indian languages': 'कई भारतीय भाषाओं में गुणवत्तापूर्ण शिक्षा प्राप्त करें',
    'Expert-Led Courses': 'विशेषज्ञ-नेतृत्व वाले पाठ्यक्रम',
    'Learn from industry experts in your preferred language': 'अपनी पसंदीदा भाषा में उद्योग विशेषज्ञों से सीखें',
    'Interactive Learning': 'इंटरैक्टिव लर्निंग',
    'Engage with peers and mentors in your native language': 'अपनी मातृभाषा में साथियों और मेंटर्स के साथ जुड़ें',
    'Multilingual Support': 'बहुभाषी समर्थन',
    'Content available in multiple Indian languages': 'कई भारतीय भाषाओं में उपलब्ध सामग्री',
    'Start Your Learning Journey Today': 'आज अपनी सीखने की यात्रा शुरू करें',
    'Join thousands of students learning in their preferred language': 'हजारों छात्रों के साथ जुड़ें जो अपनी पसंदीदा भाषा में सीख रहे हैं',
    'Explore Courses': 'पाठ्यक्रम एक्सप्लोर करें',

    // About Page
    'About EduHub': 'एडुहब के बारे में',
    'Our Mission': 'हमारा मिशन',
    'Quality education in your language': 'आपकी भाषा में गुणवत्तापूर्ण शिक्षा',
    'Expert instructors from across India': 'पूरे भारत से विशेषज्ञ प्रशिक्षक',
    'Focused on student success': 'छात्र की सफलता पर केंद्रित',
    'Active Students': 'सक्रिय छात्र',
    'Supporting major Indian languages': 'प्रमुख भारतीय भाषाओं का समर्थन',
    'Covering various subjects': 'विभिन्न विषयों को कवर करना',

    // Courses Page
    'Our Courses': 'हमारे पाठ्यक्रम',
    'Complete Web Development': 'संपूर्ण वेब विकास',
    'Learn full-stack web development from scratch': 'शुरुआत से फुल-स्टैक वेब विकास सीखें',
    'Data Science Fundamentals': 'डेटा साइंस की मूल बातें',
    'Master the basics of data science and analytics': 'डेटा साइंस और एनालिटिक्स की मूल बातें सीखें',
    'Digital Marketing': 'डिजिटल मार्केटिंग',
    'Learn modern digital marketing strategies': 'आधुनिक डिजिटल मार्केटिंग रणनीतियां सीखें',

    // Auth
    'Welcome Back': 'वापस स्वागत है',
    'Login to access your account': 'अपने खाते तक पहुंचने के लिए लॉगिन करें',
    'Create Account': 'खाता बनाएं',
    'Sign up to get started': 'शुरू करने के लिए साइन अप करें',
    'Full Name': 'पूरा नाम',
    'Email Address': 'ईमेल पता',
    'Password': 'पासवर्ड',
    'Login': 'लॉगिन',
    'Sign Up': 'साइन अप',
    "Don't have an account? Sign up": 'खाता नहीं है? साइन अप करें',
    'Already have an account? Login': 'पहले से खाता है? लॉगिन करें'
  },
  Bengali: {
    // Navigation
    'Home': 'হোম',
    'About Us': 'আমাদের সম্পর্কে',
    'Courses': 'কোর্স',
    'Languages': 'ভাষা',
    'Chat Support': 'চ্যাট সাপোর্ট',
    'Logout': 'লগ আউট',

    // Home Page
    'Learn Without Language Barriers': 'ভাষার বাধা ছাড়াই শিখুন',
    'Access quality education in multiple Indian languages': 'বিভিন্ন ভারতীয় ভাষায় মানসম্মত শিক্ষা পান',
    'Expert-Led Courses': 'বিশেষজ্ঞ-পরিচালিত কোর্স',
    'Learn from industry experts in your preferred language': 'আপনার পছন্দের ভাষায় ইন্ডাস্ট্রি বিশেষজ্ঞদের থেকে শিখুন',
    'Interactive Learning': 'ইন্টারেক্টিভ লার্নিং',
    'Engage with peers and mentors in your native language': 'আপনার মাতৃভাষায় সহপাঠী এবং মেন্টরদের সাথে যোগাযোগ করুন',
    'Multilingual Support': 'বহুভাষিক সমর্থন',
    'Content available in multiple Indian languages': 'বিভিন্ন ভারতীয় ভাষায় উপলব্ধ কন্টেন্ট',
    'Start Your Learning Journey Today': 'আজই আপনার শেখার যাত্রা শুরু করুন',
    'Join thousands of students learning in their preferred language': 'হাজার হাজার শিক্ষার্থীর সাথে যোগ দিন যারা তাদের পছন্দের ভাষায় শিখছে',
    'Explore Courses': 'কোর্স অন্বেষণ করুন',

    // About Page
    'About EduHub': 'এডুহাব সম্পর্কে',
    'Our Mission': 'আমাদের লক্ষ্য',
    'Quality education in your language': 'আপনার ভাষায় মানসম্মত শিক্ষা',
    'Expert instructors from across India': 'সারা ভারত থেকে বিশেষজ্ঞ শিক্ষক',
    'Focused on student success': 'শিক্ষার্থীর সাফল্যে মনোনিবেশ',
    'Active Students': 'সক্রিয় শিক্ষার্থী',
    'Supporting major Indian languages': 'প্রধান ভারতীয় ভাষাগুলি সমর্থন',
    'Covering various subjects': 'বিভিন্ন বিষয় কভার করা',

    // Courses Page
    'Our Courses': 'আমাদের কোর্স',
    'Complete Web Development': 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট',
    'Learn full-stack web development from scratch': 'শূন্য থেকে ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট শিখুন',
    'Data Science Fundamentals': 'ডেটা সায়েন্স ফান্ডামেন্টালস',
    'Master the basics of data science and analytics': 'ডেটা সায়েন্স এবং অ্যানালিটিক্সের মৌলিক বিষয়গুলি মাস্টার করুন',
    'Digital Marketing': 'ডিজিটাল মার্কেটিং',
    'Learn modern digital marketing strategies': 'আধুনিক ডিজিটাল মার্কেটিং কৌশল শিখুন',

    // Auth
    'Welcome Back': 'ফিরে আসার জন্য স্বাগতম',
    'Login to access your account': 'আপনার অ্যাকাউন্ট অ্যাক্সেস করতে লগইন করুন',
    'Create Account': 'অ্যাকাউন্ট তৈরি করুন',
    'Sign up to get started': 'শুরু করতে সাইন আপ করুন',
    'Full Name': 'পুরো নাম',
    'Email Address': 'ইমেইল ঠিকানা',
    'Password': 'পাসওয়ার্ড',
    'Login': 'লগইন',
    'Sign Up': 'সাইন আপ',
    "Don't have an account? Sign up": 'অ্যাকাউন্ট নেই? সাইন আপ করুন',
    'Already have an account? Login': 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে? লগইন করুন'
  },
  Telugu: {
    // Navigation
    'Home': 'హోమ్',
    'About Us': 'మా గురించి',
    'Courses': 'కోర్సులు',
    'Languages': 'భాషలు',
    'Chat Support': 'చాట్ మద్దతు',
    'Logout': 'లాగ్ అవుట్',

    // Home Page
    'Learn Without Language Barriers': 'భాషా అడ్డంకులు లేకుండా నేర్చుకోండి',
    'Access quality education in multiple Indian languages': 'అనేక భారతీయ భాషల్లో నాణ్యమైన విద్యను పొందండి',
    'Expert-Led Courses': 'నిపుణుల నేతృత్వంలోని కోర్సులు',
    'Learn from industry experts in your preferred language': 'మీకు ఇష్టమైన భాషలో పరిశ్రమ నిపుణుల నుండి నేర్చుకోండి',
    'Interactive Learning': 'ఇంటరాక్టివ్ లెర్నింగ్',
    'Engage with peers and mentors in your native language': 'మీ మాతృభాషలో సహచరులు మరియు మెంటర్లతో కలిసి పనిచేయండి',
    'Multilingual Support': 'బహుభాషా మద్దతు',
    'Content available in multiple Indian languages': 'అనేక భారతీయ భాషల్లో అందుబాటులో ఉన్న కంటెంట్',
    'Start Your Learning Journey Today': 'మీ అభ్యాస ప్రయాణాన్ని నేడే ప్రారంభించండి',
    'Join thousands of students learning in their preferred language': 'వారికి ఇష్టమైన భాషలో నేర్చుకుంటున్న వేలాది మంది విద్యార్థులతో చేరండి',
    'Explore Courses': 'కోర్సులను అన్వేషించండి',

    // About Page
    'About EduHub': 'ఎడ్యుహబ్ గురించి',
    'Our Mission': 'మా మిషన్',
    'Quality education in your language': 'మీ భాషలో నాణ్యమైన విద్య',
    'Expert instructors from across India': 'భారతదేశం నుండి నిపుణ బోధకులు',
    'Focused on student success': 'విద్యార్థి విజయంపై దృష్టి',
    'Active Students': 'యాక్టివ్ విద్యార్థులు',
    'Supporting major Indian languages': 'ప్రధాన భారతీయ భాషలకు మద్దతు',
    'Covering various subjects': 'వివిధ విషయాలను కవర్ చేస్తోంది',

    // Courses Page
    'Our Courses': 'మా కోర్సులు',
    'Complete Web Development': 'పూర్తి వెబ్ డెవలప్మెంట్',
    'Learn full-stack web development from scratch': 'పూర్తి-స్టాక్ వెబ్ డెవలప్మెంట్‌ను మొదటి నుండి నేర్చుకోండి',
    'Data Science Fundamentals': 'డేటా సైన్స్ ఫండమెంటల్స్',
    'Master the basics of data science and analytics': 'డేటా సైన్స్ మరియు అనలిటిక్స్ యొక్క మూలాలను మాస్టర్ చేయండి',
    'Digital Marketing': 'డిజిటల్ మార్కెటింగ్',
    'Learn modern digital marketing strategies': 'ఆధునిక డిజిటల్ మార్కెటింగ్ వ్యూహాలను నేర్చుకోండి',

    // Auth
    'Welcome Back': 'తిరిగి స్వాగతం',
    'Login to access your account': 'మీ ఖాతాను యాక్సెస్ చేయడానికి లాగిన్ చేయండి',
    'Create Account': 'ఖాతాను సృష్టించండి',
    'Sign up to get started': 'ప్రారంభించడానికి సైన్ అప్ చేయండి',
    'Full Name': 'పూర్తి పేరు',
    'Email Address': 'ఇమెయిల్ చిరునామా',
    'Password': 'పాస్వర్డ్',
    'Login': 'లాగిన్',
    'Sign Up': 'సైన్ అప్',
    "Don't have an account? Sign up": 'ఖాతా లేదా? సైన్ అప్ చేయండి',
    'Already have an account? Login': 'ఇప్పటికే ఖాతా ఉందా? లాగిన్ చేయండి'
  },
  Tamil: {
    // Navigation
    'Home': 'முகப்பு',
    'About Us': 'எங்களை பற்றி',
    'Courses': 'பாடநெறிகள்',
    'Languages': 'மொழிகள்',
    'Chat Support': 'அரட்டை ஆதரவு',
    'Logout': 'வெளியேறு',

    // Home Page
    'Learn Without Language Barriers': 'மொழி தடைகள் இல்லாமல் கற்றுக்கொள்ளுங்கள்',
    'Access quality education in multiple Indian languages': 'பல இந்திய மொழிகளில் தரமான கல்வியை அணுகவும்',
    'Expert-Led Courses': 'நிபுணர்கள் வழிநடத்தும் பாடநெறிகள்',
    'Learn from industry experts in your preferred language': 'உங்களுக்கு விருப்பமான மொழியில் தொழில்துறை நிபுணர்களிடமிருந்து கற்றுக்கொள்ளுங்கள்',
    'Interactive Learning': 'ஊடாடும் கற்றல்',
    'Engage with peers and mentors in your native language': 'உங்கள் தாய்மொழியில் சக மாணவர்கள் மற்றும் ஆசிரியர்களுடன் ஈடுபடுங்கள்',
    'Multilingual Support': 'பல மொழி ஆதரவு',
    'Content available in multiple Indian languages': 'பல இந்திய மொழிகளில் உள்ளடக்கம் கிடைக்கிறது',
    'Start Your Learning Journey Today': 'உங்கள் கற்றல் பயணத்தை இன்றே தொடங்குங்கள்',
    'Join thousands of students learning in their preferred language': 'தங்களுக்கு விருப்பமான மொழியில் கற்றுக்கொள்ளும் ஆயிரக்கணக்கான மாணவர்களுடன் இணையுங்கள்',
    'Explore Courses': 'பாடநெறிகளை ஆராயுங்கள்',

    // About Page
    'About EduHub': 'எடுஹப் பற்றி',
    'Our Mission': 'எங்கள் நோக்கம்',
    'Quality education in your language': 'உங்கள் மொழியில் தரமான கல்வி',
    'Expert instructors from across India': 'இந்தியா முழுவதும் இருந்து நிபுணர் ஆசிரியர்கள்',
    'Focused on student success': 'மாணவர் வெற்றியில் கவனம்',
    'Active Students': 'செயலில் உள்ள மாணவர்கள்',
    'Supporting major Indian languages': 'முக்கிய இந்திய மொழிகளுக்கு ஆதரவு',
    'Covering various subjects': 'பல்வேறு பாடங்களை உள்ளடக்கியது',

    // Courses Page
    'Our Courses': 'எங்கள் பாடநெறிகள்',
    'Complete Web Development': 'முழுமையான வலை மேம்பாடு',
    'Learn full-stack web development from scratch': 'முழு-ஸ்டாக் வலை மேம்பாட்டை அடிப்படையிலிருந்து கற்றுக்கொள்ளுங்கள்',
    'Data Science Fundamentals': 'தரவு அறிவியல் அடிப்படைகள்',
    'Master the basics of data science and analytics': 'தரவு அறிவியல் மற்றும் பகுப்பாய்வின் அடிப்படைகளை கற்றுக்கொள்ளுங்கள்',
    'Digital Marketing': 'டிஜிட்டல் மார்க்கெட்டிங்',
    'Learn modern digital marketing strategies': 'நவீன டிஜிட்டல் மார்க்கெட்டிங் உத்திகளைக் கற்றுக்கொள்ளுங்கள்',

    // Auth
    'Welcome Back': 'மீண்டும் வரவேற்கிறோம்',
    'Login to access your account': 'உங்கள் கணக்கை அணுக உள்நுழையவும்',
    'Create Account': 'கணக்கை உருவாக்கு',
    'Sign up to get started': 'தொடங்க பதிவு செய்யவும்',
    'Full Name': 'முழு பெயர்',
    'Email Address': 'மின்னஞ்சல் முகவரி',
    'Password': 'கடவுச்சொல்',
    'Login': 'உள்நுழைய',
    'Sign Up': 'பதிவு செய்யவும்',
    "Don't have an account? Sign up": 'கணக்கு இல்லையா? பதிவு செய்யவும்',
    'Already have an account? Login': 'ஏற்கனவே ஒரு கணக்கு உள்ளதா? உள்நுழையவும்'
  }
};

const TranslationProvider: React.FC<TranslationProviderProps> = ({ children, language }) => {
  const translate = (text: string): string => {
    if (language === 'English') return text;
    return translations[language]?.[text] || text;
  };

  return (
    <TranslationContext.Provider value={{ translate, currentLanguage: language }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

export default TranslationProvider;