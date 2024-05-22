import { useState } from "react";




export const useCounter = (initialVaue = 1) => {

    const [counter, setCounter] = useState(initialVaue);

    const increment = (value = 1) => {
        setCounter(counter + value);

    }

    const decrement = ( value = 1 ) => {
        // if (counter === 0) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialVaue);
    }

    return {
        counter,
        increment,
        decrement,
        reset 
    }

}