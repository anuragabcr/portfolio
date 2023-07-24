"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

import { images } from "@/app/constants";
import AppWrap from "@/app/wrapper/AppWrap";
import MotionWrap from "@/app/wrapper/MotionWrap";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Email Sent Successfully");

    const options = {
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPI,
        "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      },
      data: {
        personalizations: [
          {
            to: [
              {
                email: "anuragabcr@gmail.com",
              },
            ],
            subject: formData.name,
          },
        ],
        from: {
          email: formData.email,
        },
        content: [
          {
            type: "text/plain",
            value: formData.message,
          },
        ],
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image src={images.email} alt="email" />
          <a href="mailto:anuragabcr@gmail.com" className="p-text">
            anuragabcr@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <Image src={images.mobile} alt="phone" />
          <a href="tel:+917970940623" className="p-text">
            7970940623
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app_whitebg"
);
