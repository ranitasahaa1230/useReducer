const numList = [1, 3, 55, 22, 44];

const oddAndEvenSumReducer = (acc, value) =>
  value % 2 === 0
    ? { ...acc, even: acc.even + value }
    : { ...acc, odd: acc.odd + value };

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, { odd: 0, even: 0 });
console.log(oddAndEvenSum);
// {odd: 59, even: 66}

const numList2 = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 }
];

const oddAndEvenSumReducer2 = (acc, value) =>
  value.type === "even"
    ? { ...acc, even: acc.even + value.payload }
    : { ...acc, odd: acc.odd + value.payload };

const oddAndEvenSum1 = numList2.reduce(oddAndEvenSumReducer2, {
  odd: 0,
  even: 0
});
console.log(oddAndEvenSum1);
// {odd: 59, even: 66}

const oddAndEvenSumReducer3 = (acc, value) => {
  switch (value.type) {
    case "even":
      return { ...acc, even: acc.even + value.payload };
    case "odd":
      return { ...acc, odd: acc.odd + value.payload };
    default:
      return acc;
  }
};

const oddAndEvenSum2 = numList2.reduce(oddAndEvenSumReducer3, {
  odd: 0,
  even: 0
});
console.log(oddAndEvenSum2);

// {odd: 59, even: 66}
