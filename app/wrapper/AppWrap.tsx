import React from "react";
import { NextComponentType } from "next";

import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

const AppWrap = (
  Component: NextComponentType,
  idName: string,
  classNames: string
) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 Anurag</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
export default AppWrap;
