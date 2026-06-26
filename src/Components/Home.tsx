import { useContext } from "react";
import skullImage from "../assets/IMAGES/skull.png";
import { ChangeSectionContext } from "./ChangeSectionContext";

function Home() {
  const changeSection = useContext(ChangeSectionContext);
  return (
    <main className="flex flex-col flex-start items-center flex-1">
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <button
        onClick={() => {
          changeSection("blog");
        }}
      >
        Ir a BLOG
      </button>
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
      <img
        src={skullImage}
        className="w-6/12 bg-cover portrait:w-full"
        alt="Skull"
      />
    </main>
  );
}

export default Home;
