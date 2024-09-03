import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(request: Request) {
  const { cartId, quantity } = await request.json();

  if (quantity <= 0) {
    // If quantity is 0 or less, remove the item from the cart
    await prisma.cart.delete({
      where: { id: cartId },
    });
    return NextResponse.json({ message: 'Product removed from cart' }, { status: 200 });
  } else {
    // Update the quantity
    await prisma.cart.update({
      where: { id: cartId },
      data: { quantity },
    });
    return NextResponse.json({ message: 'Cart updated' }, { status: 200 });
  }
}