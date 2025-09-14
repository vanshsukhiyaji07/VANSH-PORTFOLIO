import { Download, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm Vansh Sukhiyaji, a BCA student and aspiring Full-Stack Developer.
              I specialize in building responsive web interfaces using React, HTML, CSS,
              and JavaScript. I enjoy designing clean, user-focused sites and bringing
              projects from concept to production.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary">Education:</span>
                <span className="text-muted-foreground">BCA (Bachelor of Computer Applications)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary">Current Status:</span>
                <span className="text-muted-foreground">BCA 3rd Year, 5th Semester</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-semibold text-primary">Training:</span>
                <span className="text-muted-foreground">Full-Stack Development at Red & White Skill Education</span>
              </div>
            </div>

            <a
              href="/Vansh_Sukhiyaji_Resume.pdf"
              download="Vansh-Resume.pdf"
              className="inline-block"
            >
              <Button variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="gradient-card p-6 rounded-xl border border-border hover:border-primary/30 transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Vidyadeep University</h3>
                  <p className="text-primary text-sm font-medium mb-1">Bachelor of Computer Applications</p>
                  <p className="text-muted-foreground text-sm">Currently in 3rd Year, 5th Semester</p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 rounded-xl border border-border hover:border-primary/30 transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-primary rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary-foreground text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Red & White Skill Education</h3>
                  <p className="text-primary text-sm font-medium mb-1">Full-Stack Development</p>
                  <p className="text-muted-foreground text-sm">Comprehensive web development training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;