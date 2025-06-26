import React, { useEffect, useState } from "react";
import SingleGroup from "../SingleGroup/SingleGroup";
import Lottie from "lottie-react";

const Home = () => {
  const [featuredGroups, setFeaturedGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/createGroups?sort=desc")
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
    <div className="py-10">
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

      {/* Highlighted Categories */}
      <section className="bg-[#fffaf3] py-12">
        <h1 className="text-3xl font-bold mb-10 text-center">
          <span className="text-[#FF9B45] font-bold">Highlighted</span>{" "}
          <span className="text-[#521C0D]">Categories</span>{" "}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Gardening", icon: "🌱" },
            { name: "Photography", icon: "📸" },
            { name: "Cycling", icon: "🚴" },
            { name: "Gaming", icon: "🎮" },
          ].map((cat, i) => (
            <div key={i} className="bg-white shadow rounded p-6 text-center">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Groups */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10 text-center">
          <span className="text-[#FF9B45] font-bold">Top</span>{" "}
          <span className="text-[#521C0D]">Rated</span>{" "}
          <span className="text-[#FF9B45] font-bold">Groups</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Pro Gamers", desc: "Join a passionate gaming community." },
            {
              name: "Cycle Riders",
              desc: "Weekly rides and adventure meetups.",
            },
            { name: "Book Club", desc: "Discuss and explore great books." },
            { name: "Green Thumbs", desc: "All about plants and gardening." },
          ].map((group, i) => (
            <div key={i} className="bg-white shadow rounded p-6">
              <h3 className="text-xl font-bold text-[#FE5D26] mb-2">
                {group.name}
              </h3>
              <p className="text-gray-600">{group.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tags */}
      <section className="bg-gray-100 py-10">
        <h1 className="text-3xl font-bold mb-10 text-center">
          
          <span className="text-[#521C0D]">EExplore</span>{" "}
          <span className="text-[#FF9B45] font-bold">Categories</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            "Art & Craft",
            "Cooking",
            "Hiking",
            "Music",
            "Tech Talks",
            "Fitness",
            "Dancing",
            "Board Games",
          ].map((cat, i) => (
            <span
              key={i}
              className="bg-[#FE5D26] text-white px-4 py-2 rounded-full text-sm hover:bg-[#d94917] transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-10 text-center">
          <span className="text-[#FF9B45] font-bold">Latest</span>{" "}
          <span className="text-[#521C0D]">Blogs</span>{" "}
          
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Top 5 Indoor Plants for Beginners",
              excerpt:
                "Start your gardening hobby with these low-maintenance plants.",
              image: "/blog1.jpg",
            },
            {
              title: "Gaming Setup Tips for Pros",
              excerpt: "Get the most out of your setup with these pro tips.",
              image: "/blog2.jpg",
            },
            {
              title: "Why Reading Fiction Boosts Creativity",
              excerpt:
                "Explore how fiction books improve your imaginative thinking.",
              image: "/blog3.jpg",
            },
          ].map((blog, i) => (
            <div key={i} className="bg-white shadow p-4 rounded">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
              <a href="#" className="text-blue-600 mt-3 inline-block">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us / CTA Section */}
      <section className="bg-[#FE5D26] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Discover Your Passion?
        </h2>
        <p className="mb-6">
          Join a hobby group, learn something new, and connect with amazing
          people.
        </p>
        <a
          href="/signup"
          className="bg-white text-[#FE5D26] font-bold px-6 py-3 rounded-full hover:bg-gray-200"
        >
          Join Now
        </a>
      </section>
    </div>
  );
};

export default Home;
