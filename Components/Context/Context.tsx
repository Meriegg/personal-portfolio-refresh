import React from "react";

export const MyContext = React.createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = React.useState<number>(0);
  const [currentSections, setCurrentSectionsUnsafe] = React.useState<
    React.Ref<HTMLElement>[]
  >([]);

  const setCurrentSectionsSafe = (sections: React.Ref<HTMLElement>[]) => {
    setCurrentSectionsUnsafe(sections);

    const uniqueArr = currentSections.filter(
      (section, sectionId) => currentSections.indexOf(section) == sectionId
    );

    setCurrentSectionsUnsafe(uniqueArr);
  };

  const contextValue = {
    activeSectionId,
    setActiveSectionId,
    currentSections,
    setCurrentSections: setCurrentSectionsSafe,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
