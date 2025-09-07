import Layout from '../components/Layout'
import { BarChart3, Database, Globe, Github, ExternalLink, Calendar, Users, TrendingUp, Zap } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Customer Analytics Dashboard",
    description: "Real-time customer behavior tracking with predictive analytics and churn detection. Built for a Fortune 500 retail company.",
    longDescription: "A comprehensive analytics solution that processes over 100,000 customer interactions daily, providing real-time insights into customer behavior, purchase patterns, and churn probability. The dashboard features interactive visualizations, automated alerts, and predictive models that helped increase customer retention by 25%.",
    image: "/images/dashboard-preview.jpg",
    technologies: ["React", "D3.js", "Python", "PostgreSQL", "Docker", "AWS"],
    category: "Dashboard",
    githubUrl: "https://github.com/yourusername/customer-dashboard",
    liveUrl: "https://customer-dashboard-demo.com",
    metrics: {
      users: "10,000+",
      dataPoints: "1M+ daily",
      uptime: "99.9%"
    },
    features: [
      "Real-time data visualization with automatic updates",
      "Predictive churn modeling using machine learning",
      "Interactive filtering and drill-down capabilities",
      "Automated reporting and alert system",
      "Mobile-responsive design for executive access"
    ]
  },
  {
    id: 2,
    title: "Supply Chain Data Pipeline",
    description: "Automated ETL pipeline processing supply chain data from multiple sources with anomaly detection and real-time monitoring.",
    longDescription: "Enterprise-grade data pipeline that consolidates supply chain data from 50+ sources including ERP systems, IoT sensors, and third-party APIs. Features advanced anomaly detection algorithms that prevented $2M in potential losses through early identification of supply chain disruptions.",
    image: "/images/pipeline-architecture.jpg",
    technologies: ["Python", "Apache Airflow", "AWS S3", "Snowflake", "Docker", "Kubernetes"],
    category: "Data Engineering",
    githubUrl: "https://github.com/yourusername/supply-chain-pipeline",
    metrics: {
      sources: "50+",
      records: "2M+ daily",
      savings: "$2M+"
    },
    features: [
      "Multi-source data ingestion with smart deduplication",
      "Real-time anomaly detection using statistical models",
      "Automated data quality checks and validation",
      "Scalable cloud architecture with auto-scaling",
      "Comprehensive monitoring and alerting system"
    ]
  },
  {
    id: 3,
    title: "Financial Performance Tracker",
    description: "Interactive financial dashboard with KPI tracking, forecasting capabilities, and automated compliance reporting.",
    longDescription: "Enterprise financial analytics platform serving 500+ users across multiple departments. Integrates with 15+ financial systems to provide unified view of company performance, automated variance analysis, and regulatory compliance reporting.",
    image: "/images/financial-dashboard.jpg",
    technologies: ["Next.js", "Chart.js", "Python", "FastAPI", "Redis", "PostgreSQL"],
    category: "Dashboard",
    githubUrl: "https://github.com/yourusername/financial-tracker",
    liveUrl: "https://financial-tracker-demo.com",
    metrics: {
      users: "500+",
      reports: "100+ automated",
      accuracy: "99.8%"
    },
    features: [
      "KPI monitoring with customizable alerts",
      "Advanced financial forecasting models",
      "Multi-currency support and conversion",
      "Automated Excel/PDF report generation",
      "Role-based access control and security"
    ]
  },
  {
    id: 4,
    title: "IoT Sensor Data Processing",
    description: "Real-time processing and analysis of IoT sensor data with machine learning insights for predictive maintenance.",
    longDescription: "Industrial IoT data processing platform handling 10,000+ sensors across multiple manufacturing facilities. Uses machine learning to predict equipment failures, optimize maintenance schedules, and reduce downtime by 40%.",
    image: "/images/iot-monitoring.jpg",
    technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "TensorFlow", "Redis"],
    category: "Data Engineering",
    githubUrl: "https://github.com/yourusername/iot-data-pipeline",
    metrics: {
      sensors: "10,000+",
      facilities: "15",
      downtime: "-40%"
    },
    features: [
      "Real-time stream processing with Apache Kafka",
      "ML-powered anomaly detection algorithms",
      "Time-series data optimization and compression",
      "Predictive maintenance alerts and scheduling",
      "Custom Grafana dashboards for operations teams"
    ]
  },
  {
    id: 5,
    title: "E-commerce Analytics Suite",
    description: "Comprehensive analytics platform for e-commerce businesses with conversion tracking, A/B testing, and revenue optimization.",
    longDescription: "Full-stack analytics solution for e-commerce platforms processing 500K+ transactions monthly. Includes conversion funnel analysis, customer segmentation, A/B testing framework, and revenue optimization recommendations.",
    image: "/images/ecommerce-analytics.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS Lambda", "Elasticsearch"],
    category: "Dashboard",
    githubUrl: "https://github.com/yourusername/ecommerce-analytics",
    liveUrl: "https://ecommerce-analytics-demo.com",
    metrics: {
      transactions: "500K+ monthly",
      conversion: "+35%",
      revenue: "+$5M"
    },
    features: [
      "Real-time conversion funnel tracking",
      "Advanced customer segmentation algorithms",
      "A/B testing framework with statistical significance",
      "Revenue optimization recommendations",
      "Competitor analysis and market insights"
    ]
  },
  {
    id: 6,
    title: "Healthcare Data Warehouse",
    description: "HIPAA-compliant data warehouse for healthcare analytics with patient outcome tracking and operational efficiency metrics.",
    longDescription: "Secure healthcare data platform serving 5 hospital networks with 100K+ patient records. Enables clinical research, operational analytics, and outcome tracking while maintaining strict HIPAA compliance and data security.",
    image: "/images/healthcare-warehouse.jpg",
    technologies: ["Python", "PostgreSQL", "Apache Spark", "Tableau", "AWS", "Kubernetes"],
    category: "Data Engineering",
    githubUrl: "https://github.com/yourusername/healthcare-warehouse",
    metrics: {
      patients: "100K+",
      hospitals: "5 networks",
      compliance: "100%"
    },
    features: [
      "HIPAA-compliant data architecture and encryption",
      "Patient outcome tracking and analysis",
      "Operational efficiency metrics and reporting",
      "Clinical research data mart and APIs",
      "Advanced security and audit logging"
    ]
  }
]

export default function Projects() {
  const dashboards = projects.filter(p => p.category === "Dashboard")
  const pipelines = projects.filter(p => p.category === "Data Engineering")

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive showcase of data analytics dashboards and engineering solutions 
            that have driven measurable business impact across various industries.
          </p>
        </header>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">$10M+</div>
            <p className="text-gray-600 dark:text-gray-300">Value Generated</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">100K+</div>
            <p className="text-gray-600 dark:text-gray-300">Daily Users</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
            <p className="text-gray-600 dark:text-gray-300">Average Uptime</p>
          </div>
        </div>

        {/* Analytics Dashboards Section */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <BarChart3 className="h-10 w-10 text-blue-600 mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Analytics Dashboards
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Interactive data visualization solutions that transform complex data into actionable insights
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {dashboards.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Data Engineering Section */}
        <section>
          <div className="flex items-center mb-12">
            <Database className="h-10 w-10 text-green-600 mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Data Engineering Pipelines
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Robust, scalable data processing systems that handle millions of records with reliability
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {pipelines.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you build powerful analytics solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your.email@example.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
            >
              Get In Touch
            </a>
            <a 
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Project Image Placeholder */}
      <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="text-center text-white">
            {project.category === "Dashboard" ? (
              <BarChart3 className="h-16 w-16 mx-auto mb-2" />
            ) : (
              <Database className="h-16 w-16 mx-auto mb-2" />
            )}
            <span className="text-lg font-semibold">{project.title}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            project.category === "Dashboard" 
              ? "bg-blue-100 text-blue-800" 
              : "bg-green-100 text-green-800"
          }`}>
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Project Metrics */}
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <div className="text-lg font-bold text-blue-600">{value}</div>
                <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}