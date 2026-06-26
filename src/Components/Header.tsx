import { useContext } from "react";
import Dropdown from "./Dropdown";
import { ChangeSectionContext } from "./ChangeSectionContext";

function Header(props: { sections: Record<string, string> }) {
  let changeSection = useContext(ChangeSectionContext);
  return (
    <header className="bg-dark-paper dark:bg-light-paper w-full sticky top-0 flex-0">
      <h1
        className="permanent-marker-regular text-5xl text-light-paper dark:text-dark-paper portrait:text-center p-4 top-0 cursor-pointer"
        onClick={() => {
          changeSection("home");
        }}
      >
        Sai Games Blog
      </h1>
      <Dropdown sections={props.sections} />
    </header>
  );
}

export default Header;
