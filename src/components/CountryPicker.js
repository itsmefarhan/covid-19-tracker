import React, { Fragment, useEffect, useState } from "react";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  // fetch countries when component mounts
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ countries }) => setCountries(countries));
  }, []);

  return (
    <Fragment>
      <h3>Select a country to view its stats</h3>
      <select className="custom-select mb-5" id="inputGroupSelect01">
        <option value="">Global</option>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default CountryPicker;
