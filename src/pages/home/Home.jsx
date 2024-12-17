import Header from "./Header.jsx";
import Options from "./Options.jsx";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      <div className="w-full">
        <Header />
      </div>
      <div className="w-full sticky">
        <Options />
      </div>
    </div>
  );
};

export default Home;
