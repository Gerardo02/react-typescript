import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Suspense>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </ApolloProvider>
  </React.StrictMode>,
)
