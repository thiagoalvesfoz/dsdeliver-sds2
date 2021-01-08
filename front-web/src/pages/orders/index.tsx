import { useEffect, useState } from "react";
import ProductsList from "../../components/products-list";
import StepsHeader from "../../components/steps-headers";
import { fetchProducts } from "../../services/api";
import { Product } from "../../services/types";
import "./styles.css";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
    </div>
  );
}
