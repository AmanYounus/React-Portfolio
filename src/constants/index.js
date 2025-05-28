import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

export const HERO_CONTENT = `I'm an AI Engineer with a strong passion for developing intelligent systems and creating seamless web experiences. Recently graduated with a focus on machine learning, deep learning, and full-stack development. I enjoy building AI-powered applications and leveraging technologies like React to bring innovative ideas to life. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated AI engineer and full-stack developer with a strong interest in building intelligent, user-focused applications. As a recent graduate, I’ve gained hands-on experience working with technologies such as React, Node.js, Python, and various machine learning frameworks like TensorFlow and scikit-learn. I also have a solid understanding of relational databases and have worked with SQL for data querying and management.`;



export const PROJECTS = [
  {
    title: "Sign language Animation Generating System",
    image: project1,
    description:
      "An innovative initiative that transforms text inputs into animated representations of Indian Sign Language(ISL).",
    technologies: ["Flask", "Python", "NLTK", "SIGML", "Stanford Parser"],
  },
  {
    title: "AI Web Scraper",
    image: project2,
    description:
      "A simple web scraping tool which allows users to input any website URL and scrape the page content in real-time through a user-friendly web interface.",
    technologies: ["Streamlit", "Python", "Selenium", "Bright Data"],
  },
  {
    title: "AI Agent",
    image: project3,
    description:
      "This project is an intelligent document parsing agent that uses natural language processing to extract and embed structured information from unstructured files. Ideal for building semantic search, Q&A, or knowledge base systems.",
    technologies: ["Ollama", "Python", "LlamaParse", "Pydantic"],
  },
  {
    title: "React portfolio",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer motion", "Vercel"],
  },
];

export const CONTACT = {
  address: "601 ,Al Sayegh Center ,3 - Kan'ad St - Zone 1 - Al Danah - Abu Dhabi",
  phoneNo: "+971 56 5497144 ",
  email: "Amanyounusofficial2002@gmail.com",
};
