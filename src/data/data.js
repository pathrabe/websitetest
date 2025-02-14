// src/data/data.js

export const navLinks = [
  { id: 1, name: "About Me", url: "#about" },
  { id: 2, name: "The Journey", url: "#experience" },
  { id: 3, name: "Transformation", url: "#transform" },
  { id: 4, name: "Learnings", url: "#skills" },
  // { id: 4, name: "Projects", url: "#projects" },
  // { id: 5, name: "Achievements", url: "#achievements" },
  // { id: 6, name: "Education", url: "#education" },
  { id: 7, name: "Contact", url: "#contact" },
  { id: 8, name: "Story", url: "#media" },
];

export const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    url: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr",
  },
  {
    id: 2,
    name: "TikTok",
    url: "https://www.tiktok.com/@pathrabe4?_t=ZG-8thOAgyECYa&_r=1",
  },
  { 
    id: 3, 
    name: "Youtube", 
    url: "https://youtube.com/@ankurpathrabe?si=6z_t_ujIWwfASw58" 
  },
  {
    id: 4,
    name: "Email",
    url: 'mailto:pathrabeankur@gmail.com',
  },
];

export const personalInfo = {
  name: "Ankur Pathrabe",
  shortName: "Ankur",
  description: "Bodybuilder and Analyst",
  about: [
    "Achieving the full natural potential to observe the beauty of the human mind and body. I have fixated my vision on the goal.",
    "Balancing fitness while enjoying my hobbies isn't easy, but I've embraced the challenge, working as a full-time corporate analyst, 9-5. Through sheer resilience and dedication, I've pushed past every obstacle, proving that consistency and hard work can overcome any limitation. Fitness is a lifelong journey of growth, and I am constantly learning and evolving throughout my 10+ years of experience.",
    "My mission is to inspire others to rise above excuses, step beyond their comfort zones, and strive for something greater. Extraordinary results come from extraordinary effort—and it all starts with a single step. Let's embark on this journey together and create a community of like-minded achievers.💯",
    ],
  currentCompany: {
    name: "London",
    url: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr", ///change
  },
  contact: {
    heading: "Let's Connect !",
    message: `
      Whether you have a question or just want to say hi, feel free to drop a message! 😄
    `,
    email: "pathrabeankur@gmail.com",
  },
};

export const skills = [
  {
    category: "Training",
    items: ["Chest", "Back", "Shoulder", "Biceps", "Triceps", "Quads", "Hamstrings", "Calves"],
  },
  {
    category: "Splits",
    items: ["Upper", "Lower", "Push", "Pull", "Legs"],
  },
  {
    category: "Nutrition",
    items: ["Protein", "Carbs", "Fibre"],
  },
  {
    category: "Essentials",
    items: ["Creatine", "Caffine", "Hydration"],
  },
  {
    category: "Supplements",
    items: ["Multivitamins", "BCAA", "Omega-3", "B12", "Zn/Mg"],
  },
  {
    category: "Equipments",
    items: ["Shoes", "Wrist wraps", "Belt"],
  },
];

export const experiences = [
  {
    id: 1,
    position: "drop a photo", ///drop few photos
    company: "random",
    location: "India",
    url: "random",
    date: "2015-2018",
    responsibilities: [
      "I have been a sprinter during my school and tried various sports which my parent were very supportiove of and beleived to be a healthy hobbies leading to my passion for sports. Instantly, when I joined my university I was always fascnitated by the sports team and ever since dreamt of representing my university in sports at highest level.",
      "I kept training through years and found interest in shotput while keeping at my sprints. Our amazing coach always encouraged the team to do their best. With my teammates healthy competitions and lifting each other we were able to achieve the dream and represnted my university alongside the best athletes in India.",
    ],
    techStack:  ["random"],
  },
  {
    id: 2,
    position: "drop a photo", ///drop few photos
    company: "random",
    location: "Australia",
    url: "random",
    date: "2019-2022",
    responsibilities: [
      "A year gap in my sports due to studies was mentally and physically challenging. I dedicated myself and achieved my results but it was time to embark back on the sports journey. It was difficult to get back on track. My friends have been contant in the gym, so I decided to give it a try. I realised this was may be something of my interest. With the mentality of athlete and little knowledge about bodybuilding I was trying to hit the gym.",
      "I had a bit of structure forming and I thought this could be pursuable. I stuck to it in 2019. The year of change was 2020-2022 when I moved to Australia for my Master's. COVID lockdown hits Melbourne, restricting the access to gym or any sports. I got into my worst shape but couldn't accept the fact that this was me, so I decide this needs to change",
    ],
    techStack:  ["random"],
  },
  {
    id: 3,
    position: "drop a photo", ///drop few photos
    company: "random",
    location: "London, UK",
    url: "random",
    date: "2023-2025",
    responsibilities: [
      "Locking-in, was the only option learning from past experiences. I decided that this time I am going to give it all and stay focused. I love to enjoy food and travel, so this comes non-negotiable with my fitness goals while balancing a full-time job, managing daily responsibilities, and preparing nutritious, flavourful meals to fuel my body. Discipline and time management have been just as crucial as the training itself.",
      "What started as just 15 minutes in the gym turned into a passion I never want to step away from. This journey has not only reshaped me physically but has also been a profound mental and emotional transformation, instilling a confidence I never had before.🚀 Despite the challenges, I've pushed past every obstacle through sheer resilience and dedication, proving that consistency and hard work can overcome any limitation. Fitness is a continuous journey of growth, and I am always learning and evolving.",
    ],
    techStack: ["random"] ,
  },
  

];

export const projects = [
  {
    id: 1,
    title: "Progressive Growth 💪🏻",
    description:
      "Capturing my growth since last 2 years.",
    techStack: [
       `${process.env.PUBLIC_URL}/back1.jpeg`,
      `${process.env.PUBLIC_URL}/back2.jpeg`,
      `${process.env.PUBLIC_URL}/front1.jpeg`,
      `${process.env.PUBLIC_URL}/front2.jpeg`,
    ],
    url: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr",
    external: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr",
    stars: 0,
  },
  {
    id: 2,
    title: "Flexing Worldwide 🌎",
    description:
      "Build a body that speaks for itself.",
    techStack: [
       `${process.env.PUBLIC_URL}/flex3.jpeg`,
      `${process.env.PUBLIC_URL}/flex4.jpeg`,
      `${process.env.PUBLIC_URL}/profile3.jpeg`,
      `${process.env.PUBLIC_URL}/flex2.jpeg`,
    ],
    url: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr",
    external: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr",
    stars: 0,
  },
];

export const transform = [
  {
    id: 1,
    title: "Progressive Growth 💪🏻",
    description:
      "Capturing my growth since last 2 years.",
    transformImages: [
      `${process.env.PUBLIC_URL}/front1.jpeg`,
      `${process.env.PUBLIC_URL}/front2.jpeg`,
      `${process.env.PUBLIC_URL}/back1.jpeg`,
      `${process.env.PUBLIC_URL}/back2.jpeg`,
    ],
    url: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr",
  },
  {
    id: 2,
    title: "Flexing Worldwide 🌎",
    description:
      "Build a body that speaks for itself.",
    transformImages: [
      `${process.env.PUBLIC_URL}/flex3.jpeg`,
     `${process.env.PUBLIC_URL}/flex4.jpeg`,
     `${process.env.PUBLIC_URL}/profile3.jpeg`,
     `${process.env.PUBLIC_URL}/flex2.jpeg`,
    ],
    url: "https://www.instagram.com/ankur_pathrabe?igsh=eXVqNnVnaWtrcGhz&utm_source=qr",
  },
];

export const media = [
  {
    id: 1,
    title: "Indian Genetics 🧬",
    description:
      "The 2-year transformation breaking the stereotypes !",
    // transformImages: [
    //   `${process.env.PUBLIC_URL}/front1.jpeg`,
    //   `${process.env.PUBLIC_URL}/front2.jpeg`,
    //   `${process.env.PUBLIC_URL}/back1.jpeg`,
    //   `${process.env.PUBLIC_URL}/back2.jpeg`,
    // ],
    url: "https://www.youtube.com/embed/bA5JQYdCzcU",
  },
  {
    id: 2,
    title: "Flex Worldwide 🌎",
    description:
      "Average to unstoppable - all the way up !",
    // transformImages: [
    //   `${process.env.PUBLIC_URL}/front1.jpeg`,
    //   `${process.env.PUBLIC_URL}/front2.jpeg`,
    //   `${process.env.PUBLIC_URL}/back1.jpeg`,
    //   `${process.env.PUBLIC_URL}/back2.jpeg`,
    // ],
    url: "https://www.youtube.com/embed/HjoAofJmeR0",
  },
];

export const achievements = [
  {
    id: 1,
    title: "GenAI for Ad Creative",
    description:
      "Introduced GenAI (Llama 2) for Ad Creatives in Meta Ads Manager App in Meta GenAI Hackathon, enhancing ad creative capabilities.",
  },
  {
    id: 2,
    title: "Innovation Award",
    description:
      'Received the "Most Innovative Award" at the Amazon Pay EDH Hackathon for pioneering a near-zero latency model for the Amazon Pay For Business App.',
  },
  {
    id: 3,
    title: "Scholarship Recognition",
    description:
      "Recognized with the Jagadis Bose National Talent Search Scholarship, selected as one of 56 scholars from over 3000 applicants from top-tier colleges.",
  },
];

export const education = [
  {
    id: 1,
    school: "IIT BHU",
    url: "https://en.wikipedia.org/wiki/IIT_(BHU)_Varanasi",
    degree: "Bachelor Of Technology",
    duration: "2015 - 2019",
    location: "Varanasi, India",
    major: "Electrical Engineering",
    details: ["CGPA: 8.05"],
  },
];

export const contactInfo = {
  heading: "Let's Connect !",
  message: `
    Whether you have a question or just want to say hi, feel free to drop a message!
  `,
  email: "pathrabeankur@gmail.com",
};
