import { useState } from "react";

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((s) => !s);
  }

  return isVisible ? (
    <div onClick={handleClick} className="m-1 w-72 h-20 bg-red-200"></div>
  ) : (
    <div onClick={handleClick} className="m-1 w-72 h-20 bg-green-200"></div>
  );
};

export default Card;
