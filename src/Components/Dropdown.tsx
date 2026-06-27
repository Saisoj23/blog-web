import { useContext } from "react";
import MenuSvg from "../assets/IMAGES/MENU.svg";
import { ChangeSectionContext } from "./ChangeSectionContext";

function Dropdown(props: { sections: Record<string, string> }) {
  const changeSection = useContext(ChangeSectionContext);
  return (
    <button className="group absolute top-0 right-0 h-full w-fit">
      <div className="lg:landscape:hidden cursor-pointer h-full p-4 filter-(--filter-dark-paper) dark:filter-(--filter-light-paper) hover:filter-(--filter-grey-paper) focus:filter-(--filter-grey-paper)">
        <img src={MenuSvg} alt="Menu" className="h-full" />
      </div>
      <nav className="not-lg:absolute h-full right-0">
        <ul className="absolute top-0 right-0 text-4xl flex-col hidden group-hover:flex group-focus:flex lg:landscape:flex lg:landscape:h-full lg:landscape:flex lg:landscape:flex-row">
          {Object.keys(props.sections).map((key) => (
            <li
              key={key}
              className="hover:scale-110 hover:-translate-x-1/12 duration-300 ease-in-out lg:landscape:inline text-dark-paper dark:text-light-paper focus:text-light-paper focus:dark:text-dark-paper hover:text-light-paper hover:dark:text-dark-paper bg-half-light-paper dark:bg-half-dark-paper lg:landscape:bg-transparent lg:dark:landscape:bg-transparent hover:bg-half-dark-paper hover:dark:bg-light-paper p-5 cursor-pointer"
              onClick={() => changeSection(key)}
            >
              {props.sections[key]}
            </li>
          ))}
        </ul>
      </nav>
    </button>
  );
}

export default Dropdown;
