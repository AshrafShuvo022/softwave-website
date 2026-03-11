export interface Service {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  overview: string;
  offerings: string[];
  technologies: string[];
  process: { step: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Modern, scalable web applications built to perform.",
    icon: "Globe",
    description: "From dynamic web apps to enterprise platforms, we craft pixel-perfect digital experiences that drive results.",
    overview: "We build responsive, high-performance web applications using the latest technologies. Whether you need a marketing site, SaaS platform, or complex enterprise system, we deliver solutions that scale with your business.",
    offerings: [
      "Custom web application development",
      "E-commerce platforms",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "CMS & content platforms",
      "Performance optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "AWS"],
    process: [
      { step: "Discovery", description: "We analyze your requirements, target audience, and technical constraints to define the optimal solution." },
      { step: "Architecture", description: "We design the system architecture, database schema, and API contracts before writing a single line of code." },
      { step: "Development", description: "Iterative development with regular check-ins, code reviews, and continuous integration." },
      { step: "Testing", description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing." },
      { step: "Launch", description: "Seamless deployment with monitoring, analytics setup, and post-launch support." },
    ],
  },
  {
    slug: "mobile-development",
    name: "Mobile Development",
    tagline: "Cross-platform apps that users love.",
    icon: "Smartphone",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    overview: "We develop mobile applications that combine beautiful design with rock-solid engineering. Our cross-platform expertise means you get a single codebase that delivers native-quality experiences on both platforms.",
    offerings: [
      "iOS & Android app development",
      "Cross-platform development (React Native, Flutter)",
      "Mobile UI/UX design",
      "Push notifications & real-time features",
      "App Store optimization",
      "Maintenance & updates",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Redux", "GraphQL"],
    process: [
      { step: "Strategy", description: "Define your app's core value proposition, target users, and key features for MVP." },
      { step: "Design", description: "Create wireframes and high-fidelity prototypes with platform-native UX patterns." },
      { step: "Development", description: "Agile development sprints with weekly demos and continuous feedback integration." },
      { step: "QA Testing", description: "Device testing across iOS and Android versions, performance profiling, and security audits." },
      { step: "Publishing", description: "App store submission, review navigation, and staged rollout strategy." },
    ],
  },
  {
    slug: "ai-ml",
    name: "AI/ML Solutions",
    tagline: "Intelligent systems that learn, adapt, and deliver.",
    icon: "Brain",
    description: "Custom AI and machine learning solutions that automate processes, uncover insights, and create competitive advantages.",
    overview: "From predictive analytics to natural language processing, we build AI systems that solve real business problems. We work with your data to create models that deliver measurable ROI from day one.",
    offerings: [
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Computer vision solutions",
      "Predictive analytics",
      "AI-powered automation",
      "LLM integration & fine-tuning",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "scikit-learn", "Hugging Face", "FastAPI"],
    process: [
      { step: "Data Assessment", description: "Evaluate your data quality, quantity, and structure to determine the right AI approach." },
      { step: "Model Design", description: "Select and design the optimal model architecture for your specific use case." },
      { step: "Training", description: "Train, validate, and iterate on models using your data with rigorous evaluation metrics." },
      { step: "Integration", description: "Deploy models into your existing systems via APIs or embedded solutions." },
      { step: "Monitoring", description: "Continuous model performance monitoring with automated retraining pipelines." },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    tagline: "Turn your data into your most valuable asset.",
    icon: "BarChart3",
    description: "End-to-end data analytics solutions that transform raw data into actionable insights and strategic decisions.",
    overview: "We help businesses make sense of their data through robust analytics pipelines, interactive dashboards, and strategic insights. Our solutions turn information overload into clear, actionable intelligence.",
    offerings: [
      "Business intelligence dashboards",
      "Data pipeline development (ETL/ELT)",
      "Real-time analytics",
      "Custom reporting solutions",
      "Data warehouse design",
      "KPI tracking & monitoring",
    ],
    technologies: ["Python", "SQL", "Apache Spark", "dbt", "Snowflake", "BigQuery", "Tableau", "Power BI", "Looker"],
    process: [
      { step: "Audit", description: "Map your existing data sources, identify gaps, and define key business questions to answer." },
      { step: "Architecture", description: "Design your data warehouse, define data models, and plan the analytics infrastructure." },
      { step: "Pipeline Build", description: "Build reliable ETL/ELT pipelines that deliver clean, consistent data at scale." },
      { step: "Visualization", description: "Create intuitive dashboards and reports that make insights accessible to all stakeholders." },
      { step: "Optimization", description: "Continuously refine queries, models, and visualizations based on user feedback." },
    ],
  },
  {
    slug: "cloud",
    name: "Cloud Solutions",
    tagline: "Scalable, secure cloud infrastructure built for growth.",
    icon: "Cloud",
    description: "Cloud architecture, migration, and managed services that optimize performance, security, and cost.",
    overview: "We design and manage cloud infrastructure that scales with your business. From initial migration to ongoing optimization, we ensure your cloud environment is secure, resilient, and cost-effective.",
    offerings: [
      "Cloud architecture & strategy",
      "AWS / GCP / Azure migration",
      "Infrastructure as Code (IaC)",
      "DevOps & CI/CD pipeline setup",
      "Kubernetes & container orchestration",
      "Cloud cost optimization",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Prometheus"],
    process: [
      { step: "Assessment", description: "Analyze your current infrastructure, workloads, and requirements for cloud readiness." },
      { step: "Planning", description: "Design your target cloud architecture with security, scalability, and cost in mind." },
      { step: "Migration", description: "Execute a phased migration with minimal downtime and thorough testing at each stage." },
      { step: "Optimization", description: "Fine-tune resources, implement auto-scaling, and establish cost monitoring." },
      { step: "Management", description: "Ongoing infrastructure management, security patching, and performance monitoring." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
