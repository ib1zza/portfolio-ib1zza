import pizzaImageDesktop1 from "./assets/img/projects-screens/pizza1.png";
import pizzaImageDesktop2 from "./assets/img/projects-screens/pizza2.png";
import pizzaMockup from "./assets/img/projects-screens/pizzaMockup.png";

import weatherImageDesktop1 from "./assets/img/projects-screens/weather/weather1.png";
import weatherImageDesktop2 from "./assets/img/projects-screens/weather/weather2.png";
import weatherImageDesktop3 from "./assets/img/projects-screens/weather/weather3.png";
import weatherImageDesktop4 from "./assets/img/projects-screens/weather/weather4.png";
import weatherMockup from "./assets/img/projects-screens/weather/weatherMockup.png";

import todoImageDesktop1 from "./assets/img/projects-screens/todo/todo1.png";
import todoMockup from "./assets/img/projects-screens/todo/todoMockup.png";

import movieImageDesktop1 from "./assets/img/projects-screens/movie/movie1.png";
import movieImageDesktop2 from "./assets/img/projects-screens/movie/movie2.png";
import movieImageDesktop3 from "./assets/img/projects-screens/movie/movie3.png";
import movieMockup from "./assets/img/projects-screens/movie/movieMockup.png";

import chatImageDesktop1 from "./assets/img/projects-screens/chat/chat1.png";
import chatImageDesktop2 from "./assets/img/projects-screens/chat/chat2.png";
import chatImageDesktop3 from "./assets/img/projects-screens/chat/chat3.png";

import chatMockup from "./assets/img/projects-screens/chat/chatMockup.png";

export interface IData {
  id: string;
  displayName: string;
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
      mini: "Simple todo list with basic functions: add todo, complete, edit, delete. Also added list of completed todos.",
      base: `
      Simple todo list with basic functions: add todo, complete, edit, delete. Also added list of completed todos.
      
 `,
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
    stack: [
      "REACTJS",
      "TYPESCRIPT",
      "SCSS",
      "RTK-QUERY",
      "REDUX-TOOLKIT",
      "AXIOS",
    ],
    description: {
      mini: "That project is currently developing.",
      base: `That project is currently developing.`,
    },
    images: {
      desktop: [pizzaImageDesktop1, pizzaImageDesktop2],
      mockup: [pizzaMockup],
    },
    link: "https://react-pizza-red.vercel.app",
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
      mini: "Simple todo list with basic functions: add todo, complete, edit, delete. Also added list of completed todos.",
      base: `
      Simple todo list with basic functions: add todo, complete, edit, delete. Also added list of completed todos.
      `,
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
    link: "ib1zza-react-weather.vercel.app/",
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
      mini: `
      Movie search application. It uses moviesdatabase
      to retrieve information about movies.`,
      base: `
      Movie search application. It uses moviesdatabase
      to retrieve information about movies.`,
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
      mini: "Chat application with a lot of functions. Built using Google Firebase.",
      base: `
      Chat application with a lot of functions. Built using Google Firebase.
      The website features registration and login functionality (with email/Google account), 
      user search by username, real-time messaging with the ability to send files along with text,
       chat deletion for both users, editing of personal information such as username and avatar,
        changing the app's theme, and switching between Russian and English languages. 
        The site is fully responsive, displaying correctly on any device with a screen size ranging from 320 to 4096 pixels.
      `,
    },
    images: {
      desktop: [chatImageDesktop1, chatImageDesktop2, chatImageDesktop3], // TODO
      mockup: [chatMockup], // TODO
    },
    link: "https://react-chat-dusky.vercel.app",
  },
] as IData[];
