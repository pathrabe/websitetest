// src/data/data.js

export const navLinks = [
  { id: 1, name: "About", url: "#about" },
  { id: 2, name: "Experience", url: "#experience" },
  { id: 3, name: "Projects", url: "#projects" },
  { id: 4, name: "Contact", url: "#contact" },
];

export const socialLinks = [
  { id: 1, name: "GitHub", url: "https://github.com/Dibyajyoti-Pradhan" },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/",
  },
  { id: 4, name: "Instagram", url: "https://www.instagram.com/shaky_coder/" },
];

export const personalInfo = {
  name: "Dibyajyoti Pradhan",
  description: "Senior Software Engineer",
  about: `I'm a Senior Software Engineer with a background in developing innovative and scalable software solutions. I've worked with leading companies like <a href="https://en.wikipedia.org/wiki/HubSpot" target="_blank" rel="noopener noreferrer">HubSpot</a>, <a href="https://en.wikipedia.org/wiki/Meta_Platforms" target="_blank" rel="noopener noreferrer">Meta</a>, and <a href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" rel="noopener noreferrer">Amazon</a>, building robust systems that improve user experiences and drive business growth. Currently, I’m focusing on products at HubSpot, leading engineering teams and optimizing system performance. My expertise includes full-stack development, system architecture, and mentoring.`,
  currentCompany: {
    name: "HubSpot",
    url: "https://en.wikipedia.org/wiki/HubSpot",
  },
  contact: {
    heading: "Get In Touch",
    message: `
          I'm currently open to new opportunities. Whether you have a question or
          just want to say hi, feel free to drop a message!
        `,
    email: "dibyojyotipradhan@gmail.com",
  },
};

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React", "React Native", "Spring MVC", "Google Guice"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Kubernetes", "Kafka", "AWS"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "DynamoDB", "Vitess DB"],
  },
  {
    category: "Other",
    items: [
      "RESTful APIs",
      "Backend Development",
      "Microservices",
      "Agile",
      "System Design",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Design Patterns",
    ],
  },
];

export const experiences = [
  {
    id: 1,
    position: "Senior Software Engineer",
    company: "HubSpot",
    url: "https://en.wikipedia.org/wiki/HubSpot",
    date: "07/2024 - Present",
    responsibilities: [
      "Spearheaded the design and implementation of Account Insights, enabling real-time recommendations, optimizing return on investment, and increasing user retention by 10%.",
      "Led a team of 4 engineers and provided mentorship to junior developers, driving team development and ensuring successful project delivery.",
    ],
    techStack: ["Java", "Spring MVC", "React"],
  },
  {
    id: 2,
    position: "Software Engineer II",
    company: "Meta",
    url: "https://en.wikipedia.org/wiki/Meta_Platforms",
    date: "04/2022 - 05/2024",
    responsibilities: [
      "Led development of mid-flight recommendation flows, like Placements and Campaign Budget, within the Ads Manager App (AMA), resulting in a notable 0.04% increase in Meta’s top-line revenue weighted adoptions and over 12,000 weekly resolutions.",
      "Achieved a 20% improvement in screen load times for 8 highly trafficked interfaces in AMA through efficient pre-fetching of relay queries, enhancing user experience.",
      "Revamped the duplication flow in AMA to align with ODAX objectives, resulting in a significant 14% increase in revenue and an 18% growth in ad duplications.",
      "Collaborated on implementing measurable enhancements, leading to improved performance metrics and increased user engagement within AMA.",
    ],
    techStack: ["React", "GraphQL", "Relay"],
  },
  {
    id: 3,
    position: "Software Development Engineer II",
    company: "Amazon",
    url: "https://en.wikipedia.org/wiki/Amazon_(company)",
    date: "10/2021 - 02/2022",
    responsibilities: [
      "Expanded user base of Amazon Pay for Business app by 5 million downloads and achieved a 4.3-star rating from launch. Improved app performance metrics by optimizing latency, enhancing user experience, and resolving operational inefficiencies.",
      "Engineered an innovative ‘Offline Architecture’ for the app, eliminating perceived latency and improving user experience.",
      "Streamlined crawler latency in Daily MIS Settlement Report, reducing processing time from 3 hours to 10 minutes, resolving delays for 70+ online and organized merchants.",
    ],
    techStack: ["Java", "Android", "AWS"],
  },
  {
    id: 4,
    position: "Software Development Engineer I",
    company: "Amazon",
    date: "07/2019 - 09/2021",
    responsibilities: [
      "Orchestrated the development of 18 major pages for the Amazon Pay for Business app.",
      "Played a pivotal role in a team of three, facilitating 5 million merchant engagements at launch.",
      "Provided mentorship to an SDE for promotion and an intern for a pre-placement offer, recognized with a promotion to Software Development Engineer-2.",
    ],
    techStack: ["Java", "React Native", "Node.js"],
  },
  {
    id: 5,
    position: "Software Development Engineer Intern",
    company: "Amazon",
    date: "05/2018 - 07/2018",
    responsibilities: [
      "Developed automation for sequence generation in a tier-1 service, benefiting over 100 developer teams in Amazon.",
      "Created a comprehensive full-stack admin tool to monitor and manage sequence configurations in real-time.",
      "Successfully transitioned from internship to a full-time position, demonstrating strong performance and commitment to excellence.",
    ],
    techStack: ["Java", "AWS", "Spring MVC"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Account Insights at HubSpot",
    description:
      "A project focused on providing real-time recommendations to optimize return on investment and increase user retention.",
    techStack: ["Java", "Spring MVC", "React"],
    url: "https://github.com/Dibyajyoti-Pradhan/account-insights",
    external: "https://project-account-insights.com",
    stars: 150,
  },
  {
    id: 2,
    title: "Mid-Flight Recommendation Flow at Meta",
    description:
      "Enhanced ad placements and campaign budget settings, improving revenue and user engagement for Ads Manager App.",
    techStack: ["React", "GraphQL", "Relay"],
    url: "https://github.com/Dibyajyoti-Pradhan/mid-flight-recommendation",
    external: "https://project-mid-flight.com",
    stars: 95,
  },
  {
    id: 3,
    title: "Amazon Pay for Business App",
    description:
      "Expanded the Amazon Pay for Business app user base, optimized latency, and engineered offline capabilities.",
    techStack: ["Java", "Android", "AWS"],
    url: "https://github.com/Dibyajyoti-Pradhan/amazon-pay-business",
    external: "https://amazon-pay-business.com",
    stars: 200,
  },
];
