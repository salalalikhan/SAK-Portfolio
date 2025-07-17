import React from 'react';
import { Menu, X, Zap, Mail, Github, Linkedin, Phone } from 'lucide-react';
import profilePic from './assets/profile.jpg';

// Fallback icons for AWS & Power BI
import { FaAws } from 'react-icons/fa';
import { BiBarChart } from 'react-icons/bi';

// Keep using these if they exist in your version of react-icons:
import {
  SiPython,
  SiMysql,
  SiApacheairflow,
  SiApachekafka,
  SiSnowflake,
  SiTableau // if 'SiTableau' also errors, see note below
} from 'react-icons/si';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* ========== NAVIGATION ========== */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#about"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Skills
                  </a>
                  <a
                    href="#experience"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ========== MOBILE MENU ========== */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900">
          <div className="pt-20 pb-3 space-y-1 px-4">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* ========== HERO SECTION ========== */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-2/3">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Hi There, I'm</span>
                <span className="block text-orange-500">Salal Ali Khan</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl">
                Data Engineer & AI Enthusiast | Master's in Applied Computer Science
              </p>
            </div>
            <div className="mt-8 md:mt-0 w-32 md:w-48">
              <img
                src={profilePic}
                alt="Salal Ali Khan"
                className="rounded-full border-4 border-orange-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-8">
            About Me
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Data Engineer with a Master’s in Computer Science and hands-on experience building scalable ETL pipelines, cloud data platforms, and real-time streaming systems. Proficient in Python, SQL, Airflow, and AWS/GCP. Proven track record in delivering reliable data solutions that drive business insights and analytics. Passionate about clean data architecture, automation, and performance optimization.
          </p>
        </div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Left Column */}
            <div className="bg-gray-800 p-6 rounded-lg">
              {/* Python */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <SiPython /> Python
                  </span>
                  <span className="text-orange-500">90%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[90%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* SQL */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <SiMysql /> SQL
                  </span>
                  <span className="text-orange-500">80%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[80%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* Power BI (Fallback Icon) */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <BiBarChart /> Power BI
                  </span>
                  <span className="text-orange-500">80%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[80%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* Tableau (if SiTableau works in your version) */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <SiTableau /> Tableau
                  </span>
                  <span className="text-orange-500">85%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[85%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gray-800 p-6 rounded-lg">
              {/* Snowflake */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <SiSnowflake /> Snowflake
                  </span>
                  <span className="text-orange-500">90%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[90%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* AWS (Fallback Icon) */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <FaAws /> AWS
                  </span>
                  <span className="text-orange-500">65%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[70%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* Apache Airflow */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <SiApacheairflow /> Apache Airflow
                  </span>
                  <span className="text-orange-500">80%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[80%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>

              {/* Apache Kafka */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white flex items-center gap-2">
                    <SiApachekafka /> Apache Kafka
                  </span>
                  <span className="text-orange-500">70%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[70%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Experience
          </h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            {/* Data Engineer II */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500">Data Engineer II</h3>
              <p className="text-gray-400 mt-1">
                June 2022 – July 2023 | German Aid Program, Peshawar, PK
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>
                  • Built data pipelines for health programs using Python, SQL and Apache Airflow to process patient records and health facility data with strong accuracy
                </li>
                <li>
                  • Set up Snowflake data warehouse for health information systems, helping teams monitor medical supplies and track patient outcomes in real-time
                </li>
                <li>
                  • Created cloud-based health data systems on AWS that connected electronic health records across 15+ rural health facilities
                </li>
                <li>
                  • Improved health data queries and reports, making patient information 25% faster to access for doctors and healthcare workers
                </li>
                <li>
                  • Worked with healthcare teams and program managers to ensure patient data was secure and met compliance standards
                </li>
                <li>
                  • Developed data quality monitoring systems that automatically flagged inconsistencies in health records, improving data reliability by 30%
                </li>
                <li>
                  • Created automated reporting workflows that generated weekly health program updates for donors and government partners
                </li>
                <li>
                  • Implemented backup and disaster recovery procedures for critical health databases, ensuring 99.9% uptime during emergencies
                </li>
                <li>
                  • Trained local staff on data management best practices and provided technical documentation for system maintenance
                </li>
              </ul>
            </div>

            {/* Data Analyst */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500">Data Analyst</h3>
              <p className="text-gray-400 mt-1">
                April 2021 – March 2022 | United Nations Development Program, Peshawar, PK
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>
                  • Analyzed COVID-19 datasets from multiple sources (500K+ records) using Python and SQL to support pandemic response planning and policy decisions
                </li>
                <li>
                  • Created interactive Power BI dashboards to track COVID-19 metrics and trends, helping 25+ team members across 5 departments monitor the situation
                </li>
                <li>
                  • Built automated tools in Python to clean and validate COVID-19 data, saving the team 14% of manual work each week
                </li>
                <li>
                  • Made clear charts and reports using Tableau and Excel to help decision-makers understand COVID-19 data and plan responses
                </li>
                <li>
                  • Used statistical methods to find patterns in COVID-19 data that helped measure how well different programs were working
                </li>
                <li>
                  • Collaborated with epidemiologists and public health experts to validate COVID-19 data models and ensure accurate trend forecasting
                </li>
                <li>
                  • Created data collection templates and guidelines that standardized COVID-19 reporting across different regions and partners
                </li>
                <li>
                  • Performed geospatial analysis to map COVID-19 hotspots and vulnerable populations, supporting targeted intervention strategies
                </li>
                <li>
                  • Maintained secure databases of sensitive health information while ensuring data privacy and ethical research standards
                </li>
                <li>
                  • Presented findings to senior management and international partners through clear data stories and executive summaries
                </li>
              </ul>
            </div>

            {/* Data Analyst Intern */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500">Data Analyst Intern</h3>
              <p className="text-gray-400 mt-1">
                March 2020 – February 2021 | National Commission for Human Rights, Peshawar, PK
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>
                  • Analyzed datasets using Python and Excel to support human rights investigations
                  and reporting.
                </li>
                <li>
                  • Identified data inconsistencies, improving the accuracy of official reports
                  used for policy recommendations.
                </li>
                <li>
                  • Collaborated with senior analysts to refine data collection processes,
                  reducing record duplication by 25%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Project 1 */}
            <a
              href="https://github.com/salalalikhan/Data-Format-Handler"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  Data Format Handler
                </h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            {/* Project 2 */}
            <a
              href="https://github.com/salalalikhan/Halifax-bar-sentiment"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  Halifax Bars, Reddit Sentiment Analysis
                </h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            {/* Project 3 */}
            <a
              href="https://github.com/salalalikhan/CNN-CIFAR100-Experiment.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  CIFAR-CNN Experiment
                </h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            {/* Project 4 */}
            <a
              href="https://github.com/salalalikhan/student-success-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  Student Success Tracking Platform
                </h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            {/* Project 5 */}
            <a
              href="https://github.com/salalalikhan/KNN-Classifier-From-Scratch"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">
                  KNN Classifier From Scratch
                </h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Contact
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:salalalalikhan@gmail.com"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Mail className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/salalalikhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/salalalikhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="tel:+1234567890"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              <Phone className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
