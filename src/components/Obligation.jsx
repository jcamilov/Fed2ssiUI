import React from "react";
import { v4 } from "uuid";

function Obligation({ obligationName, parameters, id }) {
  return (
    <li key={id}>
      <h1 className="font-bold text-sm text-gray-300 text-left mt-2">
        Obligation name: {obligationName}
      </h1>
      <ul>
        {parameters.map((parameterName) => {
          return (
            <li className=" text-xs text-cyan-200 text-left mx-4" key={v4()}>
              <h1>Parameter name {parameterName}</h1>
              <input type="..." />
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Obligation;
