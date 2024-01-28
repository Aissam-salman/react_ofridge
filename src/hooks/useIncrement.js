import { useState } from "react";

/**
 *
 * @param {int} init
 * @returns [int, function, function] count, increment, decrement
 */
export function useIncrement(init = 0){
    const [count, setCount] = useState(init);
    const increment = () => setCount(v => v + 1);
    const decrement = () => setCount(v => v - 1);
    return [count, increment, decrement];
}