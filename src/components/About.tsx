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
            <p className="text-gray-300 mb-6">
              I'm a frontend developer with a passion for creating beautiful and functional user experiences. 
              With a strong foundation in modern web technologies, I build responsive and accessible websites
              that deliver exceptional user experiences.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development started with HTML and CSS, and has evolved to include modern
              frameworks like React and Next.js. I'm always exploring new technologies and approaches to
              stay at the forefront of web development.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you'll find me hiking, reading, or experimenting with new recipes in the kitchen.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Technologies</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-white mb-3 font-medium">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="bg-secondary border border-gray-700 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-white mb-3 font-medium">Tools & Other</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Figma', 'Responsive Design', 'RESTful APIs', 'GraphQL', 'Agile'].map((skill) => (
                    <span key={skill} className="bg-secondary border border-gray-700 text-primary px-3 py-1 rounded-full text-sm">
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