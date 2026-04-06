import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah J.', age: 64, quote: 'I was afraid of remote access, but Micore Technologies made it feel so safe. My printer was fixed in 10 minutes!', rating: 5 },
    { name: 'Michael R.', age: 41, quote: 'No more waiting for a tech to come home. These guys are my go-to for all my Wi-Fi troubles.', rating: 5 },
    { name: 'David L.', age: 72, quote: 'They explained everything in plain English. No technical jargon, just results. Highly recommended!', rating: 5 },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-mi-navy font-bold text-4xl mb-4 tracking-tight underline decoration-mi-blue/30 decoration-4 underline-offset-8">Loved by Home Users</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-mi-light/30 border border-gray-100 shadow-sm relative"
            >
              <div className="flex text-mi-yellow mb-6">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-mi-navy/80 italic font-medium leading-relaxed mb-6 text-lg">"{review.quote}"</p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-mi-blue/10 flex items-center justify-center text-mi-blue font-bold">
                    {review.name[0]}
                 </div>
                 <div>
                    <h4 className="text-mi-navy font-bold text-sm">{review.name}</h4>
                    <p className="text-mi-navy/40 text-xs font-semibold">{review.age} years old</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
