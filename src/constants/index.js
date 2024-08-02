import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  bluethunder,
  regal,
  p3i,
  carrent,
  jobit,
  tripguide,
  threejs,
  researcher,
  intel,
  carousel,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Designer",
    icon: figma,
  },
  {
    title: "Researcher",
    icon: researcher,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Programming Captain",
    company_name: "Maui High School Robotics",
    icon: bluethunder,
    iconBg: "white",
    date: "Aug 2015 - May 2019",
    points: [
      "Manage and oversee my fellow programmers",
      "Communicate to different departments regarding the build, status, and the functional mechanisms of the robot",
      "Combine all robot components code into one master code for competition use",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "Regal",
    icon: regal,
    iconBg: "white",
    date: "Jun 2019 - Present",
    points: [
      "Manage and oversee Regal floorstaff",
      "Manage cashflow during business hours",
      "Handle administrative duties",
      "Enforce Regal poclicies",
      "Keep up-to-date with training and regulations",
    ],
  },
  {
    title: "P3I Intern",
    company_name: "Pacific Intelligence Innovation Initiative (P3I) ARL",
    icon: p3i,
    iconBg: "white",
    date: "Dec 2023 - Present",
    points: [
      "Researched and reported on different design systems for web development",
      "Utilized React to use design system components to existing or new projects",
      "Rsearched into different 3D Javascript libraries for their different benefits and disadvantages",

    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const contacts = [
  {
    icon: figma,
  },
  {
    icon: github,
  },
  {
    icon: git,
  },
];

const projects = [
  {
    name: "Intel Static Support Page",
    description:
      "This project involves using the Material Design UI and creating a barebones support page for a company (Intel). Customized the Material Design components to my preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: intel,
    source_code_link: "https://github.com/mistydelacruz/Mat_Design_Support_Page",
  },
  {
    name: "Login Image Carousel",
    description:
      "This project utilizes useStates to create an image carousel that infintely loops in both ways. Demonstrates the use and practice of React useStates for any applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: carousel,
    source_code_link: "https://github.com/mistydelacruz/Carousel",
  },
];

export { services, technologies, experiences, projects, contacts };