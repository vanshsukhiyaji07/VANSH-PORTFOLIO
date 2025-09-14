import { Button } from "@/components/ui/button";
import vanshProfile from "@/assets/vansh-new-profile.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating elements data (text alternatives for icons)
  const floatingElements = [
    { text: "</>", delay: "0s", position: "top-20 left-20" },
    { text: "★", delay: "1s", position: "top-40 right-32" },
    { text: "*", delay: "2s", position: "bottom-40 left-16" },
    { text: "</>", delay: "0.5s", position: "top-60 left-1/4" },
    { text: "★", delay: "1.5s", position: "bottom-20 right-20" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 gradient-bg opacity-50"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 gradient-primary rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-primary rounded-full opacity-5 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 gradient-primary rounded-full opacity-15 blur-2xl animate-glow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} text-primary/20 animate-float hidden lg:block`}
          style={{
            animationDelay: element.delay,
            animationDuration: `${3 + index * 0.5}s`,
          }}
        >
          <span className="text-lg">{element.text}</span>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full border border-primary/20 mb-8 animate-scale-in">
              <span>•</span>
              <span className="text-sm font-medium text-primary">Available for projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient animate-gradient-shift inline-block">
                Vansh Sukhiyaji
              </span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl block mt-2">
                Full-Stack Developer
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              BCA student | React & Web Design | Focused on modern, usable interfaces that make a difference.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToPortfolio}
                className="group relative overflow-hidden border border-primary/50 hover:border-primary"
              >
                <span className="relative z-10 text-white">View Portfolio</span>
                <span className="ml-2 relative z-10 text-white">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact}
                className="group glassmorphism border-primary/50 hover:border-primary"
              >
                Contact Me
                <div className="ml-2 w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="glassmorphism p-4 rounded-xl border border-primary/10 text-center group hover:border-primary/30 transition-all">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="glassmorphism p-4 rounded-xl border border-primary/10 text-center group hover:border-primary/30 transition-all">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">3+</div>
                <div className="text-xs text-muted-foreground">Years Learning</div>
              </div>
              <div className="glassmorphism p-4 rounded-xl border border-primary/10 text-center group hover:border-primary/30 transition-all">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">∞</div>
                <div className="text-xs text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-lg group-hover:shadow-glow transition-all duration-500">
                  <img
                    src={vanshProfile}
                    alt="Vansh Sukhiyaji - Full Stack Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 glassmorphism p-4 rounded-xl border border-primary/20 animate-float">
                  <span className="text-primary text-2xl">&lt;/&gt;</span>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glassmorphism p-4 rounded-xl border border-primary/20 animate-float" style={{ animationDelay: "1s" }}>
                  <span className="text-primary text-2xl">★</span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-4 gradient-primary rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity animate-glow" />
              </div>

              {/* Background Decorations */}
              <div className="absolute top-8 right-8 w-32 h-32 border border-primary/20 rounded-2xl rotate-12 animate-spin-slow" />
              <div className="absolute -bottom-8 left-8 w-24 h-24 gradient-primary rounded-full opacity-10 blur-xl" />
            </div>
          </div>
        </div>

        {/* Social Links - Enhanced */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="vanshsukhiyaji07@gmail.com"
            className="p-4 glassmorphism rounded-xl border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110 group"
            aria-label="Email"
          >
            <span>✉️</span>
            <div className="absolute left-full ml-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Send Email
            </div>
          </a>
          <a
            href="https://github.com/vanshsukhiyaji07"
            className="p-4 glassmorphism rounded-xl border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110 group"
             aria-label="GitHub"
          >
            <span>GitHub</span>
            <div className="absolute left-full ml-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              View Code
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-sukhiyaji-806595384/"
            className="p-4 glassmorphism rounded-xl border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <span>LinkedIn</span>
            <div className="absolute left-full ml-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Connect
            </div>
          </a>
          <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent mx-auto mt-4" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full animate-float mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
