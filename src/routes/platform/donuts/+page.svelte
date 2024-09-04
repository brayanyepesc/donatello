<script>
	import Product from '../../../components/molecules/Product/Product.svelte';
	import products from '../../../data/products.json';
</script>

<div class="bg-black px-5 md:px-20">
	<h2 class="py-10 text-center text-3xl font-bold text-white">The best donuts</h2>
	<ul class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 pb-20">
		{#each products as product}
			<Product {product} />
		{/each}
	</ul>
</div>
