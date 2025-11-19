import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { motion } from 'motion/react';
import contactImage from 'figma:asset/b05e348ce9ae7644e189446bd7fb20fd0c7f66ed.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section - Split Layout with Image */}
      <section className="relative min-h-[90vh] bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[90vh]">
          
          {/* Left - Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden bg-secondary/10"
          >
            <img 
              src={contactImage} 
              alt="Vintage communication device" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right - Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 bg-[#0A0A0A] text-white"
          >
            <div className="max-w-xl">
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] mb-12 tracking-tighter">
                <span className="text-white">Ready to </span>
                <span className="text-chrome-subtle">create?</span>
              </h1>
              
              <div className="space-y-8 mb-16">
                <div>
                  <div className="text-sm text-gray-400 mb-3 tracking-wider uppercase">New Projects</div>
                  <a 
                    href="mailto:team@sondrstudios.com"
                    className="text-2xl md:text-3xl hover:text-chrome-subtle transition-colors"
                  >
                    team@sondrstudios.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-400 mb-3 tracking-wider uppercase">Careers</div>
                  <a 
                    href="mailto:future@sondrdesigns.com"
                    className="text-2xl md:text-3xl hover:text-chrome-subtle transition-colors"
                  >
                    future@sondrdesigns.com
                  </a>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-3 tracking-wider uppercase">Phone</div>
                  <a 
                    href="tel:+18087219350"
                    className="text-2xl md:text-3xl hover:text-chrome-subtle transition-colors"
                  >
                    +1 (808) 721-9350
                  </a>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-3 tracking-wider uppercase">Location</div>
                  <div className="text-2xl md:text-3xl">
                    Honolulu, HI
                  </div>
                  <div className="text-sm text-gray-400 mt-2">Remote-first studio</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Asymmetric Grid */}
      <section className="px-8 md:px-12 py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Contact Form - Takes up more space */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-8 md:p-12 border border-border">
                <h2 className="text-3xl md:text-4xl mb-8 tracking-tight">Start a Conversation</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 text-muted-foreground">Your Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-6 text-lg border-2 border-border focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-muted-foreground">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-6 text-lg border-2 border-border focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-muted-foreground">Tell us about your project</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share your vision, goals, and timeline..."
                      required
                      rows={6}
                      className="w-full px-4 py-4 text-lg border-2 border-border focus:border-foreground transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitted}
                    className="w-full md:w-auto bg-foreground hover:bg-foreground/90 text-white px-12 py-6 text-lg flex items-center gap-3 transition-all hover:gap-4"
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Direct Contact Card */}
              <div className="bg-[#8B956D] text-white p-8">
                <h3 className="text-2xl mb-6 tracking-tight">Direct Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:team@sondrstudios.com"
                    className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                  >
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm opacity-80">Email</div>
                      <div className="text-lg">team@sondrstudios.com</div>
                    </div>
                  </a>
                  <a 
                    href="tel:+18087219350"
                    className="flex items-start gap-4 group hover:translate-x-1 transition-transform"
                  >
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm opacity-80">Phone</div>
                      <div className="text-lg">+1 (808) 721-9350</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm opacity-80">Location</div>
                      <div className="text-lg">Honolulu, HI</div>
                      <div className="text-sm opacity-60 mt-1">Remote-first</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-[#D4A574] text-white p-8">
                <h3 className="text-2xl mb-4 tracking-tight">Quick Response</h3>
                <p className="text-lg opacity-90">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="px-8 md:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-12 tracking-tight">Other Ways to Connect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://instagram.com/sondr.designs"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-border hover:border-foreground p-8 transition-all hover:-translate-y-1 group"
              >
                <Instagram className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <div className="text-sm text-muted-foreground mb-2">Follow Us</div>
                <div className="text-xl mb-2">Instagram</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  @sondr.designs
                </div>
              </a>

              <a 
                href="https://linkedin.com/company/sondr-designs"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-border hover:border-foreground p-8 transition-all hover:-translate-y-1 group"
              >
                <Linkedin className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <div className="text-sm text-muted-foreground mb-2">Connect</div>
                <div className="text-xl mb-2">LinkedIn</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Sondr Designs
                </div>
              </a>

              <a 
                href="https://x.com/sondrdesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-border hover:border-foreground p-8 transition-all hover:-translate-y-1 group"
              >
                <svg className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <div className="text-sm text-muted-foreground mb-2">Follow</div>
                <div className="text-xl mb-2">X</div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  @sondrdesigns
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}