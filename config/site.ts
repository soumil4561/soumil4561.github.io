export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "welcome...",
  description: "Hey, I'm Soumil, Welcome",
  navItems: [
    {
      label: "Resume",
      href: "/#experience",
      type: "label",
      hidden: false,
    },
    {
      label: "About",
      href: "/about",
      type: "label",
      hidden: false,
    },
    {
      label: "Blog",
      href: "/blog",
      type: "label",
      hidden: false,
    },
    {
      label: "Let's Talk",
      href: "/contact",
      type: "primary-btn",
      hidden: false,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/soumil4561",
    linkedin: "https://linkedin.com/in/soumil4561",
    mail: "mailto:soumil4561@gmail.com",
    pgp: "/soumil4561-pubkey.asc",
    resume: "/resume.pdf",
    // docs: "https://soumil4561.github.io",
  },
  extendedDescription: `I’m Soumil Singh, a software engineer currently based in Bangalore, who enjoys building efficient, scalable systems and exploring how things work under the hood.\n
I am a computer science graduate from the Indian Institute of Information Technology, Vadodara, where I developed a strong foundation in algorithms, data structures, and software design.\n
I work primarily with Node.js, Spring Boot, PostgreSQL, and Cloud — building services that balance reliability and performance. Lately, I’ve been exploring lower-level C/C++ to better understand system internals and performance optimization.\n
Outside of work, I enjoy building side projects that challenge my problem-solving skills — from creating an image-processor in go and  SDL-based graphics projects. I am also interested in system design and architecture\n
I am passionate about continuous learning, exploring new technologies, and sharing knowledge through writing and collaboration. I’m always excited to connect with like-minded engineers, contribute to open-source projects, and take on interesting challenges.`,
  education: [
    {
      degree: "B.Tech.",
      institution: "Indian Insitute of Information Technology, Vadodara",
      major: "Computer Science and Engineering",
      currentlyOngoing: false,
      startYear: 2021,
      endYear: 2025,
    },
  ],
  projects: [
    {
      backgroundImage: "/blog/first-post/dock.png",
      link: "https://www.google.com",
      subtitle: "web app",
      title: "Stone",
      description: "This is the stone project",
      techTags: ["NextJS", "NodeJS", "redis", "postgressql", "GCP"],
    },
    {
      backgroundImage: "/blog/first-post/dock.png",
      link: "https://www.google.com",
      subtitle: "web app",
      title: "Stone",
      description: "This is the stone project",
      techTags: ["NextJS", "NodeJS", "redis", "postgressql", "GCP"],
    },
    {
      backgroundImage: "/blog/first-post/dock.png",
      link: "https://www.google.com",
      subtitle: "web app",
      title: "Stone",
      description: "This is the stone project",
      techTags: ["NextJS", "NodeJS", "redis", "postgressql", "GCP"],
    },
    {
      backgroundImage: "/blog/first-post/dock.png",
      link: "https://www.google.com",
      subtitle: "web app",
      title: "Stone",
      description: "This is the stone project",
      techTags: ["NextJS", "NodeJS", "redis", "postgressql", "GCP"],
    },
  ],
  skills: [
    {
      name: "Languages",
      items: ["JavaScript", "Java", "C++", "Go", "TypeScript", "C", "Python"],
    },
    {
      name: "Databases",
      items: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch", "MongoDB"],
    },
    {
      name: "Frameworks & APIs",
      items: [
        "Spring",
        "Node.js",
        "Next.js",
        "FastAPI",
        "REST API",
        "GraphQL",
        "Apache Beam",
      ],
    },
    {
      name: "Tooling",
      items: ["Docker", "Git", "Linux", "Shell", "Postman", "GitHub Actions"],
    },
    {
      name: "Cloud & Messaging",
      items: [
        "Cloud Run",
        "Dataflow",
        "Pub/Sub",
        "Artifact Registry",
        "Eventarc",
        "SQS/SNS",
        "AWS Lambda",
      ],
    },
  ],
  footer: {
    socialLinks: {
      github: {
        link: "https://github.com/soumil4561",
        hidden: false,
        logoSlug: "github",
      },
      linkedin: {
        link: "https://linkedin.com/in/soumil4561",
        hidden: false,
        logoSlug: "linkedin",
      },
      resume: {
        link: "/resume.pdf",
        hidden: false,
        logoSlug: "pdf",
      },
    },
    pages: [
      {
        name: "home",
        href: "/",
      },
      {
        name: "about",
        href: "/about",
      },
      {
        name: "blog",
        href: "/blog",
      },
      {
        name: "contact",
        href: "/contact",
      },
    ],
  },
};
