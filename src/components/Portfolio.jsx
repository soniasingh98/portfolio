import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Award, User, Briefcase, MessageSquare } from 'lucide-react';
import Profile from "../images/profile.jpg";
import ANN from "../images/ann.png";
import Aromara from "../images/Aromara.png";
import Shrinkly from "../images/shrinkly.png";
import EmailReply from "../images/Email_Reply_Generator.png"
import PracticeQ from "../images/practiceq.png"
import Chatbot from "../images/chatbot.png"
import RNN from "../images/rnn.png"
import SyncI from "../images/synci.png"
import Boister from "../images/boister.png"
import Uptech from "../images/Uptech.png"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

const projectCategories = [
    {
      title: "Java & Spring Boot",
      color: "from-orange-500 to-red-500",
      projects: [
        {
          title: "URL Shortener",
          description: "Developed a custom URL shortening service that converts long URLs into compact, shareable links.",
          tech: ["Spring Boot", "Java", "React", "MySQL", "JWT", "Docker","Spring Security", "Caching"],
          image: Shrinkly,
          src: "https://github.com/soniasingh98/shrinkly",
          link: "https://sonia-shrinkly.netlify.app"
        },
        {
          title: "Email Reply Generator",
          description:"AI-powered web application that takes an input email and automatically generates a professional, context-aware reply",
          tech: ["Spring Boot", "Java", "Spring AI", "LLM", "React"],
          image: EmailReply,
          src:"https://github.com/soniasingh98/Email-Reply-Generator",
          link: "https://sonia-emailcraft-ai.netlify.app"
        }
      ]
    },
    {
      title: "Golang & MERN",
      color: "from-cyan-500 to-blue-500",
      projects: [
        {
          title: "Internal Collaboration Platform",
          description: "Role-based internal collaboration platform for employees to showcase personal works and projects.",
          tech: ["Golang", "React", "MongoDB", "Docker", "JWT"],
          image: SyncI,
          src:"https://github.com/soniasingh98/SyncI",
          link: "https://sonia-synci.netlify.app"
        },
        {
          title: "Artist Blogging Platform",
          description: "Platform where artists can publish blogs describing their artwork, creative process, inspirations, and behind-the-scenes details",
          tech: ["MongoDB", "Express.js", "React", "Node.js","JWT"],
          image: Boister,
          src:"https://github.com/soniasingh98/Boister",
          link: "https://sonia-singh-boister-craftapp.onrender.com"
        }
      ]
    },
    {
      title: "GenAI & Machine Learning",
      color: "from-purple-500 to-pink-500",
      projects: [
        {
          title: "AI-Powered Technical Question Generator",
          description: "A web application with AI-generated technical questions, served by a Python (FastAPI) backend and a Next.js frontend.",
          tech: ["FastAPI", "llama-3.1-8b-instant", "Next.js", "Python", "LangChain", "Groq", "Pydantic"
          ],
          image: PracticeQ,
          src:"https://github.com/soniasingh98/pracTiceQ",
          link: "https://practiceq-sonia.vercel.app"
        },
        {
          title: "Chatbot",
          description: " A sleek, interactive chatbot built with FastAPI and React.",
          tech: ["Python", "llama-3.1-8b-instant", "Groq", "FastAPI", "Pydantic","React","Tailwind CSS"],
          image: Chatbot,
          src:"https://github.com/soniasingh98/Chatbot",
          link: "https://chatbot-sonia.vercel.app"
        },
        {
          title: "Movie Review Sentiment Analysis",
          description: " Implemented a sentiment analysis model to classify movie reviews as positive or negative.",
          tech: ["Python", "RNN", "Streamlit", "Numpy", "Tensorflow"],
          image: RNN,
          src: "https://github.com/soniasingh98/Movie_Sentiment_Analysis_SimpleRNN",
          link: "https://moviesentimentanalysissimplernn-soniasingh.streamlit.app"
        },
        {
          title: "Customer Churn Prediction",
          description: " Deep learning model to predict customer churn using behavioral and transactional data.",
          tech: ["Python", "ANN", "Streamlit", "Numpy", "Tensorflow", "Pandas"],
          image: ANN,
          src:"https://github.com/soniasingh98/customer_churn_prediction_ann",
          link: "https://customerchurnpredictionann-ngbhcoprcjq3datmlao6e7.streamlit.app"
        }
      ]
    },
    {
      title: "React & Frontend",
      color: "from-blue-500 to-purple-500",
      projects: [
        {
          title: "E-Commerce",
          description: "Built a fully functional e-commerce website with responsive UI, product catalog and shopping cart.",
          tech: ["Next.js", "Redux", "Tailwind CSS"],
          image: Aromara,
          src: "https://github.com/soniasingh98/Aromara",
          link: "https://aromara.netlify.app"
        },
        {
          title: "Tech News Hub",
          description: "Enables personalized browsing of tech news based on user interests.",
          tech: ["React", "External API", "HTML", "CSS"],
          image: Uptech,
          src:"https://github.com/soniasingh98/UpTech",
          link: "https://uptech-sonia-singh.netlify.app"
        }
      ]
    },
  ];

const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Core Java", level: 95, icon: "☕" },
        { name: "C++", level: 90, icon: "⚙️" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
        { name: "Golang", level: 75, icon: "🐹" },
      ]
    }, {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 90, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "⚓" },
        { name: "Jenkins", level: 75, icon: "🔧" },
        { name: "AWS", level: 55, icon: "☁️" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "HTML 5", level: 85, icon: "🌐" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 95, icon: "🍃" },
        { name: "Spring MVC", level: 90, icon: "🌱" },
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Hibernate/JPA", level: 90, icon: "💾" },
      ]
    },
    
    {
      title: "Database & Storage",
      skills: [
        { name: "MySQL", level: 90, icon: "🐬" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Redis Cache", level: 65, icon: "🔴" }
      ]
    },
   
    {
      //Message Queues & Security
      title: "Security",
      skills: [
        // { name: "Kafka", level: 85, icon: "📨" },
        // { name: "RabbitMQ", level: 80, icon: "🐰" },
        { name: "OAuth 2.0", level: 85, icon: "🔐" },
        { name: "OpenID Connect", level: 85, icon: "🆔" },
        { name: "Keycloak", level: 80, icon: "🔑" },
        { name: "Spring Security", level: 85, icon: "🛡️" },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800/50 ${
                    activeSection === item.id ? 'text-purple-400 bg-gray-800/30' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-left hover:bg-gray-800/50 transition-colors"
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <User size={48} className="text-purple-400" />
              </div>
            </div> */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Sonia Singh
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-2">
              Full Stack Developer
            </div>
            <div className="text-lg text-gray-400 max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and creative solutions
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/soniasingh98" target="_blank" className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors group">
              <Github size={24} className="group-hover:text-purple-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/sonia-singh-b0a886240" target="_blank" className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors group">
              <Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=soniasingh4344@gmail.com" target="_blank" className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors group">
              <Mail size={24} className="group-hover:text-teal-400 transition-colors" />
            </a>
          </div>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Explore My Work
            <ChevronDown size={20} className="inline ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate full-stack developer who thrives on exploring diverse technologies and building innovative solutions. From crafting robust backend systems with Java and Spring Boot to developing intelligent AI-powered applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                 I love diving deep into new tech stacks and turning complex problems into elegant, user-friendly experiences.
              </p>
              
              <div className="mt-8 space-y-4">
                
                
                
                
                <div className="flex items-center space-x-4 p-4 bg-gray-800/20 rounded-lg backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Innovation Driven</div>
                    <div className="text-sm text-gray-400">Always exploring cutting-edge technologies</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {/* <Code size={80} className="text-purple-400" /> */}
                <img className='rounded-full' src={Profile}/>
                  </div>
                </div>
                {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Palette size={24} className="text-white" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
     <section id="skills" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-gray-800/20 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="text-xl">{skill.icon}</div>
                        <div className="font-medium text-white">{skill.name}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 w-10 text-right">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
    <section id="projects" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
          </div>
          
          <div className="space-y-16">
            {projectCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </span>
                  </h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`} />
                </div>
                
                <div className={`grid ${category.projects.length === 1 ? 'justify-center' : 'md:grid-cols-2'} gap-8`}>
                  {category.projects.map((project, index) => (
                    <div key={index} className={`bg-gray-800/30 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-gray-800/40 transition-all duration-300 transform hover:scale-105 group ${category.projects.length === 1 ? 'max-w-lg' : ''}`}>
                      <div className="aspect-video bg-gray-700 relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                         <div className="flex gap-3 pt-3 border-t border-gray-700/50">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                          <a 
                            href={project.src} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
                          >
                            <Github size={16} />
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/30 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-lg text-gray-300 text-center mb-8">
                I&apos;m always open to discussing new opportunities and interesting projects. 
                Let&apos;s connect and create something amazing together!
              </p>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=soniasingh4344@gmail.com" target='_blank' className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
                  <Mail size={20} />
                  <span>soniasingh4344@gmail.com</span>
                </a>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/soniasingh98" target="_blank" className="p-4 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors group">
                  <Github size={24} className="group-hover:text-purple-400 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/sonia-singh-b0a886240/" target="_blank" className="p-4 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors group">
                  <Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Sonia Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;