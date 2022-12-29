import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { PRODUCT_BY_ID } from "../../GraphQL/Queries";

const ProductDetail = ({ Component }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(PRODUCT_BY_ID, { variables: { id: 1 } });

  //TODO fix this gives error cannot read properties of undefined when calling getProductById
  // console.log(data.getProductById);
  console.log(data);

  const handleOnClick = () => {
    ///TODO make shopping-cart and add a product to the shopping-cart list.
    // console.log(router.query.id);
  };

  // Card from tailwind docs
  return (
    <div className="flex flex-col">
      <a className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          // src={data.getProductById.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {/*{data.getProductById.name}*/}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/*{data.getProductById.price}*/}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/*{data.getProductById.description}*/}
          </p>
        </div>
      </a>
      <button onClick={handleOnClick} className="btn btn-primary">
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetail;
