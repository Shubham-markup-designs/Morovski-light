import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";
import type { Product } from "../api/types";

const Home = () => {
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
        Helloworld

        
      {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;