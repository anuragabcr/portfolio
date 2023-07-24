import React from "react";

const navList = ["home", "about", "work", "certificate", "skills", "contact"];

const NavigationDots = ({ active }: { active: string }) => {
  return (
    <div className="app__navigation">
      {navList.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
