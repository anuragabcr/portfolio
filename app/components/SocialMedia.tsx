import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { LiaHackerrank } from "react-icons/lia";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <LiaHackerrank />
      </div>
    </div>
  );
};

export default SocialMedia;
