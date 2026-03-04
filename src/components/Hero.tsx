import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="text-sm font-mono tracking-widest uppercase text-primary mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Data Science &amp; Machine Learning
            </motion.p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Nayana Sisil</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              Aspiring Machine Learning Engineer &amp; Data Science Undergraduate
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Building production-ready ML pipelines · Passionate about imbalanced classification, model interpretability &amp; business-impact AI · Seeking ML/AI internships
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/Nayana_Sisil_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://www.linkedin.com/in/nayanasisil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/nayana-sisil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-md" />
              <img
                src={profileImg}
                alt="Nayana Sisil - Machine Learning Engineer"
                className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-card shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
