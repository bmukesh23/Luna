export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
}

export interface Cart{
    id: number,
    productId: number,
    quantity: number,  
    product: Product, 
}