import { HoverEffect } from "./ui/card-hover-effect";

export function ProjectCards() {
  return (
    <div className=" px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Blog App",
    description:
      "A robust web app crafted with the MERN stack leverages MongoDB for data storage, Express.js for backend logic, React.js for dynamic UI, and Node.js for server-side operations, ensuring seamless functionality.",
    link: "https://github.com/kumarkshitij171/BlogApp",
  },
  {
    title: "Notes App",
    description:
      "A sleek notes app engineered with MongoDB for data storage, Express.js for handling backend operations, and React.js for a polished user interface, ensuring efficient note-taking capabilities.",
    link: "https://github.com/kumarkshitij171/NotesApp",
  },
  {
    title: "News App",
    description:
      "A news app that utilizes an API to fetch and display news articles. Users can browse news from various categories and filter the news based on their interests. The app is designed to provide a seamless experience for users to stay updated with the latest news across different topics.",
    link: "https://github.com/kumarkshitij171/News-App",
  },
  {
    title: "2048 Game",
    description:
      "Crafted using HTML, CSS, and JavaScript, the 2048 game showcases an engaging interface. HTML structures the layout, CSS stylizes elements, while JavaScript powers the game logic, enabling a dynamic and interactive gaming experience.",
    link: "https://kumarkshitij171.github.io/2048Game/",
  },
  {
    title: "Todo App",
    description:
      "A minimalist todo app designed with React.js simplifies task management with an intuitive interface. It enables users to add, delete, and mark tasks as complete, ensuring efficient organization and productivity enhancement.",
    link: "https://kshitij-react-todo-app.netlify.app/",
  },
  {
    title: "Paytm UI Clone",
    description:
      "Replicate Paytm's UI using HTML/CSS with attention to layout, color, and responsiveness. Include navigation, search, product listings, payment options, and mimic design elements like typography and buttons for authenticity.",
    link: "https://github.com/kumarkshitij171/PaytmClone",
  },
];
