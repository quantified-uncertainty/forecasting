## About

![](decision-method.png)

This package contains a series of utilities related to forecasting. It is currently in _alpha_. So far, it only contains utilities related to forecast aggregation, but I may add content related to scoring, charts, etc.

## Built with

- vanilla javascript
- [Best readme template](https://github.com/othneildrew/Best-README-Template)
- [lerna](https://github.com/lerna/lerna)

## Getting started

### Installation

```sh
npm install forecasting
```

### Usage

#### Aggregation

Aggregation functionality is taken from [@forecasting/aggregation](https://www.npmjs.com/package/@forecasting/aggregation). You may want to install that package directly.

```js
import {
  median,
  arithmeticMean,
  geometricMean,
  geometricMeanOfOdds,
  extremizedGeometricMeanOfOdds,
  neyman,
} from "@forecasting/aggregation";

let ps = [0.1, 0.2, 0.4, 0.5];
console.log(ps);

console.log(median(ps));
console.log(arithmeticMean(ps));
console.log(geometricMean(ps));
console.log(geometricMeanOfOdds(ps));
console.log(extremizedGeometricMeanOfOdds(ps, 1.5)); // 1.5 is the extremization factor
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

const chosenAggregationMethod = neyman;
const getAggregatedProbabilities = (array) => {
  let result = neyman(array);
  if (result == -1) {
    // handle case somehow; maybe throw an error, e.g.:
    // throw new Error("Invalid array of probabilities")
  } else {
    return result;
  }
};
```

#### Scoring

To be done

#### Charts

To be done

## Roadmap

- [ ] Do another repository for scoring methods
- [ ] Do another repository for charts
