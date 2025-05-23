import { createRoot } from "react-dom/client";
import { Comp } from "./comp.js";
import { greet } from "./greet.js";
import { sayHi } from "./hi.js";
import { ReactApp } from "./react-app.js";

console.log(greet('PK'));
console.log(sayHi(8));
Comp();
const newEL = document.createElement('div');
newEL.innerText = 'Main hu khalnayak';
document.querySelector('h1').appendChild(newEL);

const root = createRoot(document.getElementById('react-app'));
root.render(<ReactApp name="Prashant" />);