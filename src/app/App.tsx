import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {LogAppReduxState} from '@core/dev/Log';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {persistor, store} from '@services/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {FeaturesBoundary} from '@services/features/components/Feature';
import {Application} from '@core/Application';
import {GRAPHQL_URL} from './constants';

const httpLink = createHttpLink({uri: GRAPHQL_URL});
const client   = new ApolloClient({link: httpLink, cache: new InMemoryCache()});

function App() {
  const canBeAdmin = true;
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <FeaturesBoundary>
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

export default App;