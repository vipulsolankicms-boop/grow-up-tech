import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Mundra's Premier IT Destination</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Learn. Repair. <br />
            <span className="gradient-text">Support. Grow.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Empowering Mundra with world-class computer education at <strong>MicroC@re</strong> and 
            expert IT solutions at <strong>Grow Up Tech</strong>. Your complete digital ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto text-base px-8 h-14" nativeButton={false} render={<a href="#courses" />}>
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 h-14" nativeButton={false} render={<a href="#services" />}>
              IT Services
              <Settings className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">15+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">5000+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Students</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">2500+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Repairs</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-900">
            <img
              src="/webapp-imgs/class.png"
              alt="MicroC@re Training Center Lab"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if image isn't uploaded yet
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/computer-training-center-mundra/1000/800";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-sm font-medium opacity-80 mb-1">MicroC@re Training Center</p>
              <h3 className="text-xl font-bold">Practical Learning Environment</h3>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl flex items-center space-x-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold">Govt. Apr.</p>
              <p className="text-[10px] text-muted-foreground">(GUJ. GOVT. REG. NO F-1526. GUJ. 1347)</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl flex items-center space-x-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold">Expert Support</p>
              <p className="text-[10px] text-muted-foreground">Grow Up Tech Team</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
