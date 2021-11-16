import HousesTables from "../../components/houses/HousesTables";
import React, { useState, useEffect } from "react";

async function getData() {
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

export default function AllHouses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <section>
      <h1>Mi casa ideal</h1>
      <HousesTables housesData={data} />
    </section>
  );
}
