import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // Programming
  {
    name: "Python",
    description:
      "A versatile, high-level programming language known for readability and broad application.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Go",
    description:
      "A statically typed, compiled language designed for simplicity and efficiency.",
    rating: 4,
    icon: Icons.go,
  },
  {
    name: "Ruby",
    description:
      "A dynamic, open-source language focused on simplicity and productivity.",
    rating: 4,
    icon: Icons.ruby,
  },
  // Frameworks
  {
    name: "Django",
    description:
      "A high-level Python web framework that encourages rapid development and clean design.",
    rating: 5,
    icon: Icons.django,
  },
  {
    name: "Ruby on Rails",
    description:
      "A server-side web application framework written in Ruby for fast development.",
    rating: 4,
    icon: Icons.rubyonrails,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 3,
    icon: Icons.react,
  },
  // Database
  {
    name: "MySQL",
    description:
      "An open-source relational database management system for structured data.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 3,
    icon: Icons.mongodb,
  },
  {
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database with advanced features.",
    rating: 5,
    icon: Icons.postgresql,
  },
  // Miscellaneous
  {
    name: "Docker",
    description:
      "A platform for developing, shipping, and running applications in containers.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "Kubernetes",
    description:
      "An open-source system for automating deployment, scaling, and management of containerized applications.",
    rating: 4,
    icon: Icons.kubernetes,
  },
  {
    name: "Helm",
    description:
      "A package manager for Kubernetes that streamlines application deployment.",
    rating: 4,
    icon: Icons.helm,
  },
  {
    name: "Terraform",
    description:
      "An infrastructure as code tool for building, changing, and versioning infrastructure safely.",
    rating: 3,
    icon: Icons.terraform,
  },
  {
    name: "GCP",
    description:
      "Google Cloud Platform provides scalable cloud computing services for building and deploying applications.",
    rating: 5,
    icon: Icons.gcp,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
