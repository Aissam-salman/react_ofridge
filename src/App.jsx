import { useState } from 'react';
import SearchInput from './components/forms/SearchInput.jsx';
import axios from 'axios';
import { Header } from './components/header/Header.jsx';
import { SectionTitle } from './components/title/SectionTitle.jsx';
import { ProductCard } from './components/product/ProductCard.jsx';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div> Page Accueil</div>
  }
]);

function App() {
  const [product, setProduct] = useState(null); // Mettez à jour pour gérer un seul produit

  const fetchData = async (searchTerm) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/product/${searchTerm}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      console.log(data);
      setProduct(data);

    } catch (error) {
      console.error('Error fetching data:', error);
      setProduct(null);
    }
  };

  return (
    <>
      <Header />
      <SearchInput onSearch={fetchData} />
      <SectionTitle title="Top ingredients" />
      <section>
        <ProductCard />
      </section>
      <div>
        {product && JSON.stringify(product.products)}
      </div>
    </>
  );
};

export default App;
