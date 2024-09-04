import Swal from "sweetalert2";
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
        Swal.fire({
            icon: 'info',
            title: 'Product already in cart, go to cart to modify quantity',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
}

export function removeFromCart(productId: string): void {
    const cart = getCart();
    const updatedCart = cart.filter((item) => item.id !== productId);
    saveCart(updatedCart);
}