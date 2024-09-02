import prisma from "@/lib/prisma";
import { Product } from "@/utils/types";

const HomePage = async () => {
  const products: Product[] = await prisma.product.findMany();

  return (
    <div>
      <h1>Welcome to Mini E-commerce</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomePage;