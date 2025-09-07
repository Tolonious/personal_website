import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Copyright */}
          <div className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-4 md:mb-0">
            <p className="flex items-center gap-1 justify-center md:justify-start">
              © 2025 Your Name. Made with <Heart className="h-4 w-4 text-red-500" /> and Next.js
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}