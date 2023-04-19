import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import { persistor, store } from "@services/redux/store";
import "../../@core/styles/app.scss";
import { GRAPHQL_URL } from "@core/constants";
import { FeatureRegistrationBoundary } from "@services/features/list/components/FeatureRegistrationBoundary";

const httpLink = createHttpLink({ uri: GRAPHQL_URL });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

export const mainDecorator = (Story: any) => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <PersistGate loading={null} persistor={persistor}>
        <FeatureRegistrationBoundary>
          <Story />
        </FeatureRegistrationBoundary>
      </PersistGate>
    </ApolloProvider>
  </Provider>
);
