// Import CSS thanks to Webpack
import "./index.css";

import numeral from "numeral";

const courseValue = numeral(1000).format("$0,0.00");
console.log(`I would get paid for ${courseValue} per hour!`); // eslint-disable-line no-console
