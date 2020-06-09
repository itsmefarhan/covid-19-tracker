import React from "react";
import CountUp from "react-countup";

const Card = ({ data }) => {
  const { confirmed, critical, deaths, recovered, lastUpdate } = data;
  let dataMapper = [confirmed, recovered, critical, deaths];

  // function to return Title based on iteration
  const dataMapperFunc = (cat) => {
    switch (cat) {
      case confirmed:
        return "Confirmed";
      case critical:
        return "Active";
      case deaths:
        return "Deaths";
      case recovered:
        return "Recovered";
      default:
        break;
    }
  };

  // function to return color based on iteration
  const dynamicColor = (cat) => {
    switch (cat) {
      case confirmed:
        return "blue";
      case critical:
        return "orange";
      case deaths:
        return "red";
      case recovered:
        return "green";
      default:
        break;
    }
  };
  return (
    <div className="data">
      {dataMapper.map((cat) => (
        <div
          key={cat}
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
              <CountUp start={0} end={cat} duration={2} separator="," />
            </h6>
            <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
