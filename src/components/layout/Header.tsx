import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useHeaderLogic } from "@/hooks/useHeaderLogic";

const navItems = [
  { name: "בית", path: "/" },
  { name: "אודות", path: "/about" },
  { name: "קורסים", path: "/courses" },
  { name: "מאמרים", path: "/articles" },
  { name: "עדויות", path: "/testimonials" },
];

function LogoSection() {
  return (
    <div className="flex-shrink-0 min-w-[140px] flex justify-start">
      <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
        <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-gradient whitespace-nowrap">חיים בריאים</span>
      </Link>
    </div>
  );
}


function NavLinksSection(props: { isActive: (path: string) => boolean }) {
  return (
    <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-[100px] space-x-8 rtl:space-x-reverse transition-all duration-300">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${props.isActive(item.path)
              ? "text-primary"
              : "text-gray-700 hover:text-primary"
            }`}
        >
          {item.name}
          {props.isActive(item.path) && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
}


function HamburgerSection(props: { isMenuOpen: boolean; toggleMenu: () => void }) {
  return (
    <div className="flex lg:hidden">
      <button
        onClick={props.toggleMenu}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors absolute left-4 top-1/2 -translate-y-1/2"
        aria-label="פתח תפריט"
      >
        {props.isMenuOpen ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        )}
      </button>
    </div>
  );
}


function MobileMenuSection(props: {
  isMenuOpen: boolean;
  closeMenu: () => void;
  isActive: (path: string) => boolean;
}) {
  if (!props.isMenuOpen) return null;
  return (
    <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={props.closeMenu}
            className={`px-4 py-2 text-sm font-medium transition-colors ${props.isActive(item.path)
                ? "text-primary bg-primary/10 rounded-lg"
                : "text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu, isActive } = useHeaderLogic();

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-gray-200/20">
      <div className="container mx-auto px-4 py-4">
        <div className="relative flex items-center">
          <LogoSection />
          <NavLinksSection isActive={isActive} />
          <HamburgerSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <MobileMenuSection
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
          isActive={isActive}
        />
      </div>
    </header>
  );
};
export default Header;