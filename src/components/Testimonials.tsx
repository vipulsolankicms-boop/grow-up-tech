import { motion } from 'motion/react';
import { TESTIMONIALS } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground">Trusted by thousands of students and hundreds of businesses in Mundra.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg bg-white dark:bg-zinc-900 relative">
                <div className="absolute top-6 right-6 text-primary/10">
                  <Quote className="w-12 h-12" />
                </div>
                <CardContent className="pt-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={`https://picsum.photos/seed/${testimonial.name}/100/100`} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="font-bold text-sm">{testimonial.name}</h5>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.type}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
