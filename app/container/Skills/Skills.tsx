"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactTooltip from "react-tooltip";

import { images } from "@/app/constants";
import AppWrap from "@/app/wrapper/AppWrap";
import MotionWrap from "@/app/wrapper/MotionWrap";
import "./Skills.scss";

const skillData = [
  { name: "Python", icon: images.python, bgColor: "" },
  { name: "React JS", icon: images.react, bgColor: "" },
  { name: "NEXT JS", icon: images.next, bgColor: "" },
  { name: "Typescript", icon: images.typescript, bgColor: "" },
  { name: "Node JS", icon: images.node, bgColor: "" },
  { name: "Express", icon: images.express, bgColor: "" },
  { name: "Redux", icon: images.redux, bgColor: "" },
  { name: "GitHub", icon: images.git, bgColor: "" },
  { name: "Graphql", icon: images.graphql, bgColor: "" },
  { name: "Javascript", icon: images.javascript, bgColor: "" },
  { name: "SASS", icon: images.sass, bgColor: "" },
];

const expData = [
  {
    year: "4 Months",
    works: [
      {
        name: "Jr Software Developer",
        company: "Singalala",
        desc: "Worked as a Backend Developer",
      },
    ],
  },
];

const Skills = () => {
  const [skills, setSkills] = useState(skillData);
  const [experiences, setExperiences] = useState(expData);

  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <Image src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app_skills"),
  "skills",
  "app__whitebg"
);
