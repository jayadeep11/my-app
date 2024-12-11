import Header from "./Header.jsx";
import Content from "./Content.jsx";

const Home = () => {
  return (
    <div className="flex flex-col w-full gap-20">
      {/* TODO: header.jsx */}
      <div className="w-full">
        <Header username="Neha" />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Home;
