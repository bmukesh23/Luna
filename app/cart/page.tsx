import prisma from "@/lib/prisma";
import { Cart } from "@/utils/types";
import CartClient from './cartClient';

const CartPage = async () => {
  const carts: Cart[] = await prisma.cart.findMany({
    include: { product: true },
  });

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold text-center p-10">Shopping Cart</h1>
      <CartClient carts={carts} />
    </section>
  );
}

export default CartPage;