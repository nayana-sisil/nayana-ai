import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    title: "ML / Deep Learning",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "LightGBM", "XGBoost", "Hugging Face"],
  },
  {
    title: "Techniques",
    skills: [
      "Ensemble Methods",
      "Imbalanced Classification",
      "SMOTE / Tomek Links",
      "Feature Engineering",
      "Hyperparameter Tuning",
      "SHAP Explainability",
      "Model Deployment",
    ],
  },
  {
    title: "Tools & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="bg-card border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
