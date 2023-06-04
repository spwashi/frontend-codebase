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
import { FeatureRegistrationBoundary } from "@widgets/feature";

import { routerCategories } from "@identities/routes/helpers/routerCategories";
import { getRouterPath, mainRoutes } from "@identities/routes";

const httpLink = createHttpLink({ uri: GRAPHQL_URL });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

const rootElement = (
  <Route path={getRouterPath(mainRoutes.root)} element={<Application />} />
);
const router = createBrowserRouter(createRoutesFromElements(rootElement));

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <FeatureRegistrationBoundary>
            <RouterProvider router={router} />
          </FeatureRegistrationBoundary>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
