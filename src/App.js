import Dropdown from "./Components/DropdownTable";
import { data } from "./data";

function App() {
  const getPlanetsData = (id) => {
    const planetsData = data.planets.filter((planet) => {
      if (planet.filmConnection.films.filter((f) => f.id === id).length > 0) {
        return true;
      }
    });

    return planetsData;
  };

  return (
    <div className="App">
      <div className="wrap">
        <div className="title">
          <h2>{"FRoNT-END"}</h2>
          <h4>{"Recruitment Task"}</h4>
        </div>
        <div className="content">
          {data.films.map((film) => (
            <Dropdown
              key={film.id}
              filmData={film}
              planetsData={getPlanetsData(film.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
