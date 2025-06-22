
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'בית', path: '/' },
    { name: 'אודות', path: '/about' },
    { name: 'קורסים', path: '/courses' },
    { name: 'מאמרים', path: '/articles' },
    { name: 'עדויות', path: '/testimonials' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
   <header className="fixed top-0 w-full z-50 glass-effect border-b border-gray-200/20">
  <div className="container mx-auto px-4 py-4">
    <div className="grid grid-cols-3 items-center">
      
      {/* עמודה 1 – לוגו */}
      <div className="flex justify-start">
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gradient whitespace-nowrap">חיים בריאים</span>
        </Link>
      </div>

      {/* עמודה 2 – קישורים באמצע (מוסתרים במסך קטן) */}
      <nav className="hidden md:flex justify-center space-x-8 rtl:space-x-reverse">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${
              isActive(item.path)
                ? 'text-primary'
                : 'text-gray-700 hover:text-primary'
            }`}
          >
            {item.name}
            {isActive(item.path) && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            )}
          </Link>
        ))}
      </nav>

      {/* עמודה 3 – כפתור המבורגר (רק במסכים קטנים) */}
      <div className="flex justify-end md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* תפריט נפתח במובייל */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 py-4 border-t border-gray-200">
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? 'text-primary bg-primary/10 rounded-lg'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mx-4 mt-4 bg-gradient-to-r from-primary to-secondary text-white">
            הירשם עכשיו
          </Button>
        </nav>
      </div>
    )}
  </div>
</header>

  );
};

export default Header;
