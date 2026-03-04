import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Nayana Sisil. Built with <Heart className="h-3 w-3 text-accent" /> and code.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/nayana-sisil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/nayanasisil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
