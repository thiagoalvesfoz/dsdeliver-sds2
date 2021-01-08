import { Product } from "../../services/types";
import ProductCard from "../product-card";

type Props = {
  products: Product[];
};

export default function ProductsList({ products }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
