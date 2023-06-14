import Card from "./Card";

const FlashCards = () => {
  return (
    <div>
      <h1 className="mt-5 text-center font-mono text-5xl font-extrabold">
        Flash-Cards
      </h1>
      <div className="px-5 py-5 w-full h-full flex flex-wrap justify-center items-center">
        {Array(5)
          .fill()
          .map((i) => (
            <Card />
          ))}
      </div>
    </div>
  );
};

export default FlashCards;
