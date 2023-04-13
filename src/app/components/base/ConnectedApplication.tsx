import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {LogAppReduxState} from '../dev/Log';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {persistor, store} from '../../_services/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {FeaturesBoundary} from '../../_services/features/components/Feature';
import {RootCss} from '../../styles/components/root.css';
import {Application} from './Application';
import {GRAPHQL_URL} from '../../constants';

const httpLink = createHttpLink({uri: GRAPHQL_URL});
const client   = new ApolloClient({link: httpLink, cache: new InMemoryCache()});

function ConnectedApplication() {
  const canBeAdmin = true;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <FeaturesBoundary>
            <RootCss/>
            <BrowserRouter>
              <LogAppReduxState/>
              <Application canBeAdmin={canBeAdmin}/>
            </BrowserRouter>
          </FeaturesBoundary>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
}

export default ConnectedApplication;