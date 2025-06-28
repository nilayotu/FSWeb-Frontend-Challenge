export default {
  header: {
    darkModeOn: "LIGHT MODE",
    darkModeOff: "DARK MODE",
    switchLang: "SWITCH TO TURKISH",
    skills: "Skills",
    projects: "Projects",
    hireMe: "Hire Me",
  },
  introduction: {
    name: "————Almila Su",
    title: "Creative thinker\nMinimalism lover",
    description: "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer to craft solid and scalable frontend products with great user experiences, let's shake hands with me.",
    buttons: ["Hire me", "Github", "Linkedin"],
  },
  skills: {
    title: "Skills",
    list: [
      {
        name: "JavaScript",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "React.js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "Node.js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }
    ]
  },
  profile: {
    title: "Profile",
    fields: [
      { label: "Birth Date", value: "24.03.1996" },
      { label: "City", value: "Ankara" },
      { label: "Education", value: "Hacettepe University\nBiology, 2016" },
      { label: "Preferred Role", value: "Frontend, UI" }
    ],
    aboutTitle: "About Me",
    aboutParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus."
    ]
  },
  projects: {
    title: "Projects",
    list: [
      {
        id: 1,
        title: "Workintech",
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["react", "redux", "axios"],
        image: "./src/assets/workintech.png",
        github: "https://github.com/almila-su/workintech",
        live: "https://almila-workintech.vercel.app"
      },
      {
        id: 2,
        title: "Random Jokes",
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["react", "redux", "axios"],
        image: "./src/assets/random-jokes.png",
        github: "https://github.com/almila-su/random-jokes",
        live: "https://almila-jokes.vercel.app"
      },
      {
        id: 3,
        title: "Journey",
        description:
          "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
        tags: ["react", "redux", "axios"],
        image: "./src/assets/journey.png",
        github: "https://github.com/almila-su/journey",
        live: "https://almila-journey.vercel.app"
      }
    ]
  },
  footer: {
    title: "Let’s work together on\nyour next product.",
    email: "almilasucode@gmail.com",
    links: ["Personal Blog", "Github", "Linkedin"]
  }
};