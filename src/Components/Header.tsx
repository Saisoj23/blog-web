import { useContext } from "react";
import Dropdown from "./Dropdown";
import { ChangeSectionContext } from "./ChangeSectionContext";

function Header(props: { sections: Record<string, string> }) {
  let changeSection = useContext(ChangeSectionContext);
  return (
    <header className="w-full sticky drop-shadow-cartoon top-0 flex-0 bg-half-light-paper dark:bg-half-dark-paper z-100">
      <div className="menu-pattern absolute h-full w-full z-[-1]"></div>
      <h1
        className="inline-block hover:scale-110 hover:translate-x-1/20 duration-300 ease-in-out permanent-marker-regular drop-shadow-cartoon text-xl lg:text-5xl portrait:text-center p-4 top-0 cursor-pointer"
        onClick={() => {
          changeSection("home");
        }}
      >
        Sai's Games Blog
      </h1>
      <Dropdown sections={props.sections} />
    </header>
  );
}

export default Header;
