<script lang="ts">
    import products from '../../../data/products.json';
    import { page } from '$app/stores';
	import type { Product } from '../../../types/types';
    $: id = $page.url.pathname.split('/').pop(); 
    $: product = products.find((product: Product) => product.id === id);
</script>

<div class="bg-black min-h-screen grid grid-cols-2 gap-5 px-20 place-items-center">
    <div>
        <img src={product?.imageUrl} alt={product?.name}>
    </div>
    <div class="flex flex-col justify-center space-y-2">
        <h1 class="text-4xl font-bold text-indigo-500">{product?.name}</h1>
        <p class="text-white">{product?.description}</p>
        <p class="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur reiciendis fuga facere consequuntur omnis voluptatibus. Maxime at iste velit minima modi itaque laborum minus obcaecati quod, voluptates eius laudantium.</p>
        <p class="text-5xl text-pink-500 font-bold">{product?.price}</p>
    </div>
</div>