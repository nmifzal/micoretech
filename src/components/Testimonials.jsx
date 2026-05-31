import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Kavitha R.",
      age: 64,
      quote:
        "I was afraid of remote access, but Micore Technologies made it feel so safe. My printer was fixed in 10 minutes!",
      rating: 5,
    },
    {
      name: "Christopher",
      age: 41,
      quote:
        "No more waiting for a tech to come home. These guys are my go-to for all my Wi-Fi troubles.",
      rating: 5,
    },
    {
      name: "Suresh M.",
      age: 72,
      quote:
        "They explained everything in plain English. No technical jargon, just results. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rajesh K.",
      age: 35,
      quote:
        "Perfect for my home office setup. They configured Outlook, fixed my slow Windows performance, and sorted out my OneDrive issues in one session.",
      rating: 5,
    },
    {
      name: "Priya S.",
      age: 28,
      quote:
        "Super fast and completely secure. I was having trouble with malware and setting up my new printer, but they resolved everything remotely. Best tech concierge ever!",
      rating: 5,
    },
    {
      name: "Aisha N.",
      age: 34,
      quote:
        "As a freelancer, I can't afford internet downtime. Micore diagnosed my router setup and optimized my Wi-Fi speeds in minutes. Amazing service!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const maxIndex = isMobile ? reviews.length - 1 : reviews.length - 3;

  // Reset current index if it exceeds max index during resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [isMobile, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); // Auto-rotate every 8 seconds
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-mi-navy font-bold text-4xl mb-4 tracking-tight underline decoration-mi-blue/30 decoration-4 underline-offset-8">
            Trusted by Families & Professionals
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-gray-100 bg-white hover:bg-mi-navy hover:text-white transition-all duration-300 shadow-md cursor-pointer shrink-0 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Testimonial Track Wrapper */}
          <div className="w-full overflow-hidden py-4">
            <motion.div
              animate={{ 
                x: isMobile 
                  ? `calc(-${currentIndex} * (100% + 32px))` 
                  : `calc(-${currentIndex} * (100% + 32px) / 3)` 
              }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
              className="flex gap-8 w-full"
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className={`p-8 rounded-2xl bg-mi-light/30 border border-gray-100 shadow-sm relative flex flex-col justify-between h-full min-h-[220px] shrink-0 ${
                    isMobile ? "w-full" : "w-[calc((100%-64px)/3)]"
                  }`}
                >
                  <div>
                    <div className="flex text-mi-yellow mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-mi-navy/80 italic font-medium leading-relaxed mb-6 text-base">
                      "{review.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-mi-blue/10 flex items-center justify-center text-mi-blue font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="text-mi-navy font-bold text-sm">
                        {review.name}
                      </h4>
                      <p className="text-mi-navy/40 text-xs font-semibold">
                        {review.age} years old
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-gray-100 bg-white hover:bg-mi-navy hover:text-white transition-all duration-300 shadow-md cursor-pointer shrink-0 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'w-8 bg-mi-blue' : 'w-2.5 bg-mi-blue/20 hover:bg-mi-blue/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
