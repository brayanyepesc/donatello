<script>
	import products from '../data/products.json';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Alert } from '../utils/swal';

	let orderUrl = '/';

	onMount(() => {
		if ($page.data?.session) {
			orderUrl = '/platform/donuts';
		}
	});

	const handleClickOrderNow = () => {
		if (!$page.data?.session) {
			Alert({
				icon: 'warning',
				title: 'Login Required',
				text: 'To purchase, you need to log in.',
			})
		}
	};
</script>

<div class="min-h-screen w-full bg-black">
	<div class="flex flex-col items-center justify-center space-y-5 pt-10 md:pt-40 text-white">
		<h2
			class="text-center max-w-xs md:max-w-5xl bg-gradient-to-r from-pink-500 via-red-500 to-indigo-500 bg-clip-text text-2xl md:text-5xl font-bold text-transparent"
		>
			Indulge in happiness with every bite — treat yourself to our freshly baked donuts today!
		</h2>
		<span class="text-xl md:text-3xl font-light text-white">The best site to buy donuts</span>
		<button
			class="rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500 px-8 py-4 font-bold text-white"
			on:click={handleClickOrderNow}
		>
			<a href={orderUrl}>Order Now</a>
		</button>
	</div>
	<ul class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
		{#each products as product}
			<li>
				<a href={orderUrl}>
					<img src={product.imageUrl} alt={product.name} />
				</a>
			</li>
		{/each}
	</ul>
</div>
