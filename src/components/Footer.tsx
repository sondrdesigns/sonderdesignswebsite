import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-semibold mb-4">
              <span className="text-white">Sondr</span>
              <span className="text-iridescent ml-1">Designs</span>
            </div>
            <p className="opacity-70 text-sm">
              Where simplicity meets chaos. Crafting exceptional digital experiences.
            </p>
          </motion.div>
          
          <div>
            <h4 className="mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:opacity-100 transition-opacity">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:opacity-100 transition-opacity">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Brand Strategy</li>
              <li>Web Design</li>
              <li>App Development</li>
              <li>E-Commerce</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/sondr-designs" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/sondrdesigns" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/sondr.designs" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; 2024 Sondr Designs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}