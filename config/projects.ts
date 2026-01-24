import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    "id": "medi_world",
    "companyName": "Medi World",
    "type": "Personal",
    "category": ["Mobile App", "Android", "Health Records App"],
    "shortDescription": "Android application for storing and viewing detailed medical diagnosis history for patients and doctors.",
    "techStack": ["Java", "Android", "PHP", "MySQL",],
    "startDate": new Date("2016-06-18"),
    "endDate": new Date("2016-09-27"),
    "companyLogoImg": "",
    "pagesInfoArr": [
      {
        "title": "Patient & Doctor Modules",
        "description": "Includes separate login experiences: patients can view their medical history, and doctors can enter and update diagnosis and prescription details.",
        "imgArr": []
      }
    ],
    "descriptionDetails": {
      "paragraphs": [
        "Medi World is an Android application that helps patients maintain a centralized history of their medical diagnosis reports.",
        "The app provides a login system where patients can view their past visits and medications, and doctors can add new diagnostic details via a dedicated module.",
        "Under the hood, it uses a backend built with PHP and a MySQL database to store and retrieve medical records via JSON API calls."
      ],
      "bullets": [
        "Built a full-stack mobile solution with Android front-end and a PHP/MySQL backend for storing medical reports.",
        "Enabled patients to register, login, and view their visit history and latest medical updates.",
        "Provided doctors with an interface to enter and manage diagnosis and prescription data for patients.",
        "Structured the app to exchange data using JSON and remote database connectivity."
      ]
    }
  },
  {
    "id": "time_table",
    "companyName": "Time Table",
    "type": "Personal",
    "category": ["Mobile App", "Android", "Utility App"],
    "shortDescription": "Android application to help users create, manage, and view their daily timetable for lectures and tasks.",
    "techStack": ["Java", "Android", "SQLite",],
    "startDate": new Date("2016-06-11"),
    "endDate": new Date("2016-07-14"),
    "companyLogoImg": "",
    "pagesInfoArr": [
      {
        "title": "Timetable Screens",
        "description": "Screens to create and display daily schedules for subjects, lectures, or tasks on an interactive calendar.",
        "imgArr": []
      }
    ],
    "descriptionDetails": {
      "paragraphs": [
        "Time_Table is an Android application that allows users to manage their daily class or activity schedules by adding, editing, and viewing timetable entries.",
        "The app is built in Java using Android Studio and follows a typical Android UI pattern for displaying calendar or list based schedules.",
        "Data is stored locally (e.g., SQLite) and presented to users in an organized view to help them plan and track their day."
      ],
      "bullets": [
        "Developed a daily schedule management app on Android using Java and Android Studio.",
        "Enabled users to add, edit, and view timetable entries representing lectures or tasks.",
        "Designed the interface to present schedules clearly, with future support for reminders and calendar integration.",
        "Implemented local data persistence using SQLite to retain user schedules between sessions."
      ]
    }
  },
  {
    "id": "where-r-u",
    "companyName": "Where-r-u-",
    "type": "Personal",
    "category": ["Mobile App", "Android"],
    "shortDescription": "Android location-sharing app to find people in your contacts who are using the app, showing their latest coordinates on a map.",
    "techStack": ["Java", "Android", "Google Maps API", "Volley", "REST"],
    "startDate": new Date("2016-09-26"),
    "endDate": new Date("2016-11-15"),
    "companyLogoImg": "",
    "pagesInfoArr": [
      {
        "title": "Core Functionality",
        "description": "Locates users from your contact list who are registered on the app, fetches device coordinates, and displays markers on a Google map.",
        "imgArr": []
      }
    ],
    "descriptionDetails": {
      "paragraphs": [
        "Where-r-u- is an Android application that lets users locate people in their contact list who are also using the app by sharing and mapping the latest geographic coordinates.",
        "The app captures the user’s mobile number and device location, pushes it to a backend server, and retrieves location data of all registered users for display on a Google map.",
        "It includes features like background location updates and direction markers to visualize user positions in real time."
      ],
      "bullets": [
        "Built an Android location tracking app using Java and Google Maps API to visualize user locations.",
        "Implemented network communication with a server to push and fetch user coordinates using Volley.",
        "Enhanced user experience by placing map markers for all tracked contacts and preparing for future features like direction routing.",
        "Structured the app to support future backend improvements (e.g., migrating to Firebase) and background location tracking."
      ]
    }
  },
  {
    "id": "lib_management",
    "companyName": "Library Management",
    "type": "Personal",
    "category": ["Desktop App", "C++"],
    "shortDescription": "C++ based Library Management tool with a graphical user interface for handling library operations.",
    "techStack": ["C++", "C++ GUI",],
    "startDate": new Date("2014-01-01"),
    "endDate": new Date("2014-03-31"),
    "companyLogoImg": "",
    "pagesInfoArr": [
      {
        "title": "User Interface & Features",
        "description": "Graphical interface for managing books, users, and library operations via a C++ GUI application.",
        "imgArr": []
      }
    ],
    "descriptionDetails": {
      "paragraphs": [
        "Lib_Management is a desktop application built in C++ that provides a graphical user interface for managing library resources.",
        "It allows users to perform typical library operations — like adding, editing, and querying book and user records — through an interactive GUI instead of console commands.",
        "The tool leverages local file handling to persist data for books, users, and transactions without requiring a database backend."
      ],
      "bullets": [
        "Built a desktop library management system using C++ with a GUI interface.",
        "Implemented features for managing books and users including add, update, delete, and search operations.",
        "Used file input/output to store and retrieve persistent data locally.",
        "Designed the application UI to simplify user interaction with core library functions.",
        "Packaged the app as a standalone executable with GUI resources for smoother usability."
      ]
    }
  },
];

export const featuredProjects = Projects.slice(0, 3);
