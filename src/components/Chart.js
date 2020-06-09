import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import Spinner from "./Spinner";

const Chart = ({ data }) => {
  const [daily, setDaily] = useState(null);

  // Get daily records
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/daily", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setDaily(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) return null;

  const { confirmed, recovered, deaths } = data;

  //   console.log(data);

  const barChart = (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${"country"}` },
      }}
    />
  );

  const lineChart = (
    <Line
      data={{
        labels: daily.map((el) => el.reportDate),
        datasets: [
          {
            data: daily.map((el) => el.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: daily.map((el) => el.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  );
  return lineChart;
};

export default Chart;
