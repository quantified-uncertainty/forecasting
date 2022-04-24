import {
  median,
  arithmeticMean,
  geometricMean,
  geometricMeanOfOdds,
  extremizedGeometricMeanOfOdds,
  neyman,
} from "./index.js";

let ps = [0.1, 0.2, 0.4, 0.5];
console.log(ps);

console.log(median(ps));
console.log(arithmeticMean(ps));
console.log(geometricMean(ps));
console.log(geometricMeanOfOdds(ps));
console.log(extremizedGeometricMeanOfOdds(ps, 1.5));
console.log(extremizedGeometricMeanOfOdds(ps, 2.5));
console.log(neyman(ps));

// invalid inputs, will return -1
let notArrayOfProbabilities0 = "Hello world!";
console.log(arithmeticMean(notArrayOfProbabilities0)); // -1
let notArrayOfProbabilities1 = [];
console.log(arithmeticMean(notArrayOfProbabilities1)); // -1
let notArrayOfProbabilities2 = ["a"];
console.log(arithmeticMean(notArrayOfProbabilities2)); // -1
let notArrayOfProbabilities3 = [2, 4, 5];
console.log(arithmeticMean(notArrayOfProbabilities3)); // -1
let notArrayOfProbabilities4 = [0.2, 4, 5];
console.log(arithmeticMean(notArrayOfProbabilities4)); // -1
