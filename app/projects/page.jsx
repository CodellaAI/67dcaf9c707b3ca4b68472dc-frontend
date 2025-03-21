
import ProjectCard from '@/components/ProjectCard'
import { useState } from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product listings, cart functionality, and checkout process.",
      image: "/project1.jpg",
      category: "e-commerce",
      tags: ["Next.js", "TailwindCSS", "Frontend"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio site for a photographer showcasing their work with a minimalist design.",
      image: "/project2.jpg",
      category: "portfolio",
      tags: ["React", "CSS", "Animation"]
    },
    {
      id: 3,
      title: "Dashboard UI",
      description: "Administrative dashboard with data visualization, user management, and reporting features.",
      image: "/project3.jpg",
      category: "dashboard",
      tags: ["UI/UX", "Charts", "Admin"]
    },
    {
      id: 4,
      title: "Recipe App",
      description: "Mobile-friendly application for browsing, saving, and sharing cooking recipes.",
      image: "/project4.jpg",
      category: "app",
      tags: ["React", "Mobile", "API"]
    },
    {
      id: 5,
      title: "Real Estate Website",
      description: "Property listing site with search functionality, filters, and interactive maps.",
      image: "/project5.jpg",
      category: "real-estate",
      tags: ["Next.js", "Maps", "Filters"]
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Content management system for creating and publishing blog posts with comments.",
      image: "/project6.jpg",
      category: "blog",
      tags: ["CMS", "Content", "Frontend"]
    }
  ]

  return (
    <div>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl">
              Explore our portfolio of work across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="px-4 py-2 rounded-full bg-primary text-white">
                All Projects
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                E-commerce
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                Portfolio
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                Dashboard
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                Mobile Apps
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always excited to take on new challenges and create something amazing together.
            Let's discuss your ideas and turn them into reality.
          </p>
          <a href="/contact" className="btn btn-primary">
            Start a Project
          </a>
        </div>
      </section>
    </div>
  )
}
