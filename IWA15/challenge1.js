const data = {
  lists: [
    ['first', [15, 11, 13, 7, 5]],
    ['second', [2, 6, 8, 4, 14, 12, 10]],
    ['third', [9, 3, 1]],
  ],
};

// Only edit below

const result = [];

const extractBiggest = () => {
  let firstLast = data.lists[0][1].pop();
  let secondLast = data.lists[1][1].pop();
  let thirdLast = data.lists[2][1].pop();
  
  if (firstLast >= secondLast && firstLast >= thirdLast) {
    return firstLast;
  }
  
  if (secondLast >= firstLast && secondLast >= thirdLast) {
    return secondLast;
  }
  
  return thirdLast;
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
