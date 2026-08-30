export const PROFILE = {
  name: "Sanno",
  role: "Full-Stack Developer",
  tagline:
    "I build web applications end to end — and wire AI into the parts that benefit from it.",
  location: "PH",
  email: "you@example.com", // TODO: replace with your real email
  github: "https://github.com/yourhandle", // TODO
  linkedin: "https://linkedin.com/in/yourhandle", // TODO
};

export const BOOT_LINES = [
  { prompt: "$ whoami", output: "sanno — full-stack developer" },
  { prompt: "$ cat stack.txt", output: "React · TypeScript · Vue.js · Tailwind · PHP · SQL" },
  { prompt: "$ status --check", output: "available for new projects ✓" },
];

export const SKILLS = [
  {
    group: "frontend",
    items: ["React", "TypeScript", "Vue.js", "Tailwind CSS", "BlockNote"],
  },
  {
    group: "backend",
    items: ["PHP", "SQL", "Next.js", "Prisma", "PostgreSQL"],
  },
  {
    group: "ai / data",
    items: ["Gemini API", "RAG retrieval", "Full-text search", "PDF parsing"],
  },
];

export const PROJECTS = [
  {
    file: "across.php",
    ext: "PHP",
    title: "Across — Travel Management System",
    description:
      "An internal travel operations system covering driver scheduling and multi-tier flight order approval workflows, with full audit tracking on every record.",
    tags: ["PHP", "SQL", "Audit trails"],
  },
  {
    file: "study-assistant.tsx",
    ext: "TSX",
    title: "AI Study Assistant",
    description:
      "A Notion-style study app with an AI chat sidebar covering flashcards, quizzes, and summaries — plus PDF upload with RAG-lite retrieval over your own notes.",
    tags: ["Next.js", "Gemini AI", "Prisma"],
  },
  {
    file: "barangay-eservices.vue",
    ext: "VUE",
    title: "Barangay E-Services System",
    description:
      "A civic government portal for a Filipino local government unit — clearance requests, appointment scheduling, and document tracking, with a navy-and-gold civic aesthetic.",
    tags: ["Vue.js", "Vuetify", "Civic tech"],
  },
  {
    file: "editor.tsx",
    ext: "TSX",
    title: "Editor Component",
    description:
      "A reusable React/TypeScript rich-text editor built on BlockNote, with dialog-based subpage navigation and a Notion-style editing experience.",
    tags: ["React", "TypeScript", "BlockNote"],
  },
];

export const NAV_LINKS = [
  { path: "/about", label: "about" },
  { path: "/skills", label: "skills" },
  { path: "/projects", label: "projects" },
  { path: "/contact", label: "contact" },
];
