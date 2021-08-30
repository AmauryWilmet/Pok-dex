import { useEffect, useState } from "react";

const Pokemon = ({ imageUrl, name, num }) => {
  const [colorRandom, setColorRandom] = useState("");
  const tabsColor = ["red", "blue", "yellow", "green"];

  useEffect(() => {
    const indexColor = Math.floor(Math.random() * tabsColor.length);
    setColorRandom(tabsColor[indexColor]);
  }, []);

  return (
    <div
      className={`text-white shadow-lg 
        p-5 bg-${colorRandom}-500 w-48 
        m-5 overflow-hidden rounded transform transition delay-75 
        hover:scale-110 border-b-4 border-${colorRandom}-600`}
    >
      <p className="absolute right-1 top-1 text-lg text-shadow z-0">{num}</p>
      <div
        className="relative opacity-0 grid justify-items-center
        transition delay:75 w-40 h-35 text-center
        transform translate-y-4 hover:opacity-100 
        hover:-translate-y-4"
      >
        {" "}
        <img src={imageUrl} alt={name} className="z-1" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Pokemon;
