import React from "react";

export const MyContext = React.createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = React.useState<number>(0);

  const contextValue = {
    activeSectionId,
    setActiveSectionId,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
