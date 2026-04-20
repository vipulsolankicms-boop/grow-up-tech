import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4',
        isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <Button variant="outline" size="sm" className="hidden xl:flex" nativeButton={false} render={<a href="https://wa.me/919687766060" target="_blank" rel="noreferrer" />}>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="https://wa.me/919274750763" target="_blank" rel="noreferrer" />}>
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="hover:bg-primary/10"><Menu className="w-6 h-6" /></Button>} />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-none">
              <div className="flex flex-col h-full bg-white dark:bg-zinc-950">
                <div className="p-8 pt-16 flex-grow overflow-y-auto">
                  <div className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <SheetClose key={link.name} render={<a href={link.href} className="text-2xl font-display font-bold hover:text-primary transition-colors border-b border-border/50 pb-3" />}>
                        {link.name}
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <div className="p-8 bg-zinc-50 dark:bg-zinc-900/50 border-t border-border">
                  <div className="flex flex-col space-y-4">
                    <SheetClose render={<Button variant="outline" className="w-full justify-start h-12 text-base" nativeButton={false} render={<a href="https://wa.me/919687766060" target="_blank" rel="noreferrer" />} />}>
                      <Phone className="w-4 h-4 mr-3 text-primary" />
                      Call: +91 96877 66060
                    </SheetClose>
                    <SheetClose render={<Button className="w-full justify-start h-12 text-base" nativeButton={false} render={<a href="https://wa.me/919274750763" target="_blank" rel="noreferrer" />} />}>
                      <MessageSquare className="w-4 h-4 mr-3" />
                      WhatsApp Inquiry
                    </SheetClose>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
