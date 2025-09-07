import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BarChart3, Database } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-blue-600">
            <BarChart3 className="h-8 w-8" />
            <span>Data Analytics Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              About
            </Link>
            <Link href="/projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Projects
            </Link>
            <Link href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}