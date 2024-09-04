<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => {
		if (!$page.data?.session) {
			goto('/');
		}
	});
</script>

<slot />
