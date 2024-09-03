import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function DELETE(request: Request) {
  const { cartId } = await request.json();

  if (!cartId) {
    return NextResponse.json({ error: 'Missing cartId' }, { status: 400 });
  }

  await prisma.cart.delete({
    where: { id: cartId },
  });

  return NextResponse.json({ message: 'Product removed from cart' }, { status: 200 });
}