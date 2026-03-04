import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-surface">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-xl p-6 md:p-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-lg">BSc (Hons) in Data Science</h3>
              <p className="text-muted-foreground text-sm mb-1">Sri Lanka Institute of Information Technology (SLIIT)</p>
              <p className="text-xs text-muted-foreground mb-4">2024 – 2028 (Expected) · Current GPA: <span className="text-primary font-semibold">3.89</span></p>

              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Dean's List (3×)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { sem: "Y1 Sem 1", gpa: "3.85" },
                  { sem: "Y1 Sem 2", gpa: "4.00" },
                  { sem: "Y2 Sem 1", gpa: "3.82" },
                ].map((item) => (
                  <div key={item.sem} className="bg-secondary rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">{item.sem}</p>
                    <p className="font-heading font-bold text-lg text-primary">{item.gpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold">Ananda College, Colombo 10</h3>
              <p className="text-sm text-muted-foreground">A/L – Biological & Physical Science: S-3 · O/L: A-8, B-1</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
