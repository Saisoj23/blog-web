import "./App.css";

import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import Home from "./Components/Home.tsx";
import Blog from "./Components/Blog.tsx";
import type React from "react";
import { useContext, useState } from "react";

import { ChangeSectionContext } from "./Components/ChangeSectionContext.ts";

var sections: Record<string, React.ReactNode> = {
  home: <Home />,
  blog: <Blog />,
};

var sectionsNames: Record<string, string> = {
  home: "Principal",
  blog: "Blog",
};

function App() {
  const [sectionIndex, setSectionIndex] = useState("home");
  let changeSection = useContext(ChangeSectionContext);

  changeSection = (section: string) => {
    setSectionIndex(section);
  };

  return (
    <ChangeSectionContext value={changeSection}>
      <div className="wrapper relative flex flex-col min-h-screen">
        <div className="bg-pattern absolute h-full w-full z-[-10]"></div>
        <Header sections={sectionsNames} />
        {sections[sectionIndex]}
        <Footer></Footer>
      </div>
    </ChangeSectionContext>
  );
}

export default App;
