import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceProjects from "../assets/e-commerce.png"
import blogProject from "../assets/BLOG.png"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A React e-commerce site demonstrating product listing, product details, cart UI and responsive layout.",
      image: ecommerceProjects,
      technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
      purpose: "Full-featured e-commerce platform",
      role: "Frontend Developer",
      highlights: [
        "Component design and architecture",
        "State management for cart functionality", 
        "Responsive UI across all devices"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/vanshsukhiyaji07/E-COMMERCE",
      featured: true
    },
    {
      id: 2,
      title: "Blog Website",
      description: "A Node.js blog site demonstrating user authentication, blog listing, blog details, and responsive layout.",
      image: blogProject,
      technologies: ["React", "Express.js", "Node.js", "MongoDB"],
      purpose: "Advanced web application",
      role: "Full-Stack Developer",
      highlights: [
        "Modern tech stack implementation",
        "Advanced React patterns",
        "Full-stack architecture"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/vanshsukhiyaji07/BLOG-WITH-SESSION",
      featured: true,
      comingSoon: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my development skills and passion for creating great user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`gradient-card rounded-xl border border-border overflow-hidden transition-smooth hover:border-primary/30 hover:scale-105 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                {project.comingSoon ? (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-primary/5">
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.githubUrl} aria-label="View code">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.liveUrl} aria-label="View live demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-primary">Purpose: </span>
                    <span className="text-sm text-muted-foreground">{project.purpose}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Role: </span>
                    <span className="text-sm text-muted-foreground">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Highlights:</span>
                    <ul className="text-sm text-muted-foreground mt-1 ml-4">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="list-disc">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {!project.comingSoon && (
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" asChild className="group">
                        <a href={project.liveUrl}>
                          View Demo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl}>
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;