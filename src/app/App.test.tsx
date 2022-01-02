import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {Provider} from 'react-redux';
import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {FeaturesBoundary} from '../util/features';


const httpLink = createHttpLink({uri: process.env.REACT_APP_GRAPHQL_URL});
const client   = new ApolloClient({
                                      link:  httpLink,
                                      cache: new InMemoryCache(),
                                  });


test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <ApolloProvider client={client}>
                <PersistGate loading={null} persistor={persistor}>
                    <FeaturesBoundary>
                        <App/>
                    </FeaturesBoundary>
                </PersistGate>
            </ApolloProvider>
        </Provider>,
    );
    const linkElement = screen.getByText(/Create Project Form/i);
    expect(linkElement).toBeInTheDocument();
});
