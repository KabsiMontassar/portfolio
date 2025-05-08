const PageData = `"The only way to do great work is to love what you do"`;

const HeroData = {
  description: `Hi, I'm Kebsi Montassar, a Full Stack Developer passionate about building AI-integrated web applications and scalable cloud-based solutions. I aspire to create secure, efficient systems using the best tools for each project. I'm especially focused on delivering complete web experiences that combine strong UI/UX design with smart, thoughtful AI features.`,
  buttonText: `More About Me`
}

const AchievementsData = {
  firstText: `Get to know me More`,
  secondText: `Explore my journey through projects, experiences, and achievements that shaped my career.`,

  cards: [
    {
      title: "Projects",
      description: "Built responsive web applications using React, Node.js, and modern frameworks. Specialized in creating interactive dashboards and e-commerce solutions with focus on performance and accessibility.",
      number: "15+",
      label: "projects",
      color: "purple",
      images: [
        { url: "/images/projects/project1.jpg", title: "E-commerce Platform" },
        { url: "/images/projects/project2.jpg", title: "Analytics Dashboard" },
        { url: "/images/projects/project3.jpg", title: "Mobile App" }
      ],
      skills: ["React", "Node.js", "TypeScript", "GraphQL", "Chakra UI"]
    },

    {
      title: "Experience",
      description: "Professional work experience at tech companies, contributing to large-scale projects and collaborating with cross-functional teams. Led initiatives that improved performance by 40% and user satisfaction by 25%.",
      number: "3+",
      label: "experiences",
      color: "green",
      images: [
        { url: "/images/experiences/exp1.jpg", title: "Tech Company A" },
        { url: "/images/experiences/exp2.jpg", title: "Tech Company B" },
        { url: "/images/experiences/exp3.jpg", title: "Tech Company C" }
      ],
      skills: ["Leadership", "Agile Methodologies", "Mentoring", "Project Management"]
    },
    {
      title: `Education`,
      description: `Advanced degrees in Computer Science with focus on human-computer interaction and distributed systems. Published research papers on innovative approaches to user interface design.`,
      number: `2+`,
      label: `education`,
      color: `teal`,
      images: [
        { url: "/images/education/edu1.jpg", title: "Bachelor's Degree" },
        { url: "/images/education/edu2.jpg", title: "Master's Degree" }
      ],
      skills: ["Research", "Algorithms", "Distributed Systems", "HCI"]
    },
    {
      title: "Hackathons",
      description: "Participated in competitive coding events, winning awards for innovative solutions in AI and web development categories. Collaborated with diverse teams to build prototypes under time constraints.",
      number: "5+",
      label: "hackathons",
      color: "blue",
      images: [
        { url: "/images/hackathons/hack1.jpg", title: "AI Challenge" },
        { url: "/images/hackathons/hack2.jpg", title: "Web Dev Contest" },
        { url: "/images/hackathons/hack3.jpg", title: "Hackathon Finals" }
      ],
      skills: ["Teamwork", "Problem Solving", "Prototyping", "Presentation"]
    },
    {
      title: `Certificates`,
      description: `Completed certifications in web development, cloud computing, and UX design from recognized platforms like Coursera and
      Udemy. Continuously learning new technologies to stay ahead in the field.`,
      number: `10+`,
      label: `certificates`,
      color: `orange`,
      images: [
        { url: "/images/certificates/cert1.jpg", title: "Web Development" },
        { url: "/images/certificates/cert2.jpg", title: "Cloud Computing" },
        { url: "/images/certificates/cert3.jpg", title: "UX Design" }
      ],
      skills: ["Continuous Learning", "Cloud Architecture", "UI/UX Principles"]
    },
    {
      title: `Skills`,
      description: `Mastered technologies including JavaScript, Python, React, Node.js, and cloud platforms like AWS and Firebase. Strong foundation in both frontend and backend development with focus on clean code practices.`,
      number: `20+`,
      label: `skills`,
      color: `red`,
      images: [
        { url: "/images/skills/skill1.jpg", title: "JavaScript Expertise" },
        { url: "/images/skills/skill2.jpg", title: "React Development" },
        { url: "/images/skills/skill3.jpg", title: "AWS Cloud" }
      ],
      skills: ["JavaScript", "Python", "React", "Node.js", "AWS", "Firebase"]
    },

  ]

}

const PersonalCardData = {
  text : `Hi`
}

const data = {
  PageData,
  HeroData,
  AchievementsData,
  PersonalCardData
}



export { data}