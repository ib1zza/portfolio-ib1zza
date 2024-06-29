import pizzaImageDesktop1 from "../assets/img/projects-screens/pizza/pizza1.png";
import pizzaImageDesktop2 from "../assets/img/projects-screens/pizza/pizza2.png";
import pizzaMockup from "../assets/img/projects-screens/pizza/pizzaMockup.png";

import weatherImageDesktop1 from "../assets/img/projects-screens/weather/weather1.png";
import weatherImageDesktop2 from "../assets/img/projects-screens/weather/weather2.png";
import weatherImageDesktop3 from "../assets/img/projects-screens/weather/weather3.png";
import weatherImageDesktop4 from "../assets/img/projects-screens/weather/weather4.png";
import weatherMockup from "../assets/img/projects-screens/weather/weatherMockup.png";

import todoImageDesktop1 from "../assets/img/projects-screens/todo/todo1.png";
import todoMockup from "../assets/img/projects-screens/todo/todoMockup.png";

import movieImageDesktop1 from "../assets/img/projects-screens/movie/movie1.png";
import movieImageDesktop2 from "../assets/img/projects-screens/movie/movie2.png";
import movieImageDesktop3 from "../assets/img/projects-screens/movie/movie3.png";
import movieMockup from "../assets/img/projects-screens/movie/movieMockup.png";

import chatImageDesktop1 from "../assets/img/projects-screens/chat/chat1.png";
import chatImageDesktop2 from "../assets/img/projects-screens/chat/chat2.png";
import chatImageDesktop3 from "../assets/img/projects-screens/chat/chat3.png";
import chatMockup from "../assets/img/projects-screens/chat/chatMockup.png";

import kanbanImageDesktop1 from "../assets/img/projects-screens/kanban/kanban3.png";
import kanbanImageDesktop2 from "../assets/img/projects-screens/kanban/kanban1.png";
import kanbanImageDesktop3 from "../assets/img/projects-screens/kanban/kanban2.png";
import kanbanMockup from "../assets/img/projects-screens/kanban/kanbanMockup.png";

import stellarBurgerImageDesktop1 from "../assets/img/projects-screens/stellarBurgers/stellarImageDesktop1.png";
import stellarBurgerImageDesktop2 from "../assets/img/projects-screens/stellarBurgers/stellarImageDesktop2.png";
import stellarBurgerImageDesktop3 from "../assets/img/projects-screens/stellarBurgers/stellarImageDesktop3.png";
import stellarBurgerImageDesktop4 from "../assets/img/projects-screens/stellarBurgers/stellarImageDesktop4.png";

import webLarekImageDesktop1 from "../assets/img/projects-screens/webLarek/webLarekImageDesktop1.png";
import webLarekImageDesktop2 from "../assets/img/projects-screens/webLarek/webLarekImageDesktop2.png";
import webLarekImageDesktop3 from "../assets/img/projects-screens/webLarek/webLarekImageDesktop3.png";
import webLarekImageDesktop4 from "../assets/img/projects-screens/webLarek/webLarekImageDesktop4.png";

export interface IData {
  id: string;
  displayName: string;
  displayId: number;
  stack: string[];
  description: {
    mini: string;
    base: string;
  };
  images?: {
    desktop: string[];
    mockup: string[];
  };
  link: string;
  github: string;
}

const allProjectsOrder = [
  "kanban",
  "chat",
  "movies",
  "stellarBurgers",
  "webLarek",
  "pizza",
  "weather",
  "todo",
];

type OneProject = Partial<IData>;

const projectsData: OneProject[] = [
  {
    id: "kanban",
    displayName: "Kanban",
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "REDUX-TOOLKIT",
      "REDUX-THUNK",
      "FIREBASE",
      "i18n",
      "JEST",
    ],
    description: {
      mini: "kanban.mini",
      base: "kanban.base",
    },
    images: {
      desktop: [kanbanImageDesktop1, kanbanImageDesktop2, kanbanImageDesktop3],
      mockup: [kanbanMockup],
    },
    link: "https://react-kanban-delta.vercel.app/",
    github: "https://github.com/ib1zza/react-kanban",
  },
  {
    id: "todo",
    displayName: "TodoList",
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "REDUX-TOOLKIT",
      "REDUX-THUNK",
      "AXIOS",
      "FRAMER-MOTION",
    ],
    description: {
      mini: "todo.mini",
      base: "todo.base",
    },
    images: {
      desktop: [todoImageDesktop1],
      mockup: [todoMockup],
    },
    link: "https://todo-project-localstorage.vercel.app",
    github: "https://github.com/ib1zza/todo-project-localstorage",
  },
  {
    id: "pizza",
    displayName: "Pizza store",
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "RTK-QUERY",
      "REDUX-TOOLKIT",
      "AXIOS",
    ],
    description: {
      mini: "pizza.mini",
      base: "pizza.base",
    },
    images: {
      desktop: [pizzaImageDesktop1, pizzaImageDesktop2],
      mockup: [pizzaMockup],
    },
    link: "https://react-pizza-red.vercel.app",
    github: "https://github.com/ib1zza/react-pizza",
  },
  {
    id: "weather",
    displayName: "Weather website",
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "RTK-QUERY",
      "REDUX-TOOLKIT",
      "AXIOS",
    ],
    description: {
      mini: "weather.mini",
      base: "weather.base",
    },
    images: {
      desktop: [
        weatherImageDesktop1,
        weatherImageDesktop2,
        weatherImageDesktop3,
        weatherImageDesktop4,
      ],
      mockup: [weatherMockup],
    },
    link: "https://ib1zza-react-weather.vercel.app/",
    github: "https://github.com/ib1zza/react-weather",
  },
  {
    id: "movies",
    displayName: "Online Cinema",
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "RTK-QUERY",
      "REDUX-TOOLKIT",
      "AXIOS",
    ],
    description: {
      mini: "movies.mini",
      base: "movies.base",
    },
    images: {
      desktop: [movieImageDesktop1, movieImageDesktop2, movieImageDesktop3],
      mockup: [movieMockup],
    },
    link: "https://react-movie-ashy.vercel.app/",
    github: "https://github.com/ib1zza/react-movie",
  },
  {
    id: "chat",
    displayName: "Realtime chat app",
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "FIREBASE",
      "REDUX-TOOLKIT",
      "FRAMER-MOTION",
      "VITE",
      "I18NEXT",
      "DATE-FNS",
    ],
    description: {
      mini: "chat.mini",
      base: "chat.base",
    },
    images: {
      desktop: [chatImageDesktop1, chatImageDesktop2, chatImageDesktop3],
      mockup: [chatMockup],
    },
    link: "https://react-chat-dusky.vercel.app",
    github: "https://github.com/ib1zza/react-chat",
  },
  {
    id: "stellarBurgers",
    displayName: "Stellar Burgers",
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "REDUX-TOOLKIT",
      "WEBPACK",
      "JEST",
      "CYPRESS",
    ],
    description: {
      mini: "stellar-burgers.mini",
      base: "stellar-burgers.base",
    },
    images: {
      desktop: [
        stellarBurgerImageDesktop1,
        stellarBurgerImageDesktop2,
        stellarBurgerImageDesktop3,
        stellarBurgerImageDesktop4,
      ],
      mockup: [],
    },
    link: "https://stellar-burgers-five.vercel.app",
    github: "https://github.com/ib1zza/react-stellar-burgers",
  },
  {
    id: "webLarek",
    displayName: "Web Larek",
    stack: ["TYPESCRIPT", "HTML", "SCSS", "WEBPACK"],
    description: {
      mini: "web-larek.mini",
      base: "web-larek.base",
    },
    images: {
      desktop: [
        webLarekImageDesktop1,
        webLarekImageDesktop2,
        webLarekImageDesktop3,
        webLarekImageDesktop4,
      ],
      mockup: [],
    },
    link: "https://web-larek.vercel.app",
    github: "https://github.com/ib1zza/typescript-web-larek",
  },
];

projectsData.forEach((project, index) => {
  project.displayId = allProjectsOrder.findIndex((el) => el === project.id);
});

export default projectsData as IData[];
