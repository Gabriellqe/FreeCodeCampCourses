function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let totalCID = 0;
  for (let element of cid) {
    totalCID += element[1] * 100;
  }
  if (change > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeArr = [];
    const currencyValues = {
      "ONE HUNDRED": 10000,
      TWENTY: 2000,
      TEN: 1000,
      FIVE: 500,
      ONE: 100,
      QUARTER: 25,
      DIME: 10,
      NICKEL: 5,
      PENNY: 1,
    };
    for (let element of cid.reverse()) {
      let currencyName = element[0];
      let currencyAmount = element[1] * 100;
      let currencyValue = currencyValues[currencyName];
      let currencyCount = 0;
      while (change >= currencyValue && currencyAmount > 0) {
        change -= currencyValue;
        currencyAmount -= currencyValue;
        currencyCount += currencyValue;
      }
      if (currencyCount > 0) {
        changeArr.push([currencyName, currencyCount / 100]);
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArr };
    }
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
