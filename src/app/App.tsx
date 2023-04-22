import React from "react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import { Route } from "react-router";
import { persistor, store } from "@services/redux/store";
import { Application } from "@core/components/Application";
import { GRAPHQL_URL } from "@core/constants";
import { FeatureRegistrationBoundary } from "@services/features/list/components/FeatureRegistrationBoundary";

const httpLink = createHttpLink({ uri: GRAPHQL_URL });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

const browserRouter = createBrowserRouter(
  createRoutesFromElements(<Route path={"/*"} element={<Application />} />)
);

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <FeatureRegistrationBoundary>
            <RouterProvider router={browserRouter} />
          </FeatureRegistrationBoundary>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
