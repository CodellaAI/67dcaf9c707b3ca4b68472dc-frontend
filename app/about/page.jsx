
import Image from 'next/image'
import Link from 'next/link'
import { FaUsers, FaLightbulb, FaCode } from 'react-icons/fa'
import TeamMember from '@/components/TeamMember'

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Designer",
      bio: "Alex has over 8 years of experience in UI/UX design with a focus on creating intuitive user experiences.",
      image: "/team1.jpg",
      social: {
        twitter: "https://twitter.com/alexj",
        linkedin: "https://linkedin.com/in/alexj",
        github: "https://github.com/alexj"
      }
    },
    {
      id: 2,
      name: "Sam Rivera",
      role: "Senior Developer",
      bio: "Sam specializes in frontend development with expertise in React, Next.js and modern JavaScript frameworks.",
      image: "/team2.jpg",
      social: {
        twitter: "https://twitter.com/samr",
        linkedin: "https://linkedin.com/in/samr",
        github: "https://github.com/samr"
      }
    },
    {
      id: 3,
      name: "Taylor Kim",
      role: "Project Manager",
      bio: "Taylor ensures projects are delivered on time and coordinates between clients and the development team.",
      image: "/team3.jpg",
      social: {
        twitter: "https://twitter.com/taylork",
        linkedin: "https://linkedin.com/in/taylork",
        github: "https://github.com/taylork"
      }
    }
  ]

  const values = [
    {
      id: 1,
      title: "Quality First",
      description: "We never compromise on quality. Every pixel and line of code matters to us.",
      icon: <FaCode className="h-10 w-10 text-primary" />
    },
    {
      id: 2,
      title: "Client Collaboration",
      description: "We believe in working closely with our clients to ensure their vision comes to life.",
      icon: <FaUsers className="h-10 w-10 text-primary" />
    },
    {
      id: 3,
      title: "Innovation",
      description: "We stay at the forefront of technology to provide cutting-edge solutions.",
      icon: <FaLightbulb className="h-10 w-10 text-primary" />
    }
  ]

  return (
    <div>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl">
              We're a team of passionate designers and developers creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2020, our company began with a simple mission: to create beautiful, functional websites that help businesses succeed online.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                What started as a small team of freelancers has grown into a full-service digital agency with clients across multiple industries.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We combine technical expertise with creative thinking to deliver solutions that not only look great but also perform exceptionally well.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Company Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(value => (
              <div key={value.id} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for exciting new projects and challenges.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
