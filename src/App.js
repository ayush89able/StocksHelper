import React from 'react';
import './App.css';
import CSSReset from '@tds/core-css-reset'
import Form from './components/Form'
import StocksData from './components/StocksData'
import Stocks from './components/Stocks'
import FlexGrid from '@tds/core-flex-grid'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <CSSReset />
      <Provider store={store}>
        <FlexGrid>
          <Form />
          <StocksData />
          <Stocks />
        </FlexGrid>
      </Provider>
    </div>
  );
}

export default App;
