import Cafeweb from "../assets/Cafeweb.png";
import Skyeats from "../assets/Skyeats.png";
import Webelite from "../assets/Webelite.png";
import Cards from "./Cards";
import portfolio from "../assets/portfolio.png";
import bookslab from "../assets/bookslab.png";
const Projects = () => {
  const projectJson = [
    {
      title: "Portfolio",
      desc: "Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.",
      image: portfolio,
      live: "dev-portfolio-cyan-one.vercel.app/",
      github: "https://github.com/deepakdev12/dev-portfolio.git",
    },
    {
      title: "Cafecoolday",
      desc: "Brew, Relax, Repeat – Welcome to CCD, where every sip tells a story! ☕✨ Step into a warm, inviting space filled with the aroma of freshly brewed coffee and handcrafted delights.",
      image: Cafeweb,
      live: "https://coffecoolday.netlify.app/",
      github: "https://github.com/deepakdev12/cafe-website.git",
    },
    {
      title: "Skynet Eats",
      desc: "FreshCart brings fresh groceries straight to your doorstep in minutes with fast, eco-friendly drone delivery. 🚀✨",
      image: Skyeats,
      live: "https://skyneteats.netlify.app/",
      github: "https://github.com/deepakdev12/Grocery-Drone-Delivery-Web.git",
    },
    {
      title: "Bookslab",
      desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
      image: bookslab,
      live: "booklabs.vercel.app",
      github: "https://github.com/deepakdev12/Booklabs.git",
    },
    // {
    //   title: "Super Car",
    //   desc: "Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.",
    //   image: Supercar,
    //   live: "https://supercar123.netlify.app/",
    //   github: "https://github.com/rohitsingh93300/supercars",
    // },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
