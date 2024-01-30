import axios from "axios";
import { useState } from "react";
import { Header } from "../components/header/Header.jsx";
import SearchInput from "../components/forms/SearchInput.jsx";
import { SectionTitle } from "../components/title/SectionTitle.jsx";
import { ProductCard } from "../components/product/ProductCard.jsx";

export function Search() {
  const [product, setProduct] = useState(null); // Mettez à jour pour gérer un seul produit

  const fetchData = async (searchTerm) => {
    try {
      const response = await Axios.get(
        `http://127.0.0.1:8000/product/${searchTerm}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
      <div>{product && JSON.stringify(product.products)}</div>
    </>
  );
}
