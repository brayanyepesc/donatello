<script lang="ts">
	import products from '../../../../data/products.json';
	import { page } from '$app/stores';
	import type { Product } from '../../../../types/types';
	import { addToCart } from '../../../../utils/cart';
	$: id = $page.url.pathname.split('/').pop();
	$: product = products.find((product: Product) => product.id === id);
	const handleAddToCart = () => {
		if(product) {
			addToCart(product);
		}
	};
</script>

<div class="grid min-h-screen grid-cols-1 md:grid-cols-2 place-items-center gap-2 md:gap-5 bg-black px-5 md:px-20">
	<div>
		<img src={product?.imageUrl} alt={product?.name} />
	</div>
	<div class="flex flex-col justify-center space-y-2 md:space-y-4">
		<h1 class="text-4xl font-bold text-indigo-500">{product?.name}</h1>
		<p class="text-white">{product?.description}</p>
		<p class="text-5xl font-bold text-pink-500">${product?.price}</p>
		<button on:click={handleAddToCart} class="rounded-md bg-pink-500 hover:bg-pink-700 p-2 text-white w-1/2 mt-4">Add to Cart</button>
	</div>
</div>
