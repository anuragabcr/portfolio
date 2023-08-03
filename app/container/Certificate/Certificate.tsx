"use client";
import React from "react";
import Image from "next/image";

import AppWrap from "@/app/wrapper/AppWrap";
import MotionWrap from "@/app/wrapper/MotionWrap";
import { images } from "@/app/constants";
import "./Certificate.scss";

const certiData = [
  images.certi1,
  images.certi2,
  images.certi3,
  images.certi4,
  images.certi5,
  images.certi6,
  images.certi7,
];

const Certificate = () => {
  return (
    <>
      <h2 className="head-text">certification</h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {certiData.map((certi, index) => (
            <div
              className="flex w-1/3 flex-wrap app__item"
              key={`certi-${index}`}
            >
              <div className="w-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full  object-cover object-center app__image"
                  src={certi}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificate, "app__certificate"),
  "certificate",
  "app_whitebg"
);
