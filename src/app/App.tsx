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
import { persistor, store } from "@services/redux/store";
import { Application } from "@core/components/Application";
import { GRAPHQL_URL } from "@core/constants";
import { FeatureRegistrationBoundary } from "@services/features/list/components/FeatureRegistrationBoundary";
import { Route } from "react-router";

const httpLink = createHttpLink({ uri: GRAPHQL_URL });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

function App() {
  const canBeAdmin = true;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <FeatureRegistrationBoundary>
            <RouterProvider
              router={createBrowserRouter(
                createRoutesFromElements(
                  <Route
                    path={"/*"}
                    element={<Application canBeAdmin={canBeAdmin} />}
                  />
                )
              )}
            />
          </FeatureRegistrationBoundary>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
