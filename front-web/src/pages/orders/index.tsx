import { useEffect, useState } from "react";
import OrderLocation from "../../components/order-location";
import ProductsList from "../../components/products-list";
import StepsHeader from "../../components/steps-headers";
import { fetchProducts } from "../../services/api";
import { OrderLocationData, Product } from "../../services/types";
import "./styles.css";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </div>
  );
}
