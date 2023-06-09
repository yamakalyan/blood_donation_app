import React from "react";
import { useParams } from "react-router-dom";

function Thanks() {
  const params = useParams();
  return (
    <>
      <div className="container bg-light rounded shadow text-dark p-5 my-3">
        <div className="row p-5">
          <h1 className="supp-text-main">Thanks you {params.name}</h1>
          <h3 className="supp-text-quote">
            “None of our success would be possible without generous donors like
            you. Thank you again for your commitment and kindness.”
          </h3>
        </div>
      </div>
    </>
  );
}

export default Thanks;
