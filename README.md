## About

![](decision-method.png)

This package contains a series of utilities related to forecasting. It is currently in _alpha_. So far, it only contains utilities related to forecast aggregation, but I may add content related to scoring, charts, etc.

## Built with

- vanilla javascript
- [Best readme template](https://github.com/othneildrew/Best-README-Template)

## Getting started

### Installation

```sh
npm install forecasting
```

### Usage

#### Aggregation

```js
import {
  median,
  arithmeticMean,
  geometricMean,
  geometricMeanOfOdds,
  extremizedGeometricMeanOfOdds,
  neyman,
} from "forecasting";

let ps = [0.1, 0.2, 0.4, 0.5];
console.log(ps);

console.log(median(ps));
console.log(arithmeticMean(ps));
console.log(geometricMean(ps));
console.log(geometricMeanOfOdds(ps));
console.log(extremizedGeometricMeanOfOdds(ps, 1.5)); // 1.5 is the extremization factor
console.log(extremizedGeometricMeanOfOdds(ps, 2.5));
console.log(neyman(ps));
```

You may also install [@forecasting/aggregation](https://www.npmjs.com/package/@forecasting/aggregation) directly

#### Scoring

To be done

#### Charts

To be done

## Roadmap

- [ ] Do another repository for scoring methods
- [ ] Do another repository for charts
