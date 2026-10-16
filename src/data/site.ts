export const site = {
  name: "Aung Ko Oo",
  firstName: "Tony",
  logo: "Tony",
  role: "Backend Developer",
  greeting: "Hey There,",
  intro:
    "I design and ship backend systems — APIs, microservices, and the queues that keep them honest.",
  loveLine: "I build clean services, and I love what I do.",
  email: "tonycross440@gmail.com",
  phone: "+95 9 000 000 000",
  github: "https://github.com/TonyCross23",
  // linkedin: "https://www.linkedin.com/",
  cv: "/AUNG_KO_OO_CV.pdf",
  location: "Yangon, Myanmar",
  badge:
    "TypeScript engineer focused on APIs, Prisma, and event-driven services",
  highlight: "Backend first",
}

export const nav = [
  { href: "#works", label: "Projects" },
  { href: "#services", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export const services = [
  {
    title: "API design",
    count: "REST, JWT, Zod",
    color: "teal",
    icon: "api",
  },
  {
    title: "Microservices",
    count: "NestJS workspaces",
    color: "gold",
    icon: "mesh",
  },
  {
    title: "Queues & data",
    count: "RabbitMQ, Prisma",
    color: "coral",
    icon: "queue",
  },
]

export const serviceCopy = {
  title: "Good products start with solid foundations.",
  body: "I take product ideas and turn them into typed services: auth, catalogs, workers, and the contracts between them. PostgreSQL stays the source of truth. Queues take the slow work off the request path.",
  stats: [
    { value: "4+", label: "Shipped systems" },
    { value: "TS", label: "Day-to-day stack" },
  ],
}

export const experience = [
  {
    company: "Royal MT Co., Ltd.",
    role: "Backend Developer",
    period: "Present",
    points: [],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2024 — 2025",
    points: ["Two years of freelance full-stack development experience."],
  },
  {
    company: "CGM Golden Land Co., Ltd.",
    role: "Intern (BIB OJT)",
    period: "2024",
    points: ["Completed a six-month internship through the BIB OJT program."],
  },
]

export type Project = {
  category: string
  title: string
  tone: string
  blurb: string
  href: string
  tags: string[]
  kind: "Web" | "Mobile"
  preview: "logs" | "expense" | "map" | "todo" | "services" | "pos"
}

export const works: Project[] = [
  {
    category: "Observability / Full stack",
    title: "Log Monitoring Dashboard",
    tone: "teal",
    blurb:
      "A TypeScript dashboard for exploring, filtering, and exporting application logs, backed by an Express API and PostgreSQL.",
    href: "https://github.com/TonyCross23/Log-Monitoring-Dashboard-",
    tags: ["React", "TypeScript", "Express", "Prisma"],
    kind: "Web",
    preview: "logs",
  },
  {
    category: "Personal finance / Android",
    title: "Expense Tracker",
    tone: "gold",
    blurb:
      "An offline-first Android app for accounts, transactions, and spending reports. Data stays on the device, with JSON backup and restore.",
    href: "https://github.com/TonyCross23/Expand_tracker_moblie_app",
    tags: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    kind: "Mobile",
    preview: "expense",
  },
  {
    category: "Live location / Full stack",
    title: "PulseMap",
    tone: "mint",
    blurb:
      "Live GPS sharing on an interactive map, with nearby location queries, road directions, and real-time updates over Socket.IO.",
    href: "https://github.com/TonyCross23/share-location",
    tags: ["React", "Socket.IO", "PostGIS", "Leaflet"],
    kind: "Web",
    preview: "map",
  },
  {
    category: "Productivity / Backend",
    title: "Todo + AI Suggestion",
    tone: "gold",
    blurb: "A NestJS todo API with AI-assisted suggestions for the next task.",
    href: "https://github.com/TonyCross23/nestjs_todo_ai_suggestion",
    tags: ["NestJS", "API", "AI"],
    kind: "Web",
    preview: "todo",
  },
  {
    category: "Architecture / Backend",
    title: "NestJS Microservices",
    tone: "teal",
    blurb:
      "Workspace services with Prisma, PostgreSQL, JWT, and RabbitMQ. Built around clear service boundaries and typed messages.",
    href: "https://github.com/TonyCross23/nestjs_microservices",
    tags: ["NestJS", "Prisma", "RabbitMQ"],
    kind: "Web",
    preview: "services",
  },
  {
    category: "Commerce / TypeScript",
    title: "POS-TS",
    tone: "mint",
    blurb:
      "A point-of-sale flow in TypeScript, from catalog to checkout, with a typed domain at its core.",
    href: "https://github.com/TonyCross23/POS-TS",
    tags: ["TypeScript", "Point of sale"],
    kind: "Web",
    preview: "pos",
  },
]

export const contact = {
  kicker: "Available for work",
  title: "Have something in mind?",
  body: "Have a project, an interesting challenge, or a team looking for an engineer? Tell me a little about it. I’d love to hear from you.",
  facts: [
    { label: "Based in", value: "Yangon, Myanmar" },
    { label: "Reply window", value: "Within a few days" },
    { label: "Best fit", value: "Typed backends, NestJS, Prisma, RabbitMQ" },
  ],
  stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "RabbitMQ", "JWT"],
}
