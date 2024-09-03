import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { productId, quantity } = await request.json();

    if (!productId || quantity <= 0) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const existingCartItem = await prisma.cart.findFirst({
      where: { productId },
    });

    if (existingCartItem) {
      await prisma.cart.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
    } else {
      await prisma.cart.create({
        data: { productId, quantity },
      });
    }

    return NextResponse.json({ message: 'Product added to cart' }, { status: 201 });
  } catch (error) {
    console.error('Error handling cart request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}