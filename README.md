# Frontend Apollo JWT

This is the client-side of an application written in TypeScript React to serve as a lightweight CMS.

Using [Apollo](https://www.apollographql.com/) and [Redux UI Toolkit](https://redux.js.org/redux-toolkit/overview)


## Architecture

I originally wrote this to explore and test my approach to development from a DX perspective. As such, the architecture is biased to make copying and pasting easy, while reducing the likelihood that boilerplate will carry significant overhead. 

This folder structure is my current favorite way to structure React applications.

```
\app          -- the core App component without any Providers 
\components   -- components that might be used by the App or any feature
\features     -- components, services, and features that might be Epic titles
\redux        -- the root store and reducer
\services     -- api calls and adapters
\stories      -- serves as a living 'docs' folder for Storybook
\styles       -- common scss styles or mixins
\util
```
