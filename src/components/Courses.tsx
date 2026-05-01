import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COURSES } from '@/constants';
import { Course } from '@/types';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import * as Icons from 'lucide-react';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Define category-based colors
  const categoryColors: Record<string, string> = {
    'Basic': 'from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/50',
    'Professional': 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/50',
    'Technical': 'from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-200/50 dark:border-orange-800/50',
    'Diploma': 'from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-800/50',
  };

  return (
    <section id="courses" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">MicroC@re Training Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-relevant computer courses designed to make you job-ready. 
              From basics to advanced technical skills, we cover it all.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course, index) => {
            const IconComponent = (Icons as any)[course.icon] || Icons.Monitor;
            
            const colorClass = categoryColors[course.category] || 'from-gray-500/20 to-slate-500/20 text-gray-600 dark:text-gray-400 border-gray-200/50 dark:border-gray-800/50';

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={cn(
                    "h-full flex flex-col relative overflow-hidden transition-all duration-500 group cursor-pointer border-2",
                    "hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm",
                    colorClass.split(' ').slice(-1)[0] // Use the border color from the map
                  )}
                  onClick={() => setSelectedCourse(course)}
                >
                  {/* Background Gradient Accent */}
                  <div className={cn(
                    "absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40 bg-gradient-to-br",
                    colorClass.split(' ').slice(0, 2).join(' ')
                  )} />

                  <CardHeader className="relative z-10 pb-2">
                    <div className="flex items-center justify-between mb-6">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br shadow-inner",
                        colorClass.split(' ').slice(0, 2).join(' ')
                      )}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <Badge variant="outline" className={cn("font-bold tracking-wider uppercase text-[10px] px-3 py-1", colorClass)}>
                        {course.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl font-display font-bold leading-tight group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center text-xs font-medium text-muted-foreground mt-2">
                      <Icons.Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 flex-grow pt-4">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
                      {course.description}
                    </CardDescription>
                    
                    <div className="mt-6 space-y-2">
                      {course.syllabus?.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-center text-[11px] text-muted-foreground/70">
                          <div className={cn("w-1 h-1 rounded-full mr-2", colorClass.split(' ').slice(0, 1)[0].replace('from-', 'bg-').replace('/20', ''))} />
                          {item}
                        </div>
                      ))}
                      {course.syllabus && course.syllabus.length > 3 && (
                        <div className="text-[10px] font-bold text-primary/60 ml-3">
                          + {course.syllabus.length - 3} more topics
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="relative z-10 pt-6">
                    <div className="w-full flex items-center justify-between group/footer">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                        Explore Syllabus
                      </span>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icons.ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Dialog open={!!selectedCourse} onOpenChange={(open) => !open && setSelectedCourse(null)}>
          <DialogContent className="max-w-2xl p-0 overflow-hidden flex flex-col max-h-[90vh]">
            {selectedCourse && (
              <>
                <div className={cn(
                  "relative h-48 sm:h-56 flex-shrink-0 flex flex-col justify-end p-8 bg-gradient-to-br",
                  categoryColors[selectedCourse.category] || 'from-gray-500 to-slate-500'
                )}>
                  <div className="absolute top-6 right-8 opacity-10">
                    {(Icons as any)[selectedCourse.icon] ? 
                      React.createElement((Icons as any)[selectedCourse.icon], { size: 120 }) : 
                      <Icons.Monitor size={120} />
                    }
                  </div>
                  <div className="relative z-10">
                    <Badge variant="outline" className="w-fit text-white border-white/30 uppercase tracking-widest text-[10px] mb-3 bg-white/10 backdrop-blur-md">
                      {selectedCourse.category} • {selectedCourse.duration}
                    </Badge>
                    <DialogTitle className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                      {selectedCourse.title}
                    </DialogTitle>
                  </div>
                </div>
                
                <div className="flex-grow overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                  <DialogDescription className="text-muted-foreground text-base mb-8 leading-relaxed">
                    {selectedCourse.description}
                  </DialogDescription>

                  <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center text-foreground">
                        <Icons.BookOpen className="w-5 h-5 mr-2 text-primary" />
                        Course Syllabus
                      </h4>
                      <ul className="space-y-3">
                        {selectedCourse.syllabus?.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <Icons.CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center text-foreground">
                          <Icons.Star className="w-5 h-5 mr-2 text-primary" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {selectedCourse.features?.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm text-muted-foreground">
                              <Icons.Zap className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                        <h5 className="font-bold text-sm mb-2 text-foreground">Ready to Enroll?</h5>
                        <p className="text-xs text-muted-foreground mb-4">
                          Contact us today to book your seat or get a free demo class at our Mundra center.
                        </p>
                        <Button className="w-full shadow-lg shadow-primary/20" nativeButton={false} render={<a href="#contact" onClick={() => setSelectedCourse(null)} />}>
                          Inquire Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-primary/90 text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Not sure which course to choose?</h3>
            <p className="opacity-80">Get a free career counseling session with our experts.</p>
          </div>
          <Button size="lg" variant="secondary" className="px-8" nativeButton={false} render={<a href="#contact" />}>
            Book Free Counseling
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

