<script lang="ts">
	import { onMount } from 'svelte';
	import type { CartProduct } from '../../types/types';
	import Product from '../../components/molecules/Product/Product.svelte';
	let cart: CartProduct[] = [];
	onMount(() => {
		const storedCart = localStorage.getItem('cart');
		cart = storedCart ? JSON.parse(storedCart) : [];
	});
</script>

<div class="min-h-screen bg-black">
	{#if cart.length === 0}
		<p class="col-span-5 text-center text-3xl text-white">No items in cart</p>
	{:else}
		<ul class="grid grid-cols-5 gap-5 p-20">
			{#each cart as product}
				<Product {product} />
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
