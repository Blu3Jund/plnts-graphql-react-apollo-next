import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetProducts from "../components/GetProducts";
import Form from "../components/Form";
import NavBar from "../components/header";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:7070/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <NavBar />
      <GetProducts />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
