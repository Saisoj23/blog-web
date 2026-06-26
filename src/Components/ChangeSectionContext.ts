import { createContext } from "react";

export let ChangeSectionContext = createContext((Section: string) => {
  Section;
});

export let ChangeBlogContext = createContext((Section: number) => {
  Section;
});
