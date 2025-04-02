import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DataTest = () => {
  const [hel, setHell] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/product/register")
      .then((response) => {
        console.log("API Response:", response.data);

        if (Array.isArray(response.data.message)) {
          setHell(response.data.message); // Directly set the array of objects
        } else {
          console.warn("Unexpected response format, setting empty array");
          setHell([]);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        setHell([]);
      });
  }, []);
  return (
    <>
      <div>
        <h2>Data from API:</h2>
        {/* <pre>{JSON.stringify(hel, null, 2)}</pre> Debug UI */}
        {hel.length > 0 ? (
          hel.map((helo, i) => (
            <div key={i}>
              <strong>Product:</strong> {helo.productName} <br />
              <strong>Category:</strong> {helo.Category} <br />
              <strong>Price:</strong> {helo.price} <br />
              {/* <strong>Product Description:</strong> {helo.productDescription} <br /> */}
              <hr />
            </div>
          ))
        ) : (
          <p>Loading or No Data Found</p>
        )}
      </div>
    </>
  );
};

export default DataTest;
