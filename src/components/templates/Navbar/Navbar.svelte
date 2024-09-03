<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<nav class="h-full w-full bg-black p-4">
	<div class="flex items-center justify-between">
		<a href="/" class="text-2xl font-bold text-indigo-500">
			Dona<span class="text-sm font-bold text-slate-500">tello</span>
		</a>
		<div>
			{#if $page.data.session}
				<div class="flex justify-center items-center gap-4">
                    <span class="text-sm font-bold text-slate-500">{$page.data?.session?.user?.name}</span>
                    <img 
                    src={$page.data?.session?.user?.image}
                    alt="User avatar"
                    class="w-8 h-8 rounded-full"
                    />
					<a href="/donuts" class="rounded-md text-indigo-500 p-2 shadow-lg transition-all hover:text-indigo-700">Donuts</a>
                    <a href="/orders" class="rounded-md text-indigo-500 p-2 shadow-lg transition-all hover:text-indigo-700">Orders</a>
					<button
                        on:click={() => signOut()}
                        class="rounded-md bg-pink-500 p-2 text-white shadow-lg transition-all hover:bg-pink-700"
                        >Sign out</button
                    >
				</div>
			{:else}
				<button
					on:click={() => signIn('github')}
					class="rounded bg-indigo-500 p-2 text-white shadow-lg transition-all hover:bg-indigo-700"
					>Sign in</button
				>
			{/if}
		</div>
	</div>
</nav>
