import { motion } from "framer-motion";
import { Brain, Code, Rocket, BarChart3 } from "lucide-react";

const highlights = [
  { icon: Brain, label: "ML/DL", desc: "End to end pipelines" },
  { icon: Code, label: "Python", desc: "Production-grade code" },
  { icon: Rocket, label: "Deployment", desc: "HF Spaces & Streamlit" },
  { icon: BarChart3, label: "Impact", desc: "Business-driven results" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

          <p className="text-muted-foreground text-center leading-relaxed mb-6 max-w-2xl mx-auto">
            I'm a second year Data Science undergraduate at SLIIT with strong foundations in Machine Learning, Deep Learning, and Python. I build and deploy end to end ML pipelines using real world datasets, with expertise in model optimization, imbalanced classification, and neural networks.
          </p>
          <p className="text-muted-foreground text-center leading-relaxed mb-10 max-w-2xl mx-auto">
            What fascinates me most is how models learn, from classical algorithms to neural networks to modern architectures. I'm driven by experimentation, iteration, and delivering production ready ML solutions with measurable business impact. Currently seeking internships in ML Engineering, AI Development, or Data Science.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-card border border-border rounded-xl p-5 text-center card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-heading font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
