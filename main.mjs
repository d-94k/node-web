import "./counter1.mjs";
import "./counter2.mjs";
import { counterInstance } from "./counter.mjs";

counterInstance.increment();

console.log("count:", counterInstance.count);