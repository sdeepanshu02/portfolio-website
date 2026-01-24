import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gojek",
    position: "Senior Software Engineer",
    company: "Gojek",
    location: "Bangalore, India",
    startDate: new Date("2022-05-01"),
    endDate: "Present",
    description: [
      "Built a REST-based multi-tenant, multi-region container platform (GoCloud) from scratch serving ~100k requests per second.",
      "Designed and revamped the network proxy layer using next-generation Kubernetes Gateway APIs.",
      "Developed internal full-stack web portals to improve platform usability and operational efficiency.",
      "Implemented observability and alerting systems for infrastructure and application health monitoring.",
      "Led development of new workflows to enable self-service onboarding and operations for engineering teams.",
    ],
    achievements: [
      "Reduced cloud infrastructure cost by approximately $100K annually through platform optimizations.",
      "Reduced onboarding time from hours to minutes by introducing automated workflows and self-service tooling.",
      "Delivered a microservice to manage Helm releases across remote clusters via REST APIs.",
      "Improved deployment visibility by enabling real-time operational insights in the internal portal.",
      "Contributed to building a new customer-facing cloud platform.",
    ],
    skills: [
      "Go",
      "Kubernetes",
      "REST",
      "Microservices",
      "Helm",
      "React",
      "Cloud Infrastructure",
      "Observability",
      "Distributed Systems",
    ],
    companyUrl: "https://www.gojek.io/",
    logo: "/experience/gojek-logo.png",
  },
  {
    id: "ge-healthcare",
    position: "Software Engineer",
    company: "GE Healthcare",
    location: "Bangalore, India",
    startDate: new Date("2019-07-01"),
    endDate: new Date("2022-04-01"),
    description: [
      "Worked on the Edison Health Link (EHL) platform within the IaaS team to deliver scalable platform features.",
      "Built REST APIs to enable horizontal scaling of platform clusters.",
      "Designed artifact storage systems for managing application binaries and releases.",
      "Developed secure vault services for storing secrets within the platform.",
      "Built automation tools for one-click installation of multi-node Kubernetes clusters on Windows environments.",
    ],
    achievements: [
      "Improved platform scalability through API-driven horizontal scaling mechanisms.",
      "Increased security posture by implementing centralized secrets management.",
      "Simplified cluster installation using automated tooling for Windows-based environments.",
      "Enhanced HIPAA compliance by building ML-based PHI detection for unstructured text.",
      "Delivered a clinical NLP platform to extract meaningful insights from clinical notes.",
    ],
    skills: [
      "Go",
      "Python",
      "Kubernetes",
      "REST",
      "NLP",
    ],
    companyUrl: "https://www.gehealthcare.com/",
    logo: "/experience/ge-logo.png",
  },
  {
    id: "ugam-solutions",
    position: "Intern",
    company: "Ugam Solutions",
    location: "Bangalore, India",
    startDate: new Date("2018-05-01"),
    endDate: new Date("2018-07-01"),
    description: [
      "Developed a system to detect brand presence across banners and carousels on e-commerce websites.",
      "Implemented automated identification of featured products from visual content.",
      "Built analytics tooling to measure online brand visibility for enterprise clients.",
    ],
    achievements: [
      "Enabled clients to track and quantify their digital brand presence automatically.",
      "Improved accuracy of product detection from e-commerce banners.",
      "Helped clients make data-driven decisions to improve marketing reach.",
    ],
    skills: [
      "Python",
      "Computer Vision",
      "Image Processing",
    ],
    companyUrl: "http://www.ugamsolutions.com/",
    logo: "/experience/ugam-logo.jpeg",
  },
  {
    id: "healthatm",
    position: "Intern",
    company: "Yolo Health (HealthATM India Pvt. Ltd.)",
    location: "Pune, India",
    startDate: new Date("2017-05-01"),
    endDate: new Date("2017-07-01"),
    description: [
      "Developed backend APIs using Django for a healthcare startup supported by IIT Bombay.",
      "Built customer support backend systems to manage operational workflows.",
      "Contributed to early-stage product development and backend architecture.",
    ],
    achievements: [
      "Delivered production-ready APIs for core business workflows.",
      "Improved operational efficiency through backend automation.",
      "Supported rapid MVP development for a healthcare startup.",
    ],
    skills: [
      "Python",
      "Django",
      "REST",
      "SQL",
      "System Design",
    ],
    companyUrl: "https://yolohealth.in/",
    logo: "/experience/yolo-health-logo.png",
  },
];
