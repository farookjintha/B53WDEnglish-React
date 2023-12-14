const { multiply } = require("./mathExp");

function calculateTax() {
  let taxForEachMonth = 10000;

  let annualTax = multiply(12, taxForEachMonth);

  console.log("Annual Tax: ", annualTax);
}

calculateTax();
