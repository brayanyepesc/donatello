<script lang="ts">
	import { onMount } from 'svelte';
	import type { CartProduct } from '../../types/types';
	import Product from '../../components/molecules/Product/Product.svelte';
	import { LucideTrash } from 'lucide-svelte';
	import { getCart, removeFromCart } from '../../utils/cart';
	let cart: CartProduct[] = [];
	onMount(() => {
		const storedCart = localStorage.getItem('cart');
		cart = storedCart ? JSON.parse(storedCart) : [];
	});
	const handleRemoveFromCart = (id: string) => {
		removeFromCart(id)
		cart = getCart();
	};
</script>

<div class="min-h-screen bg-black">
	{#if cart.length === 0}
		<p class="col-span-5 text-center text-3xl text-white">No items in cart</p>
	{:else}
		<ul class="grid grid-cols-5 gap-5 p-20 h-full w-full">
			{#each cart as product}
				<div class="flex flex-col justify-center items-center w-full h-full relative">
					<button on:click={() => handleRemoveFromCart(product.id)} class="absolute top-2 right-2 bg-indigo-500 w-10 h-10 rounded-full flex justify-center items-center hover:bg-indigo-700">
						<LucideTrash class="text-white" />
					</button>
					<Product {product} />
					<div class="flex justify-evenly items-center w-full mt-5">
						<button class="px-4 py-1 rounded-md bg-pink-500 text-white hover:bg-pink-700">-</button>
						<span class="px-4 py-1 rounded-md bg-white/10 text-white">{product.quantity}</span>
						<button class="px-4 py-1 rounded-md bg-pink-500 text-white hover:bg-pink-700">+</button>
					</div>
				</div>
			{/each}
		</ul>
		<div class="col-span-2 flex flex-col justify-center space-y-4 p-20">
			<h2 class="text-3xl font-bold text-white">
				Total: ${cart.reduce((acc, product) => acc + product.price, 0)}
			</h2>
			<button class="w-1/2 rounded-md bg-pink-500 p-2 text-white hover:bg-pink-700">Checkout</button
			>
		</div>
	{/if}
</div>
