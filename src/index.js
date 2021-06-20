import natalis, { saludar, despedida } from "./saludar";
import './style.scss'
const saludo = "Hola mundo con webpack";
console.log(saludo);

const edad = 13;
console.log(saludar());
console.log(despedida() + " Andres");
const textNataliaVariableJavascript = natalis();
console.log(textNataliaVariableJavascript);
console.log(textNataliaVariableJavascript + " Natalia");
