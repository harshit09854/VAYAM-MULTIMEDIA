"use client";
import React, { useState } from 'react';
import { Camera, Film, Award, Mail, Phone, MapPin, Play, X, Menu, Video, Mic, Edit } from 'lucide-react';

// Navigation Component
const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void; }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['Home', 'About', 'Portfolio', 'Services', 'Contact'];
  
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-600 tracking-wider cursor-pointer" onClick={() => setCurrentPage('Home')}>
            VAYAM MULTIMEDIA
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`text-sm tracking-wider transition-colors ${
                  currentPage === item ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm tracking-wider transition-colors ${
                  currentPage === item ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-indigo-600 text-xl font-bold mb-4">VAYAM MULTIMEDIA</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Creating compelling visual narratives that inspire and engage. Your story, our expertise.
          </p>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="hover:text-indigo-600 cursor-pointer">About Us</div>
            <div className="hover:text-indigo-600 cursor-pointer">Portfolio</div>
            <div className="hover:text-indigo-600 cursor-pointer">Services</div>
            <div className="hover:text-indigo-600 cursor-pointer">Contact</div>
          </div>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Follow Us</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="hover:text-indigo-600 cursor-pointer">Instagram</div>
            <div className="hover:text-indigo-600 cursor-pointer">Facebook</div>
            <div className="hover:text-indigo-600 cursor-pointer">LinkedIn</div>
            <div className="hover:text-indigo-600 cursor-pointer">YouTube</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
        © 2025 Vayam Multimedia Production House. All rights reserved.
      </div>
    </div>
  </footer>
);

// Home Page
const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void; }) => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <div className="mb-6 inline-block px-6 py-2 bg-indigo-100 text-indigo-600 text-sm tracking-widest rounded-full font-semibold">
          CREATIVE STORYTELLERS
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
          VAYAM MULTIMEDIA
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 tracking-wide">
          Transforming Ideas into Cinematic Excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('Portfolio')}
            className="px-8 py-4 bg-indigo-600 text-white font-semibold tracking-wider hover:bg-indigo-700 transition-all rounded-lg shadow-lg hover:shadow-xl"
          >
            EXPLORE WORK
          </button>
          <button 
            onClick={() => setCurrentPage('Contact')}
            className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold tracking-wider hover:bg-indigo-600 hover:text-white transition-all rounded-lg"
          >
            START PROJECT
          </button>
        </div>
      </div>
    </div>
    
    {/* Featured Projects */}
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-600 text-lg">Our latest work in visual storytelling</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'photo-1492619375914-88005aa9e8fb',
            'photo-1574267432644-f610bcf57b02',
            'photo-1579165466741-7f35e4755660'
          ].map((img, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden aspect-[2/3] rounded-2xl shadow-lg">
              <img 
                src={`https://images.unsplash.com/${img}?w=600&q=80`}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Creative Project {i + 1}</h3>
                  <p className="text-indigo-200 text-sm">Video Production • 2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">WHY CHOOSE VAYAM</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Award className="w-10 h-10" />, title: 'Award-Winning', desc: 'Recognized excellence in multimedia production' },
            { icon: <Film className="w-10 h-10" />, title: 'Creative Vision', desc: 'Innovative storytelling that captivates audiences' },
            { icon: <Camera className="w-10 h-10" />, title: 'Professional Team', desc: 'Experienced creators dedicated to quality' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="text-indigo-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// About Page
const AboutPage = () => (
  <div className="min-h-screen bg-white pt-24 pb-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Vayam Team"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-indigo-600 text-sm tracking-widest mb-4 font-semibold">ABOUT US</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Vayam Multimedia</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Vayam Multimedia is a cutting-edge production house specializing in creating impactful visual content. We blend creativity with technical excellence to deliver stunning results.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            From corporate videos to documentaries, commercials to digital content, we bring your vision to life with passion and precision.
          </p>
          <div className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
            Learn More
          </div>
        </div>
      </div>
      
      {/* Our Journey */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">OUR JOURNEY</h2>
        <div className="space-y-8">
          {[
            { year: '2024', title: 'Industry Recognition', desc: 'Featured in top multimedia production awards' },
            { year: '2023', title: 'Team Expansion', desc: 'Grew to 50+ creative professionals' },
            { year: '2021', title: 'Studio Launch', desc: 'Opened state-of-the-art production facility' },
            { year: '2019', title: 'Foundation', desc: 'Vayam Multimedia established with a vision' }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start border-l-4 border-indigo-600 pl-8 hover:bg-indigo-50 transition-colors py-4 rounded-r-lg">
              <div className="text-indigo-600 font-bold text-2xl min-w-[80px]">{item.year}</div>
              <div>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {[
          { num: '200+', label: 'Projects Completed' },
          { num: '50+', label: 'Happy Clients' },
          { num: '15', label: 'Industry Awards' },
          { num: '6+', label: 'Years Experience' }
        ].map((stat, i) => (
          <div key={i} className="bg-indigo-50 p-8 rounded-xl hover:bg-indigo-100 transition-colors">
            <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.num}</div>
            <div className="text-gray-700 text-sm tracking-wider font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Portfolio Page
interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  img: string;
}

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects = [
    { id: 1, title: 'Brand Campaign 2024', year: '2024', category: 'Commercial', img: 'photo-1492619375914-88005aa9e8fb' },
    { id: 2, title: 'Corporate Documentary', year: '2024', category: 'Documentary', img: 'photo-1574267432644-f610bcf57b02' },
    { id: 3, title: 'Music Video Series', year: '2023', category: 'Music', img: 'photo-1579165466741-7f35e4755660' },
    { id: 4, title: 'Digital Campaign', year: '2023', category: 'Digital', img: 'photo-1518676590629-3dcbd9c5a5c9' },
    { id: 5, title: 'Event Coverage', year: '2023', category: 'Events', img: 'photo-1540575467063-178a50c2df87' },
    { id: 6, title: 'Product Launch', year: '2022', category: 'Commercial', img: 'photo-1558618666-fcd25c85cd64' }
  ];
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-indigo-600 text-sm tracking-widest mb-4 font-semibold">OUR WORK</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">PROJECT PORTFOLIO</h1>
          <p className="text-gray-600 text-lg">Showcasing our best creative productions</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden aspect-[2/3] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img 
                src={`https://images.unsplash.com/${project.img}?w=600&q=80`}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-indigo-300 text-xs tracking-widest mb-2 font-semibold">{project.category}</div>
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-indigo-200 text-sm">{project.year}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="text-white w-16 h-16 bg-indigo-600 rounded-full p-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img 
                src={`https://images.unsplash.com/${selectedProject.img}?w=1200&q=80`}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-indigo-400 bg-black/50 rounded-full p-2"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="p-8">
              <div className="text-indigo-600 text-xs tracking-widest mb-2 font-semibold">{selectedProject.category}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-4">Year: {selectedProject.year}</p>
              <p className="text-gray-700 leading-relaxed">
                A showcase of our creative excellence and technical expertise. This project demonstrates our commitment to delivering high-quality multimedia content that exceeds client expectations and engages audiences effectively.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Services Page
const ServicesPage = () => {
  const services = [
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Video Production',
      desc: 'End-to-end video production services for all types of content'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Photography',
      desc: 'Professional photography for corporate, events, and products'
    },
    {
      icon: <Edit className="w-12 h-12" />,
      title: 'Post-Production',
      desc: 'Expert editing, color grading, and visual effects'
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: 'Audio Production',
      desc: 'Sound design, mixing, and audio post-production'
    }
  ];
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-indigo-600 text-sm tracking-widest mb-4 font-semibold">WHAT WE OFFER</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">OUR SERVICES</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive multimedia solutions tailored to bring your creative vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-2xl hover:shadow-xl transition-all group border-2 border-transparent hover:border-indigo-200">
              <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">OUR WORKFLOW</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'Understanding your goals & vision' },
              { num: '02', title: 'Planning', desc: 'Strategy & creative development' },
              { num: '03', title: 'Execution', desc: 'Professional production' },
              { num: '04', title: 'Delivery', desc: 'Final output & support' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-indigo-200 mb-4">{step.num}</div>
                <h4 className="text-gray-900 text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-indigo-600 text-sm tracking-widest mb-4 font-semibold">REACH OUT</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">LET'S COLLABORATE</h1>
          <p className="text-gray-600 text-lg">Ready to create something amazing? Get in touch with us today</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-900 text-sm mb-2 font-semibold">Your Name</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-900 text-sm mb-2 font-semibold">Email Address</label>
                <input 
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-900 text-sm mb-2 font-semibold">Your Message</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo - integrate with your backend)');
                }}
                className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg tracking-wider hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <Mail className="text-indigo-600 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-700">contact@vayammedia.com</p>
                  <p className="text-gray-700">info@vayammedia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-indigo-600 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-700">+91 99876 54321</p>
                  <p className="text-gray-700">+91 99876 54322</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-indigo-600 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-700">Creative Hub, Sector 15<br/>Noida, Uttar Pradesh<br/>India 201301</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-gray-900 font-semibold mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((platform, i) => (
                  <button key={i} className="px-4 py-3 bg-white border-2 border-indigo-200 text-gray-700 text-sm hover:text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50 transition-colors rounded-lg font-semibold">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'Home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'About' && <AboutPage />}
      {currentPage === 'Portfolio' && <PortfolioPage />}
      {currentPage === 'Services' && <ServicesPage />}
      {currentPage === 'Contact' && <ContactPage />}
      
      <Footer />
    </div>
  );
}