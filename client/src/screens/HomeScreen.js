import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ProductCard from './../components/ProductCard'
import '../App.css'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
  }

  useEffect( () => {
        fetchProducts();
    }, []);


  return (
    <div className='home-screen'>
      {
        products.map((product, index) => (
          <ProductCard product ={product} key={index} />
        ))
      }
      </div>
  )
}

export default HomeScreen