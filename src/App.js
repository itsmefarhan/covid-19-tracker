import React, { useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";

function App() {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState("");

  // fetch overall covid stats on component mount
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getDataByCountry = (country) => {
    return fetch(`https://covid19.mathdro.id/api/countries/${country}`, {
      method: "GET",
    });
  };

  const handleChange = (country) => {
    // get countrywise data returned in getDataByCountry function, set data and country in state
    getDataByCountry(country)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCountry(country);
      });
  };

  return (
    <div className="container">
      <h1 className="text-muted text-center mt-5 mb-5">Covid-19 Stats</h1>
      <Card data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart country={country} data={data} />
    </div>
  );
}

export default App;
