import { useOutletContext } from "react-router-dom";
import Card from "./card";

export default function Products() {
  const { products, loading, error, cart, setCart } = useOutletContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products) return <div>No products found</div>;
  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {products.map((product)=>(
        <Card key={product.title} data={product} cart={cart} setCart={setCart}/>
      ))}
    </div>
  );
}
