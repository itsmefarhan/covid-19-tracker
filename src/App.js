import React, { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  // useEffect(() => {
  //   fetch("https://covid-19-data.p.rapidapi.com/totals", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  //       "x-rapidapi-key": "c55fad01aemsh65002777a88172bp18f177jsn1728ba286540",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const data = [
    {
      confirmed: 7265953,
      critical: 53806,
      deaths: 411008,
      lastChange: "2020-06-09T12:44:38+02:00",
      lastUpdate: "2020-06-09T12:45:02+02:00",
      recovered: 3562254,
    },
  ];

  return (
    <div className="container">
      <h1 className="text-muted text-center mt-5 mb-5">Covid-19 Stats</h1>
      <Card data={data[0]} />
    </div>
  );
}

export default App;
