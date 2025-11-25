import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
// TEMPORARY: Using test image to verify system works
import blendCafeImage from '../assets/a5aba046f347df51b3a9508fa3129c084c4f057b.png';

const projects = [
  {
    id: 1,
    title: 'Blend Cafe App',
    category: 'Digital',
    description: 'Cafe finder and social network for coffee enthusiasts',
    image: blendCafeImage,
    status: 'In Development',
  },
];

const categories = ['All', 'Digital'];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Header - Clean and spacious */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[clamp(3rem,8vw,9rem)] leading-[0.95] tracking-tighter">
            <span className="text-foreground">Our </span>
            <span className="text-chrome-subtle">work</span>
          </h1>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="border-t border-b border-border sticky top-[73px] bg-white/90 backdrop-blur-md z-40">
        <div className="px-8 max-w-7xl mx-auto">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-5 whitespace-nowrap transition-all relative font-medium ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-transparent hover:bg-secondary text-foreground/50 hover:text-foreground'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {activeCategory === category && (
                  <motion.span 
                    className="ml-2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    ★
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              layout
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="aspect-[4/3] overflow-hidden bg-black mb-6"
                whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-3xl">{project.title}</h3>
                <p className="text-lg opacity-70">{project.description}</p>
                {project.status && (
                  <p className="text-sm text-[#E9B824] font-medium">{project.status}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}