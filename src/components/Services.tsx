import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/constants';
import { Service } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import * as Icons from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="section-padding bg-zinc-950 text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ServiceBadge className="bg-primary hover:bg-primary mb-4">Grow Up Tech</ServiceBadge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Premium IT & <br />
                <span className="text-primary">Technical Services</span>
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                From individual laptop repairs to large-scale CCTV installations and business AMC support, 
                we provide reliable technical solutions for Mundra.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-zinc-300">
                  <Icons.CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>On-site & Workshop Repairs</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-zinc-300">
                  <Icons.CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Genuine Spare Parts Only</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-zinc-300">
                  <Icons.CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Certified Technical Team</span>
                </div>
              </div>
              <Button size="lg" className="mt-10 w-full sm:w-auto" nativeButton={false} render={<a href="#contact" />}>
                Request a Service
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Settings;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className="bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-colors group h-full overflow-hidden cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    {service.image && (
                      <div className="aspect-video w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <Icons.ChevronRight className="ml-1 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden flex flex-col max-h-[90vh] bg-zinc-900 border-zinc-800 text-white">
          {selectedService && (
            <>
              <div className="relative h-48 sm:h-64 flex-shrink-0 bg-zinc-950 flex items-center justify-center">
                {selectedService.image ? (
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-primary" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-6">
                  <Badge className="w-fit bg-primary hover:bg-primary text-white uppercase tracking-widest text-[10px] mb-2">
                    {selectedService.category}
                  </Badge>
                  <DialogTitle className="text-2xl sm:text-3xl font-display text-white">{selectedService.title}</DialogTitle>
                </div>
              </div>
              
              <div className="flex-grow overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                <DialogDescription className="text-zinc-400 text-base mb-8 leading-relaxed">
                  {selectedService.description}
                </DialogDescription>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 flex items-center text-white">
                      <Icons.ShieldCheck className="w-5 h-5 mr-2 text-primary" />
                      Service Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedService.features?.map((feature, i) => (
                        <div key={i} className="flex items-start p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-sm text-zinc-300">
                          <Icons.CheckCircle2 className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <h5 className="font-bold text-lg mb-1 text-white">Need this service?</h5>
                      <p className="text-sm text-zinc-400">
                        Our technicians are available for on-site visits in Mundra.
                      </p>
                    </div>
                    <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20" nativeButton={false} render={<a href="#contact" onClick={() => setSelectedService(null)} />}>
                      Book Service Now
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ServiceBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${className}`}>
      {children}
    </span>
  );
}
