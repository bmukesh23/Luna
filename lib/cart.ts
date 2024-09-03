import prisma from "./prisma";

export const addToCart = async(productId: number, quantity: number) => {
    return await prisma.cart.create({
        data: {
            productId,
            quantity,
        },
    });
}