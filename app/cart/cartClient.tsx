'use client';
import { useState } from 'react';
import { Cart } from "@/utils/types";
import Image from 'next/image';
import Link from 'next/link';

const CartClient = ({ carts: initialCarts }: { carts: Cart[] }) => {
  const [carts, setCarts] = useState<Cart[]>(initialCarts);
  const [loading, setLoading] = useState<number | null>(null);

  const updateCartItem = async (cartId: number, quantity: number) => {
    setLoading(cartId);

    try {
      await fetch('/api/cart/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartId, quantity }),
      });

      // Update local state
      setCarts((prevCarts) =>
        prevCarts.map((cart) =>
          cart.id === cartId ? { ...cart, quantity } : cart
        )
      );
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setLoading(null);
    }
  };

  const handleUpdateQuantity = (cartId: number, quantity: number) => {
    // Prevent negative quantity
    if (quantity < 1) return;

    updateCartItem(cartId, quantity);
  };

  const handleRemoveItem = async (cartId: number) => {
    setLoading(cartId);

    try {
      await fetch('/api/cart/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartId }),
      });

      // Update local state
      setCarts((prevCarts) =>
        prevCarts.filter((cart) => cart.id !== cartId)
      );
    } catch (error) {
      console.error('Error removing item from cart:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div>
      {carts.length === 0 ? (
        <p className='text-slate-500 font-semibold text-center'>Your cart is empty! Add items to the cart to see your items here.</p>
      ) : (
        <ul className="flex flex-col items-center justify-center gap-4">
          {carts.map((cart) => (
            <li key={cart.id} className='flex items-center justify-between gap-6 border border-slate-600 rounded-md p-4'>
              <div className="relative w-[200px] h-[150px]">
                <Image
                  src={cart.product.imageUrl}
                  alt={cart.product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div>
                <Link href={`/products/${cart.product.id}`} className="underline">
                  {cart.product.name}
                </Link>
                <p>Quantity: <span className='text-slate-500'>{cart.quantity}</span></p>
                <p>Total: <span className='text-slate-500'>${cart.quantity * cart.product.price}</span></p>

                <div className='flex items-center gap-4 mt-4'>
                  <button
                    className="bg-blue-500 p-1 rounded-md text-black"
                    onClick={() => handleUpdateQuantity(cart.id, cart.quantity + 1)}
                    disabled={loading === cart.id}
                  >
                    Increase
                  </button>
                  <button
                    className="bg-blue-500 p-1 rounded-md text-black"
                    onClick={() => handleUpdateQuantity(cart.id, cart.quantity - 1)}
                    disabled={loading === cart.id || cart.quantity <= 1}
                  >
                    Decrease
                  </button>
                  <button
                    className="bg-red-600 p-1 rounded-md text-black"
                    onClick={() => handleRemoveItem(cart.id)}
                    disabled={loading === cart.id}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartClient;