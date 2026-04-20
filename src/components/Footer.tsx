import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 dark:bg-zinc-950 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              A complete computer education and IT solutions hub in Mundra. 
              Empowering students with skills and providing expert technical support to businesses and homes.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">IT Services</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Our Courses</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#courses" className="hover:text-primary transition-colors">CCC & Basic Computer</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Tally with GST</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">DTP & Graphic Design</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">AutoCAD</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Programming Basics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-white">IT Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#services" className="hover:text-primary transition-colors">Laptop & Desktop Repair</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">CCTV Installation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Printer Servicing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">AMC Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hardware Troubleshooting</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Business IT Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} MicroC@re & Grow Up Tech. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-zinc-900 border-zinc-800 hover:bg-primary hover:border-primary text-white"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
