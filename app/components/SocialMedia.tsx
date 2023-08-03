import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { LiaHackerrank } from "react-icons/lia";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <Link href="https://github.com/anuragabcr">
          <BsGithub />
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/anuragabcr/">
          <FaLinkedin />
        </Link>
      </div>
      <div>
        <Link href="https://www.hackerrank.com/anuragabcr?hr_r=1">
          <LiaHackerrank />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
