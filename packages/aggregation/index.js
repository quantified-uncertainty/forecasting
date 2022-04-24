// Helpers
const sum = (array) => array.reduce((a, b) => a + b, 0);
const probabilityToOdds = (p) => p / (1 - p);
const oddsToProbability = (o) => o / (1 + o);
const validateArray = (arr) =>
  Array.isArray(arr) &&
  arr.length > 0 &&
  arr.reduce((a, b) => a && typeof b == "number" && b >= 0 && b <= 1, true);

// Main functions
export const median = (array) => {
  if (!validateArray(array)) return -1;
  // needs validation array not empty
  let midway = Math.floor(array.length) / 2;
  let arrayToBeSorted = [...array];
  // sorting mutates the array, which I am averse to
  let arraySorted = arrayToBeSorted.sort((a, b) => a - b);
  if (midway % 2) {
    return arraySorted[midway];
  } else {
    return (arraySorted[midway - 1] + arraySorted[midway]) / 2;
  }
};

export const arithmeticMean = (array) => {
  if (!validateArray(array)) return -1;
  let result = sum(array) / array.length;
  return result;
};

export const geometricMean = (array) => {
  if (!validateArray(array)) return -1;
  // sum of logs seems more numerically stable than multiplying a lot of numbers 0<=p<=1
  let arrayAsLog = array.map((p) => Math.log(p));
  let sumOfLogs = sum(arrayAsLog) / arrayAsLog.length;
  let result = Math.exp(sumOfLogs);
  return result;
};

export const geometricMeanOfOdds = (array) => {
  if (!validateArray(array)) return -1;
  let arrayOfOdds = array.map((p) => probabilityToOdds(p));
  let arrayOfLogsOfOdds = arrayOfOdds.map((p) => Math.log(p));
  let sumOfLogsOfOdds = sum(arrayOfLogsOfOdds) / arrayOfLogsOfOdds.length;
  let geomMeanOfOdds = Math.exp(sumOfLogsOfOdds);
  let result = oddsToProbability(geomMeanOfOdds);
  return result;
};

export const extremizedGeometricMeanOfOdds = (
  array,
  extremizationParameter = 1.5
) => {
  if (!validateArray(array)) return -1;
  let arrayOfOdds = array.map((p) => probabilityToOdds(p));
  let arrayOfLogsOfOdds = arrayOfOdds.map((p) => Math.log(p));
  let extremizedSumOfLogsOfOdds =
    (extremizationParameter * sum(arrayOfLogsOfOdds)) /
    arrayOfLogsOfOdds.length;
  let extremizedGeomMeanOfOdds = Math.exp(extremizedSumOfLogsOfOdds);
  let result = oddsToProbability(extremizedGeomMeanOfOdds);
  return result;
};

export const neyman = (array) => {
  if (!validateArray(array)) return -1;
  let n = array.length;

  let d =
    (n * (Math.sqrt(3 * Math.pow(n, 2) - 3 * n + 1) - 2)) /
    (Math.pow(n, 2) - n - 1);
  let result = extremizedGeometricMeanOfOdds(array, d);
  return result;
};
