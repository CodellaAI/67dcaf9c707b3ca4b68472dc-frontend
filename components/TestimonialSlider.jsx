
"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  
  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])
  
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  }
  
  const currentTestimonial = testimonials[currentIndex]
  
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
        <button 
          onClick={prevTestimonial}
          className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
      </div>
      
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            <div className="text-primary mb-4">
              <FaQuoteLeft size={36} />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
              "{currentTestimonial.content}"
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 flex items-center justify-center text-xs text-gray-500">
                {currentTestimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold">{currentTestimonial.name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{currentTestimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
        <button 
          onClick={nextTestimonial}
          className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
