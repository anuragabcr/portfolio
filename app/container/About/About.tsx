"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import AppWrap from "@/app/wrapper/AppWrap";
import MotionWrap from "@/app/wrapper/MotionWrap";
import { images } from "@/app/constants";
import "./About.scss";

const abouts = [
  {
    title: "Backend Developer",
    description:
      "Architecting the Digital Backbone: Crafting robust server-side solutions that power seamless user experiences.",
    imgUrl: images.about01,
  },
  {
    title: "Frontend Developer",
    description:
      "Transforming Ideas into Interactive Realities: Building captivating interfaces with the perfect blend of design and code.",
    imgUrl: images.about02,
  },
  {
    title: "MERN Stack Developer",
    description:
      "From Concept to Deployment: Leveraging the MERN stack to create dynamic web applications that leave a lasting impact",
    imgUrl: images.about03,
  },
  {
    title: "Python Developer",
    description:
      "Unlocking the Power of Python: Unleashing the potential of this versatile language to create efficient, scalable, and elegant solutions",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Website</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app_whitebg");
