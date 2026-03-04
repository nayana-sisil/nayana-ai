import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Industrial Predictive Maintenance System Cost Benefit Validated",
    result: "68% downtime reduction, LKR 1.36M annual savings",
    description:
      "ML system for predictive maintenance identifying equipment failures before they occur. Tackled severe class imbalance (96.6% : 3.4%) using SMOTE & Tomek Links with ensemble methods. Includes quantitative cost benefit analysis.",
    tech: ["Random Forest", "Bagging", "SMOTE", "Tomek Links", "Feature Engineering", "Hugging Face"],
    demo: "https://huggingface.co/spaces/nayanasisil2700/predictive-maintenance",
    github: "https://github.com/nayana-sisil/predictive-maintenance-ml",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "LightGBM Churn Intelligence System with SHAP Interpretability",
    result: "96.4% ROC AUC, 84.1% F2, 88.8% Recall — LKR 115M+ revenue protection",
    description:
      "End to end churn prediction with LightGBM, advanced preprocessing (PowerTransformer, KNN imputation), SHAP interpretability, and production Streamlit dashboard for real time predictions.",
    tech: ["LightGBM", "SHAP", "Streamlit", "Hyperparameter Tuning", "Imbalanced Data"],
    demo: "https://predictive-customer-churn-ecommerce-retention.streamlit.app/",
    github: "https://github.com/nayana-sisil/predictive-customer-churn-ecommerce-retention",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "AI Semantic Book Recommender",
    result: "NLP powered semantic search with embeddings",
    description:
      "Book recommendation system using NLP and vector embeddings for semantic similarity search. Built with Gradio on Hugging Face Spaces for interactive exploration.",
    tech: ["NLP", "Embeddings", "Semantic Search", "Gradio", "Hugging Face"],
    demo: "https://huggingface.co/spaces/nayanasisil2700/my-book-recommender",
    github: "https://github.com/nayana-sisil/semantic_book_recommender",
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Breast Cancer Diagnosis ML Classifier",
    result: "Logistic Regression with interactive radar visualizations",
    description:
      "Machine learning application for breast cancer diagnosis with interactive radar charts for feature visualization. Deployed on Hugging Face Spaces.",
    tech: ["Logistic Regression", "Scikit-learn", "Plotly", "Hugging Face"],
    demo: "https://huggingface.co/spaces/nayanasisil2700/breast-cancer-diagnosis",
    github: "https://github.com/nayana-sisil/breast-cancer-diagnosis",
    color: "from-rose-500/10 to-orange-500/10",
  },
  {
    title: "CineMatrix AI Movie Success Predictor",
    result: "Imbalanced data handling with cyberpunk dashboard",
    description:
      "Group project predicting movie success using ML with custom imbalanced data techniques. Features a cyberpunk themed Streamlit dashboard for interactive analysis.",
    tech: ["Ensemble Methods", "Imbalanced Data", "Streamlit", "Feature Engineering"],
    demo: "https://cinematrix-ai.streamlit.app/",
    github: "https://github.com/nayana-sisil/cinematrix-ai",
    color: "from-violet-500/10 to-indigo-500/10",
  },
  {
    title: "Global Data Labour Market Signal Extraction & Skill Demand Analysis",
    result: "1,000+ job postings analyzed for skill & salary trends",
    description:
      "Comprehensive analysis of global data job market identifying top in-demand skills, salary patterns, and 15+ actionable recommendations through data visualization.",
    tech: ["Pandas", "Matplotlib", "Seaborn", "Data Analysis", "Statistical Analysis"],
    github: "https://github.com/nayana-sisil/data-job-market-analysis",
    color: "from-amber-500/10 to-yellow-500/10",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Real-world ML solutions with measurable business impact & deployed demos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-base mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-accent font-semibold mb-3">
                  {project.result}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.demo && (
                    <Button size="sm" variant="default" asChild className="flex-1 text-xs">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" /> Live Demo
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="outline" asChild className="flex-1 text-xs">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
