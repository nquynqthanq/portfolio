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
    meta,
    tesla,
    shopify,
    threejs,
    snapgram,
    OnlyFood,
    adviceapp,
    firebase,
    fived,
    onlyfood,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "C# Developer",
      company_name: "OnlyFood",
      icon: onlyfood,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Nov 2023",
      points: [
        "Developing and maintaining applications using C# and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "FiveD",
      icon: fived,
      iconBg: "#383E56",
      date: "Mar 2024 - Jul 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Snapgram",
      description:
        "Snapgram is a social media application that allows users to share photos and videos with their followers. Users can also interact with posts by liking, commenting, and sharing them, fostering a vibrant community of content creators and consumers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "appwrite",
          color: "pink-text-gradient",
        },
      ],
      image: snapgram,
      source_code_link: "https://github.com/qthawq100dayswithreact/social-media-application/tree/main",
    },
    {
      name: "OnlyFood",
      description:
        "OnlyFood is a comprehensive restaurant management application designed to streamline operations and enhance customer experiences. It facilitates tasks such as order management, inventory tracking, employee scheduling, and customer relationship management.",
      tags: [
        {
          name: "C Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "WPF",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: OnlyFood,
      source_code_link: "https://github.com/DoAnLapTrinhTrucQuanUIT/IT008.O13",
    },

    {
      name: "AdviceNow",
      description:
        "AdviceNow is a simple web application that provides random pieces of advice to users seeking guidance or inspiration. Users can click a button to receive a new piece of advice instantly.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: adviceapp,
      source_code_link: "https://github.com/qthawq100dayswithreact/GivingAdvice/tree/main",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };