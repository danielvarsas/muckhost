import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Filter() {
  const [city, setCity] = useState("szeged");
  const [zip, setZip] = useState("");
  const [type, setType] = useState("all");
  const [isAccepting, toggleIsAccepting] = useToggle();

  // function handleToggle() {
  //   setIsAccepting(!isAccepting);
  //   console.log(isAccepting);
  // }

  function useToggle(initialValue = false) {
    // Returns the tuple [state, dispatch]
    // Normally with useReducer you pass a value to dispatch to indicate what action to
    // take on the state, but in this case there's only one action.
    return useReducer((state) => !state, initialValue);
  }
  console.log(isAccepting);

  // const cities = [
  //   { label: "Szeged", value: "szeged" },
  //   { label: "Budapest", value: "bp" },
  // ];

  return (
    <div className="d-flex flex-column">
      <div>
        <form>
          <div>
            <h4>Város</h4>
            <select
              value={city}
              className="btn border-dark"
              onChange={(e) => setCity(e.target.value)}
              name="filterWorkSheetByStatus"
            >
              <option value="szeged">Szeged</option>
              <option value="budapest">Budapest</option>
            </select>
          </div>
          <br />
          <div>
            <h4>Irányítószám</h4>
            <select
              value={zip}
              className="btn border-dark"
              onChange={(e) => setZip(e.target.value)}
              name="filterWorkSheetByStatus"
            >
              <option>6765</option>
              <option>6978</option>
            </select>
          </div>
          <br />
          <div className="form-check">
            <h4>Jellege</h4>
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="private"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Lakossági
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="public"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Közösségi
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="business"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Üzleti
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="all"
              onChange={(e) => setType(e.target.value)}
            />
            <label class="form-check-label" for="exampleRadios1">
              Mind
            </label>
          </div>
          <br />
          <div className="form-check">
            <h4>Jelenleg fogad-e?</h4>
            <input
              type="checkbox"
              class="form-check-input"
              id="isAccepting"
              onChange={toggleIsAccepting}
            />
            <label class="form-check-label" for="isAccepting">
              Jelenleg fogad
            </label>
          </div>
        </form>
      </div>
      <div>
        <br />
        <br />
        <br />
        (Ez a rész csak a fejlesztés idejére látszik) <br />
        Backendre továbbítandó:
        <br />
        Város:{city} <br />
        Ir.szám.: {zip} <br />
        Jelleg.: {type} <br />
        Fogad-e.: {isAccepting === true ? "true" : "false"}
        <br />
      </div>
    </div>
  );
}

export default Filter;