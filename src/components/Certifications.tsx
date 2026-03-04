import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certs = [
  { name: "Deep Learning Specialization", org: "DeepLearning.AI" },
  { name: "Machine Learning Specialization", org: "DeepLearning.AI" },
  { name: "Mathematics for ML & Data Science", org: "DeepLearning.AI" },
  { name: "PyTorch: Deep Learning Fundamentals", org: "PyTorch" },
  { name: "AI/ML Engineer – Stage 1 & 2", org: "SLIIT" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="bg-card border border-border rounded-xl p-5 card-hover flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <BadgeCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
