'use client';
import { useState } from 'react';
import { Product } from "@/utils/types";
import Image from 'next/image';
import Link from 'next/link';

const ProductsClient = ({ products }: { products: Product[] }) => {
  const [isAdding, setIsAdding] = useState<number | null>(null);

  const handleAddToCart = async (productId: number) => {
    setIsAdding(productId);

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      // Redirect to the cart page after successful addition
      window.location.href = '/cart'; // Using window.location for client-side redirection
    } catch (error) {
      console.error('Error adding product to cart:', error);
    } finally {
      setIsAdding(null);
    }
  };

  return (
    <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-4">
      {products.map((product) => (
        <li key={product.id} className="text-center border border-slate-600 rounded-md p-4">
          <div className="relative w-[250px] md:w-[400px] h-[150px] md:h-[250px] mb-4">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h2 className="font-bold">{product.name}</h2>
          <p className="text-slate-500">${product.price}</p>

          <div className="flex justify-center gap-4 mt-4 text-sm md:text-base">
            <button
              className="bg-blue-500 p-2 rounded-md text-black"
              onClick={() => handleAddToCart(product.id)}
              disabled={isAdding === product.id}
            >
              {isAdding === product.id ? 'Adding...' : 'Add to Cart'}
            </button>
            <Link href={`/products/${product.id}`} className="bg-green-500 p-2 rounded-md text-black">
              View Details
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsClient;