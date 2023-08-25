"use client";
import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

import { images } from "@/app/constants";
import AppWrap from "@/app/wrapper/AppWrap";
import MotionWrap from "@/app/wrapper/MotionWrap";
import "./Work.scss";

const data = [
  {
    name: "Project 4",
    title: "ThinkTank",
    description:
      "The Best AI Tool for Conversation, Code Generation, Image Generation, Music generation and Video Generation.",
    projectLink: "https://thinktank-ashy.vercel.app/",
    codeLink: "https://github.com/anuragabcr/thinktank",
    imgUrl: images.thinktank,
    tags: ["React Js", "Next Js", "Node Js", "MERN Stack"],
  },
  {
    name: "Project 6",
    title: "E-Commerce Admin",
    description:
      "SAAS application. It is used to provide backend for any e-commerce website meaning you don't have to create a backend for your e-commerce website, you can manage that using this application",
    projectLink: "https://ecom-administrator.vercel.app/",
    codeLink: "https://github.com/anuragabcr/ecommerce-admin",
    imgUrl: images.ecomAdmin,
    tags: ["React Js", "Next Js", "Node Js", "MERN Stack"],
  },
  {
    name: "Project 7",
    title: "The Fashion Forward",
    description:
      "Fashion Forward is a fashion boutique that offers the latest trends in clothing, footwear, and accessories for men, women, and children",
    projectLink: "https://fashion-forward-rose.vercel.app/",
    codeLink: "https://github.com/anuragabcr/FashionForward",
    imgUrl: images.fashionForward,
    tags: ["React Js", "Next Js", "Node Js", "MERN Stack"],
  },
  {
    name: "Project 5",
    title: "Pulse Fusion",
    description:
      "At Pulse Fusion Gym, we redefine fitness, blending cutting-edge technology with a passion for health and wellness",
    projectLink: "https://pulsefusion.vercel.app/",
    codeLink: "https://github.com/anuragabcr/PulseFusion",
    imgUrl: images.thinktank,
    tags: ["React Js", "Next Js", "Node Js", "MERN Stack"],
  },
  {
    name: "Project 3",
    title: "Innovista",
    description:
      "Innovista is the World's leading community for Creatives to share, grow and get Hired",
    projectLink: "https://innovista.vercel.app/",
    codeLink: "https://github.com/anuragabcr/innovista",
    imgUrl: images.innovista,
    tags: ["React Js", "Next Js", "Node Js", "MERN Stack"],
  },
  {
    name: "Project 1",
    title: "Notepad",
    description: "Kepps all your notes organized",
    projectLink: "https://anu-notepad.vercel.app/",
    codeLink: "https://github.com/anuragabcr/notepad",
    imgUrl: images.notepad,
    tags: ["React Js", "Next Js"],
  },
  {
    name: "Project 2",
    title: "Net Banking",
    description: "Inspired by ICICI Net Banking",
    projectLink: "https://6vulzv.csb.app/",
    codeLink: "https://github.com/anuragabcr/netBanking",
    imgUrl: images.netBanking,
    tags: ["React Js"],
  },
];

const Work = () => {
  const [works, setWorks] = useState(data);
  const [filterWork, setFilterWork] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Porjects</span> Section
      </h2>
      <h4>You can click on the Image to go to Live website or GitHub Page</h4>

      <div className="app__work-filter">
        {["Python", "React Js", "MERN Stack", "Next Js", "Node Js", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard[0]}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <Image src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
