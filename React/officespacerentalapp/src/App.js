import React from "react";
import "./App.css";
import office from "./office.jpg";

function App() {

  const heading = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad"
    },
    {
      Name: "SmartWorks",
      Rent: 80000,
      Address: "Pune"
    }
  ];

  return (
    <div className="container">

      <h1>{heading}, at Affordable Range</h1>

      {
        officeList.map((item, index) => {

          let colors = [];

          if (item.Rent <= 60000) {
            colors.push("textRed");
          } else {
            colors.push("textGreen");
          }

          return (
            <div key={index} className="card">

              <img
                src={office}
                alt="Office Space"
                width="250"
                height="180"
              />

              <h2>Name: {item.Name}</h2>

              <h3 className={colors.join(" ")}>
                Rent: Rs. {item.Rent}
              </h3>

              <h3>
                Address: {item.Address}
              </h3>

            </div>
          );
        })
      }

    </div>
  );
}

export default App;