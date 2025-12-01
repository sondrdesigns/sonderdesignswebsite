import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Code2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { motion } from 'motion/react';
import { emailjs, emailjsConfig } from '../lib/emailjs';
// Import images as modules for proper Vite processing
import liquidMetalImage from '../assets/48e9a45ec1626552d25413ca5f09009387cfd733.png';
import blendCafeImage from '../assets/a5aba046f347df51b3a9508fa3129c084c4f057b.png';

const featuredProjects = [
  {
    id: 1,
    title: 'Blend Cafe App',
    category: 'Digital',
    description: 'Cafe finder and social network for coffee enthusiasts',
    image: blendCafeImage,
    status: 'In Development',
  },
];

export function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Send newsletter subscription email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.newsletterTemplateId,
        {
          email: email,
          source: 'homepage',
          subscription_date: new Date().toISOString(),
        },
        emailjsConfig.publicKey
      );

      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Error sending newsletter subscription:', err);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  return (
    <div className="pt-20">
      {/* Hero Section - Split screen with liquid metal */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[95vh]">
          {/* Left - Liquid Metal Visual */}
          <motion.div 
            className="relative bg-gradient-to-br from-[#B8C5D6] via-[#D4DCE5] to-[#E8EDF2] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated liquid metal image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full flex items-center justify-center p-12 md:p-20"
            >
              <motion.img
                src={liquidMetalImage}
                alt="Liquid metal design"
                className="w-full h-auto max-w-2xl object-contain drop-shadow-2xl"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="800"
                height="600"
                style={{ 
                  aspectRatio: '4/3',
                  contentVisibility: 'auto'
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  type: "tween" // Better performance than default
                }}
              />
            </motion.div>
            
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="relative bg-white flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="max-w-2xl">
              <motion.h1 
                className="text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-[-0.025em] text-foreground mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block">Web-Design that</span>
                <span className="block text-foreground/70">performs</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                We craft elevated digital experiences where simplicity meets chaos, 
                strategy meets execution, and vision becomes reality.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/work">
                  <motion.button 
                    className="bg-[#7C3238] text-white px-8 py-4 font-medium hover:bg-[#6a2a30] transition-colors w-full sm:w-auto"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Work
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    className="bg-foreground text-white px-8 py-4 font-medium hover:bg-foreground/90 transition-colors w-full sm:w-auto"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Start Project
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Gallery style */}
      <section className="px-8 py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              What we deliver
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl">
              Strategic design and development services that drive results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { 
                icon: Sparkles, 
                title: 'Brand Design', 
                desc: 'Strategic visual identity systems that capture your essence and resonate with your audience' 
              },
              { 
                icon: Code2, 
                title: 'Web Development', 
                desc: 'High-performance websites and applications built with cutting-edge technology and best practices' 
              },
              { 
                icon: Zap, 
                title: 'Digital Strategy', 
                desc: 'Data-driven campaigns and user experiences that amplify your reach and drive engagement' 
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-8">
                  <service.icon size={32} className="text-foreground/40 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl mb-4 tracking-tight">{service.title}</h3>
                <p className="text-foreground/50 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Clean gallery */}
      <section className="px-8 py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Featured work
              </h2>
            </motion.div>
            
            <Link to="/work">
              <motion.button
                className="text-lg font-medium flex items-center gap-2 group text-foreground/60 hover:text-foreground transition-colors"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                View all projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-5 bg-white">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
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
                      style={{ aspectRatio: '4/3' }}
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl tracking-tight group-hover:text-foreground/60 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-foreground/50">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.description}</span>
                    {project.status && (
                      <>
                        <span>•</span>
                        <span className="text-[#E9B824] font-medium">{project.status}</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - More convincing */}
      <section className="px-8 py-32 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              How we work
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl">
              A refined process that transforms ambitious ideas into exceptional digital experiences
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {[
              { 
                num: '01',
                title: 'Discovery & Strategy', 
                desc: 'We begin by deeply understanding your business goals, target audience, and competitive landscape. Through collaborative workshops and research, we define clear objectives and create a strategic roadmap that aligns design decisions with measurable outcomes.' 
              },
              { 
                num: '02',
                title: 'Design & Iteration', 
                desc: 'Our design process emphasizes both aesthetic excellence and functional clarity. We create multiple concepts, gather feedback, and refine iteratively—ensuring every pixel serves a purpose and every interaction feels effortless.' 
              },
              { 
                num: '03',
                title: 'Development & Testing', 
                desc: 'We build with modern technologies and best practices, prioritizing performance, accessibility, and scalability. Rigorous testing across devices and browsers ensures a flawless experience for every user.' 
              },
              { 
                num: '04',
                title: 'Launch & Growth', 
                desc: 'Our partnership doesn\'t end at launch. We provide ongoing support, analyze performance metrics, and continuously optimize to help your digital presence evolve and grow alongside your business.' 
              }
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-6xl md:text-7xl mb-6 text-foreground/10 group-hover:text-foreground/20 transition-colors tracking-tight">
                  {step.num}
                </div>
                <h3 className="text-3xl mb-5 tracking-tight">{step.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-8 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
              Stay in the loop
            </h2>
            <p className="text-xl text-foreground/50 max-w-2xl mx-auto">
              Insights on design, technology, and digital innovation.
            </p>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-14 bg-secondary border-border/50 focus:border-foreground/20"
              required
              disabled={isSubmitting || submitted}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting || submitted}
              className="bg-[#1A374D] text-white h-14 px-8 font-medium hover:bg-[#152d3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : submitted ? 'Subscribed ✓' : 'Subscribe'}
            </Button>
          </motion.form>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-sm bg-red-50 p-3 rounded border border-red-200 max-w-xl mx-auto mt-4"
            >
              {error}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-40 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 halftone-overlay opacity-10" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-8xl mb-12 leading-[0.95] tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to create
            <br />
            something <span className="text-iridescent">extraordinary</span>?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.button
                className="bg-[#E9B824] text-black px-10 py-5 rounded-md font-medium hover:bg-[#d4a520] transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}