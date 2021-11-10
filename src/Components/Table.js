import React, { useState } from "react";

const Table = ({ planetsData }) => {
  const [data, setData] = useState(planetsData);
  const [order, setOrder] = useState("ASC");
  const [sortParam, setSortParam] = useState("");
  const [arrParam, setArrParam] = useState("");

  const sortByASC = (sortBy) => {
    const sortedData = data.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1));
    setData(sortedData);
    setOrder("DESC");
    setSortParam(sortBy);
    setArrParam("sortArrowUp");
  };

  const sortByDESC = (sortBy) => {
    const sortedData = data.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    setData(sortedData);
    setOrder("ASC");
    setSortParam(sortBy);
    setArrParam("sortArrowDown");
  };

  return (
    <div className="tab">
      <table className="tablePlanet">
        <thead className="borderTab">
          <tr>
            <th className={sortParam === "name" && "sortNameColor"}>
              <div className="sortArrowContainer">
                <p>Planet Name </p>
                <div className="sortArrow">
                  <span
                    className={
                      "sortArrowUp " +
                      ((sortParam === "name") & (arrParam === "sortArrowUp")
                        ? "sortNameColor arrowUpColor"
                        : "")
                    }
                    onClick={() => sortByASC("name")}
                  ></span>
                  <span
                    className={
                      "sortArrowDown " +
                      ((sortParam === "name") & (arrParam === "sortArrowDown")
                        ? "sortNameColor arrowDownColor"
                        : "")
                    }
                    onClick={() => sortByDESC("name")}
                  ></span>
                </div>
              </div>
            </th>
            <th className={sortParam === "rotationPeriod" && "sortNameColor"}>
              <div className="sortArrowContainer">
                <p>Rotation period </p>
                <div className="sortArrow">
                  <span
                    className={
                      "sortArrowUp " +
                      ((sortParam === "rotationPeriod") &
                      (arrParam === "sortArrowUp")
                        ? "sortNameColor arrowUpColor"
                        : "")
                    }
                    onClick={() => sortByASC("rotationPeriod")}
                  ></span>
                  <span
                    className={
                      "sortArrowDown " +
                      ((sortParam === "rotationPeriod") &
                      (arrParam === "sortArrowDown")
                        ? "sortNameColor arrowDownColor"
                        : "")
                    }
                    onClick={() => sortByDESC("rotationPeriod")}
                  ></span>
                </div>
              </div>
            </th>
            <th className={sortParam === "orbitalPeriod" && "sortNameBlue"}>
              <div className="sortArrowContainer">
                <p>Orbital period</p>
                <div className="sortArrow">
                  <span
                    className={
                      "sortArrowUp " +
                      ((sortParam === "orbitalPeriod") &
                      (arrParam === "sortArrowUp")
                        ? "sortNameColor arrowUpColor"
                        : "")
                    }
                    onClick={() => sortByASC("orbitalPeriod")}
                  ></span>
                  <span
                    className={
                      "sortArrowDown " +
                      ((sortParam === "orbitalPeriod") &
                      (arrParam === "sortArrowDown")
                        ? "sortNameColor arrowDownColor"
                        : "")
                    }
                    onClick={() => sortByDESC("orbitalPeriod")}
                  ></span>
                </div>
              </div>
            </th>
            <th className={sortParam === "diameter" && "sortNameColor"}>
              <div className="sortArrowContainer">
                <p>Diameter</p>
                <div className="sortArrow">
                  <span
                    className={
                      "sortArrowUp " +
                      ((sortParam === "diameter") & (arrParam === "sortArrowUp")
                        ? "sortNameColor arrowUpColor"
                        : "")
                    }
                    onClick={() => sortByASC("diameter")}
                  ></span>
                  <span
                    className={
                      "sortArrowDown " +
                      ((sortParam === "diameter") &
                      (arrParam === "sortArrowDown")
                        ? "sortNameColor arrowDownColor"
                        : "")
                    }
                    onClick={() => sortByDESC("diameter")}
                  ></span>
                </div>
              </div>
            </th>
            <th className={sortParam === "climates" && "sortNameColor"}>
              <div className="sortArrowContainer">
                <p>Climate</p>
                <div className="sortArrow">
                  <span
                    className={
                      "sortArrowUp " +
                      ((sortParam === "climates") & (arrParam === "sortArrowUp")
                        ? "sortNameColor arrowUpColor"
                        : "")
                    }
                    onClick={() => sortByASC("climates")}
                  ></span>
                  <span
                    className={
                      "sortArrowDown " +
                      ((sortParam === "climates") &
                      (arrParam === "sortArrowDown")
                        ? "sortNameColor arrowDownColor"
                        : "")
                    }
                    onClick={() => sortByDESC("climates")}
                  ></span>
                </div>
              </div>
            </th>
            <th className={sortParam === "surfaceWater" && "sortNameColor"}>
              <div className="sortArrowContainer">
                <p>Surface water</p>
                <div className="sortArrow">
                  <span
                    className={
                      "sortArrowUp " +
                      ((sortParam === "surfaceWater") &
                      (arrParam === "sortArrowUp")
                        ? "sortNameColor arrowUpColor"
                        : "")
                    }
                    onClick={() => sortByASC("surfaceWater")}
                  ></span>
                  <span
                    className={
                      "sortArrowDown " +
                      ((sortParam === "surfaceWater") &
                      (arrParam === "sortArrowDown")
                        ? "sortNameColor arrowDownColor"
                        : "")
                    }
                    onClick={() => sortByDESC("surfaceWater")}
                  ></span>
                </div>
              </div>
            </th>
            <th className={sortParam === "population" && "sortNameColor"}>
              <div className="sortArrowContainer">
                <p>Population</p>
                <div className="sortArrow">
                  <span
                    className={
                      "sortArrowUp " +
                      ((sortParam === "population") &
                      (arrParam === "sortArrowUp")
                        ? "sortNameColor arrowUpColor"
                        : "")
                    }
                    onClick={() => sortByASC("population")}
                  ></span>
                  <span
                    className={
                      "sortArrowDown " +
                      ((sortParam === "population") &
                      (arrParam === "sortArrowDown")
                        ? "sortNameColor arrowDownColor"
                        : "")
                    }
                    onClick={() => sortByDESC("population")}
                  ></span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => {
            const {
              id,
              name,
              rotationPeriod,
              orbitalPeriod,
              diameter,
              climates,
              surfaceWater,
              population,
            } = planet;
            return (
              <tr key={id}>
                <td
                  className={
                    "name " + (sortParam === "name" ? "sortNameColor" : "")
                  }
                >
                  {name ? name : "n/d"}
                </td>
                <td
                  className={sortParam === "rotationPeriod" && "sortNameColor"}
                >
                  {rotationPeriod ? rotationPeriod : "n/d"}
                </td>
                <td
                  className={sortParam === "orbitalPeriod" && "sortNameColor"}
                >
                  {orbitalPeriod ? orbitalPeriod : "n/d"}
                </td>
                <td className={sortParam === "diameter" && "sortNameColor"}>
                  {diameter ? diameter : "n/d"}
                </td>
                <td className={sortParam === "climates" && "sortNameColor"}>
                  {climates ? (
                    <ul>
                      {climates.map((climate, index) => (
                        <li key={index}>{climate}</li>
                      ))}
                    </ul>
                  ) : (
                    "n/d"
                  )}
                </td>
                <td className={sortParam === "surfaceWater" && "sortNameColor"}>
                  {surfaceWater ? surfaceWater : "n/d"}
                </td>
                <td className={sortParam === "population" && "sortNameColor"}>
                  {population ? population : "n/d"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
