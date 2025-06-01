import {
  mobile,
  backend,
  creator,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  horizon,
  logicwind,
  bitrix,
  gcp,
  scet,
  navchetan,
  vscode,
  express,
  graphql,
  mysql ,
  sequilize, 
  postgres ,
  postman,
  nannmo,
  vgs,
  touristica
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "postgress",
    icon: postgres,
  },
  {
    name: "vscode",
    icon: vscode,
  },
  {
    name: "Graphql",
    icon: graphql,
  },
  {
    name: "My Sql",
    icon: mysql,
  },
  {
    name: "sequelize",
    icon: sequilize,
  },
  {
    name: "express",
    icon: express
  }
  // {
  //   name: "figma",
  //   icon: figma,
  // }
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Horizon Tech Leads",
    icon: horizon,
    iconBg: "#383E56",
    date: "Jun 2022 - July 2022",
    points: [
        "Gained hands-on experience in full-stack web development, focusing on both front-end and back-end technologies.",
        "Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, and Bootstrap.",
        "Implemented interactive features like form validation, dynamic updates, and smooth animations.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Skilled in HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, and MongoDB."
       ],
  },
  {
    title: "Backend Developer",
    company_name: "Logicwind",
    icon: logicwind,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - April 2024",
    points: [
      "Developed backend applications using JavaScript, Node.js, Express.js, Sequelize, PostgreSQL, and MongoDB, building efficient REST and GraphQL APIs.",
      "Implemented user authentication and event management features to ensure secure access and seamless functionality.",
      "Created a Leave module with an alert system for the LWHUB App, designed email templates, and integrated the RSVP module with Google Calendar.",
      "Collaborated on multiple development tasks across team projects, ensuring high-quality deliverables and timely completion.",
      "Skilled in JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Sequelize, GraphQL, and Apollo Server."
    ] 
  },
  {
    title: "Backend Developer",
    company_name: "Bitrix Infotech pvt ltd",
    icon: bitrix,
    iconBg: "#383E56",
    date: "May 2024 - May 2025",
    points: [
      "Developed multiple web applications and an admin panel for multiple projects using Node.js, Express.js, EJS, MySQL, and MongoDB, enabling seamless management of users and data build efficient and scalable back-end systems.",
      "Built a real-time chat system using Facebook WhatsApp Business API, Node.js, MySQL, and Express.js, enhancing communication and support features for users.",
      "Contributed to the development of a crowdfunding website by leveraging Node.js, Express.js, EJS, and MongoDB, enabling a smooth and interactive donation process for users.",
      "Collaborated closely with cross-functional teams (front-end developers, product managers, and designers) to identify and prioritize project requirements, ensuring successful delivery and user satisfaction."
    ] 
  }
];


const educations = [
  {
    testimonial:
      "I am complated a Bachelor's degree in Information And Technology and Engineering in Sarvajanik College of Engineering And Technology, Surat ,Gujarat. I have completed B.E and have a CGPA of 8.78.",
    name: "2018-2023(8.78 CGPA)",
    designation: "B.E(IT)",
    company: "Sarvajanik College of Engineering And Technology.",
    image: scet,
  },
  {
    testimonial:
      "I completed my class 12 high school education at GCP International School ,Navasari,Gujarat, where I studied Science.",
    name: "2016-2018(70%)",
    designation: "12th, Science",
    company: "GCP International School",
    image: gcp,
  },
  {
    testimonial:
      "I completed my class 10 education at Navchetan HighSchool , Navasari ,Gujarat.",
    name: "2015-1016(82%)",
    designation: "10th, HSC",
    company: "Navchetan HighSchool",
    image: navchetan,
  },
];

const projects = [
  {
    name: "Nannmo",
    description:
      "Nannmo is a fractional real estate ownership platform that makes property investment affordable by offering flexible shares in residential properties for flipping and commercial properties for rental income Users can browse detailed property listings, invest in shares, and earn returns through a transparent and seamless process designed for both growth and steady income.",
    tags: [
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
      {
        name: "Jquery",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nannmo,
    source_code_link: "https://nannmo.com/",
  },
  {
    name: "Touristica",
    description:
      "Touristica is a smart travel platform that connects users, travel operators, and affiliates in one place. Users can discover and book tours or packages, while operators list their services to reach more customers. Affiliates can earn by promoting travel deals. With real-time bookings and secure payments, Touristica makes travel planning simple and rewarding for everyone.",
      tags: [
        {
          name: "Node Js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
        {
          name: "Jquery",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
    image: touristica,
    source_code_link: "https://user.va-sy.com/user",
  },
  {
    name: "Videogamesportbest",
    description:
      "VideoGameSportBets is a dynamic online platform that combines the thrill of live esports betting, real-time streaming, and interactive user chats. Designed for gamers and sports enthusiasts, the website allows multiple users to place live bets on their favorite video game tournaments and virtual sports matches while engaging in lively discussions through integrated chat features. ",
    tags: [
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "My Sql",
        color: "green-text-gradient",
      },
      {
        name: "Ejs",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "Jquery",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: vgs,
    source_code_link: "https://staging.videogamesportsbets.com/",
  },
];

export { services, technologies, experiences, projects, educations };
