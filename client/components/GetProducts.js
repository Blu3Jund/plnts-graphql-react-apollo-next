import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";

function GetProducts() {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <div>
      {/*{products.map((value) => {*/}
      {/*  return <h1>{value.name}</h1>;*/}
      {/*})}*/}
    </div>
  );
}

export default GetProducts;
