export async function requestData(functionToWorkWithData) {
  try {
    let firstRequestResult = await fetch(
      "https://datainlife.ru/junior_task/get_products.php"
    );
    let secondRequestResult = await firstRequestResult.json();
    functionToWorkWithData(secondRequestResult);
  } catch (error) {
    throw new Error(error);
  }
}

export async function sendData(data) {
  let formD = new FormData();
  for (let item in data) {
    if (data[item].itemsOrdered) {
      formD.append(item, data[item].itemsOrdered);
    }
  }
  try {
    let requestResult = await fetch(
      "https://datainlife.ru/junior_task/add_basket.php",
      {
        method: "POST",
        body: formD,
      }
    );
    let resParsed = await requestResult.json();
    console.log(resParsed);
  } catch (error) {
    throw new Error(error);
  }
}

export function countTotalCost(obj) {
  let total = 0;
  for (let item in obj) {
    total += +obj[item].totalCost;
  }
  console.log(total);
  return total;
}
