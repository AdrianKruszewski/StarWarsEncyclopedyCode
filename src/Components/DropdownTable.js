import React, { useState } from "react";
import Table from "./Table";

const Dropdown = ({ filmData, planetsData }) => {
  const [toggleBody, setToggleBody] = useState(false);

  return (
    <>
      <div className="film">
        <h3>{filmData.title}</h3>
        <span
          onClick={(e) => {
            setToggleBody(!toggleBody);
          }}
        >
          <span className={"arrow " + (toggleBody ? "filmArrUp" : "")}>
            <i
              className={
                "filmArrow filmArrDown " + (toggleBody ? "upArrowActive" : "")
              }
            ></i>
          </span>
        </span>
      </div>
      {toggleBody && <Table planetsData={planetsData} />}
    </>
  );
};

export default Dropdown;
