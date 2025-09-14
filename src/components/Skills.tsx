import React from 'react';
import { Code, Database, Globe, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6 " />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "API Development", level: 70 },
      ]
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C Programming", level: 85 },
        { name: "Problem Solving", level: 80 },
        { name: "Algorithms", level: 75 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I build accessible, performant web interfaces and single-page React apps focused on UX and maintainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="gradient-card p-6 rounded-xl border border-border hover:border-primary/30 transition-smooth hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/30">
                  {React.cloneElement(category.icon, { className: "h-5 w-5 text-white" })}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-medium bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/50 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/30 transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Approach */}
        <div className="mt-16 text-center">
          <div className="gradient-card p-8 rounded-xl border border-border max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code that prioritizes user experience. 
              My focus is on creating responsive, accessible web applications that not only look great 
              but also perform efficiently across all devices and browsers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;