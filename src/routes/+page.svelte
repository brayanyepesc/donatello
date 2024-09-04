<script>
	import products from '../data/products.json';
	import Hero from '../components/molecules/Hero/Hero.svelte';
</script>

<div class="min-h-screen w-full bg-black">
	<Hero />
	<ul class="mt-10 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5">
		{#each products as product}
			<li>
				<img src={product.imageUrl} alt={product.name} />
			</li>
		{/each}
	</ul>
</div>
