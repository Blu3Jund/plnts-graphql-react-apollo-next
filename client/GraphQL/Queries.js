import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query {
    getAllProducts {
      id
      name
      description
      image
      stock
      price
    }
  }
`;

export const PRODUCT_BY_ID = gql`
  query getProductById($id: Int!) {
    getProductById(id: $id) {
      id
      name
      description
      image
      stock
      price
    }
  }
`;
