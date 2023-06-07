function getArrayParams(...arr) {

  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (max < arr[i + 1]) {
      max = arr[i + 1];
    }
    if (min > arr[i + 1]) {
      min = arr[i + 1];
    }
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

const summElementsWorker = function (...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let diff = 0;

  if (arr.length == 0) {
    return 0;
  }

  max = Math.max(...arr);
  min = Math.min(...arr);

  diff = max - min;
  return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diff;

  if (arr.length == 0) {
    console.log('Пустой массив');
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }

    diff = sumEvenElement - sumOddElement;
  }
  return diff;
}

const averageEvenElementsWorker = function (...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avgEvenElement = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEvenElement++;
      sumEvenElement = sumEvenElement + arr[i];
    }
  }
  avgEvenElement = sumEvenElement / countEvenElement;
  return avgEvenElement;
}

function makeWork(arrOfArr, func) {
  let newArr = [];
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = [...arrOfArr[i]];
    newArr[i] = func(...arr);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > maxWorkerResult) {
      maxWorkerResult = newArr[i];
    }
  }
  return maxWorkerResult;
}
