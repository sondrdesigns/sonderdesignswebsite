import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export const Navigation = memo(function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/work', label: 'Work', color: 'bg-[#7C3238] text-white hover:bg-[#6a2a30]' },
    { path: '/team', label: 'Studio', color: 'bg-[#1A374D] text-white hover:bg-[#152c3d]' },
    { path: '/contact', label: 'Contact', color: 'bg-[#E9B824] text-black hover:bg-[#d4a520]' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/95 backdrop-blur-sm px-4 md:px-8 py-3 md:py-4 border-b border-black/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link to="/" className="text-lg md:text-xl font-semibold tracking-tight">
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <span className="text-foreground">Sondr</span>
          <span className="text-foreground/60 ml-1">Designs</span>
        </motion.span>
      </Link>
      
      <div className="flex gap-0">
        {navItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
          >
            <motion.div
              className={`px-3 sm:px-5 md:px-8 py-2 md:py-3 text-xs sm:text-sm font-medium transition-all ${item.color}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
});