export const site = {
  name: "Aung Ko Oo",
  firstName: "Tony",
  logo: "Tony",
  role: "Software Engineer",
  greeting: "Hey There,",
  intro: "I design and ship backend systems — APIs, microservices, and the queues that keep them honest.",
  loveLine: "I build clean services, and I love what I do.",
  email: "tonycross440@gmail.com",
  phone: "+95 9 000 000 000",
  github: "https://github.com/TonyCross23",
  // linkedin: "https://www.linkedin.com/",
  cv: "/AUNG_KO_OO_CV.pdf",
  location: "Yangon, Myanmar",
  badge: "TypeScript engineer focused on APIs, Prisma, and event-driven services",
  highlight: "Backend first",
}

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#works", label: "Works" },
  { href: "#notes", label: "Notes" },
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
  title: "What do I help?",
  body: "I take product ideas and turn them into typed services: auth, catalogs, workers, and the contracts between them. PostgreSQL stays the source of truth. Queues take the slow work off the request path.",
  stats: [
    { value: "4+", label: "Shipped systems" },
    { value: "TS", label: "Day-to-day stack" },
  ],
}

export const experience = [
  {
    company: "Independent",
    role: "Software Engineer",
    period: "2024 — Present",
    points: [
      "NestJS microservices with Prisma, PostgreSQL, JWT, and RabbitMQ.",
      "Ecommerce API with Passport, Argon2, and AMQP for checkout work.",
    ],
  },
  {
    company: "Platform work",
    role: "Backend / data",
    period: "2025 — 2026",
    points: [
      "Express APIs in front of Tarantool and PostgreSQL for fast reads.",
      "Shop services with Prisma migrations and queue workers for side effects.",
    ],
  },
  {
    company: "Messaging",
    role: "Workers & AMQP",
    period: "Ongoing",
    points: [
      "API + worker splits so hashing and jobs do not block HTTP.",
      "Typed payloads and clear service boundaries instead of shared tables.",
    ],
  },
]

export const works = [
  {
    category: "NestJS",
    title: "Todo + AI suggestion",
    tone: "gold",
    blurb: "NestJS todo API with AI-assisted suggestions for the next task.",
    href: "https://github.com/TonyCross23/nestjs_todo_ai_suggestion",
  },
  {
    category: "Microservices",
    title: "NestJS microservices",
    tone: "teal",
    blurb: "Workspace services with Prisma, PostgreSQL, JWT, and RabbitMQ.",
    href: "https://github.com/TonyCross23/nestjs_microservices",
  },
  {
    category: "TypeScript",
    title: "POS-TS",
    tone: "mint",
    blurb: "Point-of-sale flow in TypeScript — catalog, checkout, and typed domain.",
    href: "https://github.com/TonyCross23/POS-TS",
  },
]

export const notes = [
  {
    title: "Queues over shared tables",
    body: "Services should talk through messages, not by reaching into each other’s databases.",
  },
  {
    title: "Typed payloads",
    body: "Zod at the edge keeps NestJS and workers honest when a field changes.",
  },
  {
    title: "Workers for slow work",
    body: "Hashing, mail, and order side effects belong off the request path.",
  },
]

export const contact = {
  kicker: "Available for work",
  title: "Send a real brief.",
  body: "No placeholder quotes. If you have an API, a queue, or a service that needs to ship, write what you need — I will reply from the same inbox.",
  facts: [
    { label: "Based in", value: "Yangon, Myanmar" },
    { label: "Reply window", value: "Within a few days" },
    { label: "Best fit", value: "Typed backends, NestJS, Prisma, RabbitMQ" },
  ],
  stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "RabbitMQ", "JWT"],
}
