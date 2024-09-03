import { addToCart } from "@/lib/cart";
import prisma from "@/lib/prisma";
import { Product } from "@/utils/types";
import ProductsClient from "./productsClient";

const ProductsPage = async () => {
  const products: Product[] = await prisma.product.findMany();

  // const handleAddToCart = async (productId: number) => {
  //   await addToCart(productId, 1);
  // }

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <ProductsClient products={products} />
    </section>
  )
}

export default ProductsPage;