import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {Provider} from 'react-redux';
import {persistor, store} from '../../redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {FeaturesBoundary} from '../../features/_util';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const httpLink             = createHttpLink({uri: process.env.REACT_APP_GRAPHQL_URL});
const client               = new ApolloClient({link: httpLink, cache: new InMemoryCache()});
export const mainDecorator = (Story: any) =>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <PersistGate loading={null} persistor={persistor}>
                    <FeaturesBoundary>
                        <Story/>
                    </FeaturesBoundary>
                </PersistGate>
            </ApolloProvider>
        </Provider>
    </LocalizationProvider>;