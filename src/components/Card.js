import React from "react";
import CountUp from "react-countup";
import Spinner from "./Spinner";

const Card = ({ data }) => {
  if (!data) return <Spinner />;

  const { confirmed, recovered, deaths, lastUpdate } = data;

  let dataMapper = [confirmed, recovered, deaths];

  // function to return Title based on iteration
  const dataMapperFunc = (cat) => {
    switch (cat) {
      case confirmed:
        return "Confirmed";
      case recovered:
        return "Recovered";
      case deaths:
        return "Deaths";
      default:
        break;
    }
  };

  // function to return color based on iteration
  const dynamicColor = (cat) => {
    switch (cat) {
      case confirmed:
        return "blue";
      case recovered:
        return "green";
      case deaths:
        return "red";
      default:
        break;
    }
  };

  return (
    <div className="data">
      {dataMapper.map((cat, i) => (
        <div
          key={i}
          className="card"
          style={{
            marginTop: "10px",
            width: "200px",
          }}
        >
          <div className="card-body">
            <div className="box">
              <h5 className="card-title">{dataMapperFunc(cat)}</h5>
              <div
                style={{
                  background: dynamicColor(cat),
                  width: "30px",
                  height: "15px",
                }}
              ></div>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">
              <CountUp start={0} end={cat.value} duration={2} separator="," />
            </h6>
            <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
