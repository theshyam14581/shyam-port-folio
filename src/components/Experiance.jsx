import React from "react";
import html from "/html.jpg";
import css from "/css.jpg";
import js from "/javascript.jpg";
import python from "/python.jpg";
import react from "/react.jpg";
import cpp from "/c++.jpg";
import tailwindCss from "/tailwind.jpg";
import git from "/git.jpg";

const Experiance = () => {
  const cardItems = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: js, name: "JavaScript" },
    { id: 4, logo: python, name: "Python" },
    { id: 5, logo: react, name: "React" },
    { id: 6, logo: cpp, name: "CPP" },
    { id: 7, logo: tailwindCss, name: "TailwindCss" },
    { id: 8, logo: git, name: "GitHub" },
  ];

  return (
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p>I've more than 6 months experience in the technologies listed below:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItems.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img src={logo} alt={name} className="w-[150px] h-[150px] rounded-full" />
              <div className="mt-2 text-lg font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
