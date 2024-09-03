import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request: Request) {
  try {
    const { cartId } = await request.json();

    if (!cartId) {
      return NextResponse.json({ error: 'Missing cartId' }, { status: 400 });
    }

    await prisma.cart.delete({
      where: { id: cartId },
    });

    return NextResponse.json({ message: 'Product removed from cart' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}