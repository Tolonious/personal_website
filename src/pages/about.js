import Layout from '../components/Layout'
import { User, Code, Database, TrendingUp, Award, MapPin, Calendar, Download } from 'lucide-react'

export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Data Analytics Professional & Engineering Enthusiast
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Alex Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Senior Data Analytics Engineer
              </p>
              <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>5+ Years Experience</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate data analytics professional with over 5 years of experience 
                  transforming complex datasets into actionable business insights. My journey 
                  began with a computer science degree and a fascination for patterns hidden 
                  in data, which has evolved into building sophisticated analytics dashboards 
                  and data engineering pipelines for Fortune 500 companies.
                </p>
                <p>
                  I specialize in creating interactive dashboards that make complex data 
                  accessible to stakeholders at all levels. My technical expertise spans 
                  modern web technologies like React and Next.js, data visualization libraries 
                  such as D3.js and Chart.js, and cloud-based data processing platforms 
                  including AWS, Azure, and Google Cloud.
                </p>
                <p>
                  Throughout my career, I've successfully delivered over 50 analytics projects, 
                  processed millions of records daily, and helped organizations increase their 
                  operational efficiency by an average of 35%. I'm particularly proud of 
                  developing real-time monitoring systems that have prevented critical business 
                  disruptions and saved companies hundreds of thousands of dollars.
                </p>
                <p>
                  When I'm not analyzing data or building pipelines, I enjoy contributing to 
                  open-source projects, mentoring junior developers, and staying up-to-date 
                  with the latest trends in data science, machine learning, and analytics 
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Frontend Development
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center justify-between">
                  <span>• React.js & Next.js</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• D3.js & Chart.js</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• TypeScript</span>
                  <span className="text-green-600 font-semibold">Advanced</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Tailwind CSS</span>
                  <span className="text-green-600 font-semibold">Advanced</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Responsive Design</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Data Engineering
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center justify-between">
                  <span>• Python & Pandas</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Apache Airflow</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• SQL & NoSQL</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• AWS / Azure / GCP</span>
                  <span className="text-green-600 font-semibold">Advanced</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Docker & Kubernetes</span>
                  <span className="text-green-600 font-semibold">Advanced</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Analytics & BI
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center justify-between">
                  <span>• Tableau / Power BI</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Jupyter Notebooks</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Apache Spark</span>
                  <span className="text-green-600 font-semibold">Advanced</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Machine Learning</span>
                  <span className="text-green-600 font-semibold">Advanced</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Statistical Analysis</span>
                  <span className="text-blue-600 font-semibold">Expert</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Senior Data Analytics Engineer
                  </h3>
                  <p className="text-blue-600 font-medium text-lg">TechCorp Solutions</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">2022 - Present</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Led development of real-time analytics dashboards serving 10,000+ users daily</li>
                <li>• Designed and implemented ETL pipelines processing 2M+ records daily with 99.9% uptime</li>
                <li>• Reduced report generation time by 80% through process automation and optimization</li>
                <li>• Collaborated with cross-functional teams to define KPIs resulting in $2M cost savings</li>
                <li>• Mentored 5 junior developers and established data engineering best practices</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-green-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Data Analyst
                  </h3>
                  <p className="text-green-600 font-medium text-lg">Analytics Pro Inc</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">2020 - 2022</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Built 25+ interactive dashboards using React, D3.js, and modern visualization libraries</li>
                <li>• Performed statistical analysis and A/B testing that improved conversion rates by 25%</li>
                <li>• Created automated reporting systems reducing manual work by 60%</li>
                <li>• Implemented data quality monitoring preventing $500K in potential revenue loss</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-purple-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Junior Data Analyst
                  </h3>
                  <p className="text-purple-600 font-medium text-lg">StartupData Co</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">2019 - 2020</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Developed Python scripts for data extraction and transformation from multiple sources</li>
                <li>• Created comprehensive data documentation and established data governance policies</li>
                <li>• Built foundational skills in SQL, Python, and business intelligence tools</li>
                <li>• Supported senior analysts in delivering client projects and presentations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-lg">Master of Science in Data Science</p>
                  <p className="text-blue-600">Stanford University</p>
                  <p className="text-sm">2017-2019 • GPA: 3.8/4.0</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-lg">Bachelor of Science in Computer Science</p>
                  <p className="text-green-600">UC Berkeley</p>
                  <p className="text-sm">2013-2017 • Magna Cum Laude</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold">AWS Certified Data Analytics - Specialty</p>
                  <p className="text-orange-600">Amazon Web Services • 2024</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold">Tableau Desktop Certified Professional</p>
                  <p className="text-blue-600">Tableau • 2023</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">Google Cloud Professional Data Engineer</p>
                  <p className="text-green-600">Google Cloud • 2023</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold">Microsoft Azure Data Scientist Associate</p>
                  <p className="text-purple-600">Microsoft • 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Beyond Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">Open Source</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Contributing to data visualization libraries and maintaining analytics tools on GitHub
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Mentoring</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Teaching data analytics to aspiring professionals through workshops and online courses
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Technology</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Exploring emerging trends in AI, machine learning, and data visualization technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}