import { useState, createContext } from "react";

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [currentTemplate, setCurrentTemplate] = useState(
    "select a template..."
  );
  const [templateList, setTemplateList] = useState([]);

  const setTheCurrentTemplate = (value) => setCurrentTemplate(value);
  // const setTheTemplateList = (newElement) => {
  //   setTemplateList((oldArray) => [...oldArray, newElement]);
  // };

  return (
    <TemplateContext.Provider
      value={{
        currentTemplate,
        setTheCurrentTemplate,
        templateList,
        setTemplateList,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateContext;
