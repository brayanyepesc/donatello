export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    inStock: number;
    imageUrl?: string;
}

export interface CartProduct extends Product {
    quantity: number;
}