import React, { useContext, useState, useEffect } from "react";
import TemplateContext from "../contexts/TemplateContext";
import templatesFromJson from "./../config/templates.json";

function PolicySelection() {
  const {
    currentTemplate,
    setTheCurrentTemplate,
    templateList,
    setTemplateList,
  } = useContext(TemplateContext);

  const onClick = (e) => {
    templateList.map((template) => {});
    if (e.target.value === "0") {
      setTheCurrentTemplate("select a template...");
    } else {
      setTheCurrentTemplate(e.target.value);
    }
  };

  useEffect(() => {
    let theList = [];
    templatesFromJson.map((template) => {
      theList.push(template.templateName);
    });
    setTemplateList(theList);
  }, []);

  return (
    <div className="flex items-center mt-6 text-xl text-left mx-4 w-1/2">
      <div className="w-1/3">
        <label className="text-left">Select a template</label>
      </div>
      <select
        className="dropdown w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
        id="templates"
        value={currentTemplate}
        onChange={onClick}
      >
        <option value="0">...</option>;
        {templateList.map((template) => (
          <option key={template} value={template}>
            {template}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PolicySelection;
