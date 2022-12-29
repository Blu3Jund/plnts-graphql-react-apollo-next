import { gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation createProduct(
    $name: String
    $description: String
    $image: String
    $stock: Int
    $price: Float
  ) {
    createProduct(
      name: $name
      description: $description
      image: $image
      stock: $stock
      price: $price
    ) {
      id
    }
  }
`;
