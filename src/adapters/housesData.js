export async function getTodayHouseData() {
  let result;
  try {
    const response = await fetch("http://localhost:3001/houses/today");
    result = await response.json();
  } catch (error) {
    console.log(error);
  }
  console.log(result);
  return result || [];
}

export async function getPendingMatchHouseData() {
  let result;
  try {
    const response = await fetch("http://localhost:3001/houses/today");
    result = await response.json();
  } catch (error) {
    console.log(error);
  }
  console.log(result);
  return result || [];
}
