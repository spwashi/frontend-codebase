import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {Provider} from 'react-redux';
import {persistor, store} from '../../.services/.redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {FeaturesBoundary} from '../../.features/components/Feature';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {RootCss} from '../../styles/root.css';
import '../../styles/app.scss';

const httpLink = createHttpLink({uri: process.env.REACT_APP_GRAPHQL_URL});
const client   = new ApolloClient({link: httpLink, cache: new InMemoryCache()});

export const mainDecorator = (Story: any) =>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={store}>
      <RootCss/>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <FeaturesBoundary>
            <Story/>
          </FeaturesBoundary>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  </LocalizationProvider>;