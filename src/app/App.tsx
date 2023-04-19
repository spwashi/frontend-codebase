import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import { LogAppReduxState } from "@core/dev/components/Log";
import { persistor, store } from "@services/redux/store";
import { Application } from "@core/components/Application";
import { GRAPHQL_URL } from "@core/constants";
import { FeatureRegistrationBoundary } from "@services/features/list/components/FeatureRegistrationBoundary";

const httpLink = createHttpLink({ uri: GRAPHQL_URL });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

function App() {
  const canBeAdmin = true;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <FeatureRegistrationBoundary>
            <BrowserRouter>
              <LogAppReduxState />
              <Application canBeAdmin={canBeAdmin} />
            </BrowserRouter>
          </FeatureRegistrationBoundary>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
