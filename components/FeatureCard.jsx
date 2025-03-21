
"use client"

import { motion } from 'framer-motion'

export default function FeatureCard({ feature }) {
  return (
    <motion.div 
      className="card p-6 hover:-translate-y-2"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </motion.div>
  )
}
