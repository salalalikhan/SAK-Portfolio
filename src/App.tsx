import React from 'react';
import { Menu, X, Zap, Mail, Github, Linkedin, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">About</a>
                  <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Skills</a>
                  <a href="#experience" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experience</a>
                  <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                  <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900">
          <div className="pt-20 pb-3 space-y-1 px-4">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">About</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Skills</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experience</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-2/3">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Hi There, I'm</span>
                <span className="block text-orange-500">Salal Ali Khan</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl">
                Master's Student in CS | Aspiring Data Analyst | Passionate About Data-Driven Solutions
              </p>
            </div>
            <div className="mt-8 md:mt-0 w-32 md:w-48">
              <img
                src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
                alt="Salal Ali Khan"
                className="rounded-full border-4 border-orange-500 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-8">
            About Me
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Data‐driven and detail‐oriented Master of Applied Computer Science candidate with hands‐on experience in data analysis, visualization (Python, SQL, Tableau).  and predictive modeling. Adept at improving data quality and delivering actionable insights that drive informed business decisions. A strong communicator and critical thinker, I thrive on collaborating in dynamic environments to achieve measurable results.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">Python</span>
                  <span className="text-orange-500">90%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[90%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">SQL</span>
                  <span className="text-orange-500">80%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[80%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">Tableau</span>
                  <span className="text-orange-500">85%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[85%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-white">AWS</span>
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

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Experience
          </h2>
          <div className="space-y-12 max-w-3xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500">Data Quality Analyst</h3>
              <p className="text-gray-400 mt-1">June 2022 – July 2023 | German Aid Program, Peshawar, PK</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Established and enforced data standards across the organization, leveraging data profiling tools (e.g., Python/SQL queries) to identify anomalies, outliers, and inconsistencies.</li>
                <li>• Conducted periodic data audits to assess quality, collaborating with cross‐functional teams to resolve issues (e.g., removing duplicates, correcting errors) and improve data accuracy by 18%.</li>
                <li>•	Coordinated with data governance teams to ensure compliance with organizational policies and regulatory requirements, reducing data‐related compliance risk by 10%.</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500">Data Analyst</h3>
              <p className="text-gray-400 mt-1">April 2021 – March 2022 | United Nations Development Program, Peshawar, PK</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Conducted Exploratory Data Analysis (EDA) on COVID‐related datasets using Python and visualization tools (Tableau, Power BI) to uncover patterns, trends, and anomalies, informing 3 major policy briefs for stakeholders.</li>
                <li>• Developed interactive dashboards for cross‐functional teams, reducing monthly reporting time from 5 days to 2 days and expediting data‐driven decisions.</li>
                <li>•	Collaborated with leadership to translate complex data findings into actionable recommendations, influencing project direction and resource allocation.</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-500">Data Analyst Intern</h3>
              <p className="text-gray-400 mt-1">March 2020 – February 2021 | National Commission for Human Rights, Peshawar, PK</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Analyzed datasets using Python and Excel to support human rights investigations and reporting.
                  <li>•	Identified data inconsistencies, improving the accuracy of official reports used for policy recommendations.</li>
                  <li>•	Collaborated with senior analysts to refine data collection processes, reducing record duplication by 25%.</li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href="https://github.com/salalalikhan/Data-Format-Handler" target="_blank" rel="noopener noreferrer"
              className="block group">
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Data Format Handler</h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            <a href="https://github.com/salalalikhan/Logistic-SGD-Performance" target="_blank" rel="noopener noreferrer"
              className="block group">
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Logistic SGD Performance</h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            <a href="https://github.com/salalalikhan/CNN-CIFAR100-Experiment.git" target="_blank" rel="noopener noreferrer"
              className="block group">
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">CIFAR-CNN Experiment</h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            <a href="https://github.com/salalalikhan/online-retail-analytics" target="_blank" rel="noopener noreferrer"
              className="block group">
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">Retail analytics</h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>

            <a href="https://github.com/salalalikhan/KNN-Classifier-From-Scratch" target="_blank" rel="noopener noreferrer"
              className="block group">
              <div className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <h3 className="text-xl font-bold text-orange-500 mb-2">KNN Classifier From Scratch</h3>
                <p className="text-gray-400">View on GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Contact
          </h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:salalalalikhan@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
            <a href="https://github.com/salalalikhan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/salalalikhan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Phone className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;