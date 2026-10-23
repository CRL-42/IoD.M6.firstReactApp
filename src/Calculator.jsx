import { useState } from "react"
import SortButton from "./SortButton";

// Exercise 6.
function Calculator() {
    const [currentResult, setResult] = useState('');
    const [numberA, setNumberA] = useState('');
    const [numberB, setNumberB] = useState('');

    const handleAdd = () => {
        let newResult = numberA + numberB;
        setResult(newResult);
    }

    const handleSubtract = () => {
        let newResult = numberA - numberB;
        setResult(newResult);
    }

    const handleMultiply = () => {
        let newResult = numberA * numberB;
        setResult(newResult);
    }

    const handleDivide = () => {
        let newResult = numberA / numberB;
        setResult(newResult)
    }

    return (
        <div className="Calculator componentBox">
            <h2>Exercise 6</h2>
            <div>
                <label>
                    First Number:
                    <input
                      name="a"
                      type="number"
                      value={numberA}
                      onChange={(e) => setNumberA(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Secound Number:
                    <input
                      name="b"
                      type="number"
                      value={numberB}
                      onChange={(e) => setNumberB(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <SortButton label='+' onClick={handleAdd} />
                <SortButton label='-' onClick={handleSubtract} />
                <SortButton label='x' onClick={handleMultiply} />
                <SortButton label='/' onClick={handleDivide} />
            </div>
            <div>
                <h3>{currentResult}</h3>
            </div>
        </div>
    )
}

export default Calculator
// Exercise 6 end.