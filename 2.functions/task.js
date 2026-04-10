function getArrayParams(...arr) {
  if (arr.length > 0) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let number of arr) {
      if (number < min) {
        min = number;
      }

      if (number > max) {
        max = number;
      }

      sum += number;
    }

    let avg = parseFloat((sum / arr.length).toFixed(2));

    return { min, max, avg };
	
  return 0;
  }
}

function summElementsWorker(...arr) {
  if (arr.length > 0) {
    let sum = 0;

    for (let number of arr) {
      sum += number;
    }

    return sum;
  }

  return 0;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return max - min;
  }

  return 0;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length > 0) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let number of arr) {
      if (number % 2 === 0) {
        sumEven += number;
      } else {
        sumOdd += number;
      }
    }

    return sumEven - sumOdd;
  }

  return 0;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length > 0) {
    let sumEven = 0;
    let countEven = 0;

    for (let number of arr) {
      if (number % 2 === 0) {
        sumEven += number;
        countEven++;
      }
    }

    return countEven ? sumEven / countEven : 0;
  }

  return 0;
}

function makeWork(arrOfArr, worker) {
  let maxWorkerResult = -Infinity;

  for (const arr of arrOfArr) {
    const result = worker(...arr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
