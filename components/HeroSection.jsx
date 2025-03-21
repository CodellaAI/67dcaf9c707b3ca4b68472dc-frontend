
"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Crafting Digital <span className="text-primary">Experiences</span> That Inspire
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              We design and develop beautiful websites that help businesses grow and connect with their audience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn btn-primary">
                View Our Work
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
            
            <div className="mt-12">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
                <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
                <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
                <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <span className="text-xl font-semibold">Showcase Image</span>
                  <p className="text-sm mt-2">Your project could be here</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-lg shadow-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
