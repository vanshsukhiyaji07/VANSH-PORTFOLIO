import { Palette, Code, Smartphone, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Web Design",
      description: "Creating beautiful, user-focused designs that convert visitors into customers.",
      features: [
        "Responsive layout design",
        "UI/UX optimization", 
        "Brand-consistent styling",
        "Accessibility compliance"
      ],
      deliverables: "Figma mockups, style guides, responsive design systems"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Building fast, modern web applications with clean, maintainable code.",
      features: [
        "React development",
        "Component architecture",
        "State management",
        "Performance optimization"
      ],
      deliverables: "Production-ready React apps, clean codebase, deployment guidance"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Development", 
      description: "Ensuring your website looks perfect on every device and screen size.",
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Touch-friendly interfaces",
        "Progressive enhancement"
      ],
      deliverables: "Fully responsive websites, cross-device testing, optimization reports"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Making your website lightning-fast for better user experience and SEO.",
      features: [
        "Code optimization",
        "Image compression",
        "Loading strategies",
        "SEO improvements"
      ],
      deliverables: "Performance reports, optimized codebase, speed improvements"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="gradient-card p-8 rounded-xl border border-border hover:border-primary/30 transition-smooth hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-primary mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 gradient-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-border">
                <h4 className="font-medium text-primary mb-2">Deliverables:</h4>
                <p className="text-sm text-muted-foreground">{service.deliverables}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="gradient-card p-8 rounded-xl border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let's discuss your ideas and create something amazing together. 
              I'm committed to delivering high-quality work that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-smooth hover:shadow-glow border border-primary/30 text-white"
              >
                Get Started
              </button>
              <a 
                href="mailto:vansh@example.com"
                className="px-8 py-3 border-2 border-primary/20 text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;