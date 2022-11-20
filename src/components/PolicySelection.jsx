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
    <div>
      <select
        className="dropdown"
        id="templates"
        value={currentTemplate}
        onChange={onClick}
      >
        <option value="0">Select a template...</option>;
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
