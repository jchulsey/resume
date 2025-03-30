import React from 'react';
import Image from 'next/image';

// Define the project type
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

// Sample projects - replace with your own
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping experience with cart, checkout, and payment integration.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/projects/ecommerce.jpg",
    link: "https://example.com/ecommerce"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and skills in web development.",
    technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    image: "/projects/portfolio.jpg"
  },
  {
    id: 3,
    title: "Dashboard Interface",
    description: "An analytics dashboard with data visualization and real-time updates.",
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    image: "/projects/dashboard.jpg",
    link: "https://example.com/dashboard"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-20 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">My</span>
            <span className="text-primary"> Work</span>
          </h2>
          <p className="text-gray-300 max-w-xl">
            Here are some of the projects I've worked on. Each one presented unique challenges and 
            opportunities to create meaningful solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-secondary border border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden bg-gray-900">
                {/* Replace with actual project images later */}
                <div className="w-full h-full bg-gradient-to-br from-secondary to-gray-800 flex items-center justify-center text-primary">
                  {project.title[0]}
                </div>
                
                {project.link && (
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-secondary text-primary rounded-md"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-gray-800 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 