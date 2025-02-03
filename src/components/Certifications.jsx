import upgradlogo from "../assets/upgradlogo.png";
import scrimbalogo from "../assets/scrimbalogo.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const Certifications = () => {
  const Certifications = [
    {
      id: 1,
      logo: upgradlogo,
      name: "UpGrad full stack development",
      url: "https://drive.google.com/file/d/1wz6m2NkYAHeoy1DfyQAyfZ1NzWc4XeXq/view?usp=drive_link",
      location: "Bengaluru",
      desc: "Learned MERN stack development, including React, Node.js, Express, MongoDB, REST APIs, authentication, and deployment.",
    },
    {
      id: 2,
      logo: scrimbalogo,
      name: "Scrimba frontend development",
      url: "https://drive.google.com/file/d/1x7r6u3s642GCQQ9dUoP4YpsN3OSkZXa9/view?usp=drive_link",
      location: "Norway",
      desc: "Gained hands-on experience in React-19, Redux, Router, Bootstrap, Tailwind and responsive design ",
    },
  ];

  return (
    <div id="Certifications" className="py-10 bg-gray-100 relative">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        My Courses and Certifcations
      </h1>
      <div className="max-w-6xl mx-auto py-10 px-5">
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper"
        >
          {Certifications.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4">
                  <div className="flex justify-between items-center">
                    <img
                      src={item.logo}
                      alt="Logo"
                      className="w-16 h-16 mx-auto mb-3"
                    />
                    <div>
                      <h3 className="font-semibold text-red-500 text-lg">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                    <Quote className="text-red-400" />
                  </div>
                  <p className="py-3">{item.desc}</p>
                  <div>
                    <button className="bg-black text-white px-3 py-2 w-max rounded-md">
                      <a href={item.url} download target="_blank">
                        View Certificate
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination my-10 gap-1 relative"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Certifications;
