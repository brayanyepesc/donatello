<script>
    export let product;
</script>

<li class="bg-white/5 p-12 hover:bg-indigo-500/20">
    <a href="/donuts/{product.id}">
        <img src={product.imageUrl} alt={product.name} />
        <div class="space-y-2">
            <p class="text-center text-5xl font-bold text-pink-500">${product.price}</p>
            <h3
                class="bg-gradient-to-tr from-indigo-500 to-pink-500 bg-clip-text text-center text-2xl font-bold text-transparent"
            >
                {product.name}
            </h3>
            <p class="text-center text-sm text-white">{product.description}</p>
        </div>
    </a>
</li>