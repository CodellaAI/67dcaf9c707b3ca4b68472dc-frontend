
"use client"

import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function TeamMember({ member }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="h-64 bg-gray-300 dark:bg-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
          {member.name}'s Photo
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary mb-3">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          {member.social.twitter && (
            <a href={member.social.twitter} className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
          )}
          {member.social.linkedin && (
            <a href={member.social.linkedin} className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          )}
          {member.social.github && (
            <a href={member.social.github} className="text-gray-500 hover:text-primary transition-colors" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
