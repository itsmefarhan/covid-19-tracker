import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [daily, setDaily] = useState(null);

  // Get daily records
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/daily", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setDaily(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!daily) return null;

  const lineChart = (
    <Line
      data={{
        labels: daily.map((el) => el.reportDate),
        datasets: [
          {
            data: daily.map((el) => el.confirmed.total),
            label: "Active",
            borderColor: "blue",            
          },
          {
            data: daily.map((el) => el.deaths.total),
            label: "Deaths",
            borderColor: "red",                        
          },
        ],
      }}
    />
  );
  return lineChart;
};

export default Chart;
