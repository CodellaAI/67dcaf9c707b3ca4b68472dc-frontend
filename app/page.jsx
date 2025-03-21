
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import HeroSection from '@/components/HeroSection'
import FeatureCard from '@/components/FeatureCard'
import ProjectShowcase from '@/components/ProjectShowcase'
import TestimonialSlider from '@/components/TestimonialSlider'

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Responsive Design",
      description: "Layouts that automatically adapt to any device size",
      icon: "💻"
    },
    {
      id: 2,
      title: "Modern UI",
      description: "Clean and intuitive user interfaces with smooth animations",
      icon: "✨"
    },
    {
      id: 3,
      title: "Performance Optimized",
      description: "Fast loading times and optimized assets for the best experience",
      icon: "⚡"
    }
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Store",
      description: "A modern online shopping experience",
      image: "/project1.jpg",
      tags: ["Next.js", "TailwindCSS", "Frontend"]
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "Showcase your work with style",
      image: "/project2.jpg",
      tags: ["React", "CSS", "Animation"]
    },
    {
      id: 3,
      title: "Dashboard UI",
      description: "Data visualization and management interface",
      image: "/project3.jpg",
      tags: ["UI/UX", "Charts", "Admin"]
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Jane Cooper",
      role: "CEO at ABC Corp",
      content: "Working with this team has been an absolute pleasure. The attention to detail and commitment to quality is outstanding.",
      avatar: "/avatar1.jpg"
    },
    {
      id: 2,
      name: "John Smith",
      role: "Marketing Director",
      content: "The designs exceeded our expectations. Our conversion rates have increased by 30% since launching the new interface.",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Product Owner",
      content: "I've worked with many developers, but this team stands out for their technical expertise and communication skills.",
      avatar: "/avatar3.jpg"
    }
  ]

  return (
    <div>
      <HeroSection />
      
      <section className="section bg-light dark:bg-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our expertise in frontend development helps businesses create memorable digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out some of our latest projects and see what we can do
            </p>
          </div>
          
          <ProjectShowcase projects={projects} />
          
          <div className="text-center mt-12">
            <Link href="/projects" className="btn btn-primary inline-flex items-center">
              View All Projects <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
      
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Let's create something amazing together. Get in touch to discuss your ideas.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
