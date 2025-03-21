
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function ProjectShowcase({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }
  
  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }
  
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
