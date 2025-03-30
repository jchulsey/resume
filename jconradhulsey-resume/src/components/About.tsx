"use client";

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-gradient-to-b from-secondary to-secondary/95">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-white">About</span>
              <span className="text-primary"> Me</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              I'm a cloud software engineer with a passion for creating simple, yet robust business solutions. 
              With a strong foundation in full stack development, I build infrastructure and automate 
              repetitive tasks to scale. 
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              My journey in technology started with frontend development, and has evolved to include modern
              frameworks like React and Next.js. I studied full stack development in 2019 at the Arkansas Coding Academy
              where I studied Java/Maven development. A couple of years later I began working as a cloud engineer and have 
              continued to expand my skillset. 
            </p>
            <p className="text-gray-300 text-lg">
              When I'm not coding, I am studying for my CCNA and CISSP.
            </p>
          </div>
          <div className="bg-gray-500 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Technologies</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-white mb-3 font-medium">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Azure DevOps', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Tailwind CSS', 'SQL', 'YAML'].map((skill) => (
                    <span key={skill} className="bg-secondary text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-white mb-3 font-medium">Tools & Other</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Puppet', 'NGINX', 'Postman', 'Splunk', 'Jira', 'PowerShell', 'MuleSoft'].map((skill) => (
                    <span key={skill} className="bg-secondary text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 