import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            Open to ML internships, collaborations, and interesting problems.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="mailto:nayanasisil@gmail.com" className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 card-hover group">
            <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">nayanasisil@gmail.com</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a href="tel:+94768609939" className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 card-hover group">
            <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">076 860 9939</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a href="https://www.linkedin.com/in/nayanasisil" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 card-hover group">
            <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">nayanasisil</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium">Maho, Kurunegala, Sri Lanka</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:nayanasisil@gmail.com">
              <Mail className="h-4 w-4" /> Send Me a Message
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
