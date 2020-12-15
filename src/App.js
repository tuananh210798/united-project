
// import React from 'react';
import { useEffect, useState } from 'react';
import './App.scss';
import productAPI from './api/productAPI';



function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const response = await productAPI.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product lisr:', error)
      }
    }

    fetchProductList();
  }, []);






  return (
    <div className="app">
      <h1>NTA - Call API</h1>

    </div>
  );
}

export default App;
