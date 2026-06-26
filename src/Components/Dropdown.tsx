import { useContext } from "react";
import MenuSvg from "../assets/IMAGES/MENU.svg";
import { ChangeSectionContext } from "./ChangeSectionContext";

function Dropdown(props: { sections: Record<string, string> }) {
  const changeSection = useContext(ChangeSectionContext);
  return (
    <nav className="group absolute top-0 right-0 h-full w-fit">
      <button className="lg:landscape:hidden cursor-pointer h-full p-4 filter-(--filter-dark-paper) dark:filter-(--filter-light-paper) hover:filter-(--filter-grey-paper)">
        <img src={MenuSvg} alt="Menu" className="h-full" />
      </button>

      <ul className="absolute text-4xl right-0 bg-dark-paper dark:bg-light-paper flex-col hidden group-hover:flex group-focus:flex lg:landscape:flex lg:landscape:h-full lg:landscape:flex lg:landscape:flex-row">
        {Object.keys(props.sections).map((key) => (
          <li
            key={key}
            className="lg:landscape:inline text-light-paper dark:text-dark-paper hover:bg-grey-paper p-5 cursor-pointer"
            onClick={() => changeSection(key)}
          >
            {props.sections[key]}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Dropdown;
