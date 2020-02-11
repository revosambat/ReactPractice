import React from "react";
import { Link, Route } from "react-router-dom";
const about = [
  {
    name: "Guitar",
    id: "guitar",
    type: [
      {
        name: "Acoustic",
        id: "aco",
        priceFrom: "Rs 10000"
      },
      {
        name: "Electric",
        id: "elec",
        priceFrom: "Rs 20000"
      },
      {
        name: "CLassical",
        id: "class",
        priceFrom: "Rs 18000"
      }
    ]
  },
  {
    name: "Piano",
    id: "pian",
    priceFrom: 15000
  }
];
function Type({ match }) {
  const instrument = about.find(({ id }) => id === match.params.typeId);
  console.log(instrument)
  return (
    <div>
      <h1>{instrument.name}</h1>
      <p>{instrument.priceFrom}</p>
      <ul style={{ listStyle: "none" }}>
        {instrument.type?.map(sub => (
          <li key={sub.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/about/${match.params.typeId}/${sub.id}`}
            >
              <h3>{sub.name}</h3>
              <p>{sub.priceFrom}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <ul style={{ listStyle: "none" }}>
        {about.map(({ name, id }) => (
          <li key={id}>
            <Link
              style={{ textDecoration: "none", justifyContent: "center" }}
              to={`/about/${id}`}
            >
              <h2 style={{ color: "black" }}>{name}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Route path={"/about/:typeId"} component={Type} />
    </div>
  );
}

export default About;
