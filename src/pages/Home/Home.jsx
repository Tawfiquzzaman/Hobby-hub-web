import React, { useEffect, useState } from "react";
import SingleGroup from "../SingleGroup/SingleGroup";
import Lottie from "lottie-react";


const Home = () => {
  const [featuredGroups, setFeaturedGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://hobby-hub-server-alpha.vercel.app/createGroups?sort=desc")
      .then((res) => res.json())
      .then((data) => {
        // Enforce 6-item limit in frontend
        setFeaturedGroups(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load featured groups");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="carousel h-[700px] py-5">
        <h1 className="absolute top-30 left-1/2 z-10 -translate-x-1/2 text-white text-2xl text-center md:text-4xl font-bold drop-shadow-lg">
          Welcome to Hobby Hub
        </h1>
        <p className="absolute top-45 left-1/2 z-10 -translate-x-1/2 text-[#FE5D26] text-lg text-center md:text-xl font-bold drop-shadow-lg">
          Explore The World of Hobbies
        </p>
        <div id="slide1" className="carousel-item relative w-full">
          <img src="garden_home.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="gaming_home.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="cycle_home.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="reading_home.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-10 text-center">
          <span className="text-[#FF9B45] font-bold">Featured</span>{" "}
          <span className="text-[#521C0D]">Group</span>{" "}
          <span className="text-[#FF9B45] font-bold">Sections</span>
        </h1>
        <div className="flex justify-center mb-10">
          {/* <Lottie animationData={groovyWalkAnimation} loop={true} style={{ height: 200 }} /> */}
        </div>

        {loading && <p>Loading featured groups...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredGroups.length === 0 && !loading && (
            <p>No featured groups available.</p>
          )}

          {featuredGroups.map((group) => (
            <SingleGroup key={group._id} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
