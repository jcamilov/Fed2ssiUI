import React, { useContext } from "react";
import TemplateContext from "./contexts/TemplateContext";
import PolicySelection from "./components/PolicySelection";
import Obligation from "./components/Obligation";
import { v4 } from "uuid";
import templatesFromJson from "./config/templates.json";

function AppComponent() {
  const { currentTemplate } = useContext(TemplateContext);

  const template1 = {
    openIdToken: { idClaims: "", accessClaims: "" },
    externalVCIssuer: { resourceUrl: "" },
  };

  const template2 = {
    openIdToken: { idClaims: "", accessClaims: "" },
    compliance: { complianceLevel: "" },
    locationServices: { locationProvider: "" },
  };

  const displayListOfObligations = () => {
    let obligations = [];

    const found = templatesFromJson.find(
      (t) => t.templateName === currentTemplate
    );

    if (found === undefined) return null;

    for (const [obligation, parameters] of Object.entries(found.obligations)) {
      obligations.push(
        <Obligation
          key={v4()}
          obligationName={obligation}
          parameters={Object.keys(parameters)}
        />
      );
    }
    return obligations;
  };

  const onClick = (event) => {};

  return (
    <div className="App">
      <header className="App-header">
        <p>Current template is {currentTemplate}</p>
        <PolicySelection />
        <ul>{displayListOfObligations()}</ul>
        <p className="mt-3">url for bridge</p>
        <input type="..." />
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={onClick}
        >
          install ALFA policy in remote bridge
        </button>
      </header>
    </div>
  );
}

export default AppComponent;
