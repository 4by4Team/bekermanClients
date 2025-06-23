import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeaderLogic = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => location.pathname === path;

  return { isMenuOpen, toggleMenu, closeMenu, isActive };
};
