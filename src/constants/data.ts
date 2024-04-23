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
}

export default [
  {
    id: "kanban",
    displayId: 1,
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
  },
  {
    id: "todo",
    displayId: 6,
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
  },
  {
    id: "pizza",
    displayName: "Pizza store",
    displayId: 5,
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
  },
  {
    id: "weather",
    displayId: 4,
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
  },
  {
    id: "movies",
    displayName: "Online Cinema",
    displayId: 3,
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
  },

  {
    id: "chat",
    displayName: "Realtime chat app",
    displayId: 2,
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
  },
] as IData[];
