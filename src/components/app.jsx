import { useState } from "react";
import { data } from "../birthday-data.js";

function App() {
  // destructuring the data array
  const [people, setPeople] = useState(data);

  // delete an individual
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  // delete all individuals
  const deleteAll = (id) => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, image } = person;

        return (
          <div className="container" key={id}>
            <div className="avatar">
              <div>
                <img src={image} alt={name} />
              </div>
              <div>
                <h3>{name}</h3>
              </div>
            </div>

            <div className="button">
              <button className="btn" onClick={() => removePerson(id)}>
                Dismiss
              </button>
            </div>
          </div>
        );
      })}
      <button className="btn-2" onClick={deleteAll}>
        Clear All!
      </button>
    </>
  );
}

export default App;
