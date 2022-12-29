const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
} = graphql;

const productData = require("../MOCK_DATA.json");
const ProductType = require("./TypeDefs/ProductType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllProducts: {
      type: new GraphQLList(ProductType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return productData;
      },
    },
    getProductById: {
      type: ProductType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const product = productData.find((product) => product.id === args.id);
        if (product === undefined) {
          throw new Error("Product not found");
        }
        return product;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        stock: { type: GraphQLInt },
        price: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        // If you have a database put you Queries in here
        productData.push({
          id: productData.length + 1,
          name: args.name,
          description: args.description,
          image: args.image,
          stock: args.stock,
          price: args.price,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
