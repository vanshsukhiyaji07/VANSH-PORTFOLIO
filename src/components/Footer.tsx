
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              Vansh.dev
            </span>
            <p className="text-muted-foreground text-sm mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center gap-1 justify-center md:justify-end">
              © 2024 Vansh Sukhiyaji. Made with React
            </p>
            <div className="flex items-center gap-4 mt-2 justify-center md:justify-end">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary text-xs transition-smooth"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary text-xs transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 gradient-primary rounded-full text-primary-foreground shadow-glow hover:scale-110 transition-smooth z-40 md:hidden"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;