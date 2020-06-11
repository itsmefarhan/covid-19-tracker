import React, { useEffect, useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";

const Chart = ({ data, country }) => {
  const [daily, setDaily] = useState(null);

  // Get daily records
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/daily", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setDaily(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) return null;
  const { confirmed, recovered, deaths } = data;

  if (!daily) return null;

  const doughnutChart = (
    <Doughnut
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#5972f0", "#59f06d", "#e0382f"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `${country} Stats` },
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
            label: "Confirmed",
            borderColor: "#5972f0",
          },
          {
            data: daily.map((el) => el.deaths.total),
            label: "Deaths",
            borderColor: "#e0382f",
          },
        ],
      }}
    />
  );
  return country ? doughnutChart : lineChart;
};

export default Chart;
