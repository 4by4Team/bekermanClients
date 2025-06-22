
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">חיים בריאים</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              המקום שלך להתחיל מסע של בריאות, תזונה נכונה ופיזיותרפיה מקצועית. 
              אנחנו כאן לעזור לך להגיע לגרסה הכי בריאה ומאושרת של עצמך.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">קישורים מהירים</h3>
            <div className="space-y-2">
              {[
                { name: 'בית', path: '/' },
                { name: 'אודות', path: '/about' },
                { name: 'קורסים', path: '/courses' },
                { name: 'מאמרים', path: '/articles' },
                { name: 'עדויות', path: '/testimonials' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">נושאים מובילים</h3>
            <div className="space-y-2">
              {[
                'תזונה בריאה',
                'פיזיותרפיה',
                'אימונים אישיים',
                'תוכניות הרזיה',
                'שיקום וחיזוק',
                'אורח חיים בריא'
              ].map((topic) => (
                <div key={topic} className="text-gray-300 hover:text-secondary transition-colors duration-300 cursor-pointer">
                  {topic}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">צור קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>03-1234567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@healthy-life.co.il</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300">
                <MapPin className="w-5 h-5 text-accent" />
                <span>תל אביב, ישראל</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} חיים בריאים. כל הזכויות שמורות.</p>
            <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">מדיניות פרטיות</a>
              <a href="#" className="hover:text-secondary transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-accent transition-colors">שאלות נפוצות</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
