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
        Swal.fire({
            icon: 'success',
            title: 'Product added to cart',
            showConfirmButton: false,
            timer: 1500
        });
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
}

export function removeFromCart(productId: string): void {
    const cart = getCart();
    const updatedCart = cart.filter((item) => item.id !== productId);
    Swal.fire({
        icon: 'success',
        title: 'Product removed from cart',
        showConfirmButton: false,
        timer: 1500
    });
    saveCart(updatedCart);
}

export function updateQuantity(productId: string, quantityChange: number): void {
    const cart = getCart();
    const product = cart.find((item) => item.id === productId);

    if (!product) {
        Swal.fire({
            icon: 'error',
            title: 'Product not found in cart',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    const newQuantity = product.quantity + quantityChange;

    if (newQuantity < 1) {
        Swal.fire({
            icon: 'warning',
            title: 'Quantity cannot be less than 1',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (newQuantity > product.inStock) {
        Swal.fire({
            icon: 'warning',
            title: 'Not enough stock available',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    product.quantity = newQuantity;
    saveCart(cart);
}