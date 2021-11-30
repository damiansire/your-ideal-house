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
    const response = await fetch("http://localhost:3001/houses/news");
    result = await response.json();
  } catch (error) {
    console.log(error);
  }
  return result || [];
}

export async function getHouseImages(viviendaId) {
  let result;
  try {
    const response = await fetch(
      `http://localhost:3001/houses/img/${viviendaId}`
    );
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result || [];
}

export async function sendLike(viviendaId) {
  let result;
  try {
    const response = await fetch(`http://localhost:3001/like/${viviendaId}`);
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result || [];
}

export async function sendDislike(viviendaId) {
  let result;
  try {
    const response = await fetch(`http://localhost:3001/dislike/${viviendaId}`);
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result || [];
}

export async function getFilters() {
  let result;
  try {
    const response = await fetch(`http://localhost:3001/houses/filters`);
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result || [];
}
