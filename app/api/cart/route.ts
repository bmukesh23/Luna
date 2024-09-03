import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const { productId, quantity } = await request.json();

  if (!productId || !quantity) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Find the existing cart item by productId
  const existingCartItem = await prisma.cart.findFirst({
    where: { productId },
  });

  if (existingCartItem) {
    // Update quantity if product already in cart
    await prisma.cart.update({
      where: { id: existingCartItem.id }, // Use the primary key to update
      data: { quantity: existingCartItem.quantity + quantity },
    });
  } else {
    // Add new item to cart
    await prisma.cart.create({
      data: { productId, quantity },
    });
  }

  return NextResponse.json({ message: 'Product added to cart' }, { status: 201 });
}