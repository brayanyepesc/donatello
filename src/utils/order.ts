import Swal from "sweetalert2"
import type { CartProduct } from "../types/types"
import { clearCart } from "./cart"


export const generateOrder = (cart: CartProduct[]) => {
    const orderData = {
        products: cart.map((item: CartProduct) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            desciption: item.description,
            inStock: item.inStock,
            imageUri: item.imageUrl,
            quantity: item.quantity,
        })),
        totalOrder: cart.reduce((acc: number, item: CartProduct) => acc + item.quantity * item.price, 0),
    }
    const jsonData = new Blob([JSON.stringify(orderData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(jsonData)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "order.json")
    document.body.appendChild(link)
    link.click()
    clearCart();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
    Swal.fire({
        icon: "success",
        title: "Order generated successfully",
        showConfirmButton: false,
        timer: 1500,
    })
}