export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "welcome...",
  description: "Hey, I'm Soumil, Welcome",
  navItems: [
    {
      label: "Resume",
      href: "/",
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
  links: {
    github: "https://github.com/soumil4561",
    // docs: "https://soumil4561.github.io",
  },
  extendedDescription: `I’m Soumil Singh, a software engineer currently based in Bangalore, who enjoys building efficient, scalable systems and exploring how things work under the hood.\n
I am a computer science graduate from the Indian Institute of Information Technology, Vadodara, where I developed a strong foundation in algorithms, data structures, and software design.\n
I work primarily with Node.js, Spring Boot, PostgreSQL, and Cloud — building services that balance reliability and performance. Lately, I’ve been exploring lower-level C/C++ to better understand system internals and performance optimization.\n
Outside of work, I enjoy building side projects that challenge my problem-solving skills — from creating an image-processor in go and  SDL-based graphics projects. I am also interested in system design and architecture\n
I am passionate about continuous learning, exploring new technologies, and sharing knowledge through writing and collaboration. I’m always excited to connect with like-minded engineers, contribute to open-source projects, and take on interesting challenges.`,
};
