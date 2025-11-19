import { motion } from 'motion/react';

export function HalftoneHero() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Halftone gradient background */}
      <div className="absolute inset-0 halftone-gradient opacity-30" />
      
      {/* Metallic mesh overlay */}
      <div className="absolute inset-0 metallic-mesh opacity-15" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full halftone-gradient opacity-40 blur-3xl"
        animate={{ 
          y: [0, 40, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full metallic-mesh opacity-30 blur-3xl"
        animate={{ 
          y: [0, -50, 0],
          x: [0, -30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function LiquidText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-liquid-metal liquid-drip ${className}`}>
      {children}
    </span>
  );
}

export function ChromeText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-chrome ${className}`}>
      {children}
    </span>
  );
}

export function GlassMorphCard({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <motion.div
      className={`glass-morph p-8 rounded-2xl ${className}`}
      whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function HalftoneSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 halftone-overlay opacity-20" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
