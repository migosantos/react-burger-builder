import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
      <Layout>
          <BurgerBuilder>

          </BurgerBuilder>
      </Layout>
  );
}

export default App;
