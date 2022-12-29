import React, { useState } from "react";
import { CREATE_PRODUCT_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const [createProduct, { error }] = useMutation(CREATE_PRODUCT_MUTATION);

  const addProduct = () => {
    createProduct({
      variables: {
        name,
        description,
        image,
        stock,
        price,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Stock"
        onChange={(e) => {
          setStock(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button onClick={addProduct}> Create Product</button>
    </div>
  );
}

export default Form;
