import Layout from '../components/Layout'
import Link from 'next/link'
import { BarChart3, Database, TrendingUp, Code, ArrowRight, Users, Award, Mail, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Data Analytics & Engineering Expert
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Transforming raw data into actionable insights through innovative dashboards, 
          robust data pipelines, and advanced analytics solutions that drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
          >
            View My Work <ArrowRight className="h-4 w-4" />
          </Link>
          <Link 
            href="/about" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-300">Analytics Dashboards Built</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
            <p className="text-gray-600 dark:text-gray-300">Records Processed Daily</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <p className="text-gray-600 dark:text-gray-300">Client Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Interactive Dashboards</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create stunning, interactive dashboards using React, D3.js, and modern visualization 
              libraries that make complex data accessible and actionable for stakeholders.
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <Database className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build scalable data pipelines using Python, Apache Airflow, and cloud platforms 
              to process and transform large datasets efficiently and reliably.
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <TrendingUp className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deliver strategic insights through advanced analytics, machine learning models, 
              and automated reporting systems that drive informed decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <BarChart3 className="h-16 w-16 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Sales Analytics Dashboard</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Real-time Sales Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interactive dashboard tracking sales metrics with real-time updates, predictive analytics, 
                and automated alerts. Built with React, D3.js, and WebSocket connections.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">D3.js</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">WebSocket</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Python</span>
              </div>
              <Link href="/projects" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                View Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="text-center text-white">
                  <Database className="h-16 w-16 mx-auto mb-2" />
                  <p className="text-lg font-semibold">ETL Pipeline System</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Automated ETL Pipeline</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Automated data pipeline processing millions of records daily with error handling, 
                monitoring, and scalable architecture using Apache Airflow and AWS services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Airflow</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AWS</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
              </div>
              <Link href="/projects" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                View Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              "The analytics dashboard transformed how we make decisions. The real-time insights 
              helped us increase revenue by 30% in just three months."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div className="ml-3">
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-gray-500">CEO, TechCorp</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              "Outstanding work on our data pipeline. The automated system processes our data 
              flawlessly and saves us 20+ hours per week."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                MJ
              </div>
              <div className="ml-3">
                <p className="font-semibold">Maria Johnson</p>
                <p className="text-sm text-gray-500">Data Director, Analytics Inc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Transform Your Data?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help you build powerful analytics solutions that drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:your.email@example.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </a>
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
          >
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </Layout>
  )
}