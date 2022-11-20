import React from "react";
import { v4 } from "uuid";

function Obligation({ obligationName, parameters, id }) {
  return (
    <li key={id} className="card w-96 bg-base-100 shadow-xl my-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-tittle font-bold text-xl text-left ">
            {obligationName}
          </h1>
          <ul>
            {parameters.map((parameterName) => {
              return (
                <li className=" text-sm text-left mx-4" key={v4()}>
                  <div className="flex items-center mb-6">
                    <div className="w-1/3">
                      <label className="text-left">{parameterName}</label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
                        id="inline-full-name"
                        type="text"
                        value="fill parameter"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default Obligation;
