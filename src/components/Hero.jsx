import hero from "../assets/Hero.png";
import dev from "../assets/dev.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("FRONTEND");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => (prevText === "FRONTEND" ? "BACKEND" : "FRONTEND"));
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Deepak <span className="text-red-500">Dharmode</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">
              <span className="text-red-500">{text}</span> Developer and
              Designer
            </p>

            <p className="mb-4">
              I&apos;m a Passionate Frontend Developer with expertise in React,
              Tailwind, and Bootstrap, crafting visually stunning and responsive
              web applications. Skilled in MongoDB and Node.js, ensuring
              seamless full-stack development. Dedicated to creating
              user-centric, high-performance digital experiences. I love
              creating beautiful and functional website that solve real world
              problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/18pkPeO5w5O0FJW4R1EB_mYKnM4YU3nuq/view?usp=drivesdk"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <img src={dev} alt="" className="w-20" />
        <img src={instagram} alt="" className="w-20" />
        <img src={twitter} alt="" className="w-20" />
        <img src={linkedin} alt="" className="w-20" />
      </div>
    </section>
  );
};

export default Hero;
