export interface IData {
  id: string;
  displayName: string;
  stack: string[];
  description: {
    mini: string;
    base: string;
  };
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
      base: "",
    },
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
      base: "",
    },
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
      base: "",
    },
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
      mini: "That project is currently developing.",
      base: "",
    },
  },
] as IData[];
