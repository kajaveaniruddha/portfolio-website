import CoinDex from "../assets/projects/CoinDex.jpg";
import TodoZen from "../assets/projects/TodoZen.jpg";
import MalwareClassifier from "../assets/projects/malware-classification.jpg";

export const HERO_CONTENT = `With over 1+ of experience in startups, I have developed strong skills in front-end technologies (React, Next.js) and back-end technologies (Node.js, MySQL, MongoDB), along with expertise in Docker, Redis, AWS Cloud, and system design. My goal is to leverage this expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - Present",
    role: "Frontend Engineer Intern",
    company: "FutureSmart Ai",
    description: [
      `Spearheaded the complete frontend and SEO for aidemos.com using Next.js 14, resulting in an 800x growth in organic traffic and improved user experience by 95%.`,
      ` Pioneered the development of 12 AI Tools (https://aidemos.com/live-demos) with G-Auth, employed Sentry for error tracking and performance monitoring, while spearheading the onboarding process for new interns. `,
      ` Built a robust hosting infrastructure on AWS EC2, leveraging Nginx, PM2, and shell scripting to ensure 99.99% uptime.`,
      ` Delivered crucial fixes and enhancements for clients in the absence of the project lead.`,
      `Designed a full-duplex chat for client chatbot, enabling seamless bot-to-agent handoff.`,
    ],
    technologies: [
      "Next.js 14",
      "SEO",
      "React.js",
      "Sentry",
      "AWS EC2",
      "Nginx",
      "PM2",
    ],
  },
  {
    year: "January 2024 - May 2024",
    role: "Teaching Assistant (Computer Organisation and Architecture)",
    company: "IIITV-ICD",
    description: [
      `Crafted and evaluated engaging semester projects for a class of 193 students in collaboration with Dr. Varun Kumar, contributing to improved overall course quality.`,
    ],
    technologies: ["Project Management", "Collaboration"],
  },
  {
    year: "November 2023 - December 2023",
    role: "Software Developer Intern",
    company: "Zen Finserv",
    description: [
      `Engineered real-time data stream of 108,000 NSE stock data points using WebSockets from Accelpix API, integrated with TradingView in React.js for market visualisation and low-latency charting.`,
      ` Utilised Elasticsearch for managing and searching extensive stock data volumes, enhancing search performance metrics by 4x.`,
      ` Implemented comprehensive JWT authentication protocols ensuring secure access and data integrity.`,
    ],
    technologies: ["WebSockets", "React.js", "Elasticsearch", "JWT"],
  },
];

export const PROJECTS = [
  {
    title: "CoinDex",
    image: CoinDex,
    description: [
      "Developed a real-time cryptocurrency dashboard to track the price, 24-hour change, and market cap of Bitcoin, Ethereum, and Solana with data from Binance.",
    ],
    technologies: ["WebSocket", "React.js", "Tailwind CSS"],
    link: "https://coin-dex.vercel.app/",
  },
  {
    title: "ToDoZen",
    image: TodoZen,
    description: [
      "Designed and developed a responsive and scalable cloud-based web application for managing tasks, including assigning tasks to other users.",
      " Implemented express-validator for HTML injection defense and XSS attack reduction, and used bcrypt.js for secure password storage.",
    ],
    technologies: [
      "MongoDB Atlas",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Framer-motion",
    ],
    link: "https://todozen-client.onrender.com/",
  },
  {
    title: "Malware Classification using Deep Learning",
    image: MalwareClassifier,
    description: [
      "Built a Convolutional Neural Network (CNN) deep learning model, achieving 93.62% accuracy in classifying 9,100 malware images into 26 different classes.",
    ],
    technologies: ["Python", "Tensorflow (Keras)"],
    link: "https://github.com/kajaveaniruddha/Malware-Classification-using-CNN",
  },
];

export const CONTACT = {
  address: "Maharashtra, India",
  email: "aakajave@gmail.com",
};
