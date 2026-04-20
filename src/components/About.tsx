import { motion } from 'motion/react';
import { GraduationCap, UserCheck, ThumbsUp, Wrench, Timer } from 'lucide-react';
import Logo from './Logo';

const bottomFeatures = [
  {
    icon: GraduationCap,
    text: '15+ Years of Academic & Technical Excellence'
  },
  {
    icon: UserCheck,
    text: 'Certified & Experienced Industry Professionals'
  },
  {
    icon: ThumbsUp,
    text: '100% Practical-Oriented Training Approach'
  },
  {
    icon: Wrench,
    text: 'Authorized Service Center for Multiple Brands'
  },
  {
    icon: Timer,
    text: 'Quick Turnaround Time for Repairs & Support'
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-[#004a99] mb-8 leading-[1.1]">
              Mundra's Trusted Partner for <br />
              <span className="text-[#0056b3]">Education & Technology</span>
            </h2>
            <p className="text-lg text-zinc-700 mb-8 leading-relaxed max-w-xl">
              Founded with a vision to bridge the digital divide in Mundra, our organization brings together 
              two powerhouses: <strong>MicroC@re</strong> for skill development and <strong>Grow Up Tech</strong> for 
              technical excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col sm:flex-row gap-4"
          >
            {/* Image 1: Computer Lab */}
            <div className="relative group flex-1">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform -skew-x-3 group-hover:skew-x-0 transition-transform duration-500">
                <img
                  src="/webapp-imgs/class.png"
                  alt="State-of-the-art Computer Lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Software Icons Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {['Ps', 'Ai', 'Py', 'W'].map((icon) => (
                    <div key={icon} className="w-8 h-8 rounded bg-white/90 shadow-sm flex items-center justify-center text-[10px] font-bold text-primary">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#004a99] text-white py-4 px-6 text-center transform -skew-x-3">
                <p className="font-bold text-sm">State-of-the-art<br />Computer Lab</p>
              </div>
            </div>

            {/* Image 2: Service Center */}
            <div className="relative group flex-1 sm:mt-12">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform -skew-x-3 group-hover:skew-x-0 transition-transform duration-500">
                <img
                  src="/webapp-imgs/unnamed.jpg"
                  alt="Authorized Service Center"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#004a99] text-white py-4 px-6 text-center transform -skew-x-3">
                <p className="font-bold text-sm">Authorized<br />Service Center</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-12 border-t border-blue-100"
        >
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#004a99] mb-4 group-hover:bg-[#004a99] group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-tight leading-tight">
                {feature.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Logos Row */}
        <div className="mt-16 flex justify-end items-center space-x-8 opacity-60">
          <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all">
            <Logo className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
