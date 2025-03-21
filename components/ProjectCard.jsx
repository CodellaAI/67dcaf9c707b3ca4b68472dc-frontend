
"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      className="card overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 bg-gray-300 dark:bg-gray-700">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
          {project.image ? 'Project Image' : 'No Image Available'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags && project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.id}`} className="text-primary font-medium hover:underline">
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
