import type { CartProduct, Product } from "../types/types";

export function getCart(): CartProduct[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

export function saveCart(cart: CartProduct[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(product: Product): void {
    const cart = getCart();
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
}