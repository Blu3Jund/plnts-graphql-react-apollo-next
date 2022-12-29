// import { getProducts, queryClient } from "../src/api";
// import { dehydrate, useQuery } from "react-query";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   // fetches data and loads it into client
//   // await queryClient.prefetchQuery("products", () => getProducts());
//   await queryClient.prefetchQuery("products", () => getProducts());
//
//   return {
//     props: {
//       // dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export default function Products() {
  const { error, loading, data } = useQuery(LOAD_PRODUCTS);
  const [products, setProducts] = useState([]);

  // const { data } = useQuery(["products"], () => getProducts());
  useEffect(() => {
    if (data) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <div className="flex flex-row">
      {products.map((product, index) => (
        <div key={[product.name, index].join(":")}>
          <Link href={`/products/${product.id}`}>
            <a
              href="pages/products#"
              className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={product.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.price}
                </p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
