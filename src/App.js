
// import React from 'react';
import { useEffect, useState } from 'react';
import './App.scss';
import productAPI from './api/productAPI';
import Navigation from './components/Navigation';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Hihi from './components/Hihi';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  const [productList, setProductList] = useState([]);



  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          page: 1,
          limit: 5,
        };
        const response = await productAPI.getAll(params);
        setProductList(response);
      } catch (error) {
        console.log('Failed to fetch product list:', error)
      }
    }
    fetchProductList();
  }, []);






  return (

    <div className="app">

      <Router>
        <Switch>
          <Route exact path='/'>
            <Navigation />
            <About />
            <Products listProduct={productList} />
            <Contact />
          </Route>
          <Route exact path='/helo'>
            <Navigation />
            <About />
            <Hihi />
            <Contact />
          </Route>
        </Switch>
        <Route path='/admin'>
          <Admin />

        </Route>
      </Router>
    </div>
  );
}

export default App;
