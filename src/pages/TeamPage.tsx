import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    id: 1,
    name: 'Toshio Nagai',
    role: 'Lead of Engineering',
    description: 'Leads project management from conception to completion, ensuring seamless execution and delivery of exceptional digital experiences.',
    image: '',
    linkedin: '#',
    email: 'toshio@sondrstudios.com'
  },
  {
    id: 2,
    name: 'Joseph Kim',
    role: 'Lead Visual Architect',
    description: 'Crafts beautiful, functional aesthetics that elevate user experiences. Leads the creative vision and artistic direction for all projects.',
    image: '',
    linkedin: '#',
    email: 'joseph@sondrstudios.com'
  },
  {
    id: 3,
    name: 'Aizen Chung',
    role: 'Project & Systems Lead',
    description: 'Works closely with designers to transform creative ideas into functional code. Develops and implements specific features with precision and expertise.',
    image: '',
    linkedin: '#',
    email: 'aizen@sondrstudios.com'
  },
];

export function TeamPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[clamp(3rem,8vw,9rem)] leading-[0.95] mb-8 tracking-tighter">
            <span className="text-foreground">Meet the </span>
            <span className="text-chrome-subtle">Studio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-foreground/50 leading-relaxed">
            A tight-knit team of designers and engineers pushing boundaries 
            in digital design and development.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={member.id} 
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4 rounded-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm z-10 rounded-md">
                  {member.role.includes('Lead') ? 'Lead' : 'Engineer'}
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  {member.image ? (
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/50">
                      <span className="text-2xl text-foreground/30">Photo Coming Soon</span>
                    </div>
                  )}
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-3">
                    <motion.a 
                      href={member.linkedin}
                      className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                      aria-label="Email"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              <div>
                <h3 className="text-2xl mb-1">{member.name}</h3>
                <p className="opacity-60 mb-3 text-sm">{member.role}</p>
                <p className="text-sm opacity-70 leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-secondary px-8 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Culture
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: 'Collaboration First',
                desc: 'We believe the best work happens when diverse perspectives come together. Our studio fosters open dialogue, mutual respect, and collective growth.'
              },
              {
                title: 'Continuous Learning',
                desc: 'The digital landscape evolves rapidly. We stay ahead through ongoing education, experimentation, and knowledge sharing.'
              },
              {
                title: 'Craft & Precision',
                desc: 'Every pixel, every line of code matters. We approach our work with meticulous attention to detail and a commitment to excellence.'
              },
              {
                title: 'Impact Driven',
                desc: 'We measure success not just by deliverables, but by the positive impact our work has on users and businesses alike.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl mb-4">{item.title}</h3>
                <p className="text-lg opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-6">Want to join us?</h2>
          <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for exceptional design and technology.
          </p>
          <motion.a 
            href="https://linkedin.com/company/sondr-designs/jobs" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7C3238] text-white hover:bg-[#6a2a30] px-8 py-4 rounded-md inline-block transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}