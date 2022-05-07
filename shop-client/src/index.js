import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import App from './components/App'
import './assets/css/index.css'
import { initialStorage } from './tools/helper'

const client = new QueryClient()
initialStorage()

ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById('root')
)
