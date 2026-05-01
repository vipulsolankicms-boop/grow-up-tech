import { motion } from 'motion/react';
import { useState } from 'react';

const images = [
  {
    url: '/images/gallery/sgi01.jpg',
    title: 'Advanced Training Session',
    category: 'Training'
  },
  {
    url: '/images/gallery/sgi02.jpg',
    title: 'Technical Workshop',
    category: 'Training'
  },
  {
    url: '/webapp-imgs/class.png',
    title: 'MicroC@re Training Lab',
    category: 'Training'
  },
  {
    url: '/webapp-imgs/02repair-station.png',
    title: 'Hardware Repair Station',
    category: 'Service'
  },
  {
    url: '/webapp-imgs/02repair-station.png',
    title: 'Expert Laptop Repair',
    category: 'Service'
  },
  {
    url: '/webapp-imgs/cctv.jpg',
    title: 'CCTV Monitoring Setup',
    category: 'Installation'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Our Work & Environment</h2>
            <p className="text-muted-foreground max-w-xl">
              Take a look at our training facilities and some of the technical projects we've completed across Mundra.
            </p>
          </div>
          <div className="flex space-x-2">
            {['All', 'Training', 'Service', 'Installation'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  activeCategory === tab
                    ? 'bg-primary text-white border-primary'
                    : 'border-border hover:bg-primary hover:text-white hover:border-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                  {image.category}
                </span>
                <h4 className="text-white font-bold text-lg">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
