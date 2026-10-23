import { useState } from "react";
// Child component to display and convert temp if needed
function Temperature({ temp }) {
    const [units, setUnits] = useState('C')
  // default to celcius
  const handleUnitChange = () => {
    let newUnits = 'C';
    if (units === 'C') newUnits = 'F';

    setUnits(newUnits)
  }
  // convert to Fahrenheit if units is F (or not C)
  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;
  return (
    <span className="Temperature">
      <strong>
        {parseInt(displayTemp)}&deg;{units}
      </strong>
      <div>
      <button onClick={handleUnitChange}>Change Units</button>
      </div>
    </span>
  );
}

export default Temperature