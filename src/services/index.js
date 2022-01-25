export async function requestData(functionToWorkWithData) {
  let firstRequestResult = await fetch(
    "https://datainlife.ru/junior_task/get_products.php"
  );
  console.log(firstRequestResult);
  let secondRequestResult = await firstRequestResult.json();
  console.log(secondRequestResult);
  console.log(functionToWorkWithData);
  functionToWorkWithData(secondRequestResult);
}
