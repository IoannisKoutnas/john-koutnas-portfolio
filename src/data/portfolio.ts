export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Graph Theory Analyzer (R / Shiny)",
    description:
      "Interactive R Shiny application for exploring the Zachary Karate Club network. Implements BFS and DFS traversals with step-by-step visualization, greedy graph coloring, cycle detection, and maximum clique identification using a fixed graph layout.",
    tags: ["R", "Shiny", "igraph", "visNetwork"],
    href: "https://github.com/IoannisKoutnas/graph-theory-analyzer-r",
  },
  {
    title: "Graph Theory Analyzer (Python GUI)",
    description:
      "Python-based desktop application that visualizes fundamental graph algorithms on the Karate Club dataset, including BFS and DFS traversals, greedy coloring, cycle checks, and maximum clique detection, with an integrated logging panel.",
    tags: ["Python", "NetworkX", "Tkinter", "Matplotlib"],
    href: "https://github.com/IoannisKoutnas/graph-theory-analyzer-python",
  },
  {
    title: "Amazon Office Products Data App (Python)",
    description:
      "Data analysis and recommendation application for Amazon Office Products review data. Includes exploratory analysis, similarity-based recommendations, and interactive visualizations for product popularity and user behavior.",
    tags: ["Python", "Pandas", "Scikit-learn", "Recommendation Systems"],
    href: "https://github.com/IoannisKoutnas/amazon-office-products-data-app-python",
  },
  {
    title: "Amazon Office Products Dashboard (R / Shiny)",
    description:
      "R Shiny dashboard focused on collaborative filtering techniques to identify similar users and products in Amazon review data, with interactive plots highlighting rating distributions and popular items.",
    tags: ["R", "Shiny", "Collaborative Filtering", "Data Visualization"],
    href: "https://github.com/IoannisKoutnas/amazon-office-products-data-app-r",
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Technical",
    items: [
      "SQL (advanced queries, joins, CTEs, optimization)",
      "Python (data analysis, scripting, automation)",
      "Data analysis (cleaning, transformation, insight generation)",
      "Statistics fundamentals (adequate level)",
      "Database design & optimization (ER models, indexing, performance)",
      "Data visualization & dashboards (Python, Excel, Cognos basics)",
    ],
  },
  {
    title: "Tools",
    items: [
      "Pandas, NumPy, Matplotlib",
      "Excel (analysis, pivots, visualization)",
      "MySQL",
      "Git (basic workflow)",
      "Lucene (information retrieval — academic project)",
      "Java, C (academic projects)",
    ],
  },
  {
    title: "Analytics",
    items: [
      "Exploratory analysis (EDA) and trend identification",
      "Documentation (assumptions, definitions, reproducible work)",
      "Attention to data quality and accuracy",
      "Algorithmic problem solving",
      "Data mining (intro level — academic / coursework)",
      "Graph & network analysis (academic projects)",
    ],
  },
  {
    title: "Currently learning",
    items: [
      "Business problem framing (turning questions into KPIs)",
      "KPI definition & performance metrics (practice)",
      "Domain knowledge (how metrics change by industry)",
      "Advanced analytics concepts (A/B testing, forecasting, ML basics)",
      "BI tools (Power BI / Tableau basics — next step)",
      "IBM Data Analyst Professional Certificate (in progress)",
      "Google Data Analytics Professional Certificate (in progress)",
    ],
  },
];

export const highlights: { k: string; v: string }[] = [
  { k: "Focus", v: "Careful data analysis, clean workflows, and reliable results" },
  { k: "Strengths", v: "SQL, Python, data cleaning, and building clear dashboards" },
  {
    k: "Currently learning",
    v: "Business problem framing, KPI definition, and advanced analytics concepts",
  },
];

export const certifications: { title: string; status: string }[] = [
  { title: "Google Data Analytics", status: "In progress" },
  { title: "SQL for Data Analysis", status: "Completed" },
  { title: "Power BI Fundamentals", status: "Completed" },
  { title: "Statistics Basics", status: "In progress" },
];

export const profile = {
  name: "John Koutnas",
  role: "Junior Data Analyst",
  headline: "I build dashboards, write SQL, and turn analysis into practical insights.",
  email: "johnkout98@outlook.com",
  githubUrl: "https://github.com/IoannisKoutnas",
  linkedinUrl: "https://www.linkedin.com/in/ioanniskoutnas/",
  cvUrl: "#",
};
