import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-muted text-center mt-5 mb-5">Covid-19 Stats</h1>
      <Card data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
