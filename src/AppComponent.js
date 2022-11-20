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
        <label className="btn-primary text-3xl font-bold px-3 py-2 ">
          Fed2SSI - INSTALL POLICY FROM TEMPLATE
        </label>
        <PolicySelection />
        <ul>{displayListOfObligations()}</ul>
        <p className="mt-3 text-sm">Bridge's URL (to send the ALFA policy)</p>
        <input
          className="text-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-96 py-1 px-2 text-gray-500 text-center leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
          id="inline-full-name"
          type="text"
          value="https://credential-bridge-endpoint.de"
        />
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={onClick}
          disabled={currentTemplate === "..."}
        >
          install ALFA policy in remote bridge
        </button>
      </header>
    </div>
  );
}

export default AppComponent;
